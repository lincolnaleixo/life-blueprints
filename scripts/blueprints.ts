import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";

export interface BlueprintMetadata {
  type: string;
  version: string;
  updated: string;
  status: string;
  planGrammar?: string;
  experimentLadder?: string;
}

export interface ValidationProblem {
  file: string;
  message: string;
}

const allowedStatuses = new Set(["draft", "first-pass", "written", "pilot", "stable"]);
const publicBoundaryPatterns = [
  { pattern: /\b(?:LongLifeNutri|SellerField|HMLBC|RCGC)\b/i, label: "private business identifier" },
  { pattern: /\b(?:Lincoln|Tiffany|Bruna|Rainwood)\b/i, label: "private person or supplier identifier" },
  { pattern: /(?:^|[\s`(])\/home\//m, label: "private absolute path" },
  { pattern: /(?:\.\.\/)+(?:ideas|notes|reference|experiments|skills)\//i, label: "private repository reference" },
  { pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, label: "private key material" }
] as const;

function metadataFrom(frontmatter: string): Record<string, string> {
  const entries = frontmatter.split("\n").flatMap((line) => {
    const match = line.match(/^([a-z][a-z0-9_-]*):\s*(.*?)\s*$/);
    return match ? [[match[1]!, match[2]!]] : [];
  });
  return Object.fromEntries(entries);
}

export function parseBlueprint(content: string): { metadata: BlueprintMetadata | null; body: string } {
  const normalized = content.replace(/\r/g, "");
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { metadata: null, body: normalized };
  const raw = metadataFrom(match[1]!);
  const metadata = ["type", "version", "updated", "status"].every((key) => raw[key])
      ? {
        type: raw.type!,
        version: raw.version!,
        updated: raw.updated!,
        status: raw.status!,
        ...(raw.plan_grammar ? { planGrammar: raw.plan_grammar } : {}),
        ...(raw.experiment_ladder ? { experimentLadder: raw.experiment_ladder } : {})
      }
    : null;
  return { metadata, body: match[2]! };
}

function capabilitySlugs(body: string): string[] {
  const slugs = new Set<string>();
  for (const pattern of [
    /^\|\s*\d+\s*\|\s*P[1-4]\s*\|\s*`([^`]+)`\s*\|/gm,
    /^\|\s*`([^`]+)`\s*\|/gm
  ]) {
    for (const match of body.matchAll(pattern)) slugs.add(match[1]!);
  }
  return [...slugs];
}

function rawCapabilitySlugs(body: string): string[] {
  return [
    ...body.matchAll(/^\|\s*\d+\s*\|\s*P[1-4]\s*\|\s*`([^`]+)`\s*\|/gm),
    ...body.matchAll(/^\|\s*`([^`]+)`\s*\|/gm)
  ].map((match) => match[1]!);
}

export function validateBlueprintContent(
  filename: string,
  content: string,
  changelog: string
): ValidationProblem[] {
  const problems: ValidationProblem[] = [];
  const add = (message: string): void => {
    problems.push({ file: filename, message });
  };
  const { metadata, body } = parseBlueprint(content);

  if (!content.endsWith("\n")) add("file must end with a newline");
  if (!metadata) {
    add("frontmatter must define type, version, updated, and status");
    return problems;
  }

  const expectedType = filename.replace(/\.md$/, "");
  if (metadata.type !== expectedType) add(`type must match filename: expected ${expectedType}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.type)) add("type must be a kebab-case slug");
  if (!/^\d+\.\d+$/.test(metadata.version)) add("version must use major.minor");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.updated) || Number.isNaN(Date.parse(`${metadata.updated}T00:00:00Z`))) {
    add("updated must be a valid ISO date");
  }
  if (!allowedStatuses.has(metadata.status)) add(`unsupported status: ${metadata.status}`);

  if (metadata.experimentLadder) {
    if (metadata.experimentLadder !== "level-trigger") {
      add(`unsupported experiment_ladder: ${metadata.experimentLadder}`);
    }
    const ladder = body.match(/^## Experiment Ladder\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/m)?.[1] || "";
    if (!ladder) {
      add("experiment_ladder requires an ## Experiment Ladder section");
    } else {
      if (!/level\s+`?0`?/i.test(ladder)) add("experiment ladder must define Level 0 admission");
      if (!/^\| Level \| Name \| Metric \| Trigger \| Window \| Unlocks \|$/m.test(ladder)) {
        add("experiment ladder must use the Level, Name, Metric, Trigger, Window, Unlocks table contract");
      }
      const rows = [...ladder.matchAll(/^\|\s*(\d+)\s*\|[^\n]+$/gm)]
        .map((match) => ({ level: Number(match[1]), row: match[0] }));
      if (!rows.some(({ level }) => level > 0)) add("experiment ladder must define at least one triggered level above 0");
      const graduations = rows.filter(({ row }) => /\bgraduate\b/i.test(row));
      if (graduations.length !== 1) add(`experiment ladder must define exactly one graduation level, found ${graduations.length}`);
      for (const { level, row } of rows) {
        if (level > 0 && !/(?:>=|<=|>|<|=)\s*\d+/.test(row)) {
          add(`experiment ladder level ${level} must declare a numeric trigger`);
        }
      }
    }
  }

  const titles = [...body.matchAll(/^#\s+.+$/gm)];
  if (titles.length !== 1) add(`expected exactly one H1, found ${titles.length}`);
  if (!/^## Phases\s*$/m.test(body)) add("missing ## Phases section");

  const rawSlugs = rawCapabilitySlugs(body);
  const slugs = capabilitySlugs(body);
  if (slugs.length === 0) add("capability catalog contains no recognized slugs");
  const duplicates = rawSlugs.filter((slug, index) => rawSlugs.indexOf(slug) !== index);
  if (duplicates.length) add(`duplicate capability slugs: ${[...new Set(duplicates)].join(", ")}`);
  for (const slug of slugs) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) add(`invalid capability slug: ${slug}`);
  }

  for (const { pattern, label } of publicBoundaryPatterns) {
    if (pattern.test(content)) add(`public boundary violation: ${label}`);
  }
  if (!changelog.includes(`\`${metadata.type}@${metadata.version}\``)) {
    add(`CHANGELOG.md must mention \`${metadata.type}@${metadata.version}\``);
  }
  return problems;
}

async function markdownFiles(directory: string): Promise<string[]> {
  const files: string[] = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(path));
    else if (entry.isFile() && extname(entry.name) === ".md") files.push(path);
  }
  return files;
}

async function validateLinks(root: string): Promise<ValidationProblem[]> {
  const problems: ValidationProblem[] = [];
  for (const file of await markdownFiles(root)) {
    const content = await readFile(file, "utf8");
    for (const match of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1]!.trim().replace(/^<|>$/g, "");
      if (/^(?:https?:|mailto:|#)/.test(target)) continue;
      const path = target.split("#", 1)[0]!;
      if (!path) continue;
      const resolved = resolve(dirname(file), decodeURIComponent(path));
      if (!resolved.startsWith(`${root}/`) && resolved !== root) {
        problems.push({ file: relative(root, file), message: `link escapes repository: ${target}` });
        continue;
      }
      try {
        if (!(await stat(resolved)).isFile()) throw new Error("not a file");
      } catch {
        problems.push({ file: relative(root, file), message: `broken local link: ${target}` });
      }
    }
  }
  return problems;
}

export async function validateRepository(root: string): Promise<ValidationProblem[]> {
  const changelog = await readFile(join(root, "CHANGELOG.md"), "utf8");
  const blueprintDirectory = join(root, "blueprints");
  const files = (await readdir(blueprintDirectory))
    .filter((file) => file.endsWith(".md"))
    .sort();
  const problems: ValidationProblem[] = [];
  for (const file of files) {
    const content = await readFile(join(blueprintDirectory, file), "utf8");
    problems.push(...validateBlueprintContent(file, content, changelog));
  }
  problems.push(...await validateLinks(root));
  return problems;
}

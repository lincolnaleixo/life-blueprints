import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";

export interface BlueprintMetadata {
  type: string;
  version: string;
  updated: string;
  status: string;
  planGrammar?: string;
  experimentLadder?: string;
  experimentPlanGrammar?: string;
  buildPath?: string;
  levelContract?: string;
  graduationGate?: string;
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
        ...(raw.experiment_ladder ? { experimentLadder: raw.experiment_ladder } : {}),
        ...(raw.experiment_plan_grammar ? { experimentPlanGrammar: raw.experiment_plan_grammar } : {}),
        ...(raw.build_path ? { buildPath: raw.build_path } : {}),
        ...(raw.level_contract ? { levelContract: raw.level_contract } : {}),
        ...(raw.graduation_gate ? { graduationGate: raw.graduation_gate } : {})
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

interface TriggerPlanRow {
  level: number;
  cells: string[];
  line: string;
}

function pipeCells(line: string): string[] | null {
  if (!/^\s*\|/.test(line)) return null;
  const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
  return cells.length ? cells : null;
}

function experimentLadderSection(body: string): string {
  return body.match(/^## Experiment Ladder\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/m)?.[1] || "";
}

function namedSection(body: string, heading: string): string {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return body.match(new RegExp(`^## ${escaped}\\s*$([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, "m"))?.[1] || "";
}

interface StageBlock {
  stage: number;
  title: string;
  body: string;
}

function stageRoadmapBlocks(body: string): { section: string; blocks: StageBlock[] } {
  const section = namedSection(body, "Stage Roadmap");
  if (!section) return { section, blocks: [] };
  const headings = [...section.matchAll(/^### E(\d+)\s+—\s+(.+?)\s*$/gm)];
  const blocks = headings.map((match, index) => {
    const start = (match.index || 0) + match[0].length;
    const end = index + 1 < headings.length ? headings[index + 1]!.index || section.length : section.length;
    return { stage: Number(match[1]), title: match[2]!.trim(), body: section.slice(start, end).trim() };
  });
  return { section, blocks };
}

function stageFieldLines(block: StageBlock): { lines: string[]; indexes: Map<string, number[]> } {
  const lines = block.body.split("\n");
  const indexes = new Map<string, number[]>();
  const labels = ["Objective", "Entry", "Required", "Optional", "Capabilities", "Conditional capability", "Exit trigger", "Window", "Evidence", "Review", "If not met"];
  for (const [index, line] of lines.entries()) {
    for (const label of labels) {
      const escaped = label.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
      if (new RegExp(`^${escaped}:`).test(line.trim())) {
        indexes.set(label, [...(indexes.get(label) || []), index]);
        break;
      }
    }
  }
  return { lines, indexes };
}

function validateStagePlanContract(
  filename: string,
  body: string,
  add: (message: string) => void
): void {
  const { section, blocks } = stageRoadmapBlocks(body);
  if (!section) {
    add("level_contract: stage-plan requires an ## Stage Roadmap section");
    return;
  }
  if (!blocks.length) {
    add("stage-plan roadmap must define at least one ### E<number> stage");
    return;
  }
  for (const heading of section.matchAll(/^###\s+(.+)$/gm)) {
    if (!/^E\d+\s+—\s+\S.*$/.test(heading[1]!.trim())) {
      add(`stage-plan roadmap has an invalid stage heading: ${heading[1]!.trim()}`);
    }
  }

  const stages = blocks.map((block) => block.stage);
  const uniqueStages = [...new Set(stages)].sort((a, b) => a - b);
  if (uniqueStages[0] !== 0) add("stage-plan roadmap must start at E0");
  for (const [index, stage] of uniqueStages.entries()) {
    if (stage !== index) add(`stage-plan roadmap stages must be contiguous from E0 (missing E${index})`);
  }
  if (stages.some((stage, index) => stage !== index)) add("stage-plan roadmap stages must be ordered contiguously from E0");
  const duplicates = stages.filter((stage, index) => stages.indexOf(stage) !== index);
  if (duplicates.length) add(`duplicate stage-plan stages: ${[...new Set(duplicates)].map((stage) => `E${stage}`).join(", ")}`);

  const catalog = new Set(capabilitySlugs(body));
  const expectedFields = ["Objective", "Entry", "Required", "Optional", "Exit trigger", "Window", "Evidence", "Review", "If not met"];
  const expectedYoutubeTriggers: Record<number, string> = {
    0: ">=10 valid public channel views",
    1: ">=100 valid public channel views",
    2: ">=200 valid public channel views",
    3: ">=500 valid public channel views",
    4: ">=5000 valid public channel views",
    5: ">=10000 valid public channel views"
  };

  for (const block of blocks) {
    const { lines, indexes } = stageFieldLines(block);
    const label = `stage-plan E${block.stage}`;
    const firstIndex = (field: string): number | undefined => indexes.get(field)?.[0];
    for (const field of expectedFields) {
      const occurrences = indexes.get(field) || [];
      if (!occurrences.length) {
        add(`${label} must declare ${field}:`);
      } else if (occurrences.length > 1) {
        add(`${label} must declare ${field}: exactly once`);
      }
    }
    const ordered = expectedFields.map(firstIndex);
    if (ordered.some((index) => index === undefined)) continue;
    if (ordered.some((index, position) => position > 0 && (index as number) <= (ordered[position - 1] as number))) {
      add(`${label} fields must appear in Objective, Entry, Required, Optional, trigger, evidence, and review order`);
      continue;
    }

    const fieldLine = (field: string): string => lines[firstIndex(field)!] || "";
    const objective = fieldLine("Objective").trim().replace(/^Objective:\s*/, "");
    const entry = fieldLine("Entry").trim().replace(/^Entry:\s*/, "");
    if (!objective) add(`${label} Objective must contain text`);
    if (!entry) add(`${label} Entry must contain text`);

    const requiredStart = firstIndex("Required")!;
    const optionalStart = firstIndex("Optional")!;
    const requiredLine = lines[requiredStart]!.trim();
    if (requiredLine !== "Required:") add(`${label} Required: must be followed by checklist bullets, not inline text`);
    const requiredLines = lines.slice(requiredStart + 1, optionalStart).map((line) => line.trim()).filter(Boolean);
    if (!requiredLines.length || requiredLines.some((line) => !/^-\s+\S/.test(line))) {
      add(`${label} Required: must contain one or more '- ' bullets`);
    }

    const exitStart = firstIndex("Exit trigger")!;
    const legacyCapabilityIndexes = [
      ...(indexes.get("Capabilities") || []),
      ...(indexes.get("Conditional capability") || [])
    ].sort((a, b) => a - b);
    const legacyCapabilityStart = legacyCapabilityIndexes[0] ?? exitStart;
    for (const index of legacyCapabilityIndexes) {
      if (index <= optionalStart || index >= exitStart) {
        add(`${label} legacy capability declarations must appear after Optional: and before Exit trigger:`);
      }
    }
    const legacyCapabilitiesIndexes = indexes.get("Capabilities") || [];
    if (legacyCapabilitiesIndexes.length > 1) add(`${label} Capabilities: must be declared at most once for backward compatibility`);
    const optionalEnd = legacyCapabilityStart;
    const optionalLine = lines[optionalStart]!.trim();
    if (optionalLine !== "Optional:") add(`${label} Optional: must be followed by checklist bullets or None.`);
    const optionalLines = lines.slice(optionalStart + 1, optionalEnd).map((line) => line.trim()).filter(Boolean);
    if (!optionalLines.length || optionalLines.some((line) => line !== "None." && !/^-\s+\S/.test(line))) {
      add(`${label} Optional: must contain '- ' bullets or exactly None.`);
    }
    if (optionalLines.includes("None.") && optionalLines.length !== 1) {
      add(`${label} Optional: None. cannot be combined with bullets`);
    }

    const taskLines = [...requiredLines, ...optionalLines.filter((line) => line !== "None.")];
    const inlineSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    for (const line of taskLines) {
      const inlineCapabilities: string[] = [];
      for (const match of line.matchAll(/`([^`]+)`/g)) {
        const capability = match[1]!;
        if (!inlineSlugPattern.test(capability)) {
          add(`${label} has an invalid inline capability slug: ${capability}`);
          continue;
        }
        if (!catalog.has(capability)) {
          add(`${label} references unknown capability slug: ${capability}`);
        }
        inlineCapabilities.push(capability);
      }
      const duplicateInline = inlineCapabilities.filter((capability, index) => inlineCapabilities.indexOf(capability) !== index);
      if (duplicateInline.length) {
        add(`${label} cannot repeat inline capability slugs in one task: ${[...new Set(duplicateInline)].join(", ")}`);
      }
    }

    const legacyDirectCapabilities: string[] = [];
    const legacyConditionalCapabilities: string[] = [];
    const capabilitiesIndexes = indexes.get("Capabilities") || [];
    if (capabilitiesIndexes.length) {
      const capabilitiesLine = lines[capabilitiesIndexes[0]!]!.trim();
      const capabilitiesValue = capabilitiesLine.replace(/^Capabilities:\s*/, "").trim();
      if (!capabilitiesValue) {
        add(`${label} Capabilities: must use None or backtick-wrapped catalog slugs`);
      }
      const legacyDirect = [...capabilitiesValue.matchAll(/`([^`]+)`/g)].map((match) => match[1]!);
      if (capabilitiesValue !== "None" && !/^`[a-z0-9]+(?:-[a-z0-9]+)*`(?:,\s*`[a-z0-9]+(?:-[a-z0-9]+)*`)*$/.test(capabilitiesValue)) {
        add(`${label} Capabilities: must use None or backtick-wrapped catalog slugs`);
      }
      for (const capability of legacyDirect) {
        legacyDirectCapabilities.push(capability);
        if (!catalog.has(capability)) add(`${label} references unknown capability slug: ${capability}`);
      }
    }

    const conditionalIndexes = indexes.get("Conditional capability") || [];
    const legacyConditionalStart = conditionalIndexes.length ? Math.min(...conditionalIndexes) : undefined;
    if (legacyConditionalStart !== undefined && capabilitiesIndexes.length && legacyConditionalStart < capabilitiesIndexes[0]!) {
      add(`${label} Conditional capability: lines must follow Capabilities:`);
    }
    const legacySectionLines = lines.slice(legacyCapabilityStart, exitStart).map((line) => line.trim()).filter(Boolean);
    for (const line of legacySectionLines) {
      if (/^Capabilities:/.test(line)) continue;
      const match = line.match(/^Conditional capability:\s+`([^`]+)`\s+—\s+(\S.*)$/);
      if (!match) {
        add(`${label} has an invalid legacy capability declaration`);
        continue;
      }
      legacyConditionalCapabilities.push(match[1]!);
      if (!catalog.has(match[1]!)) add(`${label} references unknown conditional capability slug: ${match[1]}`);
    }
    for (const capability of legacyConditionalCapabilities) {
      if (legacyDirectCapabilities.includes(capability)) add(`${label} cannot list ${capability} as both direct and conditional capability`);
    }
    const duplicateDirect = legacyDirectCapabilities.filter((capability, index) => legacyDirectCapabilities.indexOf(capability) !== index);
    if (duplicateDirect.length) add(`${label} cannot repeat direct capability slugs: ${[...new Set(duplicateDirect)].join(", ")}`);
    const duplicateConditional = legacyConditionalCapabilities.filter((capability, index) => legacyConditionalCapabilities.indexOf(capability) !== index);
    if (duplicateConditional.length) add(`${label} cannot repeat conditional capability slugs: ${[...new Set(duplicateConditional)].join(", ")}`);

    const exit = fieldLine("Exit trigger").trim().replace(/^Exit trigger:\s*/, "");
    const window = fieldLine("Window").trim().replace(/^Window:\s*/, "");
    const evidence = fieldLine("Evidence").trim().replace(/^Evidence:\s*/, "");
    const review = fieldLine("Review").trim().replace(/^Review:\s*/, "");
    const ifNotMet = fieldLine("If not met").trim().replace(/^If not met:\s*/, "");
    if (!exit) add(`${label} Exit trigger must contain text`);
    if (!window) add(`${label} Window must contain text`);
    if (!evidence) add(`${label} Evidence must contain text`);
    if (!review) add(`${label} Review must contain text`);
    if (!ifNotMet) add(`${label} If not met must contain text`);
    const trailingLines = lines.slice(firstIndex("If not met")! + 1).map((line) => line.trim()).filter(Boolean);
    if (trailingLines.length) add(`${label} must not contain prose after If not met:`);

    if (filename === "youtube.md") {
      const expectedTrigger = expectedYoutubeTriggers[block.stage];
      if (expectedTrigger && exit !== expectedTrigger) add(`youtube stage E${block.stage} Exit trigger must be ${expectedTrigger}`);
      if (window !== "Trailing 30 days") add(`youtube stage E${block.stage} Window must be Trailing 30 days`);
      if (!/^YouTube Analytics aggregate\b/i.test(evidence)) add(`youtube stage E${block.stage} Evidence must name a YouTube Analytics aggregate`);
      if (review !== "Every 30 days from stage entry or last review") add(`youtube stage E${block.stage} Review must be every 30 days from stage entry or last review`);
      const expectedMiss = block.stage === 0
        ? /diagnos[^.\n]*blocker|simplif[^.\n]*production/i
        : /bottleneck|adjust[^.\n]*focus/i;
      if (!expectedMiss.test(ifNotMet)) add(`youtube stage E${block.stage} If not met must use the stage-specific review guidance`);
    }
  }

  if (filename === "youtube.md") {
    if (uniqueStages.length !== 6 || uniqueStages.some((stage, index) => stage !== index) || blocks.some((block) => block.stage > 5)) {
      add("youtube stage-plan roadmap must contain exactly E0 through E5 and no E6");
    }
    const e2 = blocks.find((block) => block.stage === 2);
    if (e2) {
      const required = e2.body.match(/^Required:\s*$([\s\S]*?)(?=^Optional:\s*$)/m)?.[1] || "";
      if (!/one video per day[^\n]*supervision/i.test(required)) add("youtube stage E2 must require one supervised video per day");
      if (!/THREE consecutive correctly produced and published videos[^\n]*approved by (?:the )?owner or designated responsible approver/i.test(required)) {
        add("youtube stage E2 must require three consecutive correctly produced and published videos approved by the owner or responsible approver");
      }
      const evidence = e2.body.match(/^Evidence:\s*(.+)$/m)?.[1] || "";
      if (!/production\/publication records/i.test(evidence) || !/owner or responsible-approver approvals/i.test(evidence)) {
        add("youtube stage E2 Evidence must retain production/publication records and owner or responsible-approver approvals");
      }
    }

    const graduation = namedSection(body, "Graduation");
    if (!graduation) {
      add("stage-plan YouTube blueprint requires an ## Graduation section");
    } else {
      if (!/settled[^.\n]*channel-attributable external revenue/i.test(graduation)) add("stage-plan graduation must require settled channel-attributable external revenue");
      if (!/explicit owner approval/i.test(graduation)) add("stage-plan graduation must require explicit owner approval");
      if (!/independent[^.\n]*(?:E0|E5|views sequence)|at any stage/i.test(graduation)) add("stage-plan graduation must be independent of the numbered stages");
      if (!/estimated revenue is not proof|estimated[^.\n]*not proof/i.test(graduation)) add("stage-plan graduation must reject estimated revenue as proof");
    }

    const future = namedSection(body, "Future Stages");
    if (!future) {
      add("stage-plan YouTube blueprint requires an ## Future Stages section");
    } else {
      if (!/E6 is undefined/i.test(future)) add("stage-plan Future Stages must leave E6 undefined");
      if (!/Revenue[^.\n]*R0[^.\n]*R1/i.test(future) || !/Profit[^.\n]*P0[^.\n]*P1/i.test(future) || !/Self-running[^.\n]*S0[^.\n]*S1/i.test(future)) {
        add("stage-plan Future Stages must reserve Revenue R0/R1, Profit P0/P1, and Self-running S0/S1 names");
      }
      if (/^###\s+(?:E6|R\d+|P\d+|S\d+)\b/m.test(future) || /^(?:Objective|Entry|Required|Optional|Capabilities|Exit trigger|Window|Evidence|Review|If not met):/m.test(future)) {
        add("stage-plan Future Stages may reserve names but must not publish future stage plans or thresholds");
      }
    }
    if (/^## (?:Experiment Ladder|Level Plans)\s*$/m.test(body) || /^### L\d+\b/m.test(body)) {
      add("stage-plan YouTube blueprint must not retain the old L0-L5 roadmap");
    }
    if (/^###\s+(?:E6|R\d+|P\d+|S\d+)\b/m.test(body)) {
      add("stage-plan YouTube blueprint must not publish E6, Revenue, Profit, or Self-running stage plans");
    }
    const policyChecks: Array<[RegExp, string]> = [
      [/required work[^.\n]*own exit trigger[^.\n]*(?:mandatory|met)|both[^.\n]*required work[^.\n]*trigger/i, "stage policy must require both work and the stage's own trigger"],
      [/optional work[^.\n]*(?:never|not)[^.\n]*block/i, "stage policy must make optional work non-blocking"],
      [/owner approval[^.\n]*record/i, "stage policy must require owner-approved recorded exceptions"],
      [/no automatic regression|does not automatically regress/i, "stage policy must forbid automatic regressions"],
      [/no automatic pause|does not automatically pause|automatic regression or automatic pause/i, "stage policy must forbid automatic pauses"],
      [/retain[^.\n]*work[^.\n]*graduation/i, "stage policy must retain built work after graduation"]
    ];
    for (const [pattern, message] of policyChecks) if (!pattern.test(body)) add(message);
  }
}

function triggerPlanTable(ladder: string): { headers: string[]; rows: TriggerPlanRow[]; invalidRows: string[] } | null {
  const lines = ladder.split("\n");
  const headerIndex = lines.findIndex((line) => {
    const cells = pipeCells(line)?.map((cell) => cell.toLowerCase());
    return Boolean(cells?.includes("level") && cells.includes("metric") && cells.includes("trigger") && cells.includes("window"));
  });
  if (headerIndex < 0) return null;

  const headers = pipeCells(lines[headerIndex]!)!;
  const levelIndex = headers.findIndex((header) => header.toLowerCase() === "level");
  const rows: TriggerPlanRow[] = [];
  const invalidRows: string[] = [];
  for (const line of lines.slice(headerIndex + 1)) {
    const cells = pipeCells(line);
    if (!cells) break;
    if (cells.every((cell) => /^:?-{3,}:?$/.test(cell))) continue;
    const levelCell = cells[levelIndex] || "";
    if (!/^\d+$/.test(levelCell)) {
      invalidRows.push(line);
      continue;
    }
    const level = Number(levelCell);
    rows.push({ level, cells, line });
  }
  return { headers, rows, invalidRows };
}

function normalizedCell(value: string | undefined): string {
  return (value || "").replace(/\s+/g, " ").trim();
}

function validateTriggerPlanContract(
  filename: string,
  body: string,
  add: (message: string) => void
): void {
  const ladder = experimentLadderSection(body);
  if (!ladder) {
    add("level_contract: trigger-plan requires an ## Experiment Ladder section");
    return;
  }

  const table = triggerPlanTable(ladder);
  if (!table) {
    add("trigger-plan ladder must use a table with Level, Metric, Trigger, and Window columns");
    return;
  }

  const levelIndex = table.headers.findIndex((header) => header.toLowerCase() === "level");
  const metricIndex = table.headers.findIndex((header) => header.toLowerCase() === "metric");
  const triggerIndex = table.headers.findIndex((header) => header.toLowerCase() === "trigger");
  const windowIndex = table.headers.findIndex((header) => header.toLowerCase() === "window");
  if (levelIndex < 0 || metricIndex < 0 || triggerIndex < 0 || windowIndex < 0) return;

  if (!table.rows.length) {
    add("trigger-plan ladder must define at least one level row");
    return;
  }
  if (table.invalidRows.length) {
    add("trigger-plan level rows must use non-negative integer Level values");
  }

  const levels = table.rows.map((row) => row.level);
  const uniqueLevels = [...new Set(levels)].sort((a, b) => a - b);
  if (uniqueLevels[0] !== 0) add("trigger-plan ladder must start at Level 0");
  for (const [index, level] of uniqueLevels.entries()) {
    if (level !== index) add(`trigger-plan ladder levels must be contiguous from 0 (missing Level ${index})`);
  }
  if (levels.some((level, index) => level !== index)) add("trigger-plan ladder rows must be ordered contiguously from Level 0");
  const duplicates = levels.filter((level, index) => levels.indexOf(level) !== index);
  if (duplicates.length) add(`duplicate trigger-plan levels: ${[...new Set(duplicates)].join(", ")}`);

  const maxLevel = uniqueLevels.at(-1);

  for (const row of table.rows) {
    const metric = normalizedCell(row.cells[metricIndex]);
    const trigger = normalizedCell(row.cells[triggerIndex]);
    const window = normalizedCell(row.cells[windowIndex]);
    if (!metric) add(`trigger-plan Level ${row.level} must declare a metric`);
    if (!trigger) add(`trigger-plan Level ${row.level} must declare a trigger`);
    if (!window) add(`trigger-plan Level ${row.level} must declare a window`);
    if (/(?:^|\s)graduate(?:s|d)?\b|\bgraduation\b/i.test(row.line)) {
      add("trigger-plan graduation must remain independent of numbered levels; do not add a graduation row");
    }
  }

  if (filename === "youtube.md") {
    if (maxLevel !== undefined && maxLevel > 5) {
      add("youtube trigger-plan ladder must leave Level 6 and later undefined");
    }
    for (let level = 0; level <= 5; level += 1) {
      if (!uniqueLevels.includes(level)) add(`youtube trigger-plan ladder must define Level ${level}`);
    }

    const rowFor = (level: number): TriggerPlanRow | undefined => table.rows.find((row) => row.level === level);
    const l0 = rowFor(0);
    const l1 = rowFor(1);
    const l0Text = l0 ? l0.cells.map(normalizedCell).join(" ") : "";
    const l1Text = l1 ? l1.cells.map(normalizedCell).join(" ") : "";
    if (l0 && !/channel.{0,80}first(?:[- ]representative)?[- ]video|first(?:[- ]representative)?[- ]video.{0,80}channel/i.test(l0Text)) {
      add("youtube trigger-plan Level 0 must prepare the channel and first representative video");
    }
    if (l0 && /(?:require|must|needed|depends).{0,50}(?:public seed|autonom)/i.test(l0Text)) {
      add("youtube trigger-plan Level 0 must not require a public seed or autonomous capability");
    }
    if (!/(?:L0[^.\n]*(?:does not require|without)[^.\n]*(?:public seed|autonom)|(?:no|without)[^.\n]*(?:public seed|autonom)[^.\n]*start(?:ing)?[^.\n]*L0)/i.test(body)) {
      add("youtube trigger-plan must state that starting Level 0 does not require a public seed or autonomous capability");
    }
    if (l1 && !/representative.{0,60}public.{0,30}video|public.{0,60}representative.{0,30}video/i.test(l1Text)) {
      add("youtube trigger-plan Level 1 must trigger on one representative public video");
    }
    if (l1 && !/ownership/i.test(l1Text)) add("youtube trigger-plan Level 1 must check ownership");
    if (l1 && !/channel[- ]health|health/i.test(l1Text)) add("youtube trigger-plan Level 1 must check channel health");
    if (l1 && !/rights?/i.test(l1Text)) add("youtube trigger-plan Level 1 must check rights");
    if (!/(?:new(?:ly)? produced[^.\n]*existing public(?: representative)? video|existing public(?: representative)? video[^.\n]*new(?:ly)? produced)/i.test(body)) {
      add("youtube trigger-plan must allow a new or existing public representative video at Level 1");
    }

    const levelPlanGuidance = (level: number): string => {
      const match = body.match(new RegExp(`^[-*]\\s*\\x60L${level}\\x60:[^\\n]*$`, "m"));
      return match?.[0] || "";
    };
    if (!/first representative video/i.test(levelPlanGuidance(0))) {
      add("youtube trigger-plan private-plan guidance must map Level 0 to first-video preparation");
    }
    const nextViewTargets: Record<number, number> = { 1: 10, 2: 100, 3: 200, 4: 500 };
    for (const [levelText, target] of Object.entries(nextViewTargets)) {
      const level = Number(levelText);
      const guidance = levelPlanGuidance(level);
      if (!new RegExp(`\\b${target}\\s+total valid public channel views\\b`, "i").test(guidance)) {
        add(`youtube trigger-plan private-plan guidance must map Level ${level} to ${target} total valid public channel views`);
      }
    }
    if (!/no `L6` view target is defined/i.test(levelPlanGuidance(5))) {
      add("youtube trigger-plan private-plan guidance must leave Level 6 undefined");
    }

    const expectedViews: Record<number, number> = { 2: 10, 3: 100, 4: 200, 5: 500 };
    for (const [levelText, expected] of Object.entries(expectedViews)) {
      const level = Number(levelText);
      const row = rowFor(level);
      if (!row) continue;
      const metric = normalizedCell(row.cells[metricIndex]);
      const trigger = normalizedCell(row.cells[triggerIndex]);
      const window = normalizedCell(row.cells[windowIndex]);
      if (!/^total valid public channel views$/i.test(metric)) {
        add(`youtube trigger-plan Level ${level} metric must be total valid public channel views`);
      }
      if (!new RegExp(`^>=\\s*${expected}\\s+views?$`, "i").test(trigger)) {
        add(`youtube trigger-plan Level ${level} trigger must be >=${expected} views`);
      }
      if (!/^trailing 30 days$/i.test(window)) {
        add(`youtube trigger-plan Level ${level} window must be Trailing 30 days`);
      }
    }
  }

  const planCompletion = /private plan[^.\n]*\b(?:must be|is) complete\b/i.test(body)
    && /(?:target|next)[^.\n]*\btrigger\b[^.\n]*\b(?:must be )?(?:met|reached|satisfied)\b/i.test(body);
  if (!planCompletion) {
    add("trigger-plan contract must require the current private plan to be complete and the target trigger to be met");
  }

  if (!/settled[^.\n]*externally attributable[^.\n]*revenue|externally attributable[^.\n]*settled[^.\n]*revenue/i.test(body)) {
    add("trigger-plan graduation must require settled externally attributable revenue");
  }
  if (!/explicit[^.\n]*owner approval|owner approval[^.\n]*explicit/i.test(body)) {
    add("trigger-plan graduation must require explicit owner approval");
  }
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

  if (metadata.levelContract && !new Set(["trigger-plan", "stage-plan"]).has(metadata.levelContract)) {
    add(`unsupported level_contract: ${metadata.levelContract}`);
  }
  if (metadata.graduationGate && metadata.graduationGate !== "revenue") {
    add(`unsupported graduation_gate: ${metadata.graduationGate}`);
  }
  if (metadata.levelContract && !metadata.experimentLadder) {
    add("level_contract requires experiment_ladder");
  }
  if (metadata.graduationGate && !metadata.experimentLadder) {
    add("graduation_gate requires experiment_ladder");
  }
  const triggerPlan = metadata.levelContract === "trigger-plan";
  const stagePlan = metadata.levelContract === "stage-plan";
  if (triggerPlan && metadata.graduationGate !== "revenue") {
    add("level_contract: trigger-plan requires graduation_gate: revenue");
  }
  if (stagePlan && metadata.graduationGate !== "revenue") {
    add("level_contract: stage-plan requires graduation_gate: revenue");
  }
  if (metadata.graduationGate === "revenue" && !triggerPlan && !stagePlan) {
    add("graduation_gate: revenue requires level_contract: trigger-plan or stage-plan");
  }

  if (metadata.experimentLadder) {
    if (metadata.experimentLadder !== "level-trigger") {
      add(`unsupported experiment_ladder: ${metadata.experimentLadder}`);
    }
    if (metadata.experimentPlanGrammar !== "levels") {
      add("experiment_ladder requires experiment_plan_grammar: levels");
    }
    if (triggerPlan) {
      validateTriggerPlanContract(filename, body, add);
    } else if (stagePlan) {
      validateStagePlanContract(filename, body, add);
    } else {
      const ladder = experimentLadderSection(body);
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
      const automation = body.match(/^## Progressive Automation\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/m)?.[1] || "";
      if (!automation) {
        add("experiment_ladder requires a ## Progressive Automation section");
      } else {
        if (!/level\s+`?0`?/i.test(automation) || !/verified[^.\n]*capability/i.test(automation)) {
          add("progressive automation must require one verified autonomous capability at Level 0");
        }
        if (!/next evidence trigger[^.\n]*gated/i.test(automation)) {
          add("progressive automation must gate the next evidence trigger until the unlocked capability is verified");
        }
        if (!/^\| Earned level \| Default automation frontier \| Selection guidance \|$/m.test(automation)) {
          add("progressive automation must use the Earned level, Default automation frontier, Selection guidance table contract");
        }
      }
    }
  }
  if (!metadata.experimentLadder && metadata.experimentPlanGrammar) {
    add("experiment_plan_grammar requires experiment_ladder");
  }

  const buildPath = body.match(/^## Build Path\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/m)?.[1] || "";
  if (metadata.buildPath) {
    if (metadata.buildPath !== "stage-gate") add(`unsupported build_path: ${metadata.buildPath}`);
    if (!metadata.experimentLadder) add("build_path requires experiment_ladder");
    if (!buildPath) {
      add("build_path requires an ## Build Path section");
    } else {
      if (!/^\| Order \| Step \| Scope \| Build now \| Gate \| Pass \| Miss \| Automation \|$/m.test(buildPath)) {
        add("build path must use the Order, Step, Scope, Build now, Gate, Pass, Miss, Automation table contract");
      }
      const rows = buildPath.split("\n").flatMap((line) => {
        const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
        if (cells.length !== 8 || !/^\d+$/.test(cells[0] || "")) return [];
        return [{ order: Number(cells[0]), step: (cells[1] || "").replace(/^`|`$/g, ""), scope: (cells[2] || "").replace(/^`|`$/g, ""), cells }];
      });
      if (!rows.length) add("build path must define at least one stage-gate step");
      if (rows.some((row, index) => row.order !== index + 1)) add("build path orders must be contiguous from 1");
      const steps = rows.map((row) => row.step);
      const duplicateSteps = steps.filter((step, index) => steps.indexOf(step) !== index);
      if (duplicateSteps.length) add(`duplicate build path steps: ${[...new Set(duplicateSteps)].join(", ")}`);
      for (const row of rows) {
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row.step)) add(`invalid build path step: ${row.step}`);
        if (!row.cells.slice(3).every(Boolean)) add(`build path step ${row.step || row.order} has an empty stage-gate field`);
        if (row.scope !== "pre-admission" && !/^L\d+$/.test(row.scope)) add(`invalid build path scope: ${row.scope}`);
      }
      if (!rows.some((row) => row.scope === "pre-admission")) add("build path must define at least one pre-admission step");
      const ladder = body.match(/^## Experiment Ladder\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/m)?.[1] || "";
      const levels = [...new Set([0, ...[...ladder.matchAll(/^\|\s*(\d+)\s*\|[^\n]+$/gm)].map((match) => Number(match[1]))])];
      for (const level of levels) {
        if (!rows.some((row) => row.scope === `L${level}`)) add(`build path must represent published Level ${level}`);
      }
    }
  } else if (buildPath) {
    add("## Build Path requires build_path frontmatter");
  }
  if ((triggerPlan || stagePlan) && metadata.buildPath) {
    add(`level_contract: ${metadata.levelContract} cannot be combined with build_path`);
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

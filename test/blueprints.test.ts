import { describe, expect, test } from "bun:test";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { validateBlueprintContent, validateRepository } from "../scripts/blueprints.ts";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const validBlueprint = `---
type: example
version: 1.0
updated: 2026-08-29
status: draft
---

# Example Blueprint

## Phases

### Phase 0 — Start

## Capability Catalog

| Phase | Priority | Slug | Capability |
|---:|:---:|---|---|
| 0 | P1 | \`first-capability\` | A durable condition. |
`;

describe("blueprint validator", () => {
  test("accepts the repository collection", async () => {
    expect(await validateRepository(root)).toEqual([]);
  });

  test("rejects a private-system reference", () => {
    const problems = validateBlueprintContent(
      "example.md",
      validBlueprint.replace("A durable condition.", "See /home/example/private."),
      "`example@1.0`"
    );
    expect(problems.some((problem) => problem.message.includes("public boundary"))).toBe(true);
  });

  test("rejects duplicate capability slugs", () => {
    const duplicate = validBlueprint.replace(
      "| 0 | P1 | `first-capability` | A durable condition. |",
      "| 0 | P1 | `first-capability` | A durable condition. |\n| 0 | P2 | `first-capability` | Duplicated. |"
    );
    const problems = validateBlueprintContent("example.md", duplicate, "`example@1.0`");
    expect(problems.some((problem) => problem.message.includes("duplicate capability"))).toBe(true);
  });

  test("requires filename and type to match", () => {
    const problems = validateBlueprintContent("different.md", validBlueprint, "`example@1.0`");
    expect(problems.some((problem) => problem.message.includes("type must match filename"))).toBe(true);
  });

  test("accepts the level-trigger experiment ladder contract", () => {
    const withLadder = validBlueprint
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger\nexperiment_plan_grammar: levels")
      .replace("## Phases", `## Experiment Ladder

Level \`0\` is admission to a running experiment.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 1 | Signal | External conversions | \`>= 10\` | Trailing 30 days | Graduate into a unit |

## Progressive Automation

Level \`0\` requires one verified autonomous capability. The next evidence trigger remains gated until the unlocked capability is verified.

| Earned level | Default automation frontier | Selection guidance |
| --- | --- | --- |
| 0 | Core test | Automate the running test. |

## Phases`);
    expect(validateBlueprintContent("example.md", withLadder, "`example@1.0`")).toEqual([]);
  });

  test("rejects a level-trigger ladder without level containers", () => {
    const withLadder = validBlueprint
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger")
      .replace("## Phases", `## Experiment Ladder

Level 0 is admission.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 1 | Signal | External conversions | \`>= 10\` | Trailing 30 days | Graduate into a unit |

## Progressive Automation

Level 0 requires one verified autonomous capability. The next evidence trigger remains gated until the unlocked capability is verified.

| Earned level | Default automation frontier | Selection guidance |
| --- | --- | --- |
| 0 | Core test | Automate the running test. |

## Phases`);
    const problems = validateBlueprintContent("example.md", withLadder, "`example@1.0`");
    expect(problems.some((problem) => problem.message.includes("experiment_plan_grammar: levels"))).toBe(true);
  });

  test("rejects an experiment ladder without one graduation trigger", () => {
    const withLadder = validBlueprint
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger\nexperiment_plan_grammar: levels")
      .replace("## Phases", `## Experiment Ladder

Level 0 is admission.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 1 | Signal | External conversions | \`>= 10\` | Trailing 30 days | Continue testing |

## Progressive Automation

Level 0 requires one verified autonomous capability. The next evidence trigger remains gated until the unlocked capability is verified.

| Earned level | Default automation frontier | Selection guidance |
| --- | --- | --- |
| 0 | Core test | Automate the running test. |

## Phases`);
    const problems = validateBlueprintContent("example.md", withLadder, "`example@1.0`");
    expect(problems.some((problem) => problem.message.includes("exactly one graduation"))).toBe(true);
  });

  test("rejects a level-trigger ladder without progressive automation", () => {
    const withLadder = validBlueprint
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger\nexperiment_plan_grammar: levels")
      .replace("## Phases", `## Experiment Ladder

Level 0 is admission.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 1 | Signal | External conversions | \`>= 10\` | Trailing 30 days | Graduate into a unit |

## Phases`);
    const problems = validateBlueprintContent("example.md", withLadder, "`example@1.0`");
    expect(problems.some((problem) => problem.message.includes("Progressive Automation"))).toBe(true);
  });

  test("accepts a stage-gate build path that covers pre-admission and every level", () => {
    const withPath = validBlueprint
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger\nexperiment_plan_grammar: levels\nbuild_path: stage-gate")
      .replace("## Phases", `## Experiment Ladder

Level \`0\` is admission to a running experiment.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 1 | Revenue | External revenue | \`> 0\` | Trailing 30 days | Graduate into a unit |

## Progressive Automation

Level \`0\` requires one verified autonomous capability. The next evidence trigger remains gated until the unlocked capability is verified.

| Earned level | Default automation frontier | Selection guidance |
| --- | --- | --- |
| 0 | Core test | Automate the running test. |

## Build Path

| Order | Step | Scope | Build now | Gate | Pass | Miss | Automation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | \`manual-proof\` | \`pre-admission\` | Create one manual proof | Public and measurable | Open admission | Rework or stop | None |
| 2 | \`running-test\` | \`L0\` | Run the bounded test | Source remains healthy | Continue | Repair source | Core test |
| 3 | \`revenue\` | \`L1\` | Resolve the revenue decision | Revenue is verified | Graduate | Continue or stop | None |

## Phases`);
    expect(validateBlueprintContent("example.md", withPath, "`example@1.0`")).toEqual([]);
  });

  test("rejects a build path that skips a published level", () => {
    const withPath = validBlueprint
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger\nexperiment_plan_grammar: levels\nbuild_path: stage-gate")
      .replace("## Phases", `## Experiment Ladder

Level 0 is admission.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 1 | Revenue | External revenue | \`> 0\` | Trailing 30 days | Graduate into a unit |

## Progressive Automation

Level 0 requires one verified autonomous capability. The next evidence trigger remains gated until the unlocked capability is verified.

| Earned level | Default automation frontier | Selection guidance |
| --- | --- | --- |
| 0 | Core test | Automate the running test. |

## Build Path

| Order | Step | Scope | Build now | Gate | Pass | Miss | Automation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | \`manual-proof\` | \`pre-admission\` | Create one manual proof | Public and measurable | Open admission | Rework or stop | None |
| 2 | \`revenue\` | \`L1\` | Resolve the revenue decision | Revenue is verified | Graduate | Continue or stop | None |

## Phases`);
    const problems = validateBlueprintContent("example.md", withPath, "`example@1.0`");
    expect(problems.some((problem) => problem.message.includes("Level 0"))).toBe(true);
  });

  test("retains a YouTube v6.2 trigger-plan fixture and its guards", async () => {
    const current = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const tick = String.fromCharCode(96);
    const legacyLadder = [
      "## Experiment Ladder",
      "",
      "This legacy fixture allows a newly produced or existing public representative video. Starting L0 does not require a public seed or autonomous capability.",
      "To advance, the private plan at the current level must be complete and the target trigger must be met.",
      "Graduation requires actual settled externally attributable revenue and explicit owner approval.",
      "",
      "| Level | Name | Metric | Trigger | Window |",
      "| --- | --- | --- | --- | --- |",
      "| 0 | Preparation | Channel shell and first representative video readiness | Channel and first representative video ready | Until public |",
      "| 1 | Representative video | One valid public representative video | One representative video is public; ownership, channel-health, and rights checks pass | Point-in-time |",
      "| 2 | Early reach | Total valid public channel views | >=10 views | Trailing 30 days |",
      "| 3 | Growing reach | Total valid public channel views | >=100 views | Trailing 30 days |",
      "| 4 | Established reach | Total valid public channel views | >=200 views | Trailing 30 days |",
      "| 5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |",
      "",
      "Private-plan guidance:",
      "- " + tick + "L0" + tick + ": prepare the channel and first representative video.",
      "- " + tick + "L1" + tick + ": keep the bounded plan focused on 10 total valid public channel views.",
      "- " + tick + "L2" + tick + ": keep the bounded plan focused on 100 total valid public channel views.",
      "- " + tick + "L3" + tick + ": keep the bounded plan focused on 200 total valid public channel views.",
      "- " + tick + "L4" + tick + ": keep the bounded plan focused on 500 total valid public channel views.",
      "- " + tick + "L5" + tick + ": keep a bounded measurement plan; no " + tick + "L6" + tick + " view target is defined.",
      "",
      "## Stage Policy",
      "",
      "Legacy fixture prose."
    ].join("\n");
    const fixture = current
      .replace("version: 7.0", "version: 6.2")
      .replace("level_contract: stage-plan", "level_contract: trigger-plan")
      .replace("## Stage Policy", legacyLadder);
    expect(validateBlueprintContent("youtube.md", fixture, tick + "youtube@6.2" + tick)).toEqual([]);

    const fake = fixture.replace(
      "| 5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |",
      "| 5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |\n| 6 | More reach | Total valid public channel views | >=1000 views | Trailing 30 days |"
    );
    expect(validateBlueprintContent("youtube.md", fake, tick + "youtube@6.2" + tick).some((problem) => problem.message.includes("Level 6"))).toBe(true);
  });

  test("publishes the YouTube v7.0 stage-plan roadmap", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();

    expect(content).toContain("version: 7.0");
    expect(content).toContain("level_contract: stage-plan");
    expect(content).toContain("graduation_gate: revenue");
    expect(content).toContain("## Stage Roadmap");
    expect(content).not.toMatch(/^## (Experiment Ladder|Level Plans)$/m);
    expect(content).not.toMatch(/^### L\d+\b/m);
    expect(content).toContain("### E0 — Prepare the channel and first representative video");
    expect(content).toContain("### E5 — Measure one small commercial fit test");
    expect(content).toContain("Exit trigger: >=10 valid public channel views");
    expect(content).toContain("Exit trigger: >=100 valid public channel views");
    expect(content).toContain("Exit trigger: >=200 valid public channel views");
    expect(content).toContain("Exit trigger: >=500 valid public channel views");
    expect(content).toContain("Exit trigger: >=5000 valid public channel views");
    expect(content).toContain("Exit trigger: >=10000 valid public channel views");
    expect(content).toContain("THREE consecutive correctly produced and published videos");
    expect(content).toContain("## Graduation");
    expect(content).toContain("settled channel-attributable external revenue");
    expect(content).toContain("explicit owner approval");
    expect(content).toContain("estimated revenue is not proof");
    expect(content).toContain("## Future Stages");
    expect(content).toContain("E6 is undefined");
    expect(content).toContain("Revenue stages " + String.fromCharCode(96) + "R0" + String.fromCharCode(96) + ", " + String.fromCharCode(96) + "R1" + String.fromCharCode(96));
    expect(content).toContain("Profit stages " + String.fromCharCode(96) + "P0" + String.fromCharCode(96) + ", " + String.fromCharCode(96) + "P1" + String.fromCharCode(96));
    expect(content).toContain("Self-running stages " + String.fromCharCode(96) + "S0" + String.fromCharCode(96) + ", " + String.fromCharCode(96) + "S1" + String.fromCharCode(96));

    const roadmap = content.match(/^## Stage Roadmap\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/m)?.[1] || "";
    const headings = [...roadmap.matchAll(/^### (E\d+)\s+—\s+(.+)$/gm)].map((match) => match[1]!);
    expect(headings).toEqual(["E0", "E1", "E2", "E3", "E4", "E5"]);
    expect((content.match(/^Capabilities:/gm) || []).length).toBe(6);
    expect((content.match(/^Review: Every 30 days from stage entry or last review$/gm) || []).length).toBe(6);
  });

  test("publishes the reusable stage template policy", async () => {
    const template = await Bun.file(resolve(root, "docs/stage-template.md")).text();
    expect(template).toContain("E` for Experiment, `R` for Revenue, `P` for Profit, and `S` for Self-running");
    expect(template).toContain("bounded work and its expected result");
    expect(template).toContain("Required");
    expect(template).toContain("Optional");
    expect(template).toContain("Optional:\nNone.");
    expect(template).toContain("Required work and the stage's own exit trigger");
    expect(template).toContain("Every 30 days from stage entry or last review");
    expect(template).toContain("do not wait for the review clock");
    expect(template).toContain("owner approval and a recorded explanation");
    expect(template).toContain("does not automatically regress");
    expect(template).toContain("does not automatically pause");
    expect(template).toContain("retain the evidence and built artifacts after graduation");
  });

  test("rejects stage plans that use a next-stage trigger", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const wrong = content.replace(
      "Exit trigger: >=10 valid public channel views",
      "Exit trigger: >=100 valid public channel views"
    );
    const problems = validateBlueprintContent("youtube.md", wrong, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(problems.some((problem) => problem.message.includes("E0 Exit trigger must be >=10"))).toBe(true);
  });

  test("rejects a fake E6 and future stage plan", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const wrong = content.replace(
      "## Graduation",
      "### E6 — Invented future stage\n\nObjective: Future work\n\n## Graduation"
    );
    const problems = validateBlueprintContent("youtube.md", wrong, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(problems.some((problem) => /E6|exactly E0 through E5|invalid stage heading/.test(problem.message))).toBe(true);
  });

  test("rejects missing stage fields and an invalid optional block", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const wrong = content
      .replace("Optional:\n- Claim relevant official profiles", "Optional:\nNot a checklist")
      .replace("Evidence: YouTube Analytics aggregate channel views for the trailing 30 days, with source health retained separately.", "Evidence:");
    const problems = validateBlueprintContent("youtube.md", wrong, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(problems.some((problem) => problem.message.includes("E0 Optional: must contain"))).toBe(true);
    expect(problems.some((problem) => problem.message.includes("E0 Evidence must contain text"))).toBe(true);
  });

  test("rejects an incomplete supervised E2 proof", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const wrong = content.replace(
      "THREE consecutive correctly produced and published videos must be approved by the owner or designated responsible approver.",
      "Produce supervised videos."
    );
    const problems = validateBlueprintContent("youtube.md", wrong, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(problems.some((problem) => problem.message.includes("E2 must require three consecutive"))).toBe(true);
  });

  test("rejects graduation without settled revenue and approval", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const wrong = content
      .replace("settled channel-attributable external revenue", "unsettled estimated views")
      .replace("explicit owner approval", "a later decision");
    const problems = validateBlueprintContent("youtube.md", wrong, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(problems.some((problem) => problem.message.includes("settled channel-attributable external revenue"))).toBe(true);
    expect(problems.some((problem) => problem.message.includes("explicit owner approval"))).toBe(true);
  });

  test("rejects future R/P/S plans", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const wrong = content.replace(
      "## Future Stages",
      "## Future Stages\n\n### R0 — Revenue plan\n\nObjective: Invent a plan"
    );
    const problems = validateBlueprintContent("youtube.md", wrong, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(problems.some((problem) => problem.message.includes("Future Stages may reserve names"))).toBe(true);
  });

  test("rejects the old YouTube L roadmap in a stage-plan blueprint", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const wrong = content.replace("## Stage Roadmap", "## Stage Roadmap\n\n### L0 — Old roadmap");
    const problems = validateBlueprintContent("youtube.md", wrong, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(problems.some((problem) => problem.message.includes("old L0-L5 roadmap") || problem.message.includes("invalid stage heading"))).toBe(true);
  });

  test("documents the YouTube v7.0 source and stage-plan contract", async () => {
    const readme = await Bun.file(resolve(root, "README.md")).text();
    const specification = await Bun.file(resolve(root, "docs/specification.md")).text();
    const changelog = await Bun.file(resolve(root, "CHANGELOG.md")).text();
    expect(readme).toContain("| YouTube | 7.0 | First pass |");
    expect(readme).toContain("level_contract: stage-plan");
    expect(specification).toContain("level_contract: stage-plan");
    expect(specification).toContain("stage-template.md");
    expect(changelog).toContain("youtube@7.0");
  });

  test("requires both opt-in metadata fields for the stage-plan contract", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const withoutGate = content.replace("graduation_gate: revenue\n", "");
    const gateProblems = validateBlueprintContent("youtube.md", withoutGate, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(gateProblems.some((problem) => problem.message.includes("requires graduation_gate: revenue"))).toBe(true);

    const withoutContract = content.replace("level_contract: stage-plan\n", "");
    const contractProblems = validateBlueprintContent("youtube.md", withoutContract, String.fromCharCode(96) + "youtube@7.0" + String.fromCharCode(96));
    expect(contractProblems.some((problem) => problem.message.includes("requires level_contract"))).toBe(true);
  });

});

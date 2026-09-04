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

  test("publishes the YouTube v6 trigger-plan ladder", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();

    expect(content).toContain("version: 6.0");
    expect(content).toContain("level_contract: trigger-plan");
    expect(content).toContain("graduation_gate: revenue");
    expect(content).not.toMatch(/^build_path:/m);
    expect(content).not.toMatch(/^## (Build Path|Experiment Bootstrap|Progressive Automation)$/m);
    expect(content).toContain("| 0 | Preparation | Channel shell and first representative video readiness |");
    expect(content).toContain("| 1 | Representative video | One valid public representative video |");
    expect(content).toContain("| 2 | Early reach | Total valid public channel views | >=10 views | Trailing 30 days |");
    expect(content).toContain("| 3 | Growing reach | Total valid public channel views | >=100 views | Trailing 30 days |");
    expect(content).toContain("| 4 | Established reach | Total valid public channel views | >=200 views | Trailing 30 days |");
    expect(content).toContain("| 5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |");
    expect(content).toContain("no public seed or autonomous capability is required to start it");
    expect(content).toContain("newly produced by the experiment or an existing public video");
    expect(content).toContain("private plan at the current level must be complete and the target trigger must be met");
    expect(content).toContain("actual settled externally attributable revenue");
    expect(content).toContain("explicit owner approval");
    expect(content).toContain("never an `L6` trigger");
    expect(content).toContain("`L0`: prepare the channel shell");
    expect(content).toContain("`L1`: keep the bounded plan focused on reaching 10");
    expect(content).toContain("`L2`: keep the bounded plan focused on reaching 100");
    expect(content).toContain("`L3`: keep the bounded plan focused on reaching 200");
    expect(content).toContain("`L4`: keep the bounded plan focused on reaching 500");
    expect(content).toContain("`L5`: keep a bounded measurement and revenue-decision plan; no `L6` view target is defined");
  });

  test("requires both opt-in metadata fields for the trigger-plan contract", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const withoutGate = content.replace("graduation_gate: revenue\n", "");
    const gateProblems = validateBlueprintContent("youtube.md", withoutGate, "`youtube@6.0`");
    expect(gateProblems.some((problem) => problem.message.includes("requires graduation_gate: revenue"))).toBe(true);

    const withoutContract = content.replace("level_contract: trigger-plan\n", "");
    const contractProblems = validateBlueprintContent("youtube.md", withoutContract, "`youtube@6.0`");
    expect(contractProblems.some((problem) => problem.message.includes("requires level_contract: trigger-plan"))).toBe(true);
  });

  test("rejects a YouTube trigger-plan ladder that invents Level 6", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const withFakeLevel = content.replace(
      "| 5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |",
      "| 5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |\n| 6 | More reach | Total valid public channel views | >=1000 views | Trailing 30 days |"
    );
    const problems = validateBlueprintContent("youtube.md", withFakeLevel, "`youtube@6.0`");
    expect(problems.some((problem) => problem.message.includes("Level 6"))).toBe(true);
  });

  test("rejects malformed non-integer trigger-plan levels", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const withMalformedLevel = content.replace(
      "| 5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |",
      "| 5.5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |"
    );
    const problems = validateBlueprintContent("youtube.md", withMalformedLevel, "`youtube@6.0`");
    expect(problems.some((problem) => problem.message.includes("non-negative integer Level"))).toBe(true);
  });

  test("rejects a YouTube trigger-plan ladder with a views graduation row", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const withViewsGraduation = content.replace(
      "| 5 | Expanding reach | Total valid public channel views | >=500 views | Trailing 30 days |",
      "| 5 | Graduation | Total valid public channel views | >=500 views to graduate | Trailing 30 days |"
    );
    const problems = validateBlueprintContent("youtube.md", withViewsGraduation, "`youtube@6.0`");
    expect(problems.some((problem) => /graduation|graduate/i.test(problem.message))).toBe(true);
  });

  test("rejects gaps and out-of-order trigger-plan levels", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const withoutLevel3 = content.replace(
      "| 3 | Growing reach | Total valid public channel views | >=100 views | Trailing 30 days |\n",
      ""
    );
    const gapProblems = validateBlueprintContent("youtube.md", withoutLevel3, "`youtube@6.0`");
    expect(gapProblems.some((problem) => problem.message.includes("missing Level 3"))).toBe(true);

    const swapped = content.replace(
      "| 2 | Early reach | Total valid public channel views | >=10 views | Trailing 30 days |\n| 3 | Growing reach | Total valid public channel views | >=100 views | Trailing 30 days |",
      "| 3 | Growing reach | Total valid public channel views | >=100 views | Trailing 30 days |\n| 2 | Early reach | Total valid public channel views | >=10 views | Trailing 30 days |"
    );
    const orderProblems = validateBlueprintContent("youtube.md", swapped, "`youtube@6.0`");
    expect(orderProblems.some((problem) => problem.message.includes("ordered contiguously"))).toBe(true);
  });

  test("rejects wrong YouTube view thresholds and windows", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const wrong = content.replace(
      "| 3 | Growing reach | Total valid public channel views | >=100 views | Trailing 30 days |",
      "| 3 | Growing reach | Total valid public channel views | >=90 views | Trailing 90 days |"
    );
    const problems = validateBlueprintContent("youtube.md", wrong, "`youtube@6.0`");
    expect(problems.some((problem) => problem.message.includes("Level 3 trigger must be >=100 views"))).toBe(true);
    expect(problems.some((problem) => problem.message.includes("Level 3 window must be Trailing 30 days"))).toBe(true);
  });

  test("rejects a trigger-plan ladder without the private-plan completion rule", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();
    const withoutRule = content
      .replaceAll("private plan", "work notes")
      .replaceAll("target trigger", "target signal")
      .replaceAll("plan is complete", "work is ready");
    const problems = validateBlueprintContent("youtube.md", withoutRule, "`youtube@6.0`");
    expect(problems.some((problem) => problem.message.includes("private plan to be complete"))).toBe(true);
  });
});

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

  test("publishes the YouTube v5 bootstrap and automation gates", async () => {
    const content = await Bun.file(resolve(root, "blueprints/youtube.md")).text();

    expect(content).toContain("version: 5.1");
    expect(content).toContain("build_path: stage-gate");
    expect(content).toContain("## Build Path");
    expect(content).toContain("## Experiment Bootstrap");
    expect(content).toContain("seed type");
    expect(content).toContain("public URL");
    expect(content).toContain("seed date");
    expect(content).toContain("operator involvement");
    expect(content).toContain("anchor in `built.md`");
    expect(content).toContain("manual seed is not automation");
    expect(content).toContain("| 0 | Admission | Public seed availability, channel health, ownership, and aggregate measurement |");
    expect(content).toContain("| 1 | Audience signal | Total valid public views that occurred across the channel during the window | >=1,000 views |");
    expect(content).toContain("| 1 | Audience signal | Total valid public views that occurred across the channel during the window | >=1,000 views | Trailing 30 days | Open the second-video process |");
    expect(content).toContain("| 2 | Repeatable reach | Number of distinct public long-form or Shorts videos published in the window with at least 1,000 valid public views | >=3 qualifying videos | Trailing 90 days |");
    expect(content).toContain("| 3 | Revenue | Settled external channel-attributable revenue (numeric currency amount) | >0 | Trailing 30 days | Graduate into a unit at stage Revenue |");
    expect(content).toContain("delegable or automated");
    expect(content).not.toContain("Level `0` requires a verified autonomous production-and-publishing capability");
  });
});

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
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger")
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

  test("rejects an experiment ladder without one graduation trigger", () => {
    const withLadder = validBlueprint
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger")
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
      .replace("status: draft", "status: draft\nexperiment_ladder: level-trigger")
      .replace("## Phases", `## Experiment Ladder

Level 0 is admission.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 1 | Signal | External conversions | \`>= 10\` | Trailing 30 days | Graduate into a unit |

## Phases`);
    const problems = validateBlueprintContent("example.md", withLadder, "`example@1.0`");
    expect(problems.some((problem) => problem.message.includes("Progressive Automation"))).toBe(true);
  });
});

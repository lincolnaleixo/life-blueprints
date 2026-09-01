# Blueprint Specification

## File contract

Each blueprint is `blueprints/<type>.md` with YAML-like frontmatter:

```yaml
---
type: ecommerce
version: 3.1
updated: 2026-08-29
status: pilot
plan_grammar: month-quarter
---
```

The filename must match `type`. Versions use `major.minor`; dates use ISO `YYYY-MM-DD`; status is one of `draft`, `first-pass`, `written`, `pilot`, or `stable`.

Each document has exactly one H1, a `## Phases` section, and a capability catalog containing unique kebab-case slugs.

A blueprint may also declare `experiment_ladder: level-trigger`. It then has an `## Experiment Ladder` section with:

- level `0` defined as admission to a running experiment, never as achieved evidence;
- numbered evidence levels above zero;
- for each evidence level, one metric, numeric trigger, observation window, and unlock;
- exactly one graduation level whose trigger proves real revenue.

The reusable ladder belongs here. A specific experiment's hypothesis, metric source, current result, and private identifiers do not.

## Meaning

- A phase is an evidence-gated maturity state, not a month, duration, or mandatory project sequence.
- A capability is a durable repeatable condition, not a temporary project or atomic task.
- A priority is a generic default for the business type, not an instruction that overrides local evidence.
- A blueprint is reference material. A private implementation assesses its own evidence and creates its own bounded plan.
- An experiment is pre-unit. It follows the blueprint's experiment ladder and becomes a unit only at the declared revenue graduation trigger.

## Compatibility

- Patch-like editorial changes do not alter the public blueprint version.
- Backward-compatible guidance or capability additions increment the minor version.
- Removed or renamed slugs, incompatible phase changes, or a changed planning contract increment the major version.
- Every version must appear in `CHANGELOG.md`.

Repository release tags version the collection independently from individual blueprints.

# Blueprint Specification

## File contract

Each blueprint is `blueprints/<type>.md` with YAML-like frontmatter:

```yaml
---
type: ecommerce
version: 3.1
updated: 2026-08-29
status: pilot
---
```

The filename must match `type`. Versions use `major.minor`; dates use ISO `YYYY-MM-DD`; status is one of `draft`, `first-pass`, `written`, `pilot`, or `stable`.

Each document has exactly one H1, a `## Phases` section, and a capability catalog containing unique kebab-case slugs.

## Meaning

- A phase is an evidence-gated maturity state, not a month, duration, or mandatory project sequence.
- A capability is a durable repeatable condition, not a temporary project or atomic task.
- A priority is a generic default for the business type, not an instruction that overrides local evidence.
- A blueprint is reference material. A private implementation assesses its own evidence and creates its own bounded plan.

## Compatibility

- Patch-like editorial changes do not alter the public blueprint version.
- Backward-compatible guidance or capability additions increment the minor version.
- Removed or renamed slugs, incompatible phase changes, or a changed planning contract increment the major version.
- Every version must appear in `CHANGELOG.md`.

Repository release tags version the collection independently from individual blueprints.

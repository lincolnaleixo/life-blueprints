# Repository Rules

## Purpose

- This is the public, canonical repository for reusable business blueprints.
- A blueprint is reference material for designing and reviewing a private plan. It is never the private plan itself.
- Work blueprint-first, never blueprint-forced: reuse a capability when it fits and allow unit-specific work when it does not.

## Public boundary

- Everything committed here is public.
- Never include credentials, personal data, customer data, private prices or agreements, internal infrastructure, private repository paths, or names and evidence from a specific private unit.
- Use anonymized or public examples. Link public sources when a material factual claim depends on them.
- Do not copy private notes into this repository. Convert a lesson into a generic claim and retain only the minimum public evidence needed to support it.

## Blueprint contract

- Keep one Markdown file per type under `blueprints/`.
- Required frontmatter: `type`, `version`, `updated`, and `status`.
- Phases describe evidence-gated maturity, not time.
- Capabilities describe durable, repeatable conditions, not projects or atomic tasks.
- Capability slugs are stable public identifiers. Rename or remove one only in a breaking major release.
- Priorities are generic defaults: P1 protects or directly drives the model, P2 strengthens it, P3 expands it, and P4 is situational.

## Versioning

- Wording, spelling, source repairs, repository tooling, and presentation changes do not change a blueprint version.
- Increment the minor version for backward-compatible capabilities or material guidance additions.
- Increment the major version for breaking phase, capability, or planning-contract changes.
- Every version change requires a matching `CHANGELOG.md` entry.
- A repository release versions the collection; each blueprint retains its own independent version.

## Workflow

- Make focused changes on a branch or Git worktree.
- Update the canonical blueprint here before any downstream private system or dashboard snapshot.
- Run `bun run check` and inspect the public diff before commit.
- After merge and push, downstream systems may update their reviewed reference and validate their own rendering.
- Never make a downstream private edit the only copy of a generic blueprint improvement.

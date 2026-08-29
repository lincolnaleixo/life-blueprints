# Contributing

Contributions that improve a reusable business model are welcome. This repository is public; do not include private business context or secrets.

## Workflow

1. Open an issue for a material phase or capability-contract change.
2. Create a focused branch.
3. Keep the change generic across businesses of the type.
4. Add public evidence for material factual claims when practical.
5. Follow the versioning rules in [the specification](docs/specification.md).
6. Add a `CHANGELOG.md` entry when a blueprint version changes.
7. Run `bun run check`.
8. Open a pull request and explain the evidence, compatibility impact, and unknowns.

Do not mark a capability as generally required solely because one implementation needed it. Do not turn an implementation project into a permanent capability without evidence that the condition recurs across the business type.

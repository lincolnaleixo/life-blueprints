# Agent Instructions

1. Read `RULES.md`, `README.md`, and `docs/specification.md` before changing a blueprint or repository behavior.
2. Treat this public repository as the canonical source for every blueprint it contains.
3. Never add unit plans, private evidence, credentials, personal data, internal hostnames, private repository paths, or private business identifiers.
4. Change a blueprint here first. Update its version and `CHANGELOG.md` only when the compatibility rules require it.
5. Run `bun run check` before committing. Do not weaken a validator to admit content that violates the public contract.
6. Keep changes generic across businesses of the type. Unit-specific work belongs in the unit's private plan, not here.
7. Preserve uncertainty. Research-informed claims must not be presented as guaranteed or operationally proven without evidence.

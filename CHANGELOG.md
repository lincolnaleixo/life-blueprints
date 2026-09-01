# Changelog

All notable changes to the public blueprint collection are documented here.

## [Unreleased]

### Changed

- `ecommerce@4.0` (major, breaking planning contract): an ecommerce unit now plans by time — month and quarter containers with bounded projects and explicit Later groups — instead of unit-specific state phases, with a deliberate per-unit phase override allowed during build-out. Adds the machine-readable `plan_grammar: month-quarter` metadata. Every referencing unit must be reviewed against this version; LongLifeNutri reviewed and converted 2026-08-31.
- `saas@2.0` (major, breaking planning contract): a SaaS unit now plans by version — one Current release, ordered undated future releases, no more than five projects per version, and completed releases retained as product history. Adds the machine-readable `plan_grammar: version` metadata. Every referencing unit must be reviewed explicitly before moving to this version.

## [1.0.0] - 2026-08-29

### Added

- Initial public collection: `affiliates@0.6`, `content@0.5`, `ebooks@0.2`, `ecommerce@3.1`, `mobile-app@1.1`, `newsletter@1.3`, `saas@1.1`, `social-media@0.6`, `utility-site@0.1`, and `youtube@1.0`.
- Bun and TypeScript 7 validation for metadata, phases, capability slugs, internal links, changelog coverage, and the public-content boundary.
- CI, Gitleaks, Trivy, dependency review, CodeQL, contribution guidance, and Apache-2.0 licensing derived from the governance baseline of `code-template`.

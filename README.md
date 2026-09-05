# Life Blueprints

Open-source, evidence-gated playbooks for building durable digital businesses.

A blueprint is reusable reference material, not a task list or a promise of results. It describes a business model, meaningful maturity phases, operating gates, and durable capabilities. A specific business should translate the relevant parts into its own plan instead of mirroring the complete catalog.

## Catalog

| Type | Version | Status | Blueprint |
| --- | --- | --- | --- |
| Affiliate / CPA | 0.7 | First pass | [affiliates](blueprints/affiliates.md) |
| Content / SEO | 2.0 | First pass | [content](blueprints/content.md) |
| Ebooks / KDP | 0.3 | First pass | [ebooks](blueprints/ebooks.md) |
| Ecommerce | 4.1 | Pilot | [ecommerce](blueprints/ecommerce.md) |
| Mobile app | 1.2 | Written | [mobile app](blueprints/mobile-app.md) |
| Newsletter | 1.4 | Written | [newsletter](blueprints/newsletter.md) |
| SaaS | 5.0 | Pilot | [saas](blueprints/saas.md) |
| Social media | 0.7 | First pass | [social media](blueprints/social-media.md) |
| Utility site | 2.0 | Draft | [utility site](blueprints/utility-site.md) |
| YouTube | 6.1 | First pass | [youtube](blueprints/youtube.md) |

Statuses describe confidence, not business maturity:

- `draft`: incomplete structure or material unknowns remain;
- `first-pass`: research-informed and usable for critique, but not deeply proven;
- `written`: coherent and researched, awaiting stronger operating evidence;
- `pilot`: actively tested against a real implementation;
- `stable`: repeatedly supported by evidence across implementations.

## Use

1. Select the closest business type.
2. Validate the specific market independently.
3. Read the blueprint as reference.
4. Assess capabilities from current evidence as confirmed, gap, or unknown.
5. When the blueprint declares an experiment ladder, run the bet as an experiment until its graduation trigger is verified.
6. Create the unit only at graduation, then build a small unit-specific plan around the most important state change.
7. Feed only generic, reusable lessons back into the blueprint.

Blueprint phases are evidence-gated maturity states, never dates or mandatory project sequences. Capability priorities are generic defaults and must not override the reality of a specific business.

## Experiment ladders

An experiment ladder is the pre-unit evidence contract for one business type. It is declared by `experiment_ladder: level-trigger` and `experiment_plan_grammar: levels` in blueprint frontmatter and by an `## Experiment Ladder` section. The default (legacy) contract treats Level `0` as admission to a real running experiment; every higher level defines a metric, numeric trigger, observation window, and what the evidence unlocks. Exactly one level is marked as graduation, and that trigger must demonstrate real revenue before the bet becomes a unit.

The ladder is also the private experiment's roadmap. Its plan uses `L0`, `L1`, ... as the only work containers, with no parallel round numbering. The Current container always matches the recorded current level. Under the legacy contract, the capability owed at the current level must be verified and the next numeric trigger must be met; an early trigger stays ready until the level's required work closes.

An alternative, explicitly opted-in contract uses `level_contract: trigger-plan` with `graduation_gate: revenue`. It publishes a contiguous prefix of numbered levels, each with a trigger, metric, and observation window; each trigger is an entry condition, while the private plan at the current level supplies the bounded work toward the next trigger and must be complete before that trigger can advance the experiment. This contract does not require a Progressive Automation, Bootstrap, or Build Path section, and it does not require a numbered graduation row. Graduation remains independent of the numbered ladder: it requires actual settled externally attributable revenue and explicit owner approval. Future levels stay undefined until the blueprint publishes their triggers. An implementation may still claim automation, but each such claim needs production proof, safe correction or rollback, health evidence, and operating limits.

A trigger-plan blueprint may optionally publish an `## Level Plans` section for UI-facing guidance. Its `### L<number>` entries contain two or three concise action bullets and one ``Capabilities: `slug`, ...`` reference line; every published level appears exactly once in order. The guidance is adapted in the private plan and does not add obligations, unlocks, or gates. Earlier capabilities can be reused at any level, and phase numbers are not experiment levels.

A legacy blueprint with `build_path: stage-gate` also publishes one ordered path from pre-admission through graduation. Each step says what to build, what observable gate advances it, what pass and miss decisions mean, and which automation frontier opens next. The path supplies defaults for a new experiment plan; the private plan keeps only its adapted projects and evidence, never a copied tracker. A trigger-plan blueprint does not use this stage-gate contract.

Private experiment records hold the specific hypothesis, metric definition, source, current level, and decisions. The public blueprint never contains a private bet's name, customer data, infrastructure, or result.

## Development

The repository keeps the small governance and security foundation of [`code-template`](https://github.com/lincolnaleixo/code-template), pruned for a documentation-first project.

```bash
bun install --frozen-lockfile
bun run check
```

`bun run check` typechecks the validator, tests it, validates every blueprint, checks internal links, confirms changelog coverage, and rejects known private-system references.

See [the blueprint specification](docs/specification.md), [provenance policy](docs/provenance.md), and [contribution guide](CONTRIBUTING.md).

## License

Licensed under the [Apache License 2.0](LICENSE).

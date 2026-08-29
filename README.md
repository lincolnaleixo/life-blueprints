# Life Blueprints

Open-source, evidence-gated playbooks for building durable digital businesses.

A blueprint is reusable reference material, not a task list or a promise of results. It describes a business model, meaningful maturity phases, operating gates, and durable capabilities. A specific business should translate the relevant parts into its own plan instead of mirroring the complete catalog.

## Catalog

| Type | Version | Status | Blueprint |
| --- | --- | --- | --- |
| Affiliate / CPA | 0.6 | First pass | [affiliates](blueprints/affiliates.md) |
| Content / SEO | 0.5 | First pass | [content](blueprints/content.md) |
| Ebooks / KDP | 0.2 | First pass | [ebooks](blueprints/ebooks.md) |
| Ecommerce | 3.1 | Pilot | [ecommerce](blueprints/ecommerce.md) |
| Mobile app | 1.1 | Written | [mobile app](blueprints/mobile-app.md) |
| Newsletter | 1.3 | Written | [newsletter](blueprints/newsletter.md) |
| SaaS | 1.1 | Written | [saas](blueprints/saas.md) |
| Social media | 0.6 | First pass | [social media](blueprints/social-media.md) |
| Utility site | 0.1 | Draft | [utility site](blueprints/utility-site.md) |
| YouTube | 1.0 | First pass | [youtube](blueprints/youtube.md) |

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
5. Build a small unit-specific plan around the most important state change.
6. Feed only generic, reusable lessons back into the blueprint.

Blueprint phases are evidence-gated maturity states, never dates or mandatory project sequences. Capability priorities are generic defaults and must not override the reality of a specific business.

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

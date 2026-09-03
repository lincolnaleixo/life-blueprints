---
type: utility-site
version: 1.0
updated: 2026-09-03
status: draft
plan_grammar: version
experiment_ladder: level-trigger
---

# Blueprint — Utility Site

> Build a focused site whose primary value is an immediately useful interactive
> tool: a calculator, converter, estimator, checker, or similarly bounded
> utility. This is distinct from an editorial content business because the
> product experience and trusted output lead; supporting content exists to
> explain, distribute, and monetize the utility.

## Planning Contract

- Phases describe generic utility-site maturity and gate on business evidence; they are not the unit's roadmap containers.
- A utility-site unit plans by **version** because the utility is a product with a build, ship, and operate shape: each bounded release makes the tool correct, discoverable, monetized, or wider, and should leave an observable change in the asset. Keep exactly one incomplete version marked Current, place later versions in priority order without dates or duration estimates, and retain completed versions as the asset's natural history. Every container declares its purpose, focus, and `Done when` condition.
- Each version holds at most five top-level projects. A project is a bounded change with an observable completion condition; its concrete execution tasks live directly underneath it and are uncapped.
- A version closes only after the shipped utility, its usage and economics evidence, and the unit's own operating record agree. Deploying the tool alone does not close a version.
- Every cap here is a generic default. A unit may override it in its own manifest with a recorded reason, and an existing container keeps what it already holds until its next boundary.
- Use the capability catalog as reference when choosing projects, but do not mirror the catalog into the unit plan or treat project completion as permanent capability evidence.

## Experiment Ladder

A utility-site bet is an **experiment before it is a unit**. Admission requires a live automated utility or test, a falsifiable hypothesis, a measurable trigger, a bounded observation window, a reproducible metric source, and no routine operator work before the next decision. Level `0` means the bet has entered that running state; it is not an evidence claim and has no trigger of its own.

Each higher level is earned only from verified production evidence. The experiment record keeps the exact metric definition and source; this public blueprint defines only the reusable ladder. An unavailable, stale, or broken measurement source is not a zero result: keep the last supported level, expose source health separately, and repair or verify the source before making a level decision. Only the revenue level is a graduation trigger.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 1 | Search demand | Google Search Console web clicks to the utility's verified property | `>= 100` | Trailing 90 days | Establish a measurable search-demand base and test repeated use |
| 2 | Repeated utility use | Completed human utility uses, from a reproducible bot-filtered event | `>= 100` | Trailing 30 days | Open the monetization round against demonstrated human use |
| 3 | Revenue | Settled attributable external revenue from the utility | `>= 1` | Trailing 30 days | Graduate the experiment into a utility-site unit at stage `Revenue` |

Graduation is a repository transition, not a forecast: create the unit only after the Level 3 revenue is verified from its source. The new unit inherits the utility-site version planning grammar and continues through `Revenue → Profit → Self-running`; the experiment record remains in Git history rather than being duplicated as a second live source.

## Progressive Automation

Level `0` requires one verified autonomous capability that serves the utility and preserves a trustworthy measurement boundary. Each earned non-graduation level unlocks at least one additional capability chosen from the observed discovery, completion or economics constraint. The next evidence trigger stays gated until the new capability has deterministic correctness checks, a production proof and a health signal. Revenue graduation requires no additional experiment automation.

| Earned level | Default automation frontier | Selection guidance |
| --- | --- | --- |
| 0 | Utility delivery and measurement | Keep the narrow tool available, correct and measurable without routine operator work. |
| 1 | Adjacent utility expansion or acquisition | Prefer a governed factory for adjacent tools when search evidence supports a cluster; otherwise automate the strongest discovery or completion constraint. |
| 2 | Monetization | Automate the least intrusive evidence-backed rail — advertising, affiliate, lead generation or paid functionality — without degrading the utility. |

Automated expansion must fail closed: every generated utility needs an explicit input/output specification, deterministic fixtures, edge-case checks, deployment smoke and rollback. Volume alone is never capability evidence.

## Operating model

- Start with one recurring problem and one narrow utility, not a generic toolbox.
- Correctness, speed, mobile usability, and a clear result are product
  requirements.
- Search and AI discovery are distribution channels, not substitutes for useful
  functionality.
- Expand into a cluster only after the first utility shows real use, return
  demand, links, conversions, or revenue.
- Keep the experience usable before adding ads, lead generation, affiliate
  offers, or paid features.

## Phases

- **Phase 1 · Validate utility demand** — Prove that a specific audience repeatedly needs the calculation or transformation and that existing results leave a useful opening. *Gate in: one bounded problem with observable demand and a testable monetization path. Focus: problem evidence, query intent, competitors, and output definition.*
- **Phase 2 · Ship the trusted utility** — Release the smallest fast, correct, mobile-friendly tool with transparent inputs, outputs, and assumptions. *Gate in: a written calculation or transformation specification with test cases. Focus: correctness, usability, performance, analytics, and indexability.*
- **Phase 3 · Prove distribution and economics** — Establish repeatable discovery and learn whether usage can support an appropriate revenue rail. *Gate in: a live utility with reliable usage measurement. Focus: SEO and AI discovery, supporting content, links, retention, conversion, and revenue per visitor.*
- **Phase 4 · Scale the proven cluster** — Add adjacent utilities, localization, or shared infrastructure only after the first wedge earns expansion. *Gate in: evidence that the first utility creates durable use or viable economics. Focus: adjacent demand, templates, internal linking, automation, quality control, and portfolio economics.*

## Capabilities

| Slug | Capability | Phase | Priority | Description |
|---|---|---:|---|---|
| `problem-demand` | Recurring problem and demand validation | 1 | P1 | Identify the audience, job, frequency, query intent, and evidence that the utility is needed. |
| `output-spec` | Inputs, outputs, assumptions, and test cases | 1 | P1 | Define exactly what the utility computes or transforms and how correctness will be verified. |
| `monetization-hypothesis` | Appropriate revenue-path hypothesis | 1 | P2 | Select ads, affiliate, lead generation, paid functionality, or another rail without harming utility. |
| `utility-product` | Fast and mobile-friendly interactive utility | 2 | P1 | Deliver the smallest complete experience from input through understandable result. |
| `calculation-quality` | Correctness, edge cases, and transparent methodology | 2 | P1 | Test outputs and expose assumptions or formulas when they affect trust. |
| `measurement` | Real usage and conversion analytics | 2 | P1 | Measure human visits, completed uses, return behavior, and relevant conversions. |
| `technical-discovery` | Indexability and machine-readable presentation | 2 | P2 | Make the utility discoverable without confusing crawler activity with human use. |
| `official-profiles` | Official branded profiles claimed where the audience will look | 2 | P2 | Claim the profiles, keep them visually consistent, and link them to the owned site. |
| `direct-channel` | A one-to-one channel to reach a human | 2 | P2 | Give users one route to a human answer, linked from the tool, with someone accountable for replying. |
| `whatsapp-group` | A WhatsApp group users can join | 2 | P2 | Run a WhatsApp group linked from the tool, with someone accountable for answering what is asked there. |
| `telegram-group` | A Telegram group mirroring the WhatsApp one | 2 | P2 | Mirror the WhatsApp group on Telegram so users are not forced onto a single platform to reach you. |
| `feedback-intake` | A public place to request tools and fixes | 3 | P3 | Let users request utilities and corrections in public, and feed what they ask into the build queue. |
| `distribution-loop` | Repeatable search, AI, referral, or community acquisition | 3 | P1 | Test how qualified users repeatedly find the utility. |
| `supporting-content` | Explanations and examples that serve the utility | 3 | P2 | Publish only content that improves understanding, discovery, or conversion around the tool. |
| `economics-proof` | Revenue-per-visitor and operating-cost evidence | 3 | P1 | Prove that the chosen rail can support maintenance and growth. |
| `adjacent-utility-expansion` | Evidence-led utility cluster expansion | 4 | P1 | Add closely related tools only when the first wedge justifies shared distribution and infrastructure. |
| `portfolio-operations` | Shared templates, localization, monitoring, and quality control | 4 | P2 | Scale without allowing duplicated pages, stale formulas, or low-value inventory. |

## Kill / scale rule

Kill or rethink the utility when a fair test shows no qualified usage,
repeat behavior, distribution opening, or viable economics. Scale only from
evidence produced by the first useful wedge; a large inventory of tools is not
traction.

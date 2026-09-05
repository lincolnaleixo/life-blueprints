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

Every blueprint declares `plan_grammar` and explains it in a `## Planning Contract` section. The grammar is the default roadmap shape a unit of that type inherits, and the section publishes the generic project caps that go with it:

| `plan_grammar` | Containers | Top-level project cap |
| --- | --- | --- |
| `month-quarter` | months and quarters, with explicit Later groups | 3 per month, 5 per quarter |
| `version` | ordered undated versions | 5 per version |
| `phases` | ordered undated maturity phases | 5 per phase |
| `active-projects` | `Active`, `Completed`, `Future` | 5 in `Active`, 10 in `Future` in total, `Completed` uncapped |

Execution tasks nested under a project are never capped. Every cap is a generic default that a unit may override in its own manifest with a recorded reason, and an existing container keeps what it already holds until its next boundary. Changing a declared grammar is a breaking planning-contract change; adding the declaration and its caps to a blueprint that had none is a backward-compatible guidance addition.

A blueprint may also declare `experiment_ladder: level-trigger`. Every such blueprint must also declare `experiment_plan_grammar: levels`: the ladder's levels are the private experiment roadmap's only containers, and a second round numbering is invalid. Unless it opts into the alternative contract below, it then has an `## Experiment Ladder` section with:

- level `0` defined as admission to a running experiment, never as achieved evidence;
- numbered evidence levels above zero;
- for each evidence level, one metric, numeric trigger, observation window, and unlock;
- exactly one graduation level whose trigger proves real revenue.

A blueprint may explicitly opt into the simpler `level_contract: trigger-plan` contract. It must also declare `graduation_gate: revenue`. Under this opt-in:

- the `## Experiment Ladder` table publishes a contiguous prefix beginning at `L0`; every row has its own metric, trigger, and observation window, with no required unlock or automation fields. A row's trigger is the entry condition for that level, not work to repeat after entry;
- the private experiment plan supplies the bounded work from the current level toward the next trigger. Advancing requires the current level's private plan to be complete and the target trigger to be met; an early trigger remains ready until that plan closes;
- no `## Experiment Bootstrap`, `## Progressive Automation`, or `## Build Path` section is required, and a `build_path` stage-gate declaration must not be combined with this contract;
- graduation is outside the numbered sequence and is never inferred from a future level. It requires actual settled externally attributable revenue and explicit owner approval; view or other non-revenue triggers cannot graduate the experiment;
- future levels remain undefined until the blueprint publishes their metric, trigger, and window. An implementation may still claim automation, but each claim requires production proof, safe correction or rollback, health evidence, and operating limits.

A blueprint may instead opt into `level_contract: stage-plan` with `graduation_gate: revenue`. This is a breaking alternative contract for an ordered staged experiment and must publish a `## Stage Roadmap`. Each stage is a `### E<number> — <title>` block containing, in order, `Objective:`, `Entry:`, `Required:` checklist bullets, `Exit trigger:`, `Window:`, `Evidence:`, `Review:`, and `If not met:`. A blueprint may additionally publish exactly one shared `## Optional Work` section outside the stage blocks; its plain task bullets have no stage assignment and never replace required work, the stage trigger, or approval boundaries. Each shared task may end with one exact advisory suffix such as `Recommended stage: E0.` naming an existing stage; the hint is a best-fit recommendation only, may be ignored when another stage's conditions fit, and creates no eligibility, debt, blocked state, or unlock. Legacy shared tasks without the suffix remain valid. Older sources may retain per-stage `Optional:` blocks, but a source must not mix the shared pool with stage-level optional blocks. Capability references belong inline in the `Required` or shared optional task sentence as known catalog slugs in backticks; a conditional capability's fit, eligibility, or approval condition must be in that same sentence. The roadmap has no separate capability card or duplicate catalog. For backward compatibility, validators may accept legacy `Capabilities:` and `Conditional capability: <slug> — <condition>` lines and the older per-stage optional shape when reading an existing stage-plan blueprint. Unassigned catalog slugs remain source references rather than invented tasks. The stage is complete only when its required work and its own exit trigger both pass; optional work never blocks completion. A stage's trigger belongs to that stage, not to the next stage's entry. Exceptions require owner approval and a private record. The review clock is measured from stage entry or the last review and is separate from the evidence window; falling evidence does not automatically regress or pause work, and completed work remains retained after graduation.

The YouTube `stage-plan` blueprint publishes the contiguous `E0`–`E6` prefix. Its stage triggers are aggregate valid public channel views of `>=10`, `>=100`, `>=200`, `>=500`, `>=5000`, `>=10000`, and `>=20000` respectively, each in a trailing 30-day window. YouTube 7.3 keeps E0–E5 unchanged and uses one shared `## Optional Work` pool with the seven optional task intents carried forward from 7.1; each currently carries one advisory `Recommended stage: E<n>.` suffix for its original best-fit stage, but none is assigned to a stage or promoted into a gate. E6 improves videos from evidence and tests one niche-fit monetization option at a time; YouTube ads/YPP, affiliates or sponsorship, and an owned product are conditional choices, with no individual option mandatory or promised. E7, Revenue `R0` and later, Profit `P0` and later, and Self-running `S0` and later remain undefined until a reviewed blueprint version publishes their plans. Graduation remains independent of the stage sequence and requires settled channel-attributable external revenue plus explicit owner approval; estimated revenue is not proof. The reusable shape is documented in [`stage-template.md`](stage-template.md).

A trigger-plan blueprint may optionally publish an `## Level Plans` section for UI-facing guidance. Begin it with a plain-language note that the guidance is adapted in the private plan, does not create automatic obligations, unlocks, or extra gates, earlier capabilities can be built or reused at any level, and phase numbers are not levels. If the section is present, every published level must appear exactly once in order as a `### L<number>` heading, optionally followed by ` — <title>`, then two or three concise `- ` action bullets and one ``Capabilities: `slug`, ...`` line. It may add optional ``Conditional capability: `slug` — <condition>`` lines after the direct reference; these lines must use existing catalog slugs and must not duplicate a same-level direct reference. Conditions provide fit, eligibility, or approval context and do not create an additional trigger, unlock, or gate. This section is guidance, not a second ladder; retain the existing private-plan guidance for clients without the optional section.

A blueprint may define an `## Experiment Bootstrap` contract for a public artifact that can exist before admission. When it does, the private experiment records the fields named by that contract — at minimum the artifact type, public location, date, operator involvement, and evidence anchor — without copying private evidence into the public blueprint. Bootstrap is provenance, not traction and not an autonomous capability: Level `0` still requires the blueprint's admission and observation bar, and a private, unavailable, or unmeasured artifact cannot admit the experiment.

For the default (legacy) contract, the level-container planning contract is:

- one `L0`, `L1`, ... roadmap container for every ladder level, with exactly one marked `Current`;
- the Current container number equals the experiment manifest's recorded current level;
- each level contains the capability introduced at that level and the bounded projects needed to reach the next numeric trigger;
- advancement requires both the current level's required capability to be verified and the next level's numeric trigger to be met;
- if the numeric trigger arrives first, it remains ready while the current level's work closes;
- the revenue graduation level requires no new automation and remains Current only until the explicit graduation decision is resolved.

The default (legacy) contract must also have an `## Progressive Automation` section with:

- one verified autonomous capability required at Level `0`;
- at least one additional capability unlocked by each non-graduation level;
- a default frontier and selection guidance for each non-graduation level;
- the next evidence trigger gated until the newly unlocked capability is verified;
- no additional automation requirement at the revenue graduation level.

The reusable ladder belongs here. A specific experiment's hypothesis, metric source, current result, and private identifiers do not.

A legacy blueprint may additionally declare `build_path: stage-gate`. This publishes one ordered default route from pre-admission work through the experiment ladder without turning the blueprint into a private task list. It requires an `## Build Path` section with this table:

| Order | Step | Scope | Build now | Gate | Pass | Miss | Automation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `example-step` | `pre-admission` | Generic bounded work | Observable entry or exit evidence | What opens next | What to repeat, change, or stop | The capability frontier, or None |

Orders are contiguous from `1`, step ids are unique kebab-case slugs, and scope is either `pre-admission` or one of the blueprint's published `L<number>` levels. At least one pre-admission step and every published level must appear. The path stitches build work, evidence, decisions, and progressive automation into one sequence; it does not replace the ladder's numeric triggers or the unit's post-graduation planning grammar. A private experiment adapts the relevant rows to its own evidence and records the concrete projects only in its plan. A `trigger-plan` blueprint does not declare this stage-gate path.

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

# Stage-plan template

This reusable template defines the public shape of a staged experiment or other staged business plan. Stage families use `E` for Experiment, `R` for Revenue, `P` for Profit, and `S` for Self-running when a reviewed blueprint chooses to publish them. It is guidance for future blueprints of any type; adopting it never migrates an existing blueprint or private plan automatically.

## Stage meaning

A stage is the combination of bounded work and its expected result. A stage is not complete until both conditions hold:

Required work and the stage's own exit trigger are both mandatory.

1. every `Required` item is complete; and
2. the stage's own `Exit trigger` is met with the declared evidence.

The trigger belongs to the stage that it proves. Do not put the next stage's threshold in the current stage, and do not use a stage's `Entry` line as a disguised next-stage trigger.

## Required and optional work

Every stage has a `Required:` block. Required work is compulsory. In the current shared-pool layout, optional guidance appears once in a `## Optional Work` section outside the stage blocks. Its tasks are available whenever appropriate, have no stage assignment, and never block stage completion. A blueprint must choose one layout: it must not mix the shared pool with stage-level `Optional:` blocks.

Older sources may keep an `Optional:` block inside each stage for backward compatibility. When no generic optional guidance is useful in that older layout, write:

```markdown
Optional:
None.
```

An exception is allowed only with owner approval and a recorded explanation in the private plan. A blueprint may describe the exception boundary, but it must not silently turn an exception into a new generic gate.

## Evidence and review

`Window` describes the measurement window for the stage's exit evidence. The default review field is `Review: Every 30 days from stage entry or last review`. This is a separate control clock: count it from stage entry or the last review, and do not substitute the trailing measurement window for it. If required work and the stage's own result pass before 30 days, close the stage; do not wait for the review clock.

A review records the current evidence, source health, and any falling signal. Falling evidence does not automatically regress a completed stage and does not automatically pause work. The owner decides what adjustment or escalation is appropriate.

## Graduation and future stages

Graduation is a separate decision when a blueprint declares it. It does not erase or rewrite completed stage work; retain the evidence and built artifacts after graduation. Future stages may be named as reserved, undefined placeholders, but they must not acquire invented thresholds, plans, or gates until a reviewed blueprint version defines them. A sample `E0` block does not imply that future `R`, `P`, or `S` steps exist or have a threshold.

## Stage block template

```markdown
### E0 — <stage title>

Objective: <the state change this stage is intended to create>

Entry: <what is already true before this stage starts>

Required:
- <compulsory work>

Exit trigger: <this stage's own observable result>
Window: <measurement window>
Evidence: <aggregate or otherwise permitted evidence source>
Review: Every 30 days from stage entry or last review
If not met: <diagnosis, adjustment, or escalation guidance; no automatic kill implied>
```

For a shared optional pool, use one plain-bullet section outside the stages:

```markdown
## Optional Work

Shared optional work never replaces required work, the stage's own exit trigger, or approval boundaries. A recommendation is advisory only; it does not assign the task to a stage or create eligibility, capability debt, a blocked state, or an unlock.

- <useful but non-blocking task (`catalog-slug`), with any condition in this sentence> Recommended stage: E0.
```

Capability references belong inline in the `Required` or shared `Optional Work` task that uses them. For example:

```markdown
- Claim the relevant official profile (`official-profiles`).
- Use the Shorts lane only when the approved experiment selects it (`shorts-lane`).
```

They are references to the catalog, not a second stage capability card or a requirement to map the whole catalog into the roadmap. When a capability is conditional, put its fit, eligibility, or approval condition in that same task sentence. A conditional reference does not create an extra trigger or gate. Shared optional work cannot bypass required production, safety, rights, or owner-approval boundaries. Capability references are not automatic obligations unless they are explicitly listed under `Required`.

Each shared task may have at most one exact suffix in the form `Recommended stage: E0.`. The stage must exist in that roadmap, but the hint is only a best-fit recommendation: the task may be used at another stage when its conditions fit. A task without the suffix remains valid for backward compatibility. Consumers may strip the suffix from displayed task prose while retaining it as advisory metadata; they must not interpret a recommendation as a gate, debt, blocked state, or unlock.

For backward compatibility, validators may still accept the older stage-level `Capabilities:` and `Conditional capability:` declaration lines and per-stage `Optional:` blocks when reading an existing blueprint. New stage-plan blueprints should use one shared optional pool and task-inline capability references so the roadmap has one task path and no duplicate capability catalog. Unassigned catalog slugs remain source references for later private-plan decisions.

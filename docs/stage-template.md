# Stage-plan template

This reusable template defines the public shape of a staged experiment or other staged business plan. Stage families use `E` for Experiment, `R` for Revenue, `P` for Profit, and `S` for Self-running when a reviewed blueprint chooses to publish them. It is guidance for future blueprints of any type; adopting it never migrates an existing blueprint or private plan automatically.

## Stage meaning

A stage is the combination of bounded work and its expected result. A stage is not complete until both conditions hold:

Required work and the stage's own exit trigger are both mandatory.

1. every `Required` item is complete; and
2. the stage's own `Exit trigger` is met with the declared evidence.

The trigger belongs to the stage that it proves. Do not put the next stage's threshold in the current stage, and do not use a stage's `Entry` line as a disguised next-stage trigger.

## Required and optional work

Every stage has a `Required:` block and an `Optional:` block. Required work is compulsory. Optional work is useful guidance, but its absence never blocks stage completion. When no generic optional guidance is useful, write:

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

Optional:
- <useful but non-blocking work>

Exit trigger: <this stage's own observable result>
Window: <measurement window>
Evidence: <aggregate or otherwise permitted evidence source>
Review: Every 30 days from stage entry or last review
If not met: <diagnosis, adjustment, or escalation guidance; no automatic kill implied>
```

Capability references belong inline in the `Required` or `Optional` task that uses them. For example:

```markdown
- Claim the relevant official profile (`official-profiles`).
- Use the Shorts lane only when the approved experiment selects it (`shorts-lane`).
```

They are references to the catalog, not a second stage capability card or a requirement to map the whole catalog into the roadmap. When a capability is conditional, put its fit, eligibility, or approval condition in that same task sentence. A conditional reference does not create an extra trigger or gate. Capability references are not automatic obligations unless they are explicitly listed under `Required`.

For backward compatibility, validators may still accept the older `Capabilities:` and `Conditional capability:` declaration lines when reading an existing blueprint. New stage-plan blueprints should use task-inline references so the roadmap has one task path and no duplicate capability catalog. Unassigned catalog slugs remain source references for later private-plan decisions.

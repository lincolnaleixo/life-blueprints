---
type: youtube
version: 7.2
updated: 2026-09-05
status: first-pass
plan_grammar: phases
experiment_ladder: level-trigger
experiment_plan_grammar: levels
level_contract: stage-plan
graduation_gate: revenue
---

# YouTube Channel

> **How to build a YouTube channel across long-form and Shorts lanes.** A channel may be faceless or on-camera. Long-form combines evergreen content with an owned product funnel. Shorts uses high-cadence, hook-and-payoff content for reach, then adds sponsors, products, or a funnel when the niche supports one. This is the **reusable methodology for any operator building this business type**; a specific bet adds its own niche, persona, voice, offer, and format mix. Validate and approve the niche, audience, and proposal before E0; the Stage Roadmap does not revalidate an approved idea. The operating gates draw on YouTube policy and creator post-mortems; treat single-creator claims as heuristics until independently verified.

## Planning Contract

- This blueprint opts into the `level_contract: stage-plan` experiment contract. The public roadmap is the ordered `E0`–`E5` Stage Roadmap; it is not a second level ladder or a date-based launch plan.
- A stage is one bounded unit of work plus its expected result. The stage is complete only when its required work is complete **and** its own exit trigger is met. A later stage never borrows an earlier stage's trigger.
- Idea validation, niche and audience selection, channel proposal, and fit approval happen before `E0`. The Stage Roadmap does not ask the operator to revalidate an already approved idea.
- `E0`–`E5` use total valid public channel views from a date-bounded YouTube Analytics aggregate in a trailing 30-day window. The exact trigger is written on the stage whose result it proves.
- The shared `## Optional Work` pool is available whenever a task fits the approved channel and private plan. Its tasks never replace stage Required work, the stage's own trigger, or approval boundaries. An exception requires owner approval and a record in the private plan; the public blueprint does not invent an exception for a specific operator.
- When required work and the stage's own result pass early, close the stage without waiting for the next 30-day review clock; the clock governs review, not completion.
- The review clock is every 30 days from stage entry or the last review. It is separate from the trailing measurement window. A review can record falling evidence, but there is no automatic regression or automatic pause; retain completed work when graduation happens.
- The maturity phases below are generic capability indexing for a later Revenue-or-higher unit. They are not an alternative experiment roadmap, and no catalog phase number maps to an E-stage.
- A YouTube unit plans by **phase** because a channel advances through meaningful state changes. A phase takes as long as its state change needs and is never attached to a date, month, or estimated duration.
- Keep exactly one incomplete phase marked Current and order later phases by priority. Every phase declares its purpose, focus, and `Done when` condition. Each phase holds at most five top-level projects; nested execution tasks are uncapped.
- These caps are generic defaults. A unit may override them in its manifest with a recorded reason. Use the capability catalog as reference; do not mirror it into a unit plan or treat project completion as permanent capability evidence.

## Stage Policy

The reusable policy for this and future stage-plan blueprints is defined in [`docs/stage-template.md`](../docs/stage-template.md). In brief: a stage combines work with an expected result; required work and the stage's own trigger are both mandatory; optional work is never a block; exceptions are owner-approved and recorded; reviews use the 30-day stage-entry/last-review clock independently of the trailing evidence window; falling evidence does not automatically regress or pause a stage; and completed work is retained after graduation.

## Stage Roadmap

Each stage below is a private-plan reference. The entry condition points to the prior result; the exit trigger belongs to the stage itself. The operator adapts the required work to the approved channel, may draw from the shared Optional Work pool when appropriate, and keeps unassigned catalog capabilities as future undecided options.

### E0 — Prepare the channel and first representative video

Objective: Prepare a measurable, owned, rights-safe channel and publish the first representative video with a semi-manual workflow.

Entry: Idea validation, niche and audience selection, channel proposal, and fit approval are complete before E0; do not revalidate the approved idea in E0.

Required:
- Set up channel measurement, ownership, channel health checks, and rights checks.
- Produce and publish one representative video semi-manually with AI assistance under the owner or a designated responsible approver's editorial and safety approval.
- Start reusable automation code that can reduce repeated production work; do not claim full automation at E0.

Exit trigger: >=10 valid public channel views
Window: Trailing 30 days
Evidence: YouTube Analytics aggregate channel views for the trailing 30 days, with source health retained separately.
Review: Every 30 days from stage entry or last review
If not met: Diagnose the blocker and simplify production; do not auto-kill the experiment.

### E1 — Produce the second video and extend the workflow

Objective: Produce a second representative video and prepare the reusable code to automate as much of the workflow as practical.

Entry: E0 required work is complete and E0's own >=10 valid public channel views trigger is met.

Required:
- Produce and publish the second video semi-manually with AI assistance and explicit editorial, safety, and rights approval.
- Extend the reusable automation code to automate as much of the repeatable workflow as practical; semi-manual operation remains allowed.

Exit trigger: >=100 valid public channel views
Window: Trailing 30 days
Evidence: YouTube Analytics aggregate channel views for the trailing 30 days, with source health retained separately.
Review: Every 30 days from stage entry or last review
If not met: Review the stage bottleneck and adjust one focus; do not auto-kill the experiment.

### E2 — Run one supervised video per day

Objective: Move to one correctly produced and published video per day with supervision while the workflow proves repeatability.

Entry: E1 required work is complete and E1's own >=100 valid public channel views trigger is met.

Required:
- Automate one video per day with supervision for the initial videos; keep editorial, safety, and rights approval boundaries explicit.
- Before E2 can exit, THREE consecutive correctly produced and published videos must be approved by the owner or designated responsible approver.

Exit trigger: >=200 valid public channel views
Window: Trailing 30 days
Evidence: YouTube Analytics aggregate channel views for the trailing 30 days, with production/publication records and owner or responsible-approver approvals for the three consecutive videos retained alongside source health.
Review: Every 30 days from stage entry or last review
If not met: Review the stage bottleneck and adjust one focus; do not auto-kill the experiment.

### E3 — Maintain daily publishing without routine supervision

Objective: Keep a one-video-per-day production and publication cadence without routine supervision while retaining safe exception handling.

Entry: E2 required work is complete and E2's own >=200 valid public channel views trigger is met.

Required:
- Maintain one video per day without routine supervision.
- Retain explicit exception-handling and safety-approval boundaries; routine autonomy does not remove those boundaries.

Exit trigger: >=500 valid public channel views
Window: Trailing 30 days
Evidence: YouTube Analytics aggregate channel views for the trailing 30 days, with source health retained separately.
Review: Every 30 days from stage entry or last review
If not met: Review the stage bottleneck and adjust one focus; do not auto-kill the experiment.

### E4 — Improve the daily publishing engine

Objective: Maintain daily publishing while improving the automation, video, thumbnail, title, and description quality.

Entry: E3 required work is complete and E3's own >=500 valid public channel views trigger is met.

Required:
- Maintain the daily video cadence.
- Improve one of the automation, video, thumbnail, title, or description quality dimensions at a time and observe the aggregate result.

Exit trigger: >=5000 valid public channel views
Window: Trailing 30 days
Evidence: YouTube Analytics aggregate channel views for the trailing 30 days, with source health retained separately.
Review: Every 30 days from stage entry or last review
If not met: Review the stage bottleneck and adjust one focus; do not auto-kill the experiment.

### E5 — Measure one small commercial fit test

Objective: Maintain the daily engine and run one small, audience-fit commercial test; the specific offer remains private to the experiment and no store, product, or sponsor is presumed.

Entry: E4 required work is complete and E4's own >=5000 valid public channel views trigger is met.

Required:
- Maintain the daily video cadence and safe exception boundaries.
- Choose exactly one small niche- or audience-fit commercial test and measure interest and revenue.

Exit trigger: >=10000 valid public channel views
Window: Trailing 30 days
Evidence: YouTube Analytics aggregate channel views for the trailing 30 days, with source health retained separately; retain aggregate commercial-test interest and revenue evidence separately.
Review: Every 30 days from stage entry or last review
If not met: Review the stage bottleneck and adjust one focus; do not auto-kill the experiment.

## Optional Work

These tasks are available at any stage whenever appropriate for the approved channel and private plan. Shared optional work never replaces required work, the stage's own exit trigger, or approval boundaries; it does not bypass mandatory production, safety, or rights checks. Each recommendation below is advisory only: the task may be used at another stage when its conditions fit, and the hint creates no eligibility, capability debt, blocked state, or unlock.

- Claim relevant official profiles (`official-profiles`) and route the video to an eligible next video or destination (`end-screen-routing`). Recommended stage: E0.
- When the approved experiment selects a Shorts lane, make its transformation boundary explicit (`shorts-lane`); otherwise this optional task is not required. Recommended stage: E0.
- Improve one packaging or viewer-routing detail when aggregate evidence identifies a concrete gap, and collect topic requests where useful (`feedback-intake`). Recommended stage: E1.
- Add one low-risk quality or routing improvement that does not weaken the approval boundary. Recommended stage: E2.
- Improve the owned viewer route only when audience fit and accountable reply ownership are clear, using an owned site (`owned-site`), email list (`email-list`), or direct channel (`direct-channel`) only when selected by the private plan. Recommended stage: E3.
- Use a fit-based feedback or owned-audience surface when it supports the selected quality focus. Recommended stage: E4.
- Use one fit-appropriate owned or partner surface only when its audience fit, disclosure, and approval conditions are clear; if the selected test needs an owned digital product, build the smallest offer needed to test it (`backend-product`) with those fit, disclosure, and approval conditions, otherwise skip this optional task. Recommended stage: E5.

## Graduation

Graduation is independent of the E0–E5 views sequence and may be decided at any stage. It requires settled channel-attributable external revenue and explicit owner approval; estimated revenue is not proof. Graduation is never automatic, and views alone do not graduate an experiment. Revenue can satisfy graduation earlier than E5; it does not replace the E5 stage trigger when the experiment continues the views sequence. E5 can close as soon as its required work and >=10000 result pass; the review clock does not delay completion, and no E6 work is invented.

## Future Stages

E6 is undefined until a deliberate public blueprint change defines it. Revenue stages `R0`, `R1`, and later, Profit stages `P0`, `P1`, and later, and Self-running stages `S0`, `S1`, and later are names reserved for future reviewed work only. No threshold or decision ladder for Profit or Self-running is defined. This section provides no thresholds, plans, or gates.

The remaining sections are optional reference prose for operators adapting a private plan. They do not add required work, stage triggers, maturity gates, or automatic monetization obligations to E0–E5.

## 1. The model in one screen

This has two distinct operating models. Do not manage Shorts like small long-form videos.

**Long-form documentary lane (optional reference pattern):** direct-response info-product publishing wearing a YouTube costume. Don't be fooled by view counts, **AdSense is the small money.** This is one genre-specific model, not a Stage Roadmap requirement:

1. **Persona + curiosity-gap content** → cheap, evergreen organic views from an older, high-trust audience (50+ skews high CPM *and* high buy-rate).
2. **Owned asset from day 1 (optional model recommendation)** → matching `.com` domain + clean static site + email capture + checkout + legal pages. YouTube is rented distribution; the domain/email list is the asset.
3. **Funnel when a real destination exists (optional)** → banner QR + pinned comment + description link → the channel site. Use only when the private plan has a fit-appropriate destination.
4. **The product (optional)** → a 3-volume "vault / field edition" ebook bundle ~$27–$37, pure digital (~100% margin), with an order-bump + upsell stacking AOV.
5. **Eligible earning surfaces (optional)** → ads, YouTube Premium, Supers, memberships, Shopping, Hype, product drops, promos, and sponsor/partner inventory may fit later; no stage requires turning on every surface.

The acquisition channel is **free organic YouTube reach — that *is* the model and the moat.** Unit economics: ad RPM (~$4–20 «verify») **+** a ~$30 product at ~2–5% click→buy. A 200k-view video can move more in ebook sales than in ad revenue.

**Shorts automation lane:** algorithmic short-form reach wearing a YouTube costume. The engine is a repeatable 15-60s vertical loop: find proven demand in the Shorts feed, write a tight hook/payoff script, edit dynamically, post at high cadence, read viewed-vs-swiped-away and retention, then repeat. The money can be YPP Shorts revenue, sponsors, affiliate/product links, or a backend funnel, but the funnel is weaker unless the niche has a natural product. Shorts are a reach machine first, not automatically an info-product business.

**The honest shape:** it is **not** low-touch until systematized. A manual-tool workflow runs ~16–24 hrs/week per channel; an automated in-house pipeline collapses that to mostly supervision. Months 1–3 ≈ $0; $5k+ needs a viral catalog or a publishing machine «verify». It only fits a high-leverage portfolio if production is automated/outsourced with the operator on **hooks + economics only**.

## 2. Economics

- **Ad revenue (AdSense):** the secondary line. RPM ~$4–20 depending on niche «verify». Treat as a bonus, not the thesis.
- **Shorts ad revenue:** lower and more volatile than watch-page ads. A Shorts channel can reach full YPP through 1,000 subscribers plus 10M valid Shorts views in 90 days, but the business still needs a monetization path beyond views unless the channel can reliably produce massive volume.
- **The real revenue:** backend product. ~$30 bundle × ~2–5% of warm viewers who click→buy «verify». To close ~$9k/mo from ebooks needs ~270–300 sales/mo ≈ **0.9–2.7M views/month** — a real media operation, not a side hobby.
- **Channel as a sellable asset:** TODO (Blueprints review) — research the multiple a faceless channel + funnel sells for (the newsletter blueprint anchors 24–48× monthly revenue; no YouTube comp is in the vault notes).
- **Refunds/chargebacks** dent the "100% margin" — the council flagged 10–20% «verify»; build a product with real value to keep it low.

## 3. Niche & channel selection

The long-form seed genre is the **"ancestral forbidden-knowledge"** lane: an authority-elder persona dropping "banned / buried / they-hid-this" evergreen secrets. Score niches on **Demand · Low competition · Money (CPM + backend-product fit) · Risk-safe (policy/reputational) · Persona strength** (1–5 each, summed). An illustrative scoring of candidate niches in this lane:

| Niche | Why it scores where it does |
|---|---|
| Depression-Era Frugality | broad audience, finance-adjacent CPM, clean policy, proven backend (pantry/canning) — but a frugal audience's *willingness-to-pay* is the open risk; narrow the offer to a concrete toolkit |
| **Appalachian Folk Wisdom** | closest aesthetic clone of the genre's winners, strong persona, earlier on the saturation curve — **a strong pick** |
| Old-Money Wealth Code | highest money ceiling (finance CPM + high-ticket ebooks); docked for crowded finance |
| Lost Domestic Arts | sleeper — lowest competition of the safe lot, lower demand ceiling |
| Lost Herbal Remedies | *the* money niche on paper, but the most dangerous — YouTube's 2026 health-misinfo crackdown can ban it overnight |

**Two hard 2026 constraints (kill-risks):**
- **Inauthentic / mass-produced content policy** — pure AI slop with no editorial value gets demonetized. Winners add a consistent persona, real research, a POV. Never fully automate the editorial layer.
- **Health/medical misinformation policy** — the "doctors won't tell you / cure" angle is the highest-money *and* highest-ban-risk lane. Frame everything as **traditional skill & folk practice, never medical claims.**
- **AI disclosure / trust policy** — using AI is allowed; hiding realistic or meaningfully altered AI is the risk. Set the upload disclosure when the video contains realistic synthetic people, places, voices, or events. Do not conflate this with "inauthentic content": disclosure is transparency; inauthentic content is mass-production / repetition / no human fingerprint.

**Avoid outright:** Native/Indigenous "secrets" (reputational landmine) and the "doctors won't tell you" senior-health lane (saturated + ban radar).

**Channel identity (lock once):** name pattern `[Persona First] [Surname] [Secrets/Files/Vault]` · a single consistent AI portrait of the elder (locked seed/reference image) · a dark vintage book-stack banner with the **offer + QR code** baked in · grab the `@handle` + matching `.com` + the Cloudflare Pages subdomain in one sitting. Then configure the full channel shell — see the **channel-setup checklist (§8)**.

**Shorts niche selection:** start from proven Shorts-feed demand, not from long-form keyword logic. Use a clean or incognito feed, set region to the target market, collect channels repeatedly earning views, and classify the pattern. Strong beginner lanes are commentary, reaction-with-context, ranking, gaming stories, wholesome/odd clips, and fictional AI scenes. A niche is acceptable only if the format can be clearly transformative, has repeated demand across multiple channels, and has either a YPP-scale path or a product/sponsor/affiliate path. Subniche down when the broad lane is crowded, for example "bike moments" instead of generic commentary, or "Roblox space rants" instead of generic Roblox stories.

## 4. The production engine

Use a sequential, resumable production pipeline. Each stage should write a durable artifact into one working directory and skip completed outputs, so a failed run resumes safely. Inputs are a canonical script, a beat-sheet brief, and a per-channel configuration covering persona, voice, visual grammar, and the quality rubric.

```
script.md ─▶ tts ──▶ stills ──▶ heroes ──▶ captions ──▶ assemble ──▶ thumbnail ──▶ review ──▶ upload
```

| Stage | Does | Engine |
|---|---|---|
| **tts** | script → `voiceover.wav` | Chatterbox CPU, cloned channel voice (refWav + fixed seed), per-paragraph (worker-only) |
| **stills** | beat sheet → `stills/NN.png` | gpt-image-2 via Codex CLI (plan-billed ~$0) or fal Z-Image Turbo (~$0.005/img) |
| **heroes** | `[HERO]` beats → 6–8s clips | fal LTX-2 image-to-video (~$0.30/clip) |
| **captions** | wav → karaoke `captions.ass` | faster-whisper word timestamps → per-word fill (worker-only) |
| **assemble** | all → `final.mp4` | raw ffmpeg: Ken Burns zoompan, hero inserts, xfade, burned captions, mood-matched music bed ducked under narration, two-pass loudnorm → −14 LUFS |
| **thumbnail** | brief → `thumbs/NN.jpg` | gpt-image-2 composition (no model text) + ffmpeg block-caps overlay |
| **review** | → `review-packet.md` | the per-video **human gate** — worked before any upload |
| **upload** | → YouTube | Data API, **explicit-only**, default private, AI-disclosure flag set |

**Cost: ~$2–3/video** (vs ~$23–33 on the manual SaaS tools this replaces). That low marginal cost is what makes a catalog — and the whole thesis — affordable to test.

> **Hard rule (policy):** two channels sharing implementations are one channel to YouTube — keep channels in **different aesthetic families**. Every video needs original researched narration + a real human editorial pass; never ship raw generations. (A manual SaaS tool can stand in before the in-house pipeline is wired, but it costs ~10× per video; the automated pipeline supersedes it.)

**Shorts production loop:** this is a separate SOP from the long-form pipeline.

1. Find a proven premise, clip type, or payoff pattern from the Shorts feed. Copy the pattern, not the video.
2. Write a compact script manually unless the niche is explicitly fictional. Generic AI scripts usually leak retention.
3. Structure every Short around **hook -> explain payoff -> foreshadow payoff -> reveal payoff**.
4. Edit vertical 9:16 with dynamic movement: cuts, zooms, crops, masks, captions, sound effects, music tension, and a clear visual payoff. Static is the enemy.
5. Upload, read the first meaningful sample, then diagnose: low viewed-vs-swiped-away = hook problem; low retention or sharp cliff = script, pacing, or payoff problem.
6. Delegate only after proof. Once a channel has repeatable winners, create an SOP with examples, editing rules, caption style, sound cues, hook rules, and payoff rules, then train editors or an agency.

**Channel authenticity gates (run before the first upload and every 5-video audit):**

1. **Swap test:** put the last five thumbnails beside five niche competitors, hide names/avatars, and ask whether a stranger can identify ours. If not, the channel lacks an identity layer.
2. **Voice fingerprint:** avoid default/common AI voices as the standing voice. Prefer a cloned owned voice, a less-common expressive model voice, or a human voice actor. The point is not "AI voice = bad"; it is "same voice + same template + same visuals = mass-produced."
3. **Thumbnail variety:** keep a cohesive visual language, but rotate composition, character placement, text placement, hero object, and palette. A fixed template across the catalog becomes a mass-production signal.
4. **Video visual variety:** never ship 10 minutes of slow pan/zoom over static images. Mix stills, motion, hero clips, diagrams/maps, archival-style inserts, real/public-domain footage where rights-safe, and on-screen artifacts.
5. **Format rotation:** define 4-5 recurring formats, then rotate them so no two consecutive uploads share the same title formula, hook structure, script skeleton, or thumbnail layout.
6. **Originality delta:** before scripting, inspect the top five YouTube results for the topic and write one sentence answering: "What does this video add that none of them add?" No delta = change angle or skip.
7. **Evidence trail:** keep script drafts, research notes, prompt logs, edit timeline, asset list, voice settings, and thumbnail variants in the workdir. If YPP flags the channel, the appeal needs proof of human creative input, not just a claim.

## 5. Packaging (title / thumbnail / hook)

**Long-form packaging:**

- **Title formula:** `[shock claim/number] + [forbidden frame] + [authority/era]` — e.g. *"This $3 Trick Kept Appalachian Cabins Warm All Winter — The Power Company Hoped You'd Forget."* Front-load the number + curiosity in the first ~60 chars (YouTube truncates). Patterns that print: *"BANNED in [year]," "Why [Big Authority] Hid This," "[N] [Forbidden] Hacks from the [decade]."*
- **Thumbnail:** big yellow/white block caps top + bottom · the persona's face · one glowing hero object · a red ✗ or arrow · a price tag · the "they're trying to take this" motif. Run 5–10 variants, pick by CTR.
- **Hook:** lands in the first ~5 seconds; the thumbnail + title must match the actual video (no bait-and-switch — it tanks retention and trust).
- **Structure:** 30–60s hook → "they don't want you to know" stakes → numbered secrets (retention via open loops) → soft CTA to the vault.
- **Length:** an optional reference test is **10–12 min** (retention-first for a young channel). Adjust length only when private evidence supports it; no AVD threshold is a public stage gate.

**Shorts packaging:**

- **First frame:** must create visual curiosity while muted. The viewer should understand there is tension before the voiceover has time to work.
- **Hook:** one short line that drops the viewer into the middle of a situation or makes a bold claim. Avoid explaining the whole payoff too early.
- **Script:** hook -> explain payoff -> foreshadow payoff -> reveal payoff. Every sentence should move the viewer closer to the payoff.
- **Edit:** dynamic motion, captions, cuts, zooms, crops, SFX, and music build. Spend disproportionate time on the first 1-2 seconds.
- **Length:** YouTube can classify vertical or square videos up to 3 minutes as Shorts, but this automation play defaults to **15-35 seconds**. Use 60s+ only when the payoff needs it and retention still holds.

## 6. Publishing cadence & growth playbook

- **Cadence:** ~2 videos/week minimum. Winners scale by **system reliability**, not per-video polish.
- **Shorts cadence:** daily or near-daily reps during testing. Shorts rewards fast learning loops; a small sample of polished uploads is weaker than a disciplined batch of format tests.
- **Distribution (optional):** when a fit-appropriate destination exists, use the funnel link in the banner QR, pinned comment, and description.
- **Hype (small-channel discovery):** for up-and-coming channels (~500–500,000 subs «verify», eligible countries), ask viewers in the first **7 days** after publish to **Hype** the video (the button beside Like). Free + paid (Jewels) hypes push top videos onto a **weekly leaderboard** YouTube can surface more widely — a free-reach lever that fits the moat, not a money line. It's on by default when eligible; keep **Let viewers hype** toggled on (Earn → Hype / Advanced).
- **Off-platform entity batch:** same-name IG/FB/X/Pinterest, channel links, `sameAs` on the funnel domain (an entity signal).
- **Launch sequence:** 1 pillar video (the broad "full map" of the niche), then 2-3 anchor videos on the most searched subtopics, then regular cluster videos with occasional broad "collision" or adjacent-audience "bridge" videos. This builds topical identity before chasing spikes.
- **Growth QA checks (optional):** a script brief can include originality delta, entity coverage, satisfaction payoff, and an anti-generic pass. Do not adopt an unverified mechanism as fact merely because one creator described it.
- **Read loop (optional diagnostic):** a CTR/AVD one-variable test per video can diagnose packaging, hook, pacing, audio, or visual issues. These signals are not public stage triggers.
- **Shorts read loop:** use Studio for video diagnosis, not emotional real-time refreshing. Viewed-vs-swiped-away diagnoses the hook; retention curve diagnoses script, pacing, and payoff; sample size matters. A great metric at 200 views is not proof.
- **Catalog audit:** every five uploads, run the authenticity gates above and private/rework the most repetitive pieces before applying for YPP or after any inauthentic-content warning. Prefer private/rework over deletion unless a policy violation demands removal, because deletion destroys evidence.

## 7. Funnel, domain & site

The channel's recommended operating model has a real owned destination before the first public push. This is a model recommendation, not an experiment admission requirement; do not block the representative video on a checkout or funnel. **Buy the matching `.com` during identity lock** (channel name, persona name, or product/brand name; ideally one primary domain plus defensive redirects if cheap). Park it on Cloudflare with:

- **Static site:** one fast landing page with the channel identity, embedded trailer or best video, product/lead magnet block, email capture, and a "watch on YouTube" link. Use Cloudflare Pages or equivalent static hosting; no backend unless checkout requires it.
- **Commerce:** Stripe, Gumroad, Lemon Squeezy, Shopify, or FourthWall/Spring/Spreadshop depending on whether the first product is digital-only or merch/POD. The channel site links to the official store; YouTube Shopping can surface eligible connected-store products once available.
- **Legal/trust (when a destination or commercial surface exists):** footer links for contact, privacy policy, terms, refunds, affiliate/sponsor disclosure, and any topic-specific disclaimer support trust and policy review.
- **Entity layer:** same name/avatar across YouTube, site, IG/FB/X/Pinterest, and any store profile; add `sameAs` schema on the site; cross-link the channel and site.
- **Tracking (optional):** when a destination exists, use a unique UTM link (`utm_source=youtube&utm_medium=description|pinned&utm_campaign=<video_slug>`) for selected descriptions or pinned comments.

**Default CTA stack per upload:**

1. First description link: free sample or core digital product.
2. First pinned comment: same link, written as a viewer benefit, not a generic "check it out."
3. Spoken soft CTA after the main payoff, not before.
4. End-screen/card to the next video or playlist; the site CTA stays in text/link surfaces.

YouTube's external-link policy is simple operationally: do not link to anything that would violate Community Guidelines, malware/phishing, regulated-goods, hate/harassment, violent-extremism, or deceptive-content rules. Affiliate links are allowed, but a channel that exists only to spam affiliate links can trigger spam-policy issues. Keep the site clean, useful, and aligned with the video promise.

## 8. Channel setup checklist (YouTube Studio)

The one-time **channel shell** — configure it all at identity-lock (Week 2), before the first public upload. This is generic config; the persona's actual name/art/links are the bet's specifics. Work top to bottom in **Studio → Settings** + **Customization**.

**Identity & profile** (Settings → Channel → Profile · Customization → Basic info)
- **Name + @handle:** the locked persona name + matching handle (grab both with the `.com`).
- **Profile** (the cross-Google card — name · biography · photo, surfaced to help promote the channel across YouTube + Google products): write a tight persona bio; use the locked high-res AI portrait as the photo.
- **Channel description:** keyword-rich — who/what, the recurring formats, upload cadence, and the funnel link. Front-load the niche keywords.
- **Country + channel keywords**, and the **business/contact email** (inquiries + Partnerships).

**Branding** (Customization → Branding)
- **Avatar:** the single locked persona portrait (≥800×800, square).
- **Banner:** dark vintage book-stack with the **offer + QR baked in** (2048×1152; keep critical art in the 1235×338 safe area).
- **Video watermark:** a **150×150** PNG (≤1MB) branding/subscribe mark shown in the player's lower-right corner; set its display time to **entire video** for steady subscribe lift.

**Layout** (Customization → Layout)
- **Channel trailer** for non-subscribers + a **featured video** for returning subscribers (both steer to the offer).
- **Featured sections:** topic-cluster playlists + a products/shop shelf so the channel page itself sells.

**Basic info & links** (Customization → Basic info)
- **Links:** the funnel `.com` first, then the same-name socials; mirror the link shown on the banner.

**Upload defaults** (Settings → Upload defaults)
- Default visibility **private**; a standing **title/description template** carrying the funnel link + UTM + the pinned-comment text; default category, language, license, and comment policy. Guarantees the funnel link ships on every upload without redoing it each time.

**Comments & community** (Settings → Community)
- Keep comments **ON** (engagement + the pinned-comment funnel) but **moderated:** hold potentially-inappropriate comments + comments with links for review (or **hold all** at seed scale); set **blocked words/links**; pin a benefit-framed CTA comment on every upload and reply early to seed engagement.

**Languages, captions & localization** (Settings → Channel · per video)
- Set the primary language; ship accurate **captions/subtitles** every upload (the pipeline already has word timestamps — export an `.srt`). Localize title/description for top markets only **after** English proof; never auto-dub without a policy-safe check.

**Copyright & content detection** (Content detection / Copyright)
- Use only rights-safe assets (own generations · licensed music · public-domain footage); avoid third-party clips that draw Content ID claims; keep the license/asset evidence trail (it doubles as YPP-appeal proof — §4).

**Account & advanced** (Settings → Channel → Feature eligibility)
- Verify phone → enable **advanced features** (external links · custom thumbnails · longer uploads); turn on **2-Step Verification**; set **"made for kids" = No** (channel + per video); link **one** AdSense account; know the **AI-disclosure** flag (set it when a video has realistic synthetic people/voice/events — §3).

## 9. Optional earn-surface reference

Treat YouTube Studio's **Earn** tab as optional reference, not as a stage checklist or the business model. Select only fit-appropriate surfaces in the private plan; the sequence below does not add E-stage obligations:

| Stage | Threshold / trigger | Turn on |
|---|---|---|
| **Before YPP** | model recommendation; not an experiment admission gate | When relevant and available, use a domain/site, email capture, lead magnet, digital product, affiliate disclosures, channel links, banner QR, and pinned-comment template. |
| **Expanded YPP / fan funding** | eligible countries: 500 subscribers + 3 public uploads in 90 days + either 3,000 valid public watch hours in 12 months or 3M valid Shorts views in 90 days | Apply from Earn; accept Base terms, AdSense setup, and Commerce Product Module; enable Super Thanks, Super Chat/Stickers + live-stream Gifts (Jewels) if premieres/lives are used, memberships, and own-product Shopping if eligible. |
| **Hype (discovery, not real money)** | YPP + ~500–500,000 subscribers «verify», eligible country | Toggle **Let viewers hype** on (Earn → Hype / Advanced; on by default when eligible). Viewers Hype within ~7 days of publish (free + paid Jewels); top videos rise on a **weekly leaderboard** YouTube can surface more widely. A small-channel **reach** lever — you age out near the top of the sub range. |
| **Full ad revenue** | 1,000 subscribers + either 4,000 valid public watch hours in 12 months or 10M Shorts views in 90 days | Accept Watch Page Monetization and Shorts Feed modules; turn on watch-page ads, Shorts revenue share, YouTube Premium revenue, ad preferences, mid-rolls where content length supports them. |
| **Affiliate Shopping / brand products** | once eligible for the affiliate program; current public guidance lists a higher bar for products from other brands, commonly 10,000 subscribers plus YPP/watch thresholds and market eligibility | Tag genuinely featured/relevant third-party products; use YouTube Analytics and commission reporting; opt into affiliate partnership/boost features only when the channel's content and rights are clean. |
| **Partnerships** | once views are repeatable and audience fit is clear | Build a sponsor one-sheet, rate card, product-tagging rules, disclosure template, and "no" list. Only accept partners that fit the channel promise and policy risk profile. |

**Every channel monetization setup should explicitly confirm:**

- 2-Step Verification on the Google account; advanced features enabled; no active Community Guidelines strikes.
- Only one active AdSense for YouTube account linked through Studio.
- Channel is not "made for kids"; avoid music claims and ineligible videos where memberships/Shopping matter.
- Commerce Product Module accepted before fan funding; individual features turned on one by one.
- Upload or post at least once every 6 months; YouTube may disable monetization on inactive channels.
- Paid product placement/sponsorship disclosure enabled when required.
- Hype toggled on while eligible (up-and-coming tier); live-stream Gifts (Jewels) enabled only if the channel actually runs lives.

**Memberships, kept low-labor:** use perks that scale without custom fulfillment. Good levels: basic supporter badges/emojis + members-only posts; monthly printable field card or behind-the-scenes research note; members-first videos; members-only Q&A posts or quarterly livestream. Avoid one-on-one advice, custom research, physical fulfillment, or anything that creates operator dependency.

## 10. Product ladder

| Tier | When | What |
|---|---|---|
| **Lead magnet** | from video #1 | Free sample PDF, checklist, or "starter field card" that captures email and proves the landing page works. |
| **Core digital product** | from video #1 | The 3-vol ebook bundle ~$27–$37 + order-bump + one upsell. **This is the engine.** Each video's topic seeds a chapter, so content + product compound. |
| **YouTube fan funding** | Expanded YPP | Super Thanks, memberships, Super Chat/Stickers on premieres/lives. Useful, but do not design the channel around lives unless the niche demands it. |
| **AdSense / YouTube Premium** | full YPP | Auto ad revenue — the *small* money. A bonus, not the plan. |
| **Own shop / merch / POD** | once identity has pull | 20+ simple SKUs on a connected store; YouTube Shopping surfaces eligible products, while the store handles fulfillment, shipping, support, returns, and taxes. |
| **Print + audio editions** | once the ebook sells | The vault bundle → a **KDP paperback** + an **ACX/Audible audiobook** (the audio edition already exists from the pipeline). New SKUs that tap Amazon/Audible's own buyer traffic and add authority; near-zero marginal cost. |
| **Personalized print products** | once the product promise is clear | Niche-specific daily-message books, devotionals, journals, workbooks, recipe/process books, or field guides. Draft digitally first, sell as print-on-demand or through a fulfillment partner only after demand is proven. |
| **Course / community** | once demand is proven | A higher-ticket **mini-course, cohort, or paid community** above the bundle — higher AOV, but it adds support labor, so gate it behind proven repeat demand. |
| **Affiliate Shopping** | once eligible | Tag relevant third-party products only when they are featured or meaningfully related. Use for tools/books/supplies the content naturally mentions. |
| **Sponsors / partnerships** | after repeatable views | Direct sponsor slots, product integrations, affiliate campaigns, product drops, and brand-boost opportunities. Must use disclosure and keep sponsor fit tight. |
| **Own products / scale** | as the catalog proves | Capture email at checkout → simple sequence → repeat buyers; expand into printables, audio, courses, bundles, merch drops, and seasonal kits. |

**Funnel mechanics (optional reference):** a static landing page on a suitable host, single buy button, payments via an appropriate provider, and a **free sample PDF as a lead magnet** can fit a private plan. Do not gate a stage on checkout or force an offer; when an approved offer or lead magnet exists, add its relevant link to selected descriptions or pinned comments. The representative video does not wait on checkout.

**Digital product menu:** a faceless documentary channel should default to low-support, downloadable products: ebook bundles, printable checklists, field cards, recipe/process cards, planners, annotated public-domain source packs, audio editions, a KDP print paperback, an Audible/ACX audiobook, mini-courses, a course/cohort or paid community, templates, and "seasonal packs." If the niche touches health, finance, survival, legal, or safety, keep the product educational/documentary and avoid professional-advice claims.

**Product ideation loop:** keep a running product-idea list for the channel, sorted into digital, print/POD, physical merchandise, and high-labor/custom. Start with digital or POD products that reuse the channel's research and voice. Do not launch high-labor or custom products until fulfillment, support load, refunds, and margins are proven on a smaller product.

## 11. Shop, shipping & product catalog

YouTube Shopping is a discovery layer; the connected store is the merchant. The store or retailer owns product data, procurement, fulfillment, shipping, payment, support, returns, refunds, taxes, and final price. That matters operationally: **shipping is configured in the store/merchant platform, then YouTube can display eligible shoppable products**. Do not promise shipping or return terms in videos that the merchant page does not actually support.

**Shipping scope:** do not default to worldwide shipping. Start with the top 1-3 audience countries from YouTube Analytics and the payment/fulfillment platform's real economics. If those inputs are not known yet, default to US-only for physical products, then expand country by country once demand, shipping cost, delivery times, taxes, and support burden are visible. Digital products stay global by default unless compliance or payment coverage blocks a country.

**Default platform choice:**

- **Fastest POD path:** Spring, Spreadshop, FourthWall, TeePublic, or similar supported platforms. Good for testing identity merch without inventory.
- **Most control:** Shopify + Google/YouTube app + POD supplier such as Printful/Printify/Gelato. More setup, but better control over domain, bundles, email, shipping zones, discounts, and upsells.
- **Digital-first path:** Gumroad/Lemon Squeezy/Stripe checkout on the channel site for PDFs/audio/courses; add a supported merch store later for YouTube Shopping. Digital products may be the main money even if they are not surfaced through Shopping the same way physical products are.

**Tagging rule:** tag only products that are featured, verbally/textually mentioned, or meaningfully related to the video's activity. Spam-tagging unrelated products can remove tags or access. For faceless content, build product moments into the script/visuals: show the field guide, mug, map, checklist, tool, or apparel mockup as an on-screen artifact before tagging it.

**Minimum 20-SKU starter catalog** (generic, adapt words/art to the channel's identity):

| # | Product | Notes |
|---:|---|---|
| 1 | Core ebook bundle | 3-volume PDF/EPUB package, the primary offer. |
| 2 | Free sample PDF | Lead magnet; not necessarily sold, but promoted everywhere. |
| 3 | Printable field cards | Laminatable checklist/card pack. |
| 4 | Pocket guide PDF | Lower-priced single-topic tripwire. |
| 5 | Audio field guide | Narrated version for older viewers. |
| 6 | Premium bundle | Ebook + audio + printables + bonus chapter. |
| 7 | Poster / wall chart | Diagram, map, seasonal calendar, or process chart. |
| 8 | Spiral notebook | Branded field notes / research notebook. |
| 9 | Mug | High-margin identity item; phrase from the channel. |
| 10 | Enamel-style camp cup | Niche-specific, good for older/outdoor/home audiences. |
| 11 | Classic T-shirt | One strong phrase, not a logo-only shirt. |
| 12 | Long-sleeve shirt | Seasonal variation. |
| 13 | Hoodie / sweatshirt | Higher AOV; use sparingly in tags. |
| 14 | Cap | Simple mark or persona phrase. |
| 15 | Tote bag | Works for domestic/craft/learning niches. |
| 16 | Sticker pack | Cheap add-on; channel symbols/phrases. |
| 17 | Magnet set | Fridge/workshop reminders; older audience friendly. |
| 18 | Calendar | Seasonal tips, historical dates, or visual artifacts. |
| 19 | Playing/card deck | Trivia, prompts, recipes, steps, or "daily secret" cards. |
| 20 | Gift bundle | Curated product bundle for holidays; use product drops/promos. |

The first catalog should bias toward **digital + POD**: no inventory, no fulfillment drag, no operator dependency. Physical products only graduate beyond POD when demand is proven by click-through and sales.

## 12. Partnerships & extra channel levers

Extra monetization paths that fit the model once the catalog works:

- **Affiliate products:** books, tools, supplies, software, or kits naturally used in the videos. Use YouTube Shopping affiliate when eligible; otherwise use normal affiliate links with clear disclosure.
- **Direct sponsors:** one sponsor slot per video max at seed scale. Prefer contextual integrations over generic mid-roll reads.
- **Product drops:** seasonal or episode-tied launches; set up drops/promos at least a week ahead when using YouTube Shopping live/product-drop features.
- **Premieres and lives:** useful for launches, Q&A, and drops; not required for an evergreen channel. Enable Super Chat/Stickers + **Gifts (Jewels)** (2 Jewels = 1 Ruby = $0.01) only if the format genuinely supports live chat.
- **Community posts:** run polls, tease next topics, promote members-only pieces, and resurface the lead magnet without requiring new videos.
- **Playlists and series:** every broad topic becomes a playlist; every playlist gets its own landing-page section and product angle.
- **Email sequence:** welcome email → best video playlist → product proof/value email → offer → seasonal drop. This compounds independent of YouTube.
- **Standalone newsletter:** graduate the captured list into its own asset — a regular newsletter that carries its **own sponsor slots** and sells the product directly, compounding independent of YouTube. Build it on the [`newsletter`](newsletter.md) blueprint.
- **Audio / podcast repurpose:** re-cut the finished narration as an audio episode → **YouTube Podcasts + Spotify** (video-podcast monetization). A second platform from assets you already produce, near-zero marginal cost; it also feeds the Audible/ACX edition.
- **Translations/dubs:** only after proof in English; clone format into another language with a distinct voice/identity and policy-safe localization.
- **Asset sale:** a channel with revenue, email list, products, and clean rights is more sellable than a view-only channel. Keep rights/evidence clean from day 1.

## 13. Applying the Stage Roadmap

The Stage Roadmap is the one public experiment path. A private plan adapts its required work to the approved channel and records aggregate evidence; the catalog and operating notes below are reference material, not extra stage gates or a second roadmap.

Long-form and Shorts experiments may use different production choices, but both still use the same stage contract and the stage's own trailing-30-day view trigger. Cadence, CTR, retention, packaging, and funnel signals are diagnostics for the private review; they do not create an additional public threshold.

## 14. Benchmarks

- **Leading (per video):** CTR >5% · avg view duration / AVD >40% (operating diagnostic only) · subs/week.
- **Shorts leading:** viewed-vs-swiped-away around 80%+ at meaningful sample «creator heuristic» · retention >100% on compact Shorts where possible · no sharp retention cliff before payoff · repeat Shorts-feed tests across multiple uploads.
- **Money:** landing-page click-rate · click→buy >2% · AOV · RPM.
- **Owned funnel:** description CTR · pinned-comment CTR · email opt-in rate · checkout conversion · refund rate · revenue per 1,000 warm views.
- **Shop:** product impressions · product clicks · product CTR · sales by SKU · shipping/refund issues · tagged-product compliance notices.
- **Shorts YPP gates:** expanded YPP can use 3M Shorts views in 90 days; full ad revenue can use 10M Shorts views in 90 days. Treat these as milestones, not proof that the business works.
- **Reach reality:** a brand-new 0-sub channel may sit at near-zero impressions for the first few videos (a first upload pulling ~single-digit views at day 3 is normal) — judge the *catalog* (3–5 videos) over ~1–2 weeks, not a single upload.
- **Where to read reach:** impressions + CTR live in the **YouTube Reporting API, not Studio** — Studio shows *n/a* for the gate metrics, so a builder checking only Studio thinks they're blind when the data exists (the Reporting API backfills over ~30 days). Pull the gate numbers from the Reporting API; never kill or continue a channel off missing Studio figures.

## 15. YPP defense & appeal playbook

Run this before YPP application, after any warning, and immediately after a demonetization event:

1. **Audit the catalog:** last 20 titles, thumbnails, script openings, transitions, and visual layouts. Flag repeated formulas, identical thumbnails, static slideshow videos, common AI voices, and topics with no originality delta.
2. **Fix the live channel:** private or rework the most repetitive uploads; refresh titles/thumbnails on kept videos; publish 1-2 clearly different videos that show varied format, voice, visuals, and human editorial input.
3. **Prepare the appeal packet:** a 3-5 minute screen-recorded workflow video showing research, scripting, editing, asset creation/licensing, timeline edits, upload settings, and AI disclosure. Show popular videos and recent videos because those are the obvious reviewer samples.
4. **Use a human face/voice in the appeal:** the operator or a hired editor can appear in the appeal video. This is not because the channel must be on-camera; it is because reviewers need evidence that a real operator directs the work.
5. **Escalation options:** MCNs or creator-support routes may help once a channel has real revenue, but joining one is a money/control decision for the operator. Do not treat "join an MCN" as default operating procedure.
6. **Public pressure/legal angle:** if an appeal is rejected and the channel materially matters, consider a public appeal and a request that YouTube identify the specific videos/policy basis. This is high-exposure positioning; the operator decides first.

## 16. Common mistakes

1. **Treating it as an ad-revenue play (genre heuristic)** — AdSense may be a small line for this model; a backend product can matter, but E5 does not require a product and the private plan chooses its one commercial test.
2. **Shipping raw AI slop** — no editorial pass = YouTube's inauthentic-content policy demonetizes it. Always add real research + a POV.
3. **Medical/health claims** — the "doctors won't tell you / cure" framing is the #1 ban + FTC risk. Folk-tradition framing only.
4. **Letting the persona drift** — the consistent voice + avatar *is* the brand. Lock one voice + one avatar seed; reuse identically on every video.
5. **Judging the niche on one video (optional heuristic)** — a 3–5 video catalog read may help a private review, but it does not replace the E0–E5 triggers, add a waiting period, or create an automatic kill decision.
6. **Underpricing opportunity cost** — months of $0 against any proven higher-leverage lever you already run. It only earns a place in the portfolio if production is hands-off and the catalog can hit real scale.
7. **Believing guru mechanism claims without proof** — "Gemini scans X" and "GIST kills Y" can be useful metaphors, but the operating truth is simpler: YouTube monetization requires original, non-repetitive, non-mass-produced work with a human fingerprint.
8. **Waiting for YPP to monetize** — an owned domain, lead magnet, product, checkout, or email list can be tested before YPP when the private plan supports it. YouTube Earn is upside; the business does not require every surface.
9. **Creating a merch store with no relevance** — a generic 20-SKU POD catalog is not enough. Products need channel-language, episode relevance, and clean tagging.
10. **Accepting every sponsor/affiliate** — weak-fit partnerships dilute trust and can create policy risk. A trusted channel monetizes better by saying no.
11. **Leaving the channel half-set-up (optional reference)** — a watermark, profile, moderation, and upload defaults can improve consistency. The shell (§8) is reference guidance, not an extra E-stage gate.

## 17. Current source notes (2026-07-08)

- [YouTube Partner Program overview & eligibility](https://support.google.com/youtube/answer/72851): full ad revenue still requires 1,000 subscribers plus either 4,000 valid public watch hours in 12 months or 10M valid Shorts views in 90 days; YPP also requires monetization-policy compliance, eligible region, no active strikes, 2FA, advanced features, and AdSense for YouTube.
- [Expanded YPP overview](https://support.google.com/youtube/answer/13429240): in eligible countries, earlier access starts at 500 subscribers + 3 public uploads in 90 days + either 3,000 valid public watch hours in 12 months or 3M valid Shorts views in 90 days; it unlocks fan funding and select Shopping features before full ad revenue.
- [YouTube partner earnings overview](https://support.google.com/youtube/answer/72902): Commerce Product Module covers fan funding features; Watch Page Monetization covers watch-page ads; YouTube lists memberships, Super Chat/Stickers, Super Thanks, Shopping, ad revenue, and YouTube Premium as monetization surfaces.
- [Get started with Shopping on YouTube](https://support.google.com/youtube/answer/12257682): eligible creators can connect a supported store, tag own products, tag eligible affiliate products, and read Shopping analytics. Own-store payments/sales come through the merchant platform, not AdSense.
- [Connect, manage, and disconnect your store on YouTube](https://support.google.com/youtube/answer/12258186): supported store platforms include Shopify, FourthWall, Spreadshop, Spring, TeePublic, Wix, and regional platforms. Shopify gives the most control; POD platforms are faster for testing.
- [Tag products in your content](https://support.google.com/youtube/answer/10191533): products must be featured or meaningfully related, identifiable, useful to viewers, and used as intended. Repeated non-compliant tagging can remove Shopping affiliate access.
- [YouTube Shopping support policies for buyers](https://support.google.com/youtube/answer/12257787): the retailer/store handles fulfillment, shipping, payment, support, returns, refunds, taxes, and final pricing. YouTube is the surface, not the merchant.
- [External links policy](https://support.google.com/youtube/answer/9054257): off-platform links must not route viewers to content or products that violate YouTube rules; affiliate links are allowed, but spammy affiliate behavior can still create policy risk.
- [Hyping videos — eligibility & policies](https://support.google.com/youtube/answer/15509925) + [Hype leaderboard](https://support.google.com/youtube/answer/15334500): a fan-powered **discovery** boost for up-and-coming YPP creators (~500–500,000 subs «verify», eligible countries); viewers Hype an eligible video (free + paid Jewels) within ~7 days of publish, and top videos rise on a weekly leaderboard YouTube can surface more widely. On by default when eligible.
- [Gifts, powered by Jewels](https://support.google.com/youtube/answer/15534883): viewers buy Jewels and send Gifts on eligible live streams; creators redeem at **2 Jewels = 1 Ruby = $0.01**. YPP-gated, US/Canada + expanding — situational for an evergreen channel that rarely goes live.
- [Understand three-minute YouTube Shorts](https://support.google.com/youtube/answer/15424877): vertical or square videos uploaded after October 15, 2024 can be Shorts up to 3 minutes; for this blueprint, compact 15-35s Shorts stay the default until retention proves longer.
- Creator post-mortems and operating breakdowns can supply heuristics for Shorts setup, niche mining, transformation, hooks, analytics, editing, and delegation; verify material claims independently.

## Phases

The Stage Roadmap above is the experiment evidence contract. These four maturity phases are generic capability indexing for a Revenue-or-higher Unit and are retained as source reference only, not as an experiment roadmap, launch sequence, or gate. Phase numbers do not map to E-stages, and no capability is inferred from a stage. Each capability remains available for private-plan assessment.

- **Phase 0 · Publish & Wire** — catalog the possible publishing, routing, P&L, and Shorts capabilities. Select only what the private unit evidence supports; this grouping is not an E-stage gate.
- **Phase 1 · Monetize on-platform** — YPP, Shopping, memberships, and Supers are possible native surfaces. Eligibility and fit remain private decisions; this grouping is not an E-stage gate.
- **Phase 2 · Own the funnel** — backend products, sponsors, email, owned sites, and merch are possible owned paths. Use only the surface that fits the evidence; this grouping is not an E-stage gate.
- **Phase 3 · Scale** — a second, aesthetically distinct channel is a future capability option, not an automatic stage unlock.

## Capabilities

The trackable skeleton of this type, grouped by the phase where each becomes the focus (see `README.md` § Capabilities for the system). Priority is the within-phase importance. Unit statuses live in each unit's `about.md`.

| Slug | Capability | Phase | Priority | Prose |
|---|---|---|---|---|
| `funnel-wiring` | Every video carries description link + pinned comment + banner QR to the funnel | 0 | P1 | §7 |
| `end-screen-routing` | Standardized end screen: final seconds point to a specific next video or playlist, subscription, and the owned funnel when appropriate | 0 | P1 | §7 |
| `live-pnl` | Live P&L: real numbers flow from a system, never hand-authored | 0 | P1 | common |
| `shorts-lane` | Shorts lane running as its own operating model | 0 | P3 | §1, §13 |
| `ypp` | YouTube Partner Program active (expanded or full) | 1 | P1 | §9 |
| `shopping` | YouTube Shopping: store connected, products tagged | 1 | P2 | §9, §11 |
| `memberships` | Channel memberships live | 1 | P3 | §9 |
| `supers` | Supers / fan funding (Super Chat, Thanks, Gifts) enabled | 1 | P3 | §9 |
| `backend-product` | Owned digital product with open checkout | 2 | P1 | §1, §10 |
| `sponsors` | Sponsor / affiliate inventory sold | 2 | P2 | §12 |
| `email-list` | Active email list: an owned list with capture running and sends on a real cadence | 2 | P2 | common |
| `owned-site` | Owned website on an owned domain, independent of any storefront | 2 | P3 | common |
| `official-profiles` | Official branded profiles claimed on the platforms the audience will search, visually consistent and linked to the owned site | 0 | P2 | common |
| `direct-channel` | A one-to-one channel to reach a human beyond comments, linked from the channel and the owned site, with someone accountable for replying | 2 | P2 | common |
| `whatsapp-group` | A WhatsApp group viewers can join, linked from the channel and the owned site, with someone accountable for answering | 2 | P2 | common |
| `telegram-group` | A Telegram group mirroring the WhatsApp one, so viewers are not forced onto a single platform | 2 | P2 | common |
| `feedback-intake` | A public place to request topics and see what has already been asked, whose contents reach the content calendar | 2 | P3 | common |
| `merch` | Physical / POD merch catalog live | 2 | P3 | §11 |
| `second-channel` | Playbook cloned into a second, aesthetically distinct channel | 3 | P3 | §13 |

---

*Research-informed methodology combining a resumable production pipeline, public growth and quality guidance, YouTube policy, and creator post-mortems on demonetization. Treat creator claims as operating heuristics unless independently verified. This first pass is not yet proven at scale; fold in real economics and reliable asset-sale evidence as they become available.*

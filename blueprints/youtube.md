---
type: youtube
version: 4.0
updated: 2026-09-03
status: first-pass
plan_grammar: phases
experiment_ladder: level-trigger
experiment_plan_grammar: levels
---

# Blueprint — Faceless YouTube business

> **How to build a faceless YouTube channel, split into long-form and Shorts lanes.** Long-form combines evergreen content with an owned product funnel. Shorts uses high-cadence, hook-and-payoff content for reach, then adds sponsors, products, or a funnel when the niche supports one. This is the **reusable methodology for any operator building this business type**; a specific bet adds its own niche, persona, voice, offer, and format mix. Run a separate niche-validation pass before committing. The operating gates draw on YouTube policy and creator post-mortems; treat single-creator claims as heuristics until independently verified.

## Planning Contract

- The maturity phases below describe the generic business. A unit's roadmap phases are its own and are independent from them: several unit phases may build capabilities from one blueprint phase, and matching numbers never imply a one-to-one mapping.
- A YouTube unit plans by **phase** because a channel advances through meaningful state changes — a validated niche, a production engine that runs without the operator, monetization surfaces enabled, an owned funnel that earns — rather than by product releases or a monthly buying rhythm. A phase takes as long as its state change needs and is never attached to a date, a month, or an estimated duration.
- Keep exactly one incomplete phase marked Current and order later phases by priority; that order expresses priority, not mandatory dependency. Every phase declares its purpose, focus, and `Done when` condition.
- Each phase holds at most five top-level projects. A project is a bounded change with an observable completion condition; its concrete execution tasks live directly underneath it and are uncapped.
- Every cap here is a generic default. A unit may override it in its own manifest with a recorded reason, and an existing container keeps what it already holds until its next boundary.
- Use the capability catalog as reference when choosing projects, but do not mirror the catalog into the unit plan or treat project completion as permanent capability evidence.

## Experiment Ladder

This ladder applies to both the long-form and Shorts lanes. Level `0` is admission to an experiment that is running autonomously until its next trigger; it claims no traction. The first audience signal is total valid public views that actually occurred across the channel during the trailing 30 days, read from a date-bounded YouTube Analytics or Reporting API aggregate; a video's lifetime counter is not a substitute. Repeatable reach then requires several distinct public videos to cross the per-video threshold in the longer catalog window. Revenue is counted only once it is settled and externally attributable to the channel, using an aggregate from YouTube, checkout, or billing systems; do not include viewer or buyer identities.

The private experiment uses these same levels as its only roadmap containers: `L0`, `L1`, and so on, never a parallel round sequence. The Current container equals the recorded current level. Each level holds its unlocked capability and the work needed to reach the next trigger; advancement requires both that capability to be verified and the next numeric trigger to be met. An early trigger remains ready until the level work closes.

| Level | Name | Metric | Trigger | Window | Unlocks |
| --- | --- | --- | --- | --- | --- |
| 0 | Admission | Experiment is running with its hypothesis, metric, source, and decisions defined | Admission; no traction claim | Until the next trigger | Begin evidence collection |
| 1 | Audience signal | Total valid public views that occurred across the channel during the window | >=1,000 views | Trailing 30 days | Continue testing reach |
| 2 | Repeatable reach | Number of distinct public long-form or Shorts videos published in the window with at least 1,000 valid public views | >=3 qualifying videos | Trailing 90 days | Continue testing toward revenue |
| 3 | Revenue | Settled external channel-attributable revenue (numeric currency amount) | >0 | Trailing 30 days | Graduate into a unit at stage Revenue |

The existing CTR/AVD gate remains a packaging and retention diagnostic for operating decisions; it is not an experiment-ladder level.

## Progressive Automation

Level `0` requires a verified autonomous production-and-publishing capability, which may span research, scripting, rendering, upload and community jobs. Each earned non-graduation level unlocks at least one additional business capability. The experiment chooses it from the evidenced bottleneck and confirms it before adding it to the private plan; the next evidence trigger remains gated until the capability is proven in production and monitored. Revenue graduation adds no final experiment automation.

| Earned level | Default automation frontier | Selection guidance |
| --- | --- | --- |
| 0 | Production and publication | Run the chosen long-form or Shorts format without per-video operator work while preserving originality, rights and policy gates. |
| 1 | Social distribution and repurposing | Turn each eligible release into platform-appropriate distribution without hard-coding one social provider for every channel. |
| 2 | Owned-audience broadcast and monetization | Build a low-labor direct audience or monetization path, such as an owned broadcast channel, selected from demonstrated audience behavior. |

The public sequence names capability categories, not providers. A private experiment may commit to a specific network or broadcast service, or choose a different frontier, when its evidence and operating boundaries justify that decision.

---

## 1. The model in one screen

This has two distinct operating models. Do not manage Shorts like small long-form videos.

**Long-form documentary lane:** direct-response info-product publishing wearing a YouTube costume. Don't be fooled by view counts, **AdSense is the small money.** The engine is a high-margin digital product bolted onto an evergreen content machine:

1. **Persona + curiosity-gap content** → cheap, evergreen organic views from an older, high-trust audience (50+ skews high CPM *and* high buy-rate).
2. **Owned asset from day 1** → matching `.com` domain + clean static site + email capture + checkout + legal pages. YouTube is rented distribution; the domain/email list is the asset.
3. **Funnel everywhere** → banner QR + pinned comment + description link → the channel site. First link in every description and first pinned comment points to the current product/lead magnet with per-video UTM tags.
4. **The product** → a 3-volume "vault / field edition" ebook bundle ~$27–$37, pure digital (~100% margin), with an order-bump + upsell stacking AOV.
5. **Earn surfaces fully enabled when eligible** → ads, YouTube Premium, Supers (incl. live-stream Gifts/Jewels), memberships, Shopping, affiliate Shopping, Hype, product drops, promos, and sponsor/partner inventory. Turn on every YouTube-native earning surface, but do not let them distract from the owned product funnel.

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
- **Length:** seed stage **10–12 min** (retention-first for a young channel — AVD ≥35% is the gate, shorter holds AVD better). Scale toward the genre's 17–33 min (more mid-rolls) only once retention proves out.

**Shorts packaging:**

- **First frame:** must create visual curiosity while muted. The viewer should understand there is tension before the voiceover has time to work.
- **Hook:** one short line that drops the viewer into the middle of a situation or makes a bold claim. Avoid explaining the whole payoff too early.
- **Script:** hook -> explain payoff -> foreshadow payoff -> reveal payoff. Every sentence should move the viewer closer to the payoff.
- **Edit:** dynamic motion, captions, cuts, zooms, crops, SFX, and music build. Spend disproportionate time on the first 1-2 seconds.
- **Length:** YouTube can classify vertical or square videos up to 3 minutes as Shorts, but this automation play defaults to **15-35 seconds**. Use 60s+ only when the payoff needs it and retention still holds.

## 6. Publishing cadence & growth playbook

- **Cadence:** ~2 videos/week minimum. Winners scale by **system reliability**, not per-video polish.
- **Shorts cadence:** daily or near-daily reps during testing. Shorts rewards fast learning loops; a small sample of polished uploads is weaker than a disciplined batch of format tests.
- **Distribution:** the funnel link goes in **every** video — banner QR + pinned comment + description (first link).
- **Hype (small-channel discovery):** for up-and-coming channels (~500–500,000 subs «verify», eligible countries), ask viewers in the first **7 days** after publish to **Hype** the video (the button beside Like). Free + paid (Jewels) hypes push top videos onto a **weekly leaderboard** YouTube can surface more widely — a free-reach lever that fits the moat, not a money line. It's on by default when eligible; keep **Let viewers hype** toggled on (Earn → Hype / Advanced).
- **Off-platform entity batch:** same-name IG/FB/X/Pinterest, channel links, `sameAs` on the funnel domain (an entity signal).
- **Launch sequence:** 1 pillar video (the broad "full map" of the niche), then 2-3 anchor videos on the most searched subtopics, then regular cluster videos with occasional broad "collision" or adjacent-audience "bridge" videos. This builds topical identity before chasing spikes.
- **Growth QA gates:** every script brief must include originality delta, entity coverage, satisfaction payoff, and an anti-generic pass. Do not adopt an unverified mechanism as fact merely because one creator described it.
- **Read loop:** a CTR/AVD one-variable test per video (change one thing, read the result) logged per upload. CTR <5% = packaging first; AVD <35% on 10-12 min = hook/pacing/audio/visual problem; high CTR + low AVD = packaging overpromised; low CTR + high AVD = strong video nobody opens.
- **Shorts read loop:** use Studio for video diagnosis, not emotional real-time refreshing. Viewed-vs-swiped-away diagnoses the hook; retention curve diagnoses script, pacing, and payoff; sample size matters. A great metric at 200 views is not proof.
- **Catalog audit:** every five uploads, run the authenticity gates above and private/rework the most repetitive pieces before applying for YPP or after any inauthentic-content warning. Prefer private/rework over deletion unless a policy violation demands removal, because deletion destroys evidence.

## 7. Funnel, domain & site

The channel needs a real owned destination before the first public push. **Buy the matching `.com` during identity lock** (channel name, persona name, or product/brand name; ideally one primary domain plus defensive redirects if cheap). Park it on Cloudflare with:

- **Static site:** one fast landing page with the channel identity, embedded trailer or best video, product/lead magnet block, email capture, and a "watch on YouTube" link. Use Cloudflare Pages or equivalent static hosting; no backend unless checkout requires it.
- **Commerce:** Stripe, Gumroad, Lemon Squeezy, Shopify, or FourthWall/Spring/Spreadshop depending on whether the first product is digital-only or merch/POD. The channel site links to the official store; YouTube Shopping can surface eligible connected-store products once available.
- **Legal/trust:** footer links for contact, privacy policy, terms, refunds, affiliate/sponsor disclosure, and any topic-specific disclaimer. This is mandatory for older audiences and for YPP/Shopping review defensibility.
- **Entity layer:** same name/avatar across YouTube, site, IG/FB/X/Pinterest, and any store profile; add `sameAs` schema on the site; cross-link the channel and site.
- **Tracking:** every video gets a unique UTM link (`utm_source=youtube&utm_medium=description|pinned&utm_campaign=<video_slug>`). Description, pinned comment, channel banner QR, channel links, and site all point to the same current offer.

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

## 9. Earn surface activation

Treat YouTube Studio's **Earn** tab as a setup checklist, not as the business model. The sequence:

| Stage | Threshold / trigger | Turn on |
|---|---|---|
| **Before YPP** | day 1 | Domain/site, email capture, lead magnet, digital product, affiliate disclosures, channel links, banner QR, pinned-comment template. |
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

**Funnel mechanics:** static landing page on **Cloudflare Pages** (near-zero cost, instant), single buy button, payments via Stripe/Gumroad/Lemon Squeezy, a **free sample PDF as the lead magnet** (ship a free Vol I sample; gate checkout until reach proves out). Product is AI-drafted, **human-edited for real value** so it's not a refund magnet. Every video description and first pinned comment must include the offer link from day 1.

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

## 13. Launch Roadmap (Week 1 → Week N)

The phased sequence to stand up a **new** faceless channel of this type from zero. These are **relative weeks**: when you commit to a real build, schedule them into the owning unit's `tasks.md` as the actual ISO weeks you'll work them.

### Long-form documentary lane

| Week | Focus | Concrete output |
|------|-------|-----------------|
| **W1** | **Validate niche + channel** | Run `business-research`; score 3–5 candidate niches on Demand · Competition · Money · Risk-safe · Persona → one pick. Confirm policy-safe framing (folk-tradition, no medical claims) + a credible backend offer. **Gate: a viable niche or stop.** |
| **W2** | **Lock identity + format** | Pin name pattern + a single AI persona portrait (locked seed/reference) + banner with offer/QR; grab `@handle` + matching `.com` + funnel subdomain. Run the **channel-setup checklist (§8)**: profile/bio/photo, branding + video watermark, layout, upload defaults, comment moderation, captions, advanced features + 2FA. Define 4–5 recurring formats + the title/thumbnail/hook template; configure the channel's `channel.yaml` (persona, voice, visual grammar, QA rubric). |
| **W3** | **First batch of scripts + owned funnel** | Write the originality-delta brief + 3–4 researched `script.md` (1 pillar + 2–3 anchors), each with a real POV none of the top-5 results add. Build the product skeleton (3-vol bundle outline; chapters seeded from the scripts), landing page, checkout, lead magnet, email capture, legal pages, and CTA/pinned-comment templates. |
| **W4** | **Produce + publish** | Run the `video-producer` pipeline (tts → stills → heroes → captions → assemble → thumbnail → **human review gate** → upload). Ship the pillar + first anchors; first description link + first pinned comment point to the funnel; AI-disclosure flag set. **Gate: first videos live with passing review packets and a working site.** |
| **W5–W7** | **Cadence to the monetization gate** | Hold ~2 videos/week, rotating formats; one-variable CTR/AVD test per upload; run the 5-video authenticity audit. Toggle **Hype** on and ask viewers to Hype within the 7-day window (free small-channel reach). Build the 20-SKU digital/POD catalog in draft, but only surface the products that fit the videos. Grind toward the YPP thresholds (subs + watch hours). **Gate: catalog earning *expanding* impressions (CTR ≥5% + AVD ≥35%), or the reach moat isn't there.** |
| **W8–W9** | **Prove or kill** | Hit the 90-day-style gate early: a video the algorithm chose to push **and** a funnel converting (low-single-digit outbound CTR + real sales per ~10k warm views). If eligible, apply to expanded YPP and enable Commerce Product Module/fan funding/Shopping; otherwise keep driving the owned funnel. **Scale** → keep publishing toward ~10 videos + full YPP; **kill** → every video stalls sub-3% CTR or warm viewers won't buy, cut before sinking more time. |
| **W10+** | **Scale / clone** | Once the catalog earns organic reach + the funnel converts: turn on every eligible Earn feature, connect the official store, tag relevant products, launch memberships, test sponsor/affiliate partnerships, graduate to a `work/` unit, deepen the product line (print + audiobook editions, a course/community tier, a standalone newsletter, audio/podcast repurpose), and **clone the playbook into a second channel** — in an **aesthetically distinct** family (shared implementations read as one channel to YouTube). |

> Not everything fits a week-by-week plan — the economics, niche-selection, authenticity gates, and kill criteria above are reference you consult throughout. The roadmap is just the **build sequence**; the rest is the **operating manual**.

### Shorts automation lane

| Week | Focus | Concrete output |
|------|-------|-----------------|
| **W1** | **Validate Shorts niche + account shell** | Collect 20-30 winning Shorts across 3-5 channels in the target lane. Confirm the clips can be transformed safely and the niche has demand plus a money path. Verify the channel, enable advanced features, set 2FA, and complete the basic shell. |
| **W2** | **Pattern library + first batch** | Build a pattern board: hook types, payoff types, edit style, caption style, sound cues, and forbidden copycat examples. Produce 10-15 Shorts manually so the operator learns the eye before delegating. |
| **W3-W4** | **Daily publishing test** | Publish daily or near-daily. Read viewed-vs-swiped-away, retention, and Shorts-feed reach after meaningful samples. Keep winners, kill weak patterns, and stop blaming the account when the edit or hook is the real issue. |
| **W5-W6** | **Repeatability gate** | Pass only if at least one pattern repeatedly earns Shorts-feed tests and one or more videos breaks beyond the channel's normal range. If every upload stalls or the only winners are non-transformative copies, kill or reframe. |
| **W7+** | **SOP + delegation** | Turn the winning pattern into an SOP, hire or train editors, and scale volume only while quality holds. Keep the operator on hook choice, pattern mining, analytics, and money path. |

## 14. Benchmarks

- **Leading (per video):** CTR >5% · avg view duration / AVD >40% (>35% is the Stage 1 gate) · subs/week.
- **Shorts leading:** viewed-vs-swiped-away around 80%+ at meaningful sample «creator heuristic» · retention >100% on compact Shorts where possible · no sharp retention cliff before payoff · repeat Shorts-feed tests across multiple uploads.
- **Money:** landing-page click-rate · click→buy >2% · AOV · RPM.
- **Owned funnel:** description CTR · pinned-comment CTR · email opt-in rate · checkout conversion · refund rate · revenue per 1,000 warm views.
- **Shop:** product impressions · product clicks · product CTR · sales by SKU · shipping/refund issues · tagged-product compliance notices.
- **90-day gate:** ≥10k subs **and** a funnel converting ≥2% → decide graduate / clone / kill.
- **Shorts YPP gates:** expanded YPP can use 3M Shorts views in 90 days; full ad revenue can use 10M Shorts views in 90 days. Treat these as milestones, not proof that the business works.
- **Reach reality:** a brand-new 0-sub channel may sit at near-zero impressions for the first few videos (a first upload pulling ~single-digit views at day 3 is normal) — judge the *catalog* (3–5 videos) over ~1–2 weeks, not a single upload.
- **Where to read reach:** impressions + CTR live in the **YouTube Reporting API, not Studio** — Studio shows *n/a* for the gate metrics, so a builder checking only Studio thinks they're blind when the data exists (the Reporting API backfills over ~30 days). Pull the gate numbers from the Reporting API; never kill or continue a channel off missing Studio figures.

## 15. Kill / scale criteria

- **GO (Stage 1):** ≥1 video earns *expanding* impressions at **CTR ≥5% + AVD ≥35%** — the algorithm chose to push it.
- **GO (Shorts Stage 1):** a pattern repeatedly earns Shorts-feed tests with strong viewed-vs-swiped-away and retention, not just one lucky spike.
- **GO (Stage 2):** funnel outbound CTR in the low-single-digit %, and real sales (a handful per ~10k warm views).
- **NO-GO (any one):** every long-form video stalls at seed impressions with **sub-3% CTR** (content can't earn free reach, no moat) · every Shorts test stalls without Shorts-feed distribution after account setup and format iteration · warm viewers won't click/buy · or only deceptive hooks move it.
- **Scale:** once the catalog earns organic reach + the funnel converts, continue toward ~10 videos, turn on all eligible Earn surfaces, connect the store, launch a low-labor membership tier, then graduate to a `work/` unit or clone the playbook into a second (aesthetically distinct) channel.
- **Calendar:** weeks, not days — organic distribution can't be rushed. That's the honest shape of the bet.

## 16. YPP defense & appeal playbook

Run this before YPP application, after any warning, and immediately after a demonetization event:

1. **Audit the catalog:** last 20 titles, thumbnails, script openings, transitions, and visual layouts. Flag repeated formulas, identical thumbnails, static slideshow videos, common AI voices, and topics with no originality delta.
2. **Fix the live channel:** private or rework the most repetitive uploads; refresh titles/thumbnails on kept videos; publish 1-2 clearly different videos that show varied format, voice, visuals, and human editorial input.
3. **Prepare the appeal packet:** a 3-5 minute screen-recorded workflow video showing research, scripting, editing, asset creation/licensing, timeline edits, upload settings, and AI disclosure. Show popular videos and recent videos because those are the obvious reviewer samples.
4. **Use a human face/voice in the appeal:** the operator or a hired editor can appear in the appeal video. This is not because the channel must be on-camera; it is because reviewers need evidence that a real operator directs the work.
5. **Escalation options:** MCNs or creator-support routes may help once a channel has real revenue, but joining one is a money/control decision for the operator. Do not treat "join an MCN" as default operating procedure.
6. **Public pressure/legal angle:** if an appeal is rejected and the channel materially matters, consider a public appeal and a request that YouTube identify the specific videos/policy basis. This is high-exposure positioning; the operator decides first.

## 17. Common mistakes

1. **Treating it as an ad-revenue play** — AdSense is the small money; without the backend product the economics don't work.
2. **Shipping raw AI slop** — no editorial pass = YouTube's inauthentic-content policy demonetizes it. Always add real research + a POV.
3. **Medical/health claims** — the "doctors won't tell you / cure" framing is the #1 ban + FTC risk. Folk-tradition framing only.
4. **Letting the persona drift** — the consistent voice + avatar *is* the brand. Lock one voice + one avatar seed; reuse identically on every video.
5. **Judging the niche on one video** — a 0-sub channel needs a 3–5 video catalog read over ~1–2 weeks before GO/kill.
6. **Underpricing opportunity cost** — months of $0 against any proven higher-leverage lever you already run. It only earns a place in the portfolio if production is hands-off and the catalog can hit real scale.
7. **Believing guru mechanism claims without proof** — "Gemini scans X" and "GIST kills Y" can be useful metaphors, but the operating truth is simpler: YouTube monetization requires original, non-repetitive, non-mass-produced work with a human fingerprint.
8. **Waiting for YPP to monetize** — the owned domain, lead magnet, product, checkout, and email list must exist before YPP. YouTube Earn is upside; the business starts on the site.
9. **Creating a merch store with no relevance** — a generic 20-SKU POD catalog is not enough. Products need channel-language, episode relevance, and clean tagging.
10. **Accepting every sponsor/affiliate** — weak-fit partnerships dilute trust and can create policy risk. A trusted channel monetizes better by saying no.
11. **Leaving the channel half-set-up** — no watermark, default profile, comments unmoderated, no upload defaults. The shell (§8) is a one-time hour that compounds on every upload; skipping it leaks subs, funnel clicks, and trust.

## 18. Current source notes (2026-07-08)

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

The manual runs in four phases: the maturity stages a channel of this type walks, from first uploads to a portfolio. Each capability below sits in the phase where it becomes the focus, and a unit's check shows which phase it is completing. Phases gate on traction, not time.

- **Phase 0 · Publish & Wire** — get the engine running and every video pointing home: the production pipeline shipping on cadence, the funnel link on every upload, the live P&L from day one, and the Shorts lane if the bet runs one. *Focus: a publishing machine wired to an owned destination.*
- **Phase 1 · Monetize on-platform** — YPP unlocks the native rails: ad revenue, Shopping, memberships, Supers. Turn every eligible Earn surface on, but keep it the small money. *Gate in: a catalog earning expanding impressions (CTR ≥5% + AVD ≥35%). Focus: every native surface live.*
- **Phase 2 · Own the funnel** — the real revenue: the backend product converting warm viewers, sponsors sold on repeatable reach, the email list and owned site compounding off-platform, merch once identity has pull. *Gate in: repeatable reach plus a converting funnel. Focus: off-platform revenue on an owned audience.*
- **Phase 3 · Scale** — clone the proven playbook into a second, aesthetically distinct channel. *Gate in: channel #1 profitable and systematized. Focus: portfolio leverage.*

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

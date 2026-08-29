---
type: social-media
version: 0.6
updated: 2026-08-26
status: first-pass
---

# Blueprint — Social-media business (owned audience on social platforms)

> **How this type differs from `youtube`/`content`.** `youtube` is one platform's long-form/faceless engine (monetized by a backend info-product); `content` is an owned site/SEO asset. **`social-media` is the audience-on-a-platform play across the short-form/social surfaces** (TikTok / Reels / Shorts / X / Instagram) where the asset is a **following** on accounts you own, including **AI-generated personas** and faceless niche accounts, monetized by brand deals, creator funds, affiliate, and own-product cross-sell. Distribution *of* a product (faceless video pushing an ebook) is a channel; this type is when the **audience itself** is the asset. **Not operated yet**; the numbers below are research-sourced from creator-economy data and should be treated as directional.

---

## 1. The model in one screen (the brutal reality first)

You build a following on accounts you own and monetize the audience. **Most accounts never monetize.** The honest base rates: **$0 for the first ~3 months is normal**, meaningful money needs 3-6 months of consistent posting *and most never cross that line*; sub-10k-follower creators who earn at all average only ~$4.8k/year, micro (10-100k) ~$38.5k/year. **Platform creator funds are pocket change** (YouTube Shorts ~$0.01-0.05 RPM means ~2.5M views ≈ $100; TikTok ~$0.40-1.20 RPM), they cover coffee, not rent. The money is **brand deals + affiliate + own product**, and it needs **engagement (>2-3%), not vanity followers**.

**The defensible version of this business is `owned-audience → own-product distribution` in a high-CPM, high-affiliate niche**, not chasing fund RPMs or generic viral reach. Build toward a monetization thesis (which of brand deals / affiliate / own product) from day one, not "get views and figure it out later."

## 2. Format & niche

**Three format lanes:**
- **AI-generated persona** (the Aitana Lopez / Lil Miquela model). Fully owner-controllable, no talent, scalable, hyper-targeted brand fit. But the **consistency problem** is real (§3), AI-labeling now bites (§5), and the believable-persona bar keeps rising. Best on **Instagram** (image-native) and secondarily short-form video once you can hold face consistency in motion.
- **Faceless niche account** (aesthetic / compilation / quote / niche-info / "automation"). Cheapest to run, no persona-consistency problem, best fit for automation, but low differentiation and thin brand-deal demand (no face to endorse). Faceless *educational* niches command higher CPMs than aesthetic/entertainment. Best posted to **TikTok + Shorts + Reels simultaneously** (repost the one clip).
- **Real-face**, highest trust and rates, but ties the asset to a person's time and breaks the owner-independent thesis. Contrast only, not the build.

**Niches with BOTH cheap reach AND payable demand:** personal finance / make-money-online, tech/software, real estate, insurance, legal, B2B/SaaS, beauty/skincare, supplements/wellness. These carry the high CPMs (finance-adjacent short-form ~$10-25 vs entertainment ~$2-8, a finance view worth ~30x a music view) *and* the affiliate/brand budgets (beauty/supplements/wellness = the affiliate sweet spot at 15-30% commissions).

**Dead-ends for monetization:** pure entertainment, music (~$1.36 CPM), meme/compilation, generic "satisfying" aesthetic, gaming (lower CPM than expected). These rack millions of views and earn almost nothing, thin advertiser demand + no product to attach. Never pick a dead-end niche.

## 3. Production engine

**Cost has collapsed but is not zero, and it does not stay owner-independent at scale.**
- **The AI-persona consistency problem is the core technical blocker.** Off-the-shelf prompting drifts (eye shape, jawline, expression). The 2025-2026 solution is **training a LoRA** on the character (20-25 curated images at 768-1024px, claimed 95-98% facial accuracy, ~20-90 min on a consumer GPU); advanced setups blend separate LoRAs for expression/hair/outfit. **This holds up for stills; holding the same identity across video motion is materially harder and still where most AI personas look "off."** Treat video-persona consistency as an unsolved-at-scale risk.
- **Automation vs the human hand.** The *mechanical* layer automates well (rendering, captioning, cover selection, scheduling, cross-posting). What still needs a human: **taste/trend selection** (which format/hook to chase), **persona voice/replies** (manual DM + comment response, over-automated engagement triggers shadowbans, §5), and **QC** on off-model outputs. Realistic ceiling: ~70-80% automated on production+posting, but the growth-determining 20% resists automation. The "one-person AI empire" is largely marketing, Aitana Lopez now runs an 11-person team; scaled personas become team-run media ops. **Budget a human ops layer**, don't promise a fully hands-off machine.
- **Cadence:** 1-3 posts/day (min 3-5/week) to stay in the algorithm's good graces. TikTok tests each new video on your existing followers first, so a consistent engaged base gates broader distribution. Volume + speed + trend-jumping beats polish.

## 4. Monetization + realistic $

The revenue stack, worst-margin to best:

- **Platform creator funds (a rounding error, be honest).** TikTok Creator Rewards ~$0.40-1.20 RPM per 1k qualified views (needs videos >1min, 10k followers + 100k views/30d, select countries); a 1M-view video ≈ $400-1,000. YouTube Shorts ~$0.01-0.05 RPM (needs 1k subs + 10M Shorts views/90d for full ad share). **Funds cover coffee, not rent**, never build the business on them.
- **Brand deals (the cash line).** Rough heuristic **~$10-25 per 1k followers per post** at nano/micro scale, compressing toward $10-15/1k as you scale, and **engagement matters more than follower count** (a 50k engaged account out-earns a dead 100k). Nano (1-10k) first deals often start as **gifted product**, then ~$250-500/post once conversion is proven; micro (10-100k) ~$500-5k/post depending on platform + niche. Reels cost 2-3x static; Stories 40-60% cheaper.
- **Affiliate (the compounding layer).** TikTok Shop affiliate 5-30% commission (beauty/supplements/wellness 15-30%), TikTok Shop conversion runs 3-6x standard e-commerce. Supplements the brand-deal cash rather than replacing it.
- **Own product (the real margin).** Creators keep ~100% (minus fees) vs an affiliate cut, and creator-perceived-value lets you price ~20-35% above marketplace. **This is where an owned audience becomes a real business**, the following becomes a distribution channel for your own SKU (supplement, digital product, template, course). The winning 2025-2026 structure is the **hybrid stack**: TikTok Shop for daily sales + sponsored deals for brand cash + own/digital product for evergreen margin.

**How much audience before ANY meaningful money:** ~1,000 followers + consistent engagement is the practical floor for brand deals (brands increasingly prefer nano/micro); below ~2-3% engagement monetization stalls regardless of follower count. Expect **$0 for the first 3 months**.

## 5. Platform risk (the biggest structural risk to an AI-persona build)

**AI-labeling is now mandatory and machine-enforced.**
- **TikTok** integrated **C2PA Content Credentials (Jan 2025)**, it **auto-detects and labels** AI content via embedded metadata (already labeled >1.3 billion videos) *regardless of creator disclosure*, and undisclosed AI it catches can be distribution-reduced or removed (a 4-tier framework with penalties). AI-written captions/scripts are exempt, only visual/audio media must be labeled.
- **Meta (IG/FB)** self-declaration + partner-metadata detection, auto-labels content from its own gen-AI tools.
- **YouTube** requires manual flagging of realistic AI depictions, with penalties for repeated non-disclosure (videos, Shorts, livestreams).
- **EU AI Act Article 50** requires labeling AI-generated creative / synthetic personas for EU audiences, **enforcement from Aug 2, 2026**, directly relevant to a Barcelona-based operator. **Bake AI-labeling into the build from day one; it's mandatory, not optional.**

**What gets an account killed / shadowbanned:** spam-pattern behavior (posting too many back-to-back, mass follow/unfollow, bot engagement, automated likes/comments), banned/overloaded hashtags, and **over-automation** (platforms detect it, automated engagement is a top shadowban trigger, which directly caps how owner-independent you can safely make the growth layer). New accounts get little organic reach by default, **warm them up** (manual authentic engagement, human DM replies, no back-to-back dumping, official schedulers only). Shadowban recovery: pause 48-72h, strip flagged hashtags/links, reset engagement.

## 6. Kill criteria

No source publishes clean thresholds (judgment territory), synthesized defaults, treat as guidance:
- **Engagement floor:** stuck **below ~2-3% engagement** after clearing a few thousand followers → it won't monetize; kill or repivot the format. A high follower count at sub-1% engagement is a vanity corpse.
- **Growth-rate gate:** accounts that work usually show **at least one break-out post within the first 4-8 weeks** of consistent 1-3x/day posting. **Zero traction spikes after ~60-90 days** of genuine cadence → the niche/format is wrong; kill.
- **Time-to-first-dollar:** $0 for the first 3 months is normal (not a kill signal). But **no monetization signal by month 6** on an account that *did* get views (no affiliate conversions, no inbound brand interest, no product sales) → the audience doesn't convert; kill or hard-repivot. **Views without conversion is the most common dead-end.**
- Give each account **~90 days of true effort** before deciding. Because the marginal cost of a faceless/AI account is low, run several in parallel and let the data kill the losers, but don't resurrect a flat account past ~90 days.

## 7. Launch Roadmap (Week 1 → Week N)

**Relative weeks**, schedule them into the owning unit's `tasks.md` when you commit.

| Week | Focus | Concrete output |
|------|-------|-----------------|
| **W0-W1** | **Pick niche + format + monetization thesis** | Choose a niche in the *payable* set (finance/MMO, tech, beauty, supplements, wellness, real estate), never a dead-end entertainment niche. Decide persona vs faceless. **Define up front which of brand deals / affiliate / own product you're building toward.** **Gate: a payable niche + a monetization thesis, or repick.** |
| **W1-W2** | **Build the asset** | AI-persona: train the character LoRA (20-25 images), lock a repeatable face, **bake the AI-label strategy in from day one** (mandatory). Faceless: nail a repeatable visual template + hook format. Stand up multi-platform accounts (TikTok + Reels + Shorts to reuse one clip 3x). |
| **W2-W4** | **Warm + post at cadence** | 1-3 posts/day, **manual authentic engagement (no automation on the engagement layer)**, warm new accounts gently to avoid shadowban, cross-post the one asset to all three short-form platforms. |
| **W4-W8** | **Find what hits** | Test hooks/formats fast; double down the moment one post breaks out; kill formats with no algorithmic pickup. Watch **engagement rate, not just views**. **Gate: a break-out post by ~week 8, or repivot the format.** |
| **W8-W12** | **Monetize** | Turn on TikTok Shop affiliate (beauty/supplements 15-30%), pitch nano/micro brand deals (gifted → paid), and stand up an **own-product cross-sell** (the highest-margin lever). Treat funds as pocket change. **Gate: the audience converts (affiliate sales / brand interest / product sales), or it's a kill candidate (§6).** |
| **Month 3+** | **Scale / replicate** | Once one account proves the format **converts** (not just gets views), replicate across accounts/personas, but budget a **human ops layer**, not a hands-off machine. |

> Not everything fits a week-by-week plan, the niche/monetization/platform-risk/kill criteria are reference throughout. The roadmap is the **build sequence**; the rest is the **operating manual**.

## 8. Kill / scale criteria

- **Kill** an account stuck below ~2-3% engagement after a few thousand followers, or with no break-out post after ~60-90 days of real cadence, or with views-but-no-conversion by month 6.
- **Scale / replicate** only once one account proves the format **converts to money** (affiliate/brand/product), then spread the proven playbook across accounts, with a human ops layer budgeted.
- **Graduate** a proven, converting audience + own-product engine toward a `work/` unit (at that point it's really an ecommerce/content unit with a social distribution moat).

## 9. Common mistakes

1. **Chasing fund RPMs**, they're a rounding error; the money is brand deals + affiliate + own product.
2. **Optimizing for views over engagement/conversion**, a viral dead-end niche earns ~$0; engagement and a payable niche are the real signals.
3. **Picking a dead-end niche** (entertainment/music/memes/gaming), millions of views, thin advertiser demand, nothing to attach.
4. **Over-automating engagement**, a top shadowban trigger, and it caps true owner-independence.
5. **Skipping AI-labeling**, now machine-detected (TikTok C2PA) and legally required in the EU from Aug 2026; hiding it gets you throttled or removed.
6. **Believing the "one-person AI empire"**, scaled personas become team-run media ops; budget the human layer.
7. **No monetization thesis**, "get views and figure it out later" is how accounts get views and no money.

## Phases

The manual runs in four phases: the stages an owned-audience account walks, from a chosen niche to an audience that actually converts. Each capability below sits in the phase where it becomes the focus, and a unit's check shows which phase it is completing. Phases gate on engagement and conversion, not on views and not on time — an account with views and no conversion has not earned replication.

- **Phase 1 · Pick the niche and the thesis** — a niche with both cheap reach and payable demand, the format lane chosen with its real cost understood, and the monetization thesis decided before the first post. *Gate in: none, this is the entry. Focus: never a dead-end niche, never get-views-and-figure-it-out-later.*
- **Phase 2 · Build the asset and warm the accounts** — a repeatable persona or template, AI labelling baked in from day one, owned accounts across the short-form surfaces, cadence held, and engagement answered by a human. *Gate in: a payable niche and a monetization thesis. Focus: over-automated engagement is what gets accounts throttled.*
- **Phase 3 · Find what hits, then monetize** — engagement read instead of views, a break-out post inside the first weeks, then affiliate and brand deals turned on and the audience proven to convert. *Gate in: accounts warm and posting at cadence. Focus: views without conversion is the most common dead end.*
- **Phase 4 · Replicate with an ops layer** — an own product the audience distributes, a budgeted human layer for taste, replies, and QC, and only then the playbook spread across accounts. *Gate in: one account proven to convert to money. Focus: the one-person AI empire is marketing; scaled personas are team-run media ops.*

## Capabilities

The trackable skeleton of this type, grouped by the phase where each becomes the focus (see `README.md` § Capabilities for the system). Priority is the within-phase importance. Unit statuses live in each unit's `capabilities.json` and `about.md`.

| Slug | Capability | Phase | Priority | Prose |
|---|---|---|---|---|
| `payable-niche` | A niche with both cheap reach and real advertiser or affiliate demand, never a dead-end one | 1 | P1 | §2 |
| `monetization-thesis` | Which of brand deals, affiliate, or own product the build aims at, decided before the first post | 1 | P1 | §1, §4 |
| `format-lane` | Persona or faceless chosen, with the consistency and ops cost of that lane understood | 1 | P2 | §2, §3 |
| `kill-bar` | The engagement floor, break-out window, and time-to-first-dollar gates written down | 1 | P2 | §6 |
| `ai-labeling` | AI labelling baked into the build from day one, as platform policy and law require | 2 | P1 | §5 |
| `repeatable-asset` | A locked persona or a repeatable visual template that holds identity across posts | 2 | P1 | §3 |
| `multi-platform-accounts` | Owned accounts across the short-form surfaces, reusing one asset on each | 2 | P1 | §2, §3 |
| `posting-cadence` | A daily posting cadence held consistently rather than in bursts | 2 | P1 | §3 |
| `manual-engagement` | Replies and messages answered by a human, with no automation on the engagement layer | 2 | P1 | §3, §5 |
| `owned-site` | Owned website on an owned domain, so the audience is reachable off the platforms | 2 | P2 | common |
| `official-profiles` | Official branded profiles claimed on every surface the audience looks, visually consistent and linked to the owned site | 2 | P2 | common |
| `direct-channel` | A one-to-one channel to reach a human, with someone accountable for replying | 2 | P2 | common |
| `whatsapp-group` | A WhatsApp group the audience can join, with someone accountable for answering | 2 | P2 | common |
| `telegram-group` | A Telegram group mirroring the WhatsApp one, so the audience is not forced onto a single platform | 2 | P2 | common |
| `engagement-rate` | Engagement above the floor, read as the signal instead of follower count or views | 3 | P1 | §1, §6 |
| `breakout-post` | At least one break-out post inside the first weeks of real cadence | 3 | P1 | §6 |
| `conversion-proof` | The audience converts: affiliate sales, inbound brand interest, or product sales | 3 | P1 | §6 |
| `live-pnl` | Live P&L: platform, affiliate, and deal revenue flow from a system, never hand-authored | 3 | P1 | common |
| `affiliate-live` | Platform-shop or network affiliate running against the niche's commission rates | 3 | P2 | §4 |
| `brand-deals` | Paid brand deals beyond gifted product, priced on engagement rather than follower count | 3 | P2 | §4 |
| `email-list` | Active email list: an owned list off the platforms, with capture running and real sends | 3 | P2 | common |
| `feedback-intake` | A public place the audience can request things, whose contents reach what gets made | 3 | P3 | common |
| `own-product` | An own product the audience distributes, where the real margin is | 4 | P1 | §4 |
| `human-ops-layer` | A budgeted human layer for taste, replies, and quality control at scale | 4 | P1 | §3 |
| `account-replication` | The proven playbook spread across further accounts or personas | 4 | P3 | §8 |

---

*Research-sourced first pass, not yet operationally proven. Sources include creator-economy rate data, TikTok, YouTube, and Meta AI-labeling policies, EU AI Act Article 50, and AI-persona tooling. Creator-economy figures are inherently optimistic: treat low-end ranges and directional facts as more reliable than high-end post rates. Update when real operating evidence proves or disproves the model.*

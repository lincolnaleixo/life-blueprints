---
type: mobile-app
version: 1.1
updated: 2026-08-26
status: written
---

# Blueprint — Mobile-app business (native iOS/Android)

> **How to build a native mobile app into a revenue asset**, subscription-first, distributed through the App Store or Google Play. This is the **reusable methodology for any operator building this business type**; a specific bet adds its concept, platform, and monetization model. Run a separate market validation before committing. This blueprint is research-informed rather than operationally proven, so verify the benchmarks against current platform terms and the economics of the specific app.

---

## 1. The model in one screen

A mobile-app business is a **single-purpose tool that solves one job well enough to charge for**, distributed through two app stores that own discovery, payments, and the customer relationship. You don't need a viral hit, you need **one app with a real wedge** that converts installs to paying subscribers at a sustainable cost. The constraint isn't building (AI-assisted build is cheap now), it's **distribution and retention**: the store takes a cut, paid acquisition is unforgiving, and most installs churn in week one. The model only works when **organic install sources (ASO, content, referral) carry most of the load** and the app retains well enough that LTV clears CAC with margin.

**The long-tail reality (set expectations honestly):** of newly launched apps, only **~17.3% reach $1k MRR within 2 years** and only **~4.6% reach $10k MRR**. The top 5% of new apps earn ~400x the bottom 25%, and apps launched before 2020 still hold ~69% of all subscription revenue (incumbency is real). MRR growth is bimodal: apps either compound (top quartile 80%+ YoY) or bleed (bottom quartile -33%). Build assuming you must engineer into the top decile through wedge + retention + ASO, not luck.

## 2. Economics & unit math

- **The store cut is the first line of the P&L (2026 terms).** Model **15% as the baseline blended take** for a sub-$1M bootstrapped developer: Apple's **Small Business Program is 15% from day one** (developers under $1M/yr in proceeds; standard is 30%, and Apple auto-drops a retained subscriber to 15% after 12 months). **Google Play is overhauling post-Epic**: commission on new installs cutting toward ~20%, third-party payments allowed, and subscriptions toward **~10% headline / ~15% real** (staged rollout through 2026-2027 by region). **Web checkout outside store billing escapes the cut entirely** (only ~3-5% Stripe) and doesn't count toward the $1M threshold, a hybrid model (store billing for existing users, web checkout for new acquisition) is the margin lever worth building early where jurisdiction allows (US post-Epic, EU DMA). Price against the *net* you keep.
- **Monetization models** (pick one primary, the rest are floors):
  - **Subscription (recurring)**, the strongest model for a tool with ongoing value; predictable MRR, compounds with retention. Most small winning apps are subscription. Use a **hard paywall** (not freemium, see §8) with a CC-required trial.
  - **Paid up-front**, a one-time price; simplest, no recurring revenue, store cut still applies. Works for a high-value one-job utility; weak for anything needing ongoing engagement.
  - **In-app purchase (IAP)**, consumables / unlocks / one-time pro upgrade; pairs with a free base app.
  - **Ads**, the floor not the goal: ARPU ~$0.50-1.00 vs $3-9 for subscription. Use to monetize free users who'll never convert.
- **CAC / LTV is the whole game.** The app is profitable only when **LTV > CAC with margin after the store cut.** Realized **LTV per payer is ~$21-30** (AI apps ~$30, but they churn ~30-36% faster), and price tier dominates: high-priced apps ~$62 annual LTV/payer vs ~$11 low-priced. Meanwhile **effective CAC per *paying* subscriber is easily $50-150+** once you divide a $4-7 CPI by a ~2-4% install→paid rate and load in creative/waste (~2-3x CPI). So **cold paid UA usually does NOT work for a bootstrapper**, you're underwater on payback and can't float 6-12 months of negative cash. A bootstrapped app **lives or dies on organic**; paid UA only works once the funnel + LTV are proven (§5).
- **Involuntary churn is free money left on the table.** **31% of Google Play cancellations are billing-failure (involuntary)** vs 14% on the App Store, dunning/retry recovers real revenue. Refunds, trial abuse, and chargebacks erode net; model conservatively.

## 3. Concept / niche selection

Run a dedicated market-validation pass before building anything.

- **The unit of selection is a single job**, expressed as the **user-side search/intent** (what someone types into the store), not the technical description.
- **The signal you want, real demand + weak/expensive incumbents:** a job people already pay or search for, where current apps are overpriced, bloated, badly rated, or platform-gapped (a good iOS app with no decent Android equivalent). Strong store-search volume + mediocre top results = the opening.
- **The wedge a solo/small builder can hold:** simpler, cheaper, faster, more focused, or platform-filling, not "the same app but mine."
- **Discovery sources:** the `business-research` mobile-app channel + a software-radar-style sweep of store charts, review complaints ("I wish this app did X / wasn't so expensive"), and cross-platform gaps. Mine 1-star reviews of incumbents, the complaints are your feature list.
- **Watch-outs the score can't see:** platform-policy risk (confirm the guidelines allow it *before* building); a job that's a **feature, not an app** (the OS or an incumbent absorbs it for free); content/IP risk (anything riding another service's content/API can be killed by that service or the store); a **recurring-use hook**, a one-shot utility (calculator, flashlight) retains at D30 <5% and can't sustain a subscription, a recurring-need utility (habit/period/weather) retains D30 >30%. Pick jobs with a reason to return.

## 4. Build → launch (the MVP path)

- **Validate → scope the MVP → build → beta → submit → soft launch.** The fastest credible path to a shippable, paid app.
- **Stack (2025-2026):** default to **cross-platform (Expo/React Native, or Flutter)** for a bootstrapped single-purpose app, one codebase covers both stores and roughly halves build + maintenance (Flutter ~46% / React Native ~35% share; Expo is the fastest path to a shipped RN app with OTA updates + EAS build). Reserve **native (Swift/Kotlin)** for iOS-only, deep-OS-integration, or performance-critical bets. Use the **RevenueCat SDK** for the subscription/paywall layer regardless, it removes weeks of StoreKit/Play-Billing plumbing.
- **AI-assisted build shifts the bottleneck.** Teams ship ~21-28% faster with AI, but AI code carries ~1.7x more bugs and the constraint **migrates upstream (deciding what to build) and downstream (release packaging + store review)**. Implementation is no longer the constraint, distribution and positioning are.
- **The store-review reality:** both stores review every submission and App Store review **can reject** for guideline reasons (incomplete features, broken flows, payment-policy violations, low-value, privacy/permissions). **Budget for review latency + at least one rejection round** in every timeline. Read the relevant guideline sections before building.
- **Beta before public:** ship to **TestFlight (iOS) / a Play closed track (Android)** first, real-device testing + a pre-launch read on whether the core flow holds. Don't skip to public from the simulator.

## 5. ASO & store listing (the cold-start lever)

The store **is** the storefront, most discovery and nearly all conversion happen on the listing. Treat ASO as a launch-and-optimize discipline:

- **Listing conversion (page-view→install):** median **~8.6% (App Store) / ~16% (Play)**; "good" is ~25% / ~27%. Impression→install (incl. browse/search) ~3.6% on the App Store. Huge category spread (Food & Drink ~53% vs Games-Trivia ~5%).
- **Which assets move it most (AppTweak):** the **icon** (+~22% App Store / +20% Play) and the **first 2-3 screenshots** (+~22% / +24%) are the conversion engine, treat them as A/B-tested product surfaces, not afterthoughts. **Custom Product Pages** are used by only ~31% of apps and lift ~8.6% when used, an underexploited edge.
- **Keyword surface:** title + subtitle + keyword field (iOS) / title + short & long description (Play), map the user-intent keywords from §3 into these.
- **Ratings & reviews** drive both ranking and conversion, prompt at a moment of delivered value (in-app review API). **Localization** opens whole markets at low marginal cost once the core converts in one.

## 6. Growth playbook

The thesis is **organic-first**, a bootstrapped app can't outspend funded competitors on paid UA, so it wins on owned + earned channels and layers paid only once LTV is proven. Ordered lanes:

1. **ASO (§5)**, the free, compounding base; get the listing converting before anything else.
2. **Content / social**, short-form demos (TikTok / Reels / Shorts / YouTube), SEO content for the job, showing-the-result clips that drive to the store.
3. **Referral / virality**, only where the job is naturally shareable (the app produces something a user sends to a non-user). Build it in if it fits, don't force it.
4. **Paid UA, last, and only once the funnel pays.** Store search ads + social UA, started **small** and gated on **LTV > CAC after the store cut**. Given effective CAC per payer $50-150+ vs LTV ~$21-30, cold paid before the funnel is proven burns money.
5. **Cross-promotion / platform expansion**, once one platform works, ship the other store; cross-promote across a portfolio.

> **Channel discipline:** ASO and the funnel come first; paid UA is the *last* lane. Spending to acquire users an un-retentive app will churn is how solo apps die.

## 7. Growth & scaling levers

1. **Fix retention before acquisition**, a leaky bucket can't be filled by spend. Onboarding, time-to-first-value, and the D1/D7/D30 curve come before any UA push.
2. **Climb the monetization ladder (§8)**, convert free→paid, test paywall placement + trial length, price for value not the floor.
3. **Replicate the template**, once one app proves the build→ASO→monetize loop, a **portfolio of single-purpose apps** spreads the bet (same logic as the ecommerce SKU template).
4. **Localize + expand stores**, proven app, new market/store at low marginal cost.
5. **Delegate the operating load**, support, ASO upkeep, content, updates on hired/contracted help or systems.

> **The discipline:** every app/channel/hire must be **owner-independent**, or it just moves the bottleneck.

## 8. Monetization ladder

- **Hard paywall beats freemium (the biggest single lever).** Hard-paywall **Day-35 trial→paid ~10.7% median vs freemium ~2.1%** (~5x), and Day-60 revenue-per-install $3.09 vs $0.38 (8x). Default a single-purpose utility to a **hard paywall** (let the user glimpse value, then gate it).
- **Trial design:** **CC-required trial** (converts far above no-CC), and **make it long, 17-32 day trials convert ~42% vs ~26% for <4-day trials (~70% better)**, yet ~46% of apps still use <4-day trials. **55% of 3-day-trial cancellations happen on Day 0** (84% by Day 1), so obsess over Day-0 activation.
- **Plan mix:** **yearly plans retain best** (~48-54% at the relevant horizon) and cut churn ~34-51% vs monthly; **weekly plans are retention poison (~3-6%)**, avoid them.
- **Direct-to-paid (no trial)** converts ~1.9% of downloads at the median (~4.3% upper quartile), a viable model for a high-intent utility.
- **Subscription tiers** only if they map to genuinely different value; one well-priced tier usually beats a confusing ladder. **Ads as a floor** for non-converting free users. The **store cut** (15% baseline, §2) comes off every tier, price the *net*.

## 9. Launch Roadmap (Week 1 → Week N)

The phased sequence to stand up a **new** app from zero. **Relative weeks**, schedule them into the owning unit's `tasks.md` as the actual ISO weeks when you commit.

| Week | Focus | Concrete output |
|------|-------|-----------------|
| **W1** | **Validate concept + market** | Run `business-research` (mobile-app channel); mine incumbent reviews + store charts for the wedge; confirm store-policy sellability + a job people pay for + a recurring-use hook. **Gate: a real demand signal + a holdable wedge, or stop.** |
| **W2** | **ASO + MVP scope** | Draft the store listing (title/subtitle/keywords, icon + first-3-screenshot concept) to force a value prop; scope the **smallest MVP that delivers the core job**; pick the stack (Expo/RN or Flutter + RevenueCat SDK); reserve the app name + bundle IDs; set up developer accounts. |
| **W3-W4** | **Build the MVP** | Build the core flow + the paywall/trial (hard paywall, CC-required, 7-14 day trial). Keep scope to the one job. |
| **W5** | **Beta** | Ship to **TestFlight + Play closed track**; real-device test; fix the core flow on feedback; finalize listing assets. |
| **W6** | **Submit + soft launch** | Submit to **both stores**; budget for review latency + a rejection round; soft-launch to read the funnel. **Gate: approved + the core flow holds in production.** |
| **W7-W8** | **Acquire + monetize on** | Turn monetization on; drive organic installs (ASO live, content/social, referral if it fits); read the **install→trial-start→trial→paid funnel + D1/D7 retention** daily; obsess over Day-0 activation; fix the worst leak first. |
| **W9-W10** | **Prove or kill** | Hit the kill/scale gate (§11) on retention + funnel + LTV:CAC. **Gate: retains and the math clears, or kill before sinking more in.** |
| **W11+** | **Scale / replicate** | Once it retains and pays: layer **paid UA** (gated on LTV>CAC), consider **web checkout** for margin, localize/expand the other store, and queue the **next** concept (back to W1). |

> Not everything fits a week-by-week plan, the economics, concept-selection, ASO, and kill criteria are reference throughout. The roadmap is the **build sequence**; the rest is the **operating manual**.

## 10. Benchmarks (RevenueCat 2026 unless noted; category-conditional)

- **Funnel:** trial-start (install→trial) **≥15% healthy, <6% = broken funnel entrance**; **trial→paid median ~34.8%** (upper-quartile ~51%); direct install→paid ~1.9% median / ~4.3% top-quartile; hard-paywall D35 ~10.7% vs freemium ~2.1%.
- **Retention (keep the two concepts separate):** *subscriber* Year-1 survival **~27%** (~72% of annual subs cancel within year 1, ~35% of those in month 1); *app-usage* D30 **<4% median, 5-10% top-quartile, >10% top-decile** (utility spread is enormous, one-shot <5% vs recurring-need >30%). Monthly-plan churn ~6-9%; annual plans cut it ~34-51%.
- **Revenue:** ARPU ~$3-9/mo (median ~$5.65), ARPPU ~10-20x ARPU (only 3-8% of freemium users pay), **LTV/payer ~$21-30**. Only **17.3% reach $1k MRR / 4.6% reach $10k within 2 years**.
- **Acquisition:** CPI ~$4.70 (iOS) / ~$3.70 (Android) media-only; fully-loaded CAC ~2-3x CPI; **effective CAC per payer $50-150+**. Target **LTV:CAC ≥3:1, payback 6-12mo**.
- **ASO:** listing conversion ~8.6% (App Store) / ~16% (Play); "good" ~25% / ~27%.
- **Exit:** small apps ~1.2-1.8x revenue; subscription apps with strong retention behave like mini-SaaS and reach ~3.6x; **retention + recurring revenue is what pulls the multiple up**, not downloads. (Market is volatile, don't underwrite a build on exit assumptions.)

## 11. Kill / scale criteria

**Kill (any one is a serious flag; two = kill):** trial-start <6% or install→paid <~1% after listing+paywall iterations · trial→paid <~25% on a real trial length · **subscriber D30 / annual Year-1 survival well under ~20%** (LTV can never clear CAC) · app-usage D30 <~2-3% for a utility with no recurring hook (structurally dead) · LTV:CAC <1:1 on cold paid with no organic channel working · stuck below $1k MRR with flat/negative growth many months in.

**Scale (green-light more UA/investment when most hold):** trial-start ≥15% · trial→paid ≥~40% · direct install→paid ≥~4% · **D30 payer retention healthy + annual Year-1 survival ≥~27%**, monthly churn ≤~6-8% · LTV:CAC ≥3:1 with payback ≤6-12mo on at least one channel · listing conversion ≥~25%/27% · MRR compounding (top-quartile lane). Fix retention first, then the ladder, then paid UA, in that order. **Graduate** a retaining, profitable app into a `work/` unit.

## 12. Common mistakes

1. **Building before validating**, shipping an app for a job nobody pays for; run `business-research` + mine reviews first.
2. **Ignoring ASO**, a great app with a bad icon/screenshots/keywords never gets installed.
3. **Spending on paid UA before the funnel + retention are proven**, filling a leaky bucket; paid is the *last* lane.
4. **Under-pricing / mismodeling the store cut**, pricing against gross instead of the ~15%-net you keep.
5. **Shipping a feature, not an app**, a job the OS or an incumbent absorbs for free.
6. **A utility with no recurring-use hook**, one-shot utilities retain D30 <5% and can't sustain a subscription.
7. **Short trials + weekly plans**, <4-day trials and weekly plans both crater conversion/retention; use a 17-32 day CC trial + yearly plans.
8. **Platform-policy surprises**, building something the store rejects; read the guidelines first, budget a rejection round.
9. **Scaling on the founder's hours**, adding apps/channels without owner-independent support just moves the bottleneck.

## Phases

The manual runs in four phases: the maturity stages a subscription app walks, from a concept to an app whose economics clear the store cut. Each capability below sits in the phase where it becomes the focus, and a unit's check shows which phase it is completing. Phases gate on traction, not time — an app that does not retain has not earned an acquisition budget.

- **Phase 1 · Validate the concept** — a job people already pay or search for, weak or expensive incumbents, a wedge a small builder can hold, a recurring-use hook, and store policy confirmed to allow it. *Gate in: none, this is the entry. Focus: kill unsellable concepts before a line of code.*
- **Phase 2 · Build and ship** — the store listing drafted first to force the value proposition, the smallest MVP that delivers the one job, a hard paywall with a credit-card trial, beta on real devices, then approval on both stores. *Gate in: a real demand signal and a holdable wedge. Focus: something live that can charge.*
- **Phase 3 · Acquire and monetize** — the funnel and the retention curve instrumented and read daily, the listing converting, organic installs carrying the load, the worst leak fixed first. *Gate in: approved and the core flow holds in production. Focus: retention before acquisition, always.*
- **Phase 4 · Scale and replicate** — LTV clearing CAC after the store cut, paid UA opened only now, web checkout for margin, localization, then the next concept on the same loop. *Gate in: it retains and the unit math clears the bar. Focus: compounding a proven loop, not rescuing a leaky one.*

## Capabilities

The trackable skeleton of this type, grouped by the phase where each becomes the focus (see `README.md` § Capabilities for the system). Priority is the within-phase importance. Unit statuses live in each unit's `capabilities.json` and `about.md`.

| Slug | Capability | Phase | Priority | Prose |
|---|---|---|---|---|
| `wedge-validated` | A paid-for job with weak or expensive incumbents and a wedge a small builder can hold | 1 | P1 | §3 |
| `recurring-use-hook` | A reason to return, so the app is not a one-shot utility that cannot sustain a subscription | 1 | P1 | §3 |
| `policy-sellable` | Store guidelines confirmed to allow the concept before anything is built | 1 | P2 | §3, §4 |
| `kill-bar` | A written kill and scale bar on retention, funnel, and LTV to CAC | 1 | P2 | §11 |
| `store-listing` | Title, subtitle, keywords, icon, and first three screenshots treated as tested conversion surfaces | 2 | P1 | §5 |
| `mvp-shipped` | The smallest build that delivers the one job end to end | 2 | P1 | §4 |
| `paywall` | A hard paywall with a credit-card-required trial at a converting length | 2 | P1 | §8 |
| `store-approved` | Live on both stores, with review latency and a rejection round budgeted | 2 | P1 | §4 |
| `beta-track` | TestFlight and a closed Play track exercised on real devices before public release | 2 | P2 | §4 |
| `owned-site` | Owned website on an owned domain, independent of either store | 2 | P2 | common |
| `official-profiles` | Official branded profiles claimed where buyers evaluate the app, visually consistent and linked to the owned site | 2 | P2 | common |
| `direct-channel` | A one-to-one channel to reach a human, linked from the app and the site, with someone accountable for replying | 2 | P2 | common |
| `whatsapp-group` | A WhatsApp group users can join, linked from the app and the site, with someone accountable for answering | 2 | P2 | common |
| `telegram-group` | A Telegram group mirroring the WhatsApp one, so users are not forced onto a single platform | 2 | P2 | common |
| `funnel-instrumented` | Install to trial-start to trial to paid measured, with day-zero activation watched | 3 | P1 | §10 |
| `retention-curve` | The D1, D7, and D30 curve read and fixed before any acquisition push | 3 | P1 | §7, §11 |
| `aso-converting` | Listing conversion at or above the healthy band, with icon and screenshots tested | 3 | P1 | §5 |
| `live-pnl` | Live P&L: real numbers flow from a system, net of the store cut, never hand-authored | 3 | P1 | common |
| `organic-channel` | At least one organic install source carrying real volume | 3 | P2 | §6 |
| `plan-mix` | Yearly-weighted plans with a trial length that converts, and no weekly plans | 3 | P2 | §8 |
| `dunning` | Billing-failure retry recovering involuntary churn | 3 | P2 | §2 |
| `email-list` | Active email list: an owned list with capture running and sends on a real cadence | 3 | P3 | common |
| `feedback-intake` | A public feature board where users request and see what has already been asked, whose contents reach the roadmap | 3 | P3 | common |
| `ltv-cac` | LTV clearing CAC with margin after the store cut, at a payback the unit can float | 4 | P1 | §2, §11 |
| `paid-ua` | Paid user acquisition, opened only once the funnel and retention are proven | 4 | P2 | §6 |
| `web-checkout` | Checkout outside store billing where the jurisdiction allows it, for the margin | 4 | P2 | §2 |
| `localization` | Localized listing and store expansion once the core converts in one market | 4 | P3 | §5, §7 |
| `portfolio-replication` | The build, ASO, and monetize loop replicated onto the next concept | 4 | P3 | §7 |

---

*Research-sourced methodology, **no operated mobile-app experience yet**. Anchored on RevenueCat's State of Subscription Apps 2026 (the best public subscription dataset), current Apple/Google 2026 store terms, AppTweak ASO benchmarks, and Flippa exit data. Re-verify before a build locks: the exact Google Play effective subscription rate once the 2026 US/EEA rollout lands, Apple's EU/US external-payment fee schedules, and whether the hard-paywall conversion decline (12.1%→10.7%) continues. Update when a launch proves or disproves something about the **model**, not just one concept, and graduate toward the operated tier described in the [catalog](../README.md).*

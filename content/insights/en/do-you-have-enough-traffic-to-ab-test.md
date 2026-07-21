---
title: "How Much Traffic Do You Need to A/B Test? (The 10-Minute Math)"
description: "Most sites don't have enough traffic to A/B test reliably. Use this simple sample size formula to check in 10 minutes — and learn what to do if you fall short."
slug: do-you-have-enough-traffic-to-ab-test
date: 2026-07-21
author: Split Rocket
keywords:
  - how much traffic do you need for A/B testing
  - A/B test sample size
  - A/B test duration
  - minimum detectable effect
  - low traffic A/B testing alternatives
---

# How Much Traffic Do You Need to A/B Test? (The 10-Minute Math)

**Quick answer:** For a typical site converting at 2.5%, detecting a 10% relative lift with standard settings (95% significance, 80% power) requires roughly **62,000 visitors per variant — about 125,000 total**. If the page you want to test can't deliver that within 4–8 weeks, a classic A/B test will likely give you an unreliable answer, and you're better off making bold changes and measuring before/after instead. The math to check your own numbers takes about 10 minutes — here's how.

Now, the awkward truth most CRO agencies won't lead with: a huge chunk of the A/B tests running right now should never have been started. Not because the ideas were bad — because the site didn't have enough traffic to ever get a trustworthy answer.

And the cruel part? The test still *ends*. The tool still declares a winner. Everyone high-fives. And then the "winning" version goes live and revenue doesn't move, because the winner was noise wearing a trophy.

So before you test anything, let's answer one question: **do you have enough traffic to A/B test at all?** Grab a coffee, open your analytics, and let's go.

## Step 1: The three numbers you need for an A/B test sample size calculation

You need:

1. **Your baseline conversion rate** — for the *specific page or funnel* you want to test, not your whole site. If you're testing a product page, you want the conversion rate of people who hit that product page and eventually bought. Pull the last 30–90 days.
2. **Your weekly visitors to that page.** Again — that page, not the site. Your homepage might get 50,000 visits a week while the landing page you want to test gets 3,000. The 3,000 is your number.
3. **The smallest lift you'd actually care about.** This one's a judgment call, and it's where most people go wrong, so let's talk about it.

That third number has a fancy name — the **minimum detectable effect (MDE)**: the smallest improvement in conversion rate that your test is designed to reliably detect. The plain-English version is: "how big does the improvement need to be before it's worth my time?"

Here's the thing people get backwards: they think being humble ("I'd be happy with even a 2% lift!") makes the test easier. It's the opposite. **The smaller the change you want to detect, the more traffic you need — and it gets expensive fast.** Detecting a 5% lift doesn't need double the traffic of a 10% lift. It needs roughly *four times* as much, because the traffic requirement scales with the square of the effect size.

For most ecommerce stores and SaaS sites, a **10–15% relative lift** is a reasonable minimum detectable effect. If your baseline conversion rate is 2.5%, a 10% relative lift means going from 2.5% to 2.75%.

## Step 2: How to calculate your A/B test sample size (the napkin formula)

There's a proper formula with Greek letters, and if you want it, any sample size calculator (Evan Miller's is the classic) runs it for you. But here's the napkin version, assuming the standard setup — 95% statistical significance and 80% statistical power:

> **Visitors needed per variant ≈ 16 × p × (1 − p) ÷ d²**

Where:

- **p** = your baseline conversion rate, as a decimal (2.5% → 0.025)
- **d** = the *absolute* change you want to detect, as a decimal (2.5% → 2.75% is an absolute change of 0.25%, so 0.0025)

Let's run it for our example store:

```
16 × 0.025 × 0.975 ÷ (0.0025)²
= 16 × 0.024375 ÷ 0.00000625
≈ 62,400 visitors per variant
```

**62,400 visitors for the control, and 62,400 for the variation. About 125,000 visitors total.** For one test. With only two versions.

If your jaw just dropped a little — good, that's the point of doing this before the test instead of after. This is exactly why the "we ran it for a week and version B won with 99% confidence!" case studies you see at conferences are mostly fairy tales. A 99% badge on a test where each variant had 30 conversions isn't a result, it's a coin flip with good marketing.

## Step 3: How long should your A/B test run?

Now divide by your weekly traffic to that page:

```
Test duration in weeks = total visitors needed ÷ weekly visitors to the page
```

Our example store (125,000 visitors needed), three scenarios:

| Weekly visitors to the page | Test duration | Verdict |
| --- | --- | --- |
| 60,000 | ~2 weeks | Green light — run the test |
| 20,000 | ~6 weeks | Yellow — doable, but change your approach |
| 5,000 | ~25 weeks | Red — do not run this test |

Two quick rules while you're here:

- **Always run full weeks.** Your Tuesday traffic and your Saturday traffic are different people in different moods. Run 2 weeks, not 10 days.
- **Don't run an A/B test longer than 6–8 weeks.** Cookies get deleted, sales come and go, seasons change, your traffic mix drifts. A 25-week test isn't a slow test, it's a broken one.

## Step 4: What your result means — and what to do about it

Here's the decision fork — this is the whole reason you did the math.

### Under 4 weeks: you have enough traffic to A/B test

Pick your test, calculate the duration *before* you launch, and — this is the hard part — **don't peek and stop early.** Checking in is fine. Ending the test the first time your tool flashes "significant!" is how you ship false winners. Decide the finish line up front, then respect it.

### 4–8 weeks: test, but change the game

You *can* test, but you can't afford to be timid. So:

- **Swing bigger.** Remember, traffic needed scales with the inverse square of the effect. A bold change you believe could drive a 20% lift needs only a quarter of the traffic of a subtle 10% tweak. This is the zone for redesigned pages and new offers — not button colors.
- **Stick to two variants.** Every extra variation splits your traffic further. A/B, not A/B/C/D.
- **Test upstream.** More people see your homepage and top category pages than your checkout. Test where the traffic is.
- **Move the goalpost closer.** If purchases are too rare, consider measuring add-to-cart instead. More events = faster answers. Just be honest with yourself that you're now optimizing add-to-cart, and confirm the revenue actually follows.

### Over 8 weeks: low-traffic alternatives to A/B testing

This is where I'm supposed to sell you testing anyway. I'm not going to, because a 25-week test is worse than no test — it eats six months and hands you an answer you can't trust.

Instead, here's what actually works at low traffic:

- **Just ship it, and measure before/after.** For obvious improvements — fixing a confusing checkout, adding trust signals, clarifying your offer — make the change and compare a few weeks of after vs. before. It's not statistically pure. It's also how every successful low-traffic business improves. Watch out for seasonality (don't compare a sale period against a normal one) and you'll be fine.
- **Go qualitative.** Five user-testing sessions will surface problems no A/B test would find in a year. Session recordings, heatmaps, a one-question poll ("what almost stopped you from buying today?"), reading your support tickets — at low traffic, *this* is your optimization program, and honestly, it's underrated at high traffic too.
- **Stack your changes.** Instead of testing one tweak, bundle five improvements informed by that research and ship them together. You won't know which one worked. You don't need to — you need the number to go up.

## Common A/B testing mistakes that invalidate your results

Even with the math done, these four mistakes will quietly wreck your results:

1. **Peeking and stopping early.** The #1 killer. If you check daily and stop on a good day, your "95% confidence" is fiction. Set the end date up front.
2. **Trusting the tool's "winner" badge over your sample size.** The software will happily declare significance on 40 conversions. Significance without sufficient sample size is how false positives are born.
3. **Testing tiny changes on modest traffic.** A word swap in your CTA might be a 2% lift. On 10,000 visitors a week at a 2.5% baseline, detecting that would take *years*. Match the boldness of the change to the traffic you have.
4. **Using sitewide traffic in the math.** The sample size calculation only cares about visitors who actually enter the test. Be honest about the real number.

## TL;DR: How to know if you can A/B test

1. Get your page's conversion rate, its weekly traffic, and the smallest lift worth caring about (start with a 10–15% relative minimum detectable effect).
2. Napkin math: **16 × p × (1 − p) ÷ d²** visitors per variant (or use a sample size calculator — same answer, less arithmetic).
3. Divide by weekly traffic. **Under 4 weeks: run the test. 4–8 weeks: test bigger changes with only two variants. Over 8 weeks: skip the A/B test** — ship smart changes, measure before/after, and talk to your users.
4. Whatever you do, decide the finish line before you start, and don't let the tool's confetti talk you out of it.

The goal was never "run A/B tests." The goal is to make your site better, faster. Sometimes the most data-driven decision you can make is knowing when the data can't help you — and doing the smart thing anyway.

## Frequently asked questions

### How much traffic do you need for A/B testing?

There's no universal number — it depends on your conversion rate and the lift you want to detect. As a benchmark, a page converting at 2.5% needs about 125,000 total visitors to reliably detect a 10% relative lift at 95% significance and 80% power. Use the formula 16 × p × (1 − p) ÷ d² per variant to calculate your own requirement, and aim to reach it within 4–8 weeks.

### What is a minimum detectable effect (MDE)?

The minimum detectable effect is the smallest improvement your A/B test is designed to reliably detect — for example, a 10% relative lift on a 2.5% baseline means detecting a move to 2.75%. Smaller MDEs require dramatically more traffic: halving the effect you want to detect roughly quadruples the sample size needed.

### How long should an A/B test run?

Long enough to reach your pre-calculated sample size, always in full-week increments, and ideally between 2 and 8 weeks. Tests shorter than a full week get skewed by day-of-week behavior; tests longer than 8 weeks accumulate problems like cookie deletion, seasonality, and traffic-mix drift that undermine the results.

### Can you A/B test with low traffic?

Usually not reliably — and running an underpowered test is worse than not testing, because it produces confident-looking false winners. Low-traffic sites improve faster by making bold, research-backed changes and comparing before/after performance, running qualitative research (user tests, session recordings, polls), and bundling multiple improvements into one release.

### Why did my A/B testing tool declare a winner that didn't improve revenue?

Most likely the test was underpowered: with a small sample, tools can flag statistical significance on what is actually random noise, especially if you stopped the test as soon as it showed a positive result. A "95% significant" result only means what it says when the pre-calculated sample size was reached and the end date was set before the test started.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much traffic do you need for A/B testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your conversion rate and the lift you want to detect. As a benchmark, a page converting at 2.5% needs about 125,000 total visitors to reliably detect a 10% relative lift at 95% significance and 80% power. Use the formula 16 × p × (1 − p) ÷ d² per variant, and aim to reach the required sample within 4–8 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What is a minimum detectable effect (MDE)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The minimum detectable effect is the smallest improvement an A/B test is designed to reliably detect. Smaller MDEs require dramatically more traffic: halving the effect you want to detect roughly quadruples the required sample size."
      }
    },
    {
      "@type": "Question",
      "name": "How long should an A/B test run?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Long enough to reach your pre-calculated sample size, always in full-week increments, and ideally between 2 and 8 weeks. Shorter tests get skewed by day-of-week behavior; tests longer than 8 weeks suffer from cookie deletion, seasonality, and traffic-mix drift."
      }
    },
    {
      "@type": "Question",
      "name": "Can you A/B test with low traffic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually not reliably. Underpowered tests produce confident-looking false winners. Low-traffic sites improve faster by shipping bold, research-backed changes and measuring before/after, running qualitative research, and bundling multiple improvements into one release."
      }
    },
    {
      "@type": "Question",
      "name": "Why did my A/B testing tool declare a winner that didn't improve revenue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The test was most likely underpowered: with a small sample, tools can flag statistical significance on random noise, especially if the test was stopped early. Significance is only trustworthy when the pre-calculated sample size was reached and the end date was fixed before the test started."
      }
    }
  ]
}
</script>

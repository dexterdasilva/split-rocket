# Daily e-commerce news feed

Articles in `en/` and `es/` are rendered at `/{locale}/news` by `lib/news.ts`, which scans these directories at build time — publishing a new article only requires adding a markdown file and deploying. File names follow `YYYY-MM-DD-<slug>.md`, and the English and Spanish versions of a story share the same `slug` so the language switcher works.

## Frontmatter

```yaml
---
title: "Headline"
description: "One-to-two sentence dek shown on the list page and in metadata."
slug: story-slug
date: 2026-07-21
tag: Marketplaces   # short category label, e.g. Marketplaces, Platforms, Regulation, Logistics, AI
sources:
  - name: "Publication — article title"
    url: "https://..."
---
```

## Editorial standard

- One story per day, chosen for relevance to e-commerce operators (DTC and marketplace brands).
- Every factual claim must be verified against at least two independent sources, preferring primary sources (official announcements, filings, documentation) over secondary coverage.
- All sources used for verification are listed in `sources` frontmatter; they render as a "Sources" section on the article page.
- If a claim cannot be corroborated, leave it out or attribute it explicitly ("according to X").
- Close with a short section on what the story means for store operators.

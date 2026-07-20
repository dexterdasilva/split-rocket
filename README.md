# Split Rocket

Standalone bilingual lead-generation site for Split Rocket. Built with Next.js App Router, TypeScript, Tailwind CSS, Vercel Analytics/Speed Insights, Resend, Calendly, and a Sanity-ready document schema.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site uses static launch content as a safe fallback. `sanity/schemaTypes.ts` defines independently publishable English and Spanish services, case studies, and insights. Connect a Sanity project/client and replace the content adapter in `lib/content.ts` when editorial credentials are available. Configure the webhook to POST to `/api/revalidate` with `Authorization: Bearer $SANITY_REVALIDATE_SECRET`.

Production requires Resend recipient/sender variables, a Calendly event URL, and Cloudflare Turnstile keys. In development, spam verification is bypassed when no secret exists; it fails closed in production.

Case-study figures are intentionally marked illustrative. Replace them only with client-approved evidence including baseline, hypothesis, work, duration, sample/method, and metric definition.

## Verification

```bash
npm run typecheck
npm run build
```

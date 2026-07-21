import { notFound } from "next/navigation";
import { insights } from "@/lib/content";
import { isLocale, locales } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { JsonLd, TrackedLink } from "@/components/site";
import { getMarkdownArticle } from "@/lib/articles";

const markdownSlugs = [{ locale: "en", slug: "do-you-have-enough-traffic-to-ab-test" }];

export function generateStaticParams() {
  return [...locales.flatMap((locale) => insights[locale].map((item) => ({ locale, slug: item.slug }))), ...markdownSlugs];
}

async function get(params: Promise<{ locale: string; slug: string }>) {
  const p = await params;
  if (!isLocale(p.locale)) return null;
  const markdown = await getMarkdownArticle(p.locale, p.slug);
  if (markdown) return { locale: p.locale, markdown } as const;
  const item = insights[p.locale].find((entry) => entry.slug === p.slug);
  return item ? ({ locale: p.locale, item } as const) : null;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const data = await get(params);
  if (!data) return {};
  if ("markdown" in data && data.markdown) return { ...localizedMetadata(data.locale, `/insights/${data.markdown.slug}`, data.markdown.title, data.markdown.description), keywords: data.markdown.keywords };
  return localizedMetadata(data.locale, `/insights/${data.item.slug}`, data.item.title, data.item.intro);
}

export default async function Insight({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const data = await get(params);
  if (!data) notFound();
  if ("markdown" in data && data.markdown) {
    const article = data.markdown;
    return <article className="editorial-article">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: article.date, dateModified: article.date, author: { "@type": "Organization", name: article.author }, publisher: { "@type": "Organization", name: "Split Rocket" } }} />
      {article.faqSchema && <JsonLd data={article.faqSchema} />}
      <header className="article-hero"><div className="wrap article-hero-inner"><p className="eyebrow article-kicker">CRO FIELD GUIDE · 01</p><h1>{article.title}</h1><p className="article-dek">{article.description}</p><div className="article-meta"><span>{article.author}</span><span>{new Date(`${article.date}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span><span>{article.readingMinutes} min read</span></div></div></header>
      <div className="wrap article-layout"><aside className="article-aside"><p className="eyebrow">In this guide</p><nav aria-label="Article table of contents">{article.toc.map((item) => <a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</nav><TrackedLink className="article-side-cta" href="/en/contact">Talk to a CRO strategist →</TrackedLink></aside><div className="article-body" dangerouslySetInnerHTML={{ __html: article.html }} /></div>
      <section className="article-end"><div className="wrap"><p className="eyebrow">The smart next step</p><h2>Know whether experimentation fits your traffic.</h2><p>We’ll look at your traffic, baseline conversion rate, and commercial priorities—then recommend the right growth approach.</p><TrackedLink href="/en/contact" className="button hero-button">Increase My Conversion Rate</TrackedLink></div></section>
    </article>;
  }
  const { locale, item } = data;
  return <article><JsonLd data={{ "@context":"https://schema.org", "@type":"Article", headline:item.title, description:item.intro, author:{"@type":"Organization",name:"Split Rocket"}, dateModified:"2026-07-20" }}/><header className="grid-bg py-24 border-b border-black/20"><div className="wrap max-w-4xl"><p className="eyebrow text-[#3157ff]">{item.tag}</p><h1 className="headline mt-8">{item.title}</h1><p className="text-2xl mt-10 leading-relaxed">{item.intro}</p><p className="eyebrow mt-10 opacity-60">Split Rocket · {locale==="en"?"Reviewed July 2026":"Revisado en julio de 2026"}</p></div></header><div className="wrap max-w-4xl py-20">{item.sections.map(([title,body],i)=><section className="grid md:grid-cols-[80px_1fr] border-t border-black/20 py-10" key={title}><span className="eyebrow">0{i+1}</span><div><h2 className="text-3xl font-black">{title}</h2><p className="prose mt-4">{body}</p></div></section>)}</div></article>;
}

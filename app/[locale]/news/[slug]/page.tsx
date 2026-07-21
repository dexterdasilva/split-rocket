import { notFound } from "next/navigation";
import { getNewsArticle, listNews } from "@/lib/news";
import { isLocale, locales } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { JsonLd, TrackedLink } from "@/components/site";

export async function generateStaticParams() {
  const params = await Promise.all(locales.map(async (locale) => (await listNews(locale)).map((article) => ({ locale, slug: article.slug }))));
  return params.flat();
}

async function get(params: Promise<{ locale: string; slug: string }>) {
  const p = await params;
  if (!isLocale(p.locale)) return null;
  const article = await getNewsArticle(p.locale, p.slug);
  return article ? ({ locale: p.locale, article } as const) : null;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const data = await get(params);
  return data ? localizedMetadata(data.locale, `/news/${data.article.slug}`, data.article.title, data.article.description) : {};
}

export default async function NewsStory({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const data = await get(params);
  if (!data) notFound();
  const { locale, article } = data;
  const formatDate = (date: string) => new Date(`${date}T12:00:00`).toLocaleDateString(locale === "en" ? "en-US" : "es-419", { month: "long", day: "numeric", year: "numeric" });
  return <article>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "NewsArticle", headline: article.title, description: article.description, datePublished: article.date, dateModified: article.date, author: { "@type": "Organization", name: "Split Rocket" }, publisher: { "@type": "Organization", name: "Split Rocket" } }} />
    <header className="grid-bg py-24 border-b border-black/20"><div className="wrap max-w-4xl">
      <p className="eyebrow text-[#3157ff]">{article.tag}</p>
      <h1 className="headline mt-8">{article.title}</h1>
      <p className="text-2xl mt-10 leading-relaxed">{article.description}</p>
      <div className="article-meta mt-10"><span>Split Rocket</span><span>{formatDate(article.date)}</span><span>{article.readingMinutes} min</span></div>
    </div></header>
    <div className="wrap max-w-4xl py-20">
      <div className="article-body" dangerouslySetInnerHTML={{ __html: article.html }} />
      {article.sources.length > 0 && <section className="border-t border-black/20 mt-14 pt-10">
        <p className="eyebrow">{locale === "en" ? "Sources" : "Fuentes"}</p>
        <ul className="prose mt-4 space-y-2">{article.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer" target="_blank">{source.name}</a></li>)}</ul>
      </section>}
    </div>
    <section className="article-end"><div className="wrap">
      <p className="eyebrow">{locale === "en" ? "Put it to work" : "Ponlo en práctica"}</p>
      <h2>{locale === "en" ? "Want to know what this means for your store?" : "¿Quieres saber qué significa esto para tu tienda?"}</h2>
      <p>{locale === "en" ? "We track the industry so our experiments start from evidence. Let's talk about your next growth move." : "Seguimos la industria para que nuestros experimentos partan de evidencia. Hablemos de tu próximo paso de crecimiento."}</p>
      <TrackedLink href={`/${locale}/contact`} className="button hero-button">{locale === "en" ? "Book a strategy call" : "Agenda una llamada"}</TrackedLink>
    </div></section>
  </article>;
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { listNews } from "@/lib/news";
import { isLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale)
    ? localizedMetadata(locale, "/news", locale === "en" ? "E-commerce news, verified daily" : "Noticias de e-commerce, verificadas a diario", locale === "en" ? "Daily coverage of the e-commerce stories that matter, fact-checked against multiple sources before we publish." : "Cobertura diaria de las noticias de e-commerce que importan, verificadas con múltiples fuentes antes de publicar.")
    : {};
}

export default async function News({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const articles = await listNews(locale);
  const formatDate = (date: string) => new Date(`${date}T12:00:00`).toLocaleDateString(locale === "en" ? "en-US" : "es-419", { month: "long", day: "numeric", year: "numeric" });
  return <section className="py-24"><div className="wrap">
    <p className="eyebrow">{locale === "en" ? "The daily brief / 05" : "El resumen diario / 05"}</p>
    <h1 className="display mt-7 max-w-5xl">{locale === "en" ? "E-commerce news, verified before it reaches you." : "Noticias de e-commerce, verificadas antes de llegar a ti."}</h1>
    <p className="text-2xl mt-8 max-w-3xl leading-relaxed">{locale === "en" ? "One story a day. Every claim cross-checked against multiple independent sources, with the receipts linked at the bottom." : "Una noticia al día. Cada dato se contrasta con varias fuentes independientes, con los enlaces al final."}</p>
    {articles.length === 0 && <p className="prose mt-16">{locale === "en" ? "The first brief is on its way. Check back tomorrow." : "El primer resumen está en camino. Vuelve mañana."}</p>}
    <div className="mt-16 border-t border-black">{articles.map((article) => <Link className="py-9 border-b border-black/20 grid md:grid-cols-[160px_1fr_auto] gap-5 items-center group" href={`/${locale}/news/${article.slug}`} key={article.slug}>
      <span className="eyebrow">{formatDate(article.date)}</span>
      <div><span className="eyebrow text-[#3157ff]">{article.tag}</span><h2 className="text-3xl font-black tracking-tight mt-2 group-hover:translate-x-2 transition-transform">{article.title}</h2><p className="prose mt-3">{article.description}</p></div>
      <span className="text-3xl">↗</span>
    </Link>)}</div>
  </div></section>;
}

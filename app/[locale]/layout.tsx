import { notFound } from "next/navigation";
import { Header, Footer, JsonLd } from "@/components/site";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><JsonLd data={{ "@context":"https://schema.org", "@type":["Organization","ProfessionalService"], name:"Split Rocket", url:process.env.NEXT_PUBLIC_SITE_URL || "https://splitrocket.com", areaServed:["US","Latin America"], knowsAbout:["Conversion rate optimization","E-commerce lifecycle marketing","Meta advertising","Google advertising"] }} /><Header locale={locale} /><main>{children}</main><Footer locale={locale} /></>;
}

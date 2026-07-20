import type { Metadata } from "next";
import type { Locale } from "./i18n";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://splitrocket.com";
export function localizedMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const alternate = locale === "en" ? "es" : "en";
  const canonical = `${origin}/${locale}${path}`;
  return { title: `${title} | Split Rocket`, description, alternates: { canonical, languages: { [locale]: canonical, [alternate]: `${origin}/${alternate}${path}`, "x-default": `${origin}/en${path}` } }, openGraph: { title, description, url:canonical, siteName:"Split Rocket", locale:locale === "en" ? "en_US" : "es_419", type:"website" } };
}

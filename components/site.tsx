"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import type { Locale } from "@/lib/i18n";
import { labels } from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locale === "en" ? "es" : "en";
  const switched = pathname.replace(/^\/(en|es)/, `/${other}`);
  const l = labels[locale];
  return <header className="border-b border-black/20 bg-[#f4f1e9]/95 sticky top-0 z-50 backdrop-blur">
    <div className="wrap h-20 flex items-center justify-between gap-5">
      <Link href={`/${locale}`} className="font-black text-xl tracking-[-.06em]" aria-label="Split Rocket home">SPLIT/ROCKET</Link>
      <nav className="hidden md:flex items-center gap-7 text-sm font-bold" aria-label="Main navigation">
        <Link href={`/${locale}/services/cro`}>{l.services}</Link><Link href={`/${locale}/case-studies`}>{l.cases}</Link><Link href={`/${locale}/insights`}>{l.insights}</Link>
      </nav>
      <div className="flex items-center gap-3"><Link href={switched} hrefLang={other} className="text-xs font-black uppercase border border-black px-2 py-1">{other}</Link><TrackedLink href={`/${locale}/contact`} className="button !min-h-10 !px-4 text-sm">{l.contact}</TrackedLink></div>
    </div>
  </header>;
}

export function Footer({ locale }: { locale: Locale }) {
  return <footer className="bg-[#12130f] text-white py-14"><div className="wrap grid md:grid-cols-2 gap-10"><div><div className="font-black text-3xl tracking-[-.07em]">SPLIT/ROCKET</div><p className="text-white/60 mt-3 max-w-sm">{locale === "en" ? "Evidence-led growth for ambitious e-commerce brands." : "Crecimiento basado en evidencia para marcas de e-commerce ambiciosas."}</p></div><div className="md:text-right flex md:justify-end items-end gap-5 text-sm"><Link href={`/${locale}/privacy`}>Privacy</Link><Link href={`/${locale}/terms`}>Terms</Link><span>© 2026</span></div></div></footer>;
}

export function TrackedLink(props: React.ComponentProps<typeof Link>) {
  return <Link {...props} onClick={(event) => { track("primary_cta_click", { path: String(props.href) }); props.onClick?.(event); }} />;
}

export function JsonLd({ data }: { data: object }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />; }

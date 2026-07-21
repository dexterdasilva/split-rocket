"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { labels } from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 80); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  const other = locale === "en" ? "es" : "en";
  const switched = pathname.replace(/^\/(en|es)/, `/${other}`);
  const l = labels[locale];
  return <header className={`site-header${isHome ? " is-overlay" : ""}${isHome && scrolled ? " is-scrolled" : ""}`}>
    <div className="nav-glass">
      <nav className="nav-links" aria-label="Main navigation">
        <Link href={`/${locale}/services/cro`}>{l.services}</Link><Link href={`/${locale}/case-studies`}>{l.cases}</Link><Link href={`/${locale}/insights`}>{l.insights}</Link><Link href={`/${locale}/about`}>{locale === "en" ? "About" : "Nosotros"}</Link>
      </nav>
      <Link href={`/${locale}`} className="brand-wordmark" aria-label="Split Rocket home">SPLIT ROCKET</Link>
      <div className="nav-actions"><Link href={switched} hrefLang={other} className="language-link">{other}</Link></div>
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { labels } from "@/lib/i18n";
import { serviceGroups, services } from "@/lib/content";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 80); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => { if (!menuOpen) return; const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, [menuOpen]);
  const other = locale === "en" ? "es" : "en";
  const switched = pathname.replace(/^\/(en|es)/, `/${other}`);
  const l = labels[locale];
  const catalog = services[locale];
  return <header className={`site-header is-overlay${scrolled ? " is-scrolled" : ""}`}>
    <div className="nav-glass">
      <nav id="main-navigation" className={`nav-links${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        <div className="service-menu"><Link className="service-trigger" onClick={() => setMenuOpen(false)} href={`/${locale}/services/cro`}>{l.services}<span aria-hidden="true">⌄</span></Link><div className="mega-menu"><div className="mega-heading"><p className="eyebrow">{locale === "en" ? "What we do" : "Qué hacemos"}</p><strong>{locale === "en" ? "One growth system. Five ways in." : "Un sistema de crecimiento. Cinco formas de entrar."}</strong></div>{serviceGroups[locale].map((group,index)=><div className="mega-group" key={group.key}><p><span>0{index+1}</span>{group.label}</p><small>{group.description}</small><div>{group.slugs.map((slug)=>{const service=catalog.find((item)=>item.slug===slug);return service?<Link onClick={()=>setMenuOpen(false)} href={`/${locale}/services/${slug}`} key={slug}>{service.name}<span>↗</span></Link>:null})}</div></div>)}</div></div><Link onClick={() => setMenuOpen(false)} href={`/${locale}/case-studies`}>{l.cases}</Link><Link onClick={() => setMenuOpen(false)} href={`/${locale}/insights`}>{l.insights}</Link><Link onClick={() => setMenuOpen(false)} href={`/${locale}/about`}>{locale === "en" ? "About" : "Nosotros"}</Link><Link onClick={() => setMenuOpen(false)} href={switched} hrefLang={other} className="mobile-language">{locale === "en" ? "Español" : "English"}</Link>
      </nav>
      <Link href={`/${locale}`} className="brand-wordmark" aria-label="Split Rocket home">SPLIT ROCKET</Link>
      <div className="nav-actions"><Link href={switched} hrefLang={other} className="language-link">{other}</Link><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}><span/><span/><span/></button></div>
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

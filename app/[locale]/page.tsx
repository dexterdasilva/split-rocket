import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, labels } from "@/lib/i18n";
import { siteCopy, serviceGroups, cases } from "@/lib/content";
import { localizedMetadata } from "@/lib/metadata";
import { TrackedLink } from "@/components/site";

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }) { const { locale } = await params; if (!isLocale(locale)) return {}; const c=siteCopy[locale]; return localizedMetadata(locale,"",c.hero.title,c.hero.body); }
const clientNames = ["Bésame Cosmetics", "Bushbalm", "Spice Tribe", "GRAYL", "resbiotic", "Clocks + Colours", "VITALY", "Etah Love", "MICHI", "Cienfuegos", "Voncelle"];
export default async function Home({ params }: { params:Promise<{locale:string}> }) {
  const { locale }=await params; if(!isLocale(locale)) notFound(); const c=siteCopy[locale], l=labels[locale];
  return <>
    <section className="hero-simple border-b border-black/20"><div className="wrap hero-content flex flex-col items-center text-center"><h1 className="hero-title">{locale === "en" ? <><span>Do You Want to Increase</span><span>Your Conversion Rate?</span></> : <><span>¿Quieres aumentar tu tasa</span><span>de conversión?</span></>}</h1><p className="hero-copy mt-7 max-w-3xl">{c.hero.body}</p><TrackedLink className="button hero-button mt-9" href={`/${locale}/contact`}>{c.hero.cta}</TrackedLink></div></section>
    <section className="logo-cloud" aria-label={locale === "en" ? "Brands that trust Split Rocket" : "Marcas que confían en Split Rocket"}><p className="eyebrow logo-cloud-label">{locale === "en" ? "Trusted by" : "Marcas que confían en nosotros"}</p><div className="logo-marquee"><div className="logo-track">{[0,1].map(group=><div className="logo-group" aria-hidden={group === 1} key={group}>{clientNames.map(name=><span className="client-wordmark" key={name}>{name}</span>)}</div>)}</div></div></section>
    <div className="bg-[#dfff55] py-4 border-b border-black"><p className="wrap eyebrow text-center">{c.proof}</p></div>
    <section className="py-24"><div className="wrap"><p className="eyebrow mb-5">01 / {l.services}</p><h2 className="headline max-w-3xl">{c.servicesTitle}</h2><div className="service-family-grid">{serviceGroups[locale].map((group,i)=><Link key={group.key} href={`/${locale}/services/${group.slugs[0]}`} className="service-family-card"><span className="eyebrow">0{i+1}</span><h3>{group.label}</h3><p>{group.description}</p><small>{group.slugs.length} {locale==="en"?(group.slugs.length===1?"service":"services"):(group.slugs.length===1?"servicio":"servicios")} →</small></Link>)}</div></div></section>
    <section className="bg-[#12130f] text-white py-24"><div className="wrap"><p className="eyebrow text-[#dfff55] mb-5">02 / Process</p><h2 className="headline max-w-3xl">{c.processTitle}</h2><div className="grid md:grid-cols-4 mt-16 border-t border-white/30">{c.process.map(([n,title,body])=><div className="pt-6 md:pr-8" key={n}><span className="eyebrow text-[#dfff55]">{n}</span><h3 className="text-2xl font-bold mt-8">{title}</h3><p className="mt-3 text-white/60 leading-relaxed">{body}</p></div>)}</div></div></section>
    <section className="py-24"><div className="wrap"><p className="eyebrow mb-5">03 / Proof</p><h2 className="headline">{c.resultTitle}</h2><div className="grid md:grid-cols-3 mt-14 gap-5">{cases[locale].map(item=><Link className="card" key={item.slug} href={`/${locale}/case-studies/${item.slug}`}><p className="eyebrow">{item.sector}</p><div className="metric mt-8">{item.metric}</div><p className="font-bold">{item.label}</p><h3 className="text-xl font-bold mt-10">{item.title}</h3></Link>)}</div></div></section>
    <section className="bg-[#3157ff] text-white py-24"><div className="wrap grid md:grid-cols-2 gap-10 items-end"><h2 className="headline">{c.finalTitle}</h2><div><p className="text-xl mb-8 max-w-lg">{c.finalBody}</p><TrackedLink className="button light" href={`/${locale}/contact`}>{l.contact} →</TrackedLink></div></div></section>
  </>;
}

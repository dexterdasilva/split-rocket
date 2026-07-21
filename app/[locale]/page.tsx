import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, labels } from "@/lib/i18n";
import { siteCopy, services, cases } from "@/lib/content";
import { localizedMetadata } from "@/lib/metadata";
import { TrackedLink } from "@/components/site";

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }) { const { locale } = await params; if (!isLocale(locale)) return {}; const c=siteCopy[locale]; return localizedMetadata(locale,"",c.hero.title,c.hero.body); }
export default async function Home({ params }: { params:Promise<{locale:string}> }) {
  const { locale }=await params; if(!isLocale(locale)) notFound(); const c=siteCopy[locale], l=labels[locale];
  return <>
    <section className="hero-simple border-b border-black/20"><div className="wrap flex flex-col items-center text-center"><p className="eyebrow text-[#3157ff]">{c.hero.eyebrow}</p><h1 className="hero-title mt-7 max-w-4xl">{c.hero.title}</h1><p className="hero-copy mt-7 max-w-3xl">{c.hero.body}</p><TrackedLink className="button hero-button mt-9" href={`/${locale}/contact`}>{c.hero.cta}</TrackedLink><p className="text-sm mt-4 opacity-60">{c.hero.note}</p></div></section>
    <div className="bg-[#dfff55] py-4 border-b border-black"><p className="wrap eyebrow text-center">{c.proof}</p></div>
    <section className="py-24"><div className="wrap"><p className="eyebrow mb-5">01 / {l.services}</p><h2 className="headline max-w-3xl">{c.servicesTitle}</h2><div className="grid md:grid-cols-3 mt-14">{services[locale].map((s,i)=><Link key={s.slug} href={`/${locale}/services/${s.slug}`} className="card"><span className="eyebrow opacity-50">0{i+1}</span><h3 className="text-3xl font-black tracking-tight mt-10">{s.name}</h3><p className="mt-4 leading-relaxed">{s.short}</p><p className="eyebrow mt-10 text-[#3157ff]">{s.eligibility}</p></Link>)}</div></div></section>
    <section className="bg-[#12130f] text-white py-24"><div className="wrap"><p className="eyebrow text-[#dfff55] mb-5">02 / Process</p><h2 className="headline max-w-3xl">{c.processTitle}</h2><div className="grid md:grid-cols-4 mt-16 border-t border-white/30">{c.process.map(([n,title,body])=><div className="pt-6 md:pr-8" key={n}><span className="eyebrow text-[#dfff55]">{n}</span><h3 className="text-2xl font-bold mt-8">{title}</h3><p className="mt-3 text-white/60 leading-relaxed">{body}</p></div>)}</div></div></section>
    <section className="py-24"><div className="wrap"><p className="eyebrow mb-5">03 / Proof</p><h2 className="headline">{c.resultTitle}</h2><div className="grid md:grid-cols-3 mt-14 gap-5">{cases[locale].map(item=><Link className="card" key={item.slug} href={`/${locale}/case-studies/${item.slug}`}><p className="eyebrow">{item.sector}</p><div className="metric mt-8">{item.metric}</div><p className="font-bold">{item.label}</p><h3 className="text-xl font-bold mt-10">{item.title}</h3></Link>)}</div></div></section>
    <section className="bg-[#3157ff] text-white py-24"><div className="wrap grid md:grid-cols-2 gap-10 items-end"><h2 className="headline">{c.finalTitle}</h2><div><p className="text-xl mb-8 max-w-lg">{c.finalBody}</p><TrackedLink className="button light" href={`/${locale}/contact`}>{l.contact} →</TrackedLink></div></div></section>
  </>;
}

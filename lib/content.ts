import type { Locale } from "./i18n";

export type ServiceKey = "cro" | "lifecycle-marketing" | "paid-media";

const copy = {
  en: {
    hero: { eyebrow: "CONVERSION RATE OPTIMIZATION FOR SHOPIFY BRANDS", title: "Do You Want to Increase Your Conversion Rate?", body: "We’ve helped Shopify brands generate $20M+ in annual revenue through data-driven conversion optimization.", cta: "Increase My Conversion Rate", note: "Best suited to stores with 50,000+ monthly sessions." },
    proof: "Senior-led strategy. Measurable experiments. No black-box retainers.",
    servicesTitle: "The right lever for your stage",
    processTitle: "A system for compounding growth",
    process: [["01", "Diagnose", "We combine analytics, research, and customer evidence."], ["02", "Prioritize", "We rank opportunities by impact, confidence, and effort."], ["03", "Experiment", "We design, build, QA, and measure every test."], ["04", "Scale", "Winning insights become durable growth systems."]],
    resultTitle: "Selected outcomes",
    finalTitle: "Your next growth move should be measurable.",
    finalBody: "Tell us where growth is stuck. We’ll recommend CRO, lifecycle, or paid media—and explain why.",
  },
  es: {
    hero: { eyebrow: "OPTIMIZACIÓN DE CONVERSIÓN PARA MARCAS EN SHOPIFY", title: "¿Quieres aumentar tu tasa de conversión?", body: "Hemos ayudado a marcas en Shopify a generar más de $20 millones en ingresos anuales mediante optimización de conversión basada en datos.", cta: "Aumentar mi tasa de conversión", note: "Ideal para tiendas con más de 50.000 sesiones mensuales." },
    proof: "Estrategia liderada por expertos. Experimentos medibles. Sin cajas negras.",
    servicesTitle: "La palanca correcta para tu etapa",
    processTitle: "Un sistema para crecer de forma acumulativa",
    process: [["01", "Diagnóstico", "Combinamos analítica, investigación y evidencia del cliente."], ["02", "Priorización", "Ordenamos oportunidades por impacto, confianza y esfuerzo."], ["03", "Experimentación", "Diseñamos, desarrollamos, validamos y medimos cada prueba."], ["04", "Escala", "Los aprendizajes ganadores se convierten en sistemas duraderos."]],
    resultTitle: "Resultados seleccionados",
    finalTitle: "Tu próximo paso de crecimiento debe ser medible.",
    finalBody: "Cuéntanos dónde se frenó el crecimiento. Te recomendaremos CRO, lifecycle o pauta, y te diremos por qué.",
  },
} as const;

export const services = {
  en: [
    { slug: "cro", name: "Conversion rate optimization", short: "Build an experimentation program that turns customer evidence into revenue.", eligibility: "For stores with 50,000+ monthly sessions", headline: "Replace conversion guesswork with a measurable growth system.", detail: "We uncover friction, prioritize high-value opportunities, and run rigorous experiments across the buying journey.", bullets: ["Quantitative and qualitative research", "Experiment roadmap and hypothesis design", "UX/UI design, development, and QA", "Statistical analysis and learning archive"] },
    { slug: "lifecycle-marketing", name: "Lifecycle marketing", short: "Grow repeat revenue with email and SMS journeys customers value.", eligibility: "For brands building retention", headline: "Make every customer relationship worth more.", detail: "We align segmentation, automation, and campaigns around the moments that move customers forward.", bullets: ["Lifecycle audit and strategy", "Email and SMS automation", "Campaign calendar and creative", "Segmentation and retention reporting"] },
    { slug: "paid-media", name: "Paid media", short: "Scale Meta and Google with disciplined creative testing and clear economics.", eligibility: "For brands ready to acquire", headline: "Acquire customers with clearer signals and sharper creative.", detail: "We connect media buying, creative experimentation, and landing-page performance to profitable growth.", bullets: ["Meta and Google campaign strategy", "Creative testing system", "Landing-page alignment", "Transparent acquisition reporting"] },
  ],
  es: [
    { slug: "cro", name: "Optimización de conversión", short: "Convierte evidencia del cliente en ingresos con un programa de experimentación.", eligibility: "Para tiendas con más de 50.000 sesiones al mes", headline: "Reemplaza las suposiciones con un sistema de crecimiento medible.", detail: "Detectamos fricción, priorizamos oportunidades y ejecutamos experimentos rigurosos en todo el recorrido de compra.", bullets: ["Investigación cuantitativa y cualitativa", "Roadmap e hipótesis", "Diseño UX/UI, desarrollo y QA", "Análisis estadístico y archivo de aprendizajes"] },
    { slug: "lifecycle-marketing", name: "Lifecycle marketing", short: "Aumenta la recompra con experiencias de email y SMS relevantes.", eligibility: "Para marcas que buscan retención", headline: "Haz que cada relación con tus clientes valga más.", detail: "Alineamos segmentación, automatizaciones y campañas con los momentos que impulsan a cada cliente.", bullets: ["Auditoría y estrategia lifecycle", "Automatizaciones de email y SMS", "Calendario de campañas y creatividad", "Segmentación y reportes de retención"] },
    { slug: "paid-media", name: "Paid media", short: "Escala Meta y Google con pruebas creativas disciplinadas y números claros.", eligibility: "Para marcas listas para adquirir", headline: "Adquiere clientes con mejores señales y creatividad más efectiva.", detail: "Conectamos compra de medios, experimentación creativa y landing pages para lograr crecimiento rentable.", bullets: ["Estrategia para Meta y Google", "Sistema de pruebas creativas", "Alineación de landing pages", "Reportes transparentes de adquisición"] },
  ],
} satisfies Record<Locale, { slug: ServiceKey; name: string; short: string; eligibility: string; headline: string; detail: string; bullets: string[] }[]>;

export const cases = {
  en: [
    { slug: "beauty-checkout", sector: "Beauty · CRO", title: "Removing checkout uncertainty lifted completed orders", metric: "+18%", label: "checkout conversion", body: "An anonymized growth-stage beauty brand had healthy product interest but excess abandonment. Research showed delivery ambiguity at the final step. A clarified checkout treatment produced an 18% relative lift over a four-week controlled test. Metrics shown are illustrative pending client approval." },
    { slug: "apparel-lifecycle", sector: "Apparel · Lifecycle", title: "A lifecycle rebuild made the second order more likely", metric: "+24%", label: "repeat revenue", body: "We reorganized post-purchase communication around product use, replenishment timing, and category affinity. The program delivered a 24% illustrative increase in repeat revenue over 90 days, pending client approval." },
    { slug: "home-paid-media", sector: "Home · Paid media", title: "Creative learning improved acquisition efficiency", metric: "−21%", label: "customer acquisition cost", body: "A structured Meta creative-testing cadence linked hooks to landing-page intent. The anonymized program reduced illustrative customer acquisition cost by 21% over eight weeks, pending client approval." },
  ],
  es: [
    { slug: "beauty-checkout", sector: "Belleza · CRO", title: "Eliminar dudas en el checkout aumentó las compras", metric: "+18%", label: "conversión en checkout", body: "Una marca anónima de belleza tenía alto interés pero demasiado abandono. La investigación reveló dudas sobre la entrega. Un tratamiento más claro produjo un aumento relativo ilustrativo del 18% en cuatro semanas, sujeto a aprobación del cliente." },
    { slug: "apparel-lifecycle", sector: "Moda · Lifecycle", title: "Una nueva estrategia aumentó la segunda compra", metric: "+24%", label: "ingresos por recompra", body: "Reorganizamos la comunicación poscompra según uso, reposición y afinidad de categoría. El programa generó un aumento ilustrativo del 24% en ingresos por recompra en 90 días, sujeto a aprobación." },
    { slug: "home-paid-media", sector: "Hogar · Paid media", title: "El aprendizaje creativo mejoró la eficiencia", metric: "−21%", label: "costo de adquisición", body: "Un sistema de pruebas creativas en Meta conectó mensajes con intención en la landing page. El programa redujo el CAC ilustrativo un 21% en ocho semanas, sujeto a aprobación." },
  ],
} as const;

export const insights = {
  en: [
    { slug: "cro-readiness", tag: "CRO readiness", title: "Is your store ready for a serious CRO program?", intro: "Traffic volume matters, but operational readiness determines whether experimentation compounds.", sections: [["The traffic threshold", "At roughly 50,000 monthly sessions, many stores can begin learning at a useful pace. Detectable effects still depend on baseline conversion and test scope."], ["The operating threshold", "You also need reliable analytics, capacity to ship changes, and agreement on how decisions will be made."], ["Start with a diagnosis", "Map the funnel, validate instrumentation, and identify the highest-cost uncertainties before building a backlog."]] },
    { slug: "experimentation-system", tag: "Experimentation", title: "How to build an e-commerce experimentation system", intro: "The best programs optimize the quality and reuse of learning—not the number of tests launched.", sections: [["Collect evidence", "Combine behavioral data, customer research, usability observations, and commercial context."], ["Write falsifiable hypotheses", "State the audience, observed friction, proposed change, and expected behavior before designing."], ["Preserve the learning", "Record outcomes, segments, caveats, and follow-up questions so every test improves the next one."]] },
    { slug: "growth-loop", tag: "Growth strategy", title: "Acquisition, conversion, and retention are one system", intro: "Treating the three levers separately hides the tradeoffs that shape profitable growth.", sections: [["Acquisition sets the promise", "Creative and targeting determine who arrives and what they expect."], ["Conversion fulfills it", "The site must continue that promise while resolving uncertainty and friction."], ["Retention proves value", "Repeat behavior reveals whether the acquired customer and delivered experience were truly aligned."]] },
  ],
  es: [
    { slug: "cro-readiness", tag: "Preparación para CRO", title: "¿Tu tienda está lista para un programa serio de CRO?", intro: "El volumen importa, pero la preparación operativa define si la experimentación genera valor acumulativo.", sections: [["El umbral de tráfico", "Con cerca de 50.000 sesiones mensuales, muchas tiendas pueden aprender a un ritmo útil. El efecto detectable también depende de la conversión base."], ["El umbral operativo", "También necesitas analítica confiable, capacidad para implementar y acuerdos claros para tomar decisiones."], ["Empieza con un diagnóstico", "Mapea el funnel, valida la medición e identifica las incertidumbres más costosas antes de crear el backlog."]] },
    { slug: "experimentation-system", tag: "Experimentación", title: "Cómo crear un sistema de experimentación para e-commerce", intro: "Los mejores programas optimizan la calidad y reutilización del aprendizaje, no la cantidad de pruebas.", sections: [["Reúne evidencia", "Combina datos de comportamiento, investigación, usabilidad y contexto comercial."], ["Crea hipótesis comprobables", "Define audiencia, fricción, cambio propuesto y comportamiento esperado antes de diseñar."], ["Conserva el aprendizaje", "Registra resultados, segmentos, límites y preguntas para que cada prueba mejore la siguiente."]] },
    { slug: "growth-loop", tag: "Estrategia de crecimiento", title: "Adquisición, conversión y retención son un solo sistema", intro: "Separar las tres palancas oculta las decisiones que determinan un crecimiento rentable.", sections: [["La adquisición crea la promesa", "La creatividad y segmentación definen quién llega y qué espera."], ["La conversión la cumple", "El sitio debe continuar esa promesa y resolver dudas y fricción."], ["La retención demuestra valor", "La recompra revela si el cliente adquirido y la experiencia entregada estaban alineados."]] },
  ],
} as const;

export const siteCopy = copy;

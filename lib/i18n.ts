export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const pathFor = (locale: Locale, path = "") => `/${locale}${path}`;

export const labels = {
  en: { services: "Services", cases: "Case studies", insights: "Resources", news: "News", contact: "Book a strategy call", read: "Read the story" },
  es: { services: "Servicios", cases: "Casos de éxito", insights: "Recursos", news: "Noticias", contact: "Agenda una llamada", read: "Ver el caso" },
} as const;

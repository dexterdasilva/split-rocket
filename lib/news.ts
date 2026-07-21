import "server-only";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "./i18n";

export type NewsArticle = {
  title: string;
  description: string;
  slug: string;
  date: string;
  tag: string;
  sources: { name: string; url: string }[];
  html: string;
  readingMinutes: number;
};

const newsDir = (locale: Locale) => path.join(process.cwd(), "content", "news", locale);

function toDateString(value: unknown) {
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
}

async function parseNewsFile(locale: Locale, file: string): Promise<NewsArticle> {
  const source = await readFile(path.join(newsDir(locale), file), "utf8");
  const parsed = matter(source);
  const markdown = parsed.content.replace(/^# .+\n+/, "").trim();
  const html = await marked.parse(markdown, { gfm: true });
  const words = markdown.replace(/[#>*_`|\[\]()-]/g, " ").split(/\s+/).filter(Boolean).length;
  const sources = Array.isArray(parsed.data.sources)
    ? parsed.data.sources.map((entry: { name?: unknown; url?: unknown }) => ({ name: String(entry.name), url: String(entry.url) }))
    : [];
  return {
    title: String(parsed.data.title), description: String(parsed.data.description),
    slug: String(parsed.data.slug ?? file.replace(/\.md$/, "")), date: toDateString(parsed.data.date),
    tag: String(parsed.data.tag ?? "E-commerce"), sources,
    html, readingMinutes: Math.max(1, Math.ceil(words / 220)),
  };
}

export async function listNews(locale: Locale): Promise<NewsArticle[]> {
  let files: string[];
  try {
    files = (await readdir(newsDir(locale))).filter((file) => file.endsWith(".md"));
  } catch {
    return [];
  }
  const articles = await Promise.all(files.map((file) => parseNewsFile(locale, file)));
  return articles.sort((a, b) => (a.date === b.date ? a.slug.localeCompare(b.slug) : b.date.localeCompare(a.date)));
}

export async function getNewsArticle(locale: Locale, slug: string): Promise<NewsArticle | null> {
  const articles = await listNews(locale);
  return articles.find((article) => article.slug === slug) ?? null;
}

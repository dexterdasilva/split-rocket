import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type MarkdownArticle = {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  keywords: string[];
  html: string;
  readingMinutes: number;
  toc: { id: string; title: string }[];
  faqSchema?: object;
};

const articleFiles: Record<string, string> = {
  "en/do-you-have-enough-traffic-to-ab-test": "content/insights/en/do-you-have-enough-traffic-to-ab-test.md",
};

function headingId(title: string) {
  return title.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function getMarkdownArticle(locale: string, slug: string): Promise<MarkdownArticle | null> {
  const file = articleFiles[`${locale}/${slug}`];
  if (!file) return null;
  const source = await readFile(path.join(process.cwd(), file), "utf8");
  const parsed = matter(source);
  const scriptMatch = parsed.content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  const markdown = parsed.content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, "").replace(/^# .+\n+/, "").trim();
  let html = await marked.parse(markdown, { gfm: true });
  html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_, level, title) => `<h${level} id="${headingId(title)}">${title}</h${level}>`);
  const toc = [...markdown.matchAll(/^## (.+)$/gm)].map((match) => ({ title: match[1].replace(/[*_`]/g, ""), id: headingId(match[1]) }));
  let faqSchema: object | undefined;
  if (scriptMatch) { try { faqSchema = JSON.parse(scriptMatch[1]); } catch { faqSchema = undefined; } }
  const words = markdown.replace(/[#>*_`|\[\]()-]/g, " ").split(/\s+/).filter(Boolean).length;
  const date = parsed.data.date instanceof Date ? parsed.data.date.toISOString().slice(0, 10) : String(parsed.data.date);
  return {
    title: String(parsed.data.title), description: String(parsed.data.description), slug: String(parsed.data.slug),
    date, author: String(parsed.data.author), keywords: parsed.data.keywords || [],
    html, readingMinutes: Math.max(1, Math.ceil(words / 220)), toc, faqSchema,
  };
}

import type { APIRoute } from "astro";
import { routes } from "../data/business";

export const prerender = true;

const escapeXml = (value: string) =>
  value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '\"': "&quot;"
    };
    return entities[character];
  });

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL("https://rangeriver.vercel.app");
  const indexable = import.meta.env.PUBLIC_SITE_INDEXABLE === "true";
  const entries = indexable
    ? routes.map((route) => `  <url><loc>${escapeXml(new URL(route, siteUrl).href)}</loc></url>`)
    : [];
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
    ""
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};

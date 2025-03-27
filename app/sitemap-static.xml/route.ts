import sitemap from "../sitemap-static";
import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemap()
      .map(
        (page) => `
      <url>
        <loc>${page.url}</loc>
        <lastmod>${page.lastModified}</lastmod>
        <priority>${page.priority}</priority>
        <changefreq>${page.changeFrequency}</changefreq>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

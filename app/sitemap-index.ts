import { App } from "@/constants/application";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = App.appUrl || "https://dubaiusedfurniture.ae";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${baseUrl}/sitemap-static.xml</loc>
    </sitemap>
    <sitemap>
      <loc>${baseUrl}/sitemap-blogs.xml</loc>
    </sitemap>
  </sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

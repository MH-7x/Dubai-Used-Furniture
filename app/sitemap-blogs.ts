import { App } from "@/constants/application";
import { NextResponse } from "next/server";

interface Main {
  success: boolean;
  data: Datum[];
}

interface Datum {
  _id: string;
  title: string;
  caption: string;
  slug: string;
  createdAt: Date;
  image: string;
  category: string;
}

async function getBlogPosts() {
  try {
    const response = await fetch(
      `https://blogs.dubaiusedfurniture.ae/api/list-all`
    );
    if (!response.ok)
      throw new Error("Failed to get blogs - " + response.statusText);
    const data: Main = await response.json();
    if (!data.success) throw new Error("Failed to get blogs - Server error");
    return data.data.map((item) => ({
      slug: item.slug,
      updatedAt: new Date(item.createdAt).toISOString(),
      image: item.image,
    }));
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return [];
  }
}

export async function GET() {
  const baseUrl = App.appUrl || "https://dubaiusedfurniture.ae";
  const blogs = await getBlogPosts();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
      <loc>${baseUrl}/blogs</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.9</priority>
      <changefreq>weekly</changefreq>
    </url>
    ${blogs
      .map(
        (post) => `
      <url>
        <loc>${baseUrl}/blogs/${post.slug}</loc>
        <lastmod>${post.updatedAt}</lastmod>
        <priority>0.7</priority>
        <changefreq>weekly</changefreq>
        <image:image>
          <image:loc>${post.image}</image:loc>
        </image:image>
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

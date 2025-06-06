import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/sitemap-index" },
      { source: "/sitemap-static.xml", destination: "/sitemap-static" },
      { source: "/sitemap-blogs.xml", destination: "/sitemap-blogs" },
    ];
  },
};

export default withNextIntl(nextConfig);

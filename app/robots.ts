import { App } from "@/constants/application";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en", "/ar"],
      disallow: ["/private", "/api", "/_next"],
    },
    sitemap: `${App.appUrl}/sitemap.xml`,
  };
}

import { MetadataRoute } from "next";
import { App } from "@/constants/application";

// Ensure App.appUrl is correctly defined
if (!App?.appUrl) {
  throw new Error(
    "App.appUrl is not defined. Please check your configuration."
  );
}

// Define changeFrequency for specific routes
const changeFrequencyMap: Record<
  string,
  MetadataRoute.Sitemap[number]["changeFrequency"]
> = {
  "": "monthly",
  "/used-furniture-in-sharjah": "monthly",
  "/used-furniture-in-abu-dhabi": "monthly",
  "/used-furniture-in-ajman": "monthly",
  "/used-furniture-fujairah": "monthly",
  "/used-furniture-al-ain": "monthly",
  "/about-us": "yearly",
  "/contact-us": "yearly",
  "/used-home-appliances": "monthly",
  "/used-home-furniture-dubai": "monthly",
  "/used-office-furniture-dubai": "monthly",
  "/used-hotel-furniture-dubai": "monthly",
  "/used-seating-furniture": "monthly",
  "/used-table-furniture": "monthly",
  "/used-sleeping-furniture": "monthly",
  "/used-storage-furniture": "monthly",
  "/sitemap": "yearly",
  "/gallery": "monthly",
  "/faqs": "monthly",
};

// Define all pages
const pages: string[] = Object.keys(changeFrequencyMap);

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages: MetadataRoute.Sitemap = pages.flatMap(
    (path): MetadataRoute.Sitemap[number][] => {
      const changeFrequency = changeFrequencyMap[path];
      return [
        {
          url: `${App.appUrl}/en${path}`,
          lastModified: new Date().toISOString(),
          priority: 0.8 as const,
          changeFrequency,
          alternates: {
            languages: {
              ar: `${App.appUrl}/ar${path}`,
            },
          },
        },
        {
          url: `${App.appUrl}/ar${path}`,
          lastModified: new Date().toISOString(),
          priority: 0.8 as const,
          changeFrequency,
          alternates: {
            languages: {
              en: `${App.appUrl}/en${path}`,
            },
          },
        },
      ];
    }
  );

  return localizedPages;
}

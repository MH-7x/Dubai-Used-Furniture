import { App } from "@/constants/application";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export default async function MetadataTemplate({
  locale,
  namespace,
}: {
  locale: string;
  namespace: string;
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: namespace,
  });

  const u = await getTranslations({
    locale,
    namespace: "MetaDataUtils",
  });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: `${App.appUrl}${t("path")}`,
      languages: {
        en: `${App.appUrl}${t("path")}`,
        ar: `${App.appUrl}${t("altPath")}`,
      },
    },
    openGraph: {
      title: t("title"),
      images: t.raw("images").map((image: { path: string; alt: string }) => {
        return [
          {
            url: `${App.appUrl}/${image.path}`,
            alt: image.alt,
          },
        ];
      }),
      description: t("desc"),
      type: "website",
      countryName: u("countryName"),
      emails: ["dubaiusedfurniture.ae@gmail.com", "hussain43ahmad@gmail.com"],
      phoneNumbers: ["+971566651978", "+971 503626685"],
      siteName: u("applicationName"),
    },
    twitter: {
      card: "summary_large_image",
      creator: u("applicationName"),
    },
  };
}

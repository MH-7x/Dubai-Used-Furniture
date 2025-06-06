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
        en: `${App.appUrl}${t("enPath")}`,
        ar: `${App.appUrl}${t("arPath")}`,
        "x-default": `${App.appUrl}${t("enPath")}`,
      },
    },
    openGraph: {
      url: `${App.appUrl}${t("path")}`,
      title: t("title"),
      images: t.raw("images").map((image: { path: string; alt: string }) => {
        return {
          url: image.path,
          alt: image.alt,
        };
      }),
      description: t("desc"),
      type: "website",
      countryName: u("countryName"),
      emails: ["dubaiusedfurniture.ae@gmail.com", "hussain43ahmad@gmail.com"],
      phoneNumbers: ["+971545019655", "+971 503626685"],
      siteName: u("applicationName"),
    },
    twitter: {
      card: "summary_large_image",
      creator: u("applicationName"),
    },
  };
}

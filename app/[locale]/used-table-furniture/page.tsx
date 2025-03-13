import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import GetStarted from "@/components/base/GetStarted";
import SecondSec from "@/components/base/SecondSec";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ThirdSec from "@/components/base/thirdSec";
import SerChooseUs from "@/components/SerChooseUs";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  RiBankCardFill,
  RiBriefcase2Fill,
  RiDiscountPercentFill,
  RiMedalFill,
  RiRecycleFill,
  RiShieldCheckFill,
  RiSofaFill,
  RiStore2Fill,
} from "@remixicon/react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  affordability: <RiDiscountPercentFill size={50} />,
  quality: <RiMedalFill size={50} />,
  balance: <RiRecycleFill size={50} />,
  variety: <RiSofaFill size={50} />,
};
const iconBuyMap: Record<string, JSX.Element> = {
  selection: <RiBankCardFill size={50} />,
  quality: <RiBriefcase2Fill size={50} />,
  service: <RiShieldCheckFill size={50} />,
  local: <RiStore2Fill size={50} />,
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  return MetadataTemplate({
    locale,
    namespace: "TableFurniturePageMetadata",
  });
}
const HomePage = () => {
  const t = useTranslations("usedTablePage");
  return (
    <main className="md:mt-24 mt-20 ">
      <ServiceHeroSection
        title={{
          main: t("serviceHeroSection.title.main"),
          auth: t("serviceHeroSection.title.auth"),
        }}
        desc={t("serviceHeroSection.desc")}
      />
      <SerChooseUs
        title={t("serChooseUs.title")}
        desc={t("serChooseUs.desc")}
        lis={t
          .raw("serChooseUs.list")
          .map((item: { key: string; title: string; desc: string }) => ({
            title: item.title,
            icon: iconMap[item.key], // Fetch icon dynamically
            desc: item.desc,
          }))}
      />
      <ThirdSec
        title={t("thirdSec.title")}
        desc={t("thirdSec.desc")}
        items={t
          .raw("thirdSec.items")
          .map(
            (item: {
              src: string;
              title: string;
              desc: string;
              alt: string;
              lis: { title: string; desc: string }[];
              extra?: string;
            }) => ({
              title: item.title,
              desc: item.desc,
              src: item.src,
              extra: item.extra || "",
              alt: item.alt,
              lis: item.lis ?? [],
            })
          )}
      />

      <SecondSec
        title={t("secondSec.title")}
        desc={t("secondSec.desc")}
        images={t
          .raw("secondSec.images")
          .map((item: { src: string; alt: string }) => ({
            src: item.src,
            alt: item.alt,
          }))}
        lis={t
          .raw("secondSec.list")
          .map((item: { title: string; desc: string }) => ({
            title: item.title,
            desc: item.desc,
          }))}
        extra={t("secondSec.extra")}
      />
      <Gallery
        title={t("gallery.title")}
        desc={t("gallery.desc")}
        images={t.raw("gallery.images").map((src: string) => src)}
      />

      <GetStarted
        sub={t("getStarted.sub")}
        title={t("getStarted.title")}
        desc={t("getStarted.desc")}
        extra={t("getStarted.extra")}
        lis={t
          .raw("getStarted.steps")
          .map(
            (step: {
              title: string;
              desc: string;
              src: string;
              alt: string;
            }) => ({
              title: step.title,
              desc: step.desc,
              src: step.src,
              alt: step.alt,
            })
          )}
      />

      <SerChooseUs
        title={t("whyBuyFromUs.title")}
        desc={t("whyBuyFromUs.desc")}
        lis={t
          .raw("whyBuyFromUs.list")
          .map((li: { key: string; title: string; desc: string }) => ({
            title: li.title,
            desc: li.desc,
            icon: iconBuyMap[li.key],
          }))}
        extra={t("whyBuyFromUs.extra")}
      />
      <FooterCTA
        title={{
          main: t("footerCTA.title.main"),
        }}
        desc={t("footerCTA.desc")}
        extra={t("footerCTA.extra")}
        src={t("footerCTA.src")}
        alt={t("footerCTA.alt")}
        em={t("footerCTA.em")}
      />
    </main>
  );
};

export default HomePage;

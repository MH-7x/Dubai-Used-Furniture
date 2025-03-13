import React from "react";
import { useTranslations } from "next-intl";
import FAQs from "@/components/base/FAQs";
import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import GetStarted from "@/components/base/GetStarted";
import SecondSec from "@/components/base/SecondSec";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ThirdSec from "@/components/base/thirdSec";
import Extra from "@/components/Extra";
import SerChooseUs from "@/components/SerChooseUs";
import {
  RiMedalFill,
  RiRecycleFill,
  RiShieldFlashFill,
  RiUserStarFill,
} from "@remixicon/react";
import type { Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  return MetadataTemplate({
    locale,
    namespace: "UsedHomeAppliancePageMetadata",
  });
}

const UsedHomeAppliancePage: React.FC = () => {
  const t = useTranslations("UsedHomeAppliancePage");

  const qualityList = t.raw("serChooseUsQuality.lis") as Array<{
    title: string;
    desc: string;
  }>;

  const qualityIcons = [
    <RiShieldFlashFill size={50} key="icon-0" />,
    <RiMedalFill size={50} key="icon-1" />,
    <RiUserStarFill size={50} key="icon-2" />,
    <RiRecycleFill size={50} key="icon-3" />,
  ];

  const qualityItems = qualityList.map((item, idx) => ({
    ...item,
    icon: qualityIcons[idx] || null,
  }));

  return (
    <main className="md:mt-24 mt-20">
      <ServiceHeroSection
        title={{
          main: t("serviceHeroSection.title.main"),
          auth: t("serviceHeroSection.title.auth"),
        }}
        desc={t("serviceHeroSection.desc")}
      />

      <GetStarted
        title={t("getStarted.title")}
        desc={t("getStarted.desc")}
        sub={t("getStarted.sub")}
        lis={t.raw("getStarted.lis")}
        extra={t("getStarted.extra")}
      />

      <FooterCTA
        title={{
          main: t("footerCTA.title.main"),
        }}
        desc={t("footerCTA.desc")}
        src={t("footerCTA.src")}
        alt={t("footerCTA.alt")}
      />

      <ThirdSec
        title={t("thirdSec.title")}
        desc={t("thirdSec.desc")}
        items={t.raw("thirdSec.items")}
      />

      <SerChooseUs
        title={t("serChooseUsBuy.title")}
        desc={t("serChooseUsBuy.desc")}
        lis={t.raw("serChooseUsBuy.lis")}
        extra={t("serChooseUsBuy.extra")}
      />

      <Gallery
        title={t("gallery.title")}
        desc={t("gallery.desc")}
        images={t.raw("gallery.images")}
      />

      <SecondSec
        title={t("secondSec.title")}
        desc={t("secondSec.desc")}
        images={t.raw("secondSec.images")}
        lis={t.raw("secondSec.lis")}
        extra={t("secondSec.extra")}
      />

      <SerChooseUs
        title={t("serChooseUsQuality.title")}
        desc={t("serChooseUsQuality.desc")}
        lis={qualityItems}
        extra={t("serChooseUsQuality.extra")}
      />

      <FAQs Faqs={t.raw("faqs.items")} />

      <FooterCTA
        title={{
          main: t("footerCTALast.title.main"),
        }}
        desc={t("footerCTALast.desc")}
        extra={t("footerCTALast.extra")}
        src={t("footerCTALast.src")}
        alt={t("footerCTALast.alt")}
      />

      <Extra desc={t("extra.desc")} list={t.raw("extra.list")} />
    </main>
  );
};

export default UsedHomeAppliancePage;

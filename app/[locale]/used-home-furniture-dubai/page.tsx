import FAQs from "@/components/base/FAQs";
import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import GetStarted from "@/components/base/GetStarted";
import IntroText from "@/components/base/IntroText";
import SecondSec from "@/components/base/SecondSec";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ThirdSec from "@/components/base/thirdSec";
import Content from "@/components/Content";
import Extra from "@/components/Extra";
import SerChooseUs from "@/components/SerChooseUs";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  RiBriefcase2Fill,
  RiMedal2Fill,
  RiMoneyDollarCircleLine,
  RiRecycleFill,
} from "@remixicon/react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  return MetadataTemplate({
    locale,
    namespace: "UsedHomeFurniturePageMetadata",
  });
}

const UsedHomeFurniturePage = () => {
  const icons = [
    <RiMedal2Fill size={50} key="icon-1" />,
    <RiMoneyDollarCircleLine size={50} key="icon-0" />,
    <RiBriefcase2Fill size={50} key="icon-3" />,
    <RiRecycleFill size={50} key="icon-2" />,
  ];

  const t = useTranslations("usedHomeFurniturePage");

  const ListWithIcons = t
    .raw("serChooseUsWhy.lis")
    .map(
      (item: { title: string; desc: string; icon?: ReactNode }, i: number) => ({
        ...item,
        icon: icons[i],
      })
    );
  return (
    <main className="md:mt-24 mt-20">
      <ServiceHeroSection
        title={{
          main: t("serviceHeroSection.title.main"),
          auth: t("serviceHeroSection.title.auth"),
        }}
        desc={t("serviceHeroSection.desc")}
      />
      <IntroText text={t("introText")} />
      <ThirdSec
        title={t("thirdSec.title")}
        desc={t("thirdSec.desc")}
        items={t.raw("thirdSec.items")}
      />
      <FooterCTA
        title={{
          main: t("footerCTA1.title.main"),
          ath: t("footerCTA1.title.ath"),
        }}
        src={t("footerCTA1.src")}
        alt={t("footerCTA1.alt")}
        desc={t("footerCTA1.desc")}
      />
      <Content first={t.raw("content.first")} />
      <Extra
        title={t("extra.title")}
        desc={t("extra.desc")}
        list={t.raw("extra.list")}
      />
      <SecondSec
        title={t("secondSec.title")}
        desc={t("secondSec.desc")}
        lis={t.raw("secondSec.lis")}
        images={t.raw("secondSec.images")}
      />
      <Gallery
        title={t("gallery.title")}
        desc={t("gallery.desc")}
        images={t.raw("gallery.images")}
      />
      <SerChooseUs
        title={t("serChooseUsProcess.title")}
        desc={t("serChooseUsProcess.desc")}
        lis={t.raw("serChooseUsProcess.lis")}
      />
      <FooterCTA
        title={{
          main: t("footerCTA2.title.main"),
        }}
        desc={t("footerCTA2.desc")}
        src={t("footerCTA2.src")}
        alt={t("footerCTA2.alt")}
      />
      <GetStarted
        title={t("getStarted.title")}
        desc={t("getStarted.desc")}
        sub={t("getStarted.sub")}
        lis={t.raw("getStarted.lis")}
      />
      <SerChooseUs
        title={t("serChooseUsWhy.title")}
        desc={t("serChooseUsWhy.desc")}
        lis={ListWithIcons}
      />
      <FAQs Faqs={t.raw("faqs")} />
      <FooterCTA
        title={{
          main: t("footerCTA3.title.main"),
          ath: t("footerCTA3.title.ath"),
        }}
        desc={t("footerCTA3.desc")}
        src={t("footerCTA3.src")}
        alt={t("footerCTA3.alt")}
      />
    </main>
  );
};

export default UsedHomeFurniturePage;

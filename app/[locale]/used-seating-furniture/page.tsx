import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import SecondSec from "@/components/base/SecondSec";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ThirdSec from "@/components/base/thirdSec";
import SerChooseUs from "@/components/SerChooseUs";

import {
  RiBriefcase2Fill,
  RiSecurePaymentFill,
  RiShieldCheckFill,
  RiStore2Fill,
} from "@remixicon/react";
import { useTranslations } from "next-intl";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  trusted: <RiShieldCheckFill size={50} />,
  quality: <RiBriefcase2Fill size={50} />,
  solutions: <RiSecurePaymentFill size={50} />,
  store: <RiStore2Fill size={50} />,
};

const UsedSeatingFurniturePage = () => {
  const t = useTranslations("usedSeatingFurniturePage");
  return (
    <main className="md:mt-24 mt-20 ">
      <ServiceHeroSection
        title={{
          main: t("serviceHeroSection.title.main"),
          auth: t("serviceHeroSection.title.auth"),
        }}
        desc={t("serviceHeroSection.desc")}
      />
      <SecondSec
        title={t("secondSec.title")}
        sub={t("secondSec.sub")}
        desc={t("secondSec.desc")}
        images={t
          .raw("secondSec.images")
          .map((item: { src: string; alt: string }) => item)}
        boxs={t
          .raw("secondSec.boxes")
          .map((item: { title: string; desc: string }) => item)}
      />
      <ThirdSec
        title={t("thirdSec.title")}
        desc={t("thirdSec.desc")}
        items={t
          .raw("thirdSec.items")
          .map(
            (item: {
              title: string;
              src: string;
              alt: string;
              lis: { title?: string; desc: string }[];
            }) => item
          )}
      />

      <SerChooseUs
        title={t("serChooseUs.title")}
        desc={t("serChooseUs.desc")}
        lis={t
          .raw("serChooseUs.list")
          .map((item: { key: string; title: string; desc: string }) => ({
            title: item.title,
            desc: item.desc,
            icon: iconMap[item.key],
          }))}
      />
      <Gallery
        title={t("gallery.title")}
        desc={t("gallery.desc")}
        images={t.raw("gallery.images").map((src: string) => src)}
      />
      <FooterCTA
        title={{
          main: t("footerCTA.title"),
        }}
        desc={t("footerCTA.desc")}
        src={t("footerCTA.src")}
        alt={t("footerCTA.alt")}
      />
      <section className="max-w-4xl mx-auto mt-32 md:px-0 px-3 md:text-2xl text-text text-lg ">
        {t.raw("additionalSection.paragraphs").map((p: string, idx: number) => (
          <p className={"mb-5"} key={idx}>
            {p}
          </p>
        ))}
      </section>
    </main>
  );
};

export default UsedSeatingFurniturePage;

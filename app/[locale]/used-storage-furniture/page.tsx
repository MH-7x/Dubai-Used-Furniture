import FAQs from "@/components/base/FAQs";
import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ThirdSec from "@/components/base/thirdSec";
import SerChooseUs from "@/components/SerChooseUs";
import TwoGridLi from "@/components/TwoGridLi";
import {
  RiCheckDoubleFill,
  RiMedal2Fill,
  RiMoneyDollarBoxFill,
  RiPinDistanceFill,
  RiRecycleFill,
} from "@remixicon/react";
import React from "react";
import { useTranslations } from "next-intl";
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
    namespace: "UsedStorageFurniturePageMetadata",
  });
}

const UsedStorageFurniturePage: React.FC = () => {
  const t = useTranslations("useStorageFurniturePage");

  const serChooseUsList = t.raw("SerChooseUs.list") as Array<{
    title: string;
    desc: string;
  }>;

  const thirdSecItems = t.raw("ThirdSec.items") as Array<{
    title: string;
    desc: string;
    lis: Array<{ title: string; desc: string }>;
  }>;

  const twoGridLiList = t.raw("TwoGridLi.list") as Array<{
    title: string;
    lis: Array<{ title: string; desc: string }>;
  }>;

  const faqs = t.raw("FAQs.faqs") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <main className="md:mt-24 mt-20">
      {/* Service Hero Section */}
      <ServiceHeroSection
        title={{
          main: t("ServiceHeroSection.title.main"),
          auth: t("ServiceHeroSection.title.auth"),
        }}
        desc={t("ServiceHeroSection.desc")}
      />

      {/* Why Choose Us */}
      <SerChooseUs
        title={t("SerChooseUs.title")}
        desc={t("SerChooseUs.desc")}
        // Re-map the array to attach icons
        lis={[
          {
            title: serChooseUsList[0].title,
            desc: serChooseUsList[0].desc,
            icon: <RiMedal2Fill size={50} />,
          },
          {
            title: serChooseUsList[1].title,
            desc: serChooseUsList[1].desc,
            icon: <RiCheckDoubleFill size={50} />,
          },
          {
            title: serChooseUsList[2].title,
            desc: serChooseUsList[2].desc,
            icon: <RiMoneyDollarBoxFill size={50} />,
          },
          {
            title: serChooseUsList[3].title,
            desc: serChooseUsList[3].desc,
            icon: <RiPinDistanceFill size={50} />,
          },
          {
            title: serChooseUsList[4].title,
            desc: serChooseUsList[4].desc,
            icon: <RiRecycleFill size={50} />,
          },
        ]}
      />

      {/* Third Section */}
      <ThirdSec
        title={t("ThirdSec.title")}
        desc={t("ThirdSec.desc")}
        // Merge your existing image paths with the translated text
        items={[
          {
            ...thirdSecItems[0],
            src: "/storage/used-home-storage-furniture.webp",
            alt: "Used Home Storage Furniture in Dubai",
          },
          {
            ...thirdSecItems[1],
            src: "/storage/used-office-cabinets.jpg",
            alt: "Used Office Cabinets in Dubai",
          },
          {
            ...thirdSecItems[2],
            src: "/storage/used-heavy-duty-racks.webp",
            alt: "Used Heavy Duty racks in dubai",
          },
        ]}
      />

      {/* TwoGridLi Section */}
      <TwoGridLi
        title={t("TwoGridLi.title")}
        desc={t("TwoGridLi.desc")}
        list={twoGridLiList}
        extra={t("TwoGridLi.extra")}
      />

      {/* Gallery */}
      <Gallery
        title={t("Gallery.title")}
        desc={t("Gallery.desc")}
        images={[
          "/seating/gallay-1.jpg",
          "/seating/gallay-2.jpg",
          "/seating/gallay-3.jpg",
          "/seating/gallay-4.jpg",
          "/seating/gallay-5.jpg",
          "/seating/gallay-6.jpg",
          "/seating/gallay-7.jpg",
          "/seating/gallay-8.jpg",
          "/seating/gallay-9.jpg",
          "/seating/gallay-10.webp",
        ]}
      />

      {/* FAQs */}
      <FAQs Faqs={faqs} />

      {/* Footer CTA */}
      <FooterCTA
        title={{
          main: t("FooterCTA.title.main"),
        }}
        desc={t("FooterCTA.desc")}
        extra={t("FooterCTA.extra")}
        src="/seating/contact-seating.png"
        alt="Contact For Used Storage Furniture"
      />

      {/* Closing Section */}
      <section className="max-w-4xl mx-auto mt-32 md:px-0 px-3 md:text-2xl text-text text-lg">
        <p className="mb-5">{t("ClosingSection.p1")}</p>
        <p className="mb-5">{t("ClosingSection.p2")}</p>
        <p className="mb-5">{t("ClosingSection.p3")}</p>
      </section>
    </main>
  );
};

export default UsedStorageFurniturePage;

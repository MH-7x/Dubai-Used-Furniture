import React from "react";
import { useTranslations } from "next-intl";
import LocHeroSection from "@/components/base/LocHeroSection";
import Text from "@/components/base/Text";
import Services from "@/components/base/Services";
import ThirdSec from "@/components/base/thirdSec";
import TwoGrid from "@/components/base/TwoGrid";
import Content from "@/components/Content";
import SerChooseUs from "@/components/SerChooseUs";
import { RiCheckDoubleFill } from "@remixicon/react";
import FooterCTA from "@/components/base/FooterCTA";
import TwoGridLi from "@/components/TwoGridLi";
import Gallery from "@/components/base/Gallery";
import TestimonialSlider from "@/components/TestimonialsSlider";
import imageSrc from "../../../../public/abuDhabi/used-furniture-store-in-abu-dhabi.webp";

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
    namespace: "AbuDhabiPageMetadata",
  });
}

const UsedFurnitureAbuDhabiPage = () => {
  const t = useTranslations("testimonials");

  const p = useTranslations("UsedFurnitureAbuDhabiPage");

  const defaultIcon = <RiCheckDoubleFill size={50} />;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const serChooseUsList = p.raw("serChooseUs.lis").map((item: any) => ({
    ...item,

    icon: item.icon || defaultIcon,
  }));

  return (
    <main className="md:mt-24 mt-36">
      <LocHeroSection
        title={{
          main: p("locHeroSection.title.main"),
          auth: p("locHeroSection.title.auth"),
        }}
        desc={p("locHeroSection.desc")}
        alt={p("locHeroSection.alt")}
        src={imageSrc}
      />
      <Text title={p("text.title")} desc={p("text.desc")} />
      <Services
        title={p("services.title")}
        desc={p("services.desc")}
        // Arrays from the JSON use p.raw()
        services={p.raw("services.list.services")}
        others={p.raw("services.list.others")}
      />
      <ThirdSec
        title={p("thirdSec.title")}
        desc={p("thirdSec.desc")}
        items={p.raw("thirdSec.items")}
      />
      <SerChooseUs
        title={p("serChooseUs.title")}
        desc={p("serChooseUs.desc")}
        // Use the mapped list with icons already added.
        lis={serChooseUsList}
      />
      {/* TestimonialSlider uses the "testimonials" translations */}
      <TestimonialSlider testimonials={t.raw("abuDhabiPageTestimonials")} />
      <TwoGrid
        sideOne={{
          title: p("twoGrid.grid1.sideOne.title"),
          desc: p.raw("twoGrid.grid1.sideOne.desc"),
          src: p("twoGrid.grid1.sideOne.src"),
          alt: p("twoGrid.grid1.sideOne.alt"),
        }}
        sideTwo={{
          title: p("twoGrid.grid1.sideTwo.title"),
          desc: p.raw("twoGrid.grid1.sideTwo.desc"),
          src: p("twoGrid.grid1.sideTwo.src"),
          alt: p("twoGrid.grid1.sideTwo.alt"),
        }}
      />
      <TwoGrid
        sideOne={{
          title: p("twoGrid.grid2.sideOne.title"),
          desc: p.raw("twoGrid.grid2.sideOne.desc"),
          src: p("twoGrid.grid2.sideOne.src"),
          alt: p("twoGrid.grid2.sideOne.alt"),
        }}
        sideTwo={{
          title: p("twoGrid.grid2.sideTwo.title"),
          desc: p.raw("twoGrid.grid2.sideTwo.desc"),
          src: p("twoGrid.grid2.sideTwo.src"),
          alt: p("twoGrid.grid2.sideTwo.alt"),
        }}
      />
      <Content
        title={p("content.title")}
        desc={p("content.desc")}
        first={p.raw("content.first")}
      />
      <TwoGridLi
        title={p("twoGridLi.title")}
        desc={p("twoGridLi.desc")}
        list={p.raw("twoGridLi.list")}
      />
      <Gallery
        title={p("gallery.title")}
        desc={p("gallery.desc")}
        images={p.raw("gallery.images")}
      />
      <FooterCTA
        title={{
          main: p("footerCTA.title.main"),
          ath: p("footerCTA.title.ath"),
        }}
        desc={p("footerCTA.desc")}
        alt={p("footerCTA.alt")}
        src={p("footerCTA.src")}
      />
    </main>
  );
};

export default UsedFurnitureAbuDhabiPage;

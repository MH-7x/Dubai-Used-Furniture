import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import imgSrc from "../../../../public/sharjah/used-furniture-in-sharjah.webp";
import Gallery from "@/components/base/Gallery";
import LocHeroSection from "@/components/base/LocHeroSection";
import Text from "@/components/base/Text";
import TwoGridLi from "@/components/TwoGridLi";
import Extra from "@/components/Extra";
import Services from "@/components/base/Services";
import TestimonialSlider from "@/components/TestimonialsSlider";
import SerChooseUs from "@/components/SerChooseUs";
import ThreeGrid from "@/components/base/ThreeGrid";
import FAQs from "@/components/base/FAQs";
import FooterCTA from "@/components/base/FooterCTA";
import Content from "@/components/Content";

import {
  RiHotelBedFill,
  RiMapPinRangeFill,
  RiMedalFill,
  RiMoneyCnyBoxFill,
} from "@remixicon/react";
import TwoGrid from "@/components/base/TwoGrid";
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
    namespace: "AjmanPageMetadata",
  });
}

const UsedFurnitureAjmanPage = () => {
  const p = useTranslations("UsedFurnitureAjmanPage");
  const t = useTranslations("testimonials");
  return (
    <main className="md:mt-24 mt-36">
      <LocHeroSection
        title={{
          main: p("locHeroSection.title.main"),
          auth: p("locHeroSection.title.auth"),
        }}
        desc={p("locHeroSection.desc")}
        src={imgSrc}
        alt={p("locHeroSection.alt")}
      />
      <Text title={p("text.title")} desc={p("text.desc")} />

      <TestimonialSlider testimonials={t.raw("ajmanPageTestimonials")} />

      <TwoGridLi
        title={p("twoGridLi1.title")}
        desc={p("twoGridLi1.desc")}
        list={p.raw("twoGridLi1.lists")}
      />

      <Extra
        title={p("extra.title")}
        desc={p("extra.desc")}
        list={p.raw("extra.list")}
        extra={
          <p className="text-gray-600 mt-5">
            Whether you have{" "}
            <Link
              className="underline underline-offset-4 text-text"
              href={"/used-home-furniture-dubai"}
            >
              used home furniture
            </Link>
            ,{" "}
            <Link
              className="underline underline-offset-4 text-text"
              href={"/used-office-furniture-dubai"}
            >
              used office furniture
            </Link>
            , or specific items like a used sofa or used dining table, we are
            interested! Sell Your Furniture Now &{" "}
            <Link
              className="underline underline-offset-4 text-text"
              href={"/contact-us"}
            >
              Get a Free Quote
            </Link>
            . Find out why we are the best place to sell used furniture in Ajman
          </p>
        }
      />

      <TwoGridLi
        title={p("twoGridLi2.title")}
        desc={p("twoGridLi2.desc")}
        list={p.raw("twoGridLi2.lists")}
      />

      <Services
        title={p("services.title")}
        desc={p("services.desc")}
        services={p.raw("services.serviceList")}
        others={p.raw("services.others")}
      />

      <Content
        title={p("content.title")}
        desc={p("content.desc")}
        first={p.raw("content.first")}
      />

      <SerChooseUs
        title={p("serChooseUs.title")}
        desc={p("serChooseUs.desc")}
        lis={[
          {
            title: p("serChooseUs.lis.0.title"),
            desc: p("serChooseUs.lis.0.desc"),
            icon: <RiMedalFill size={50} />,
          },
          {
            title: p("serChooseUs.lis.1.title"),
            desc: p("serChooseUs.lis.1.desc"),
            icon: <RiMoneyCnyBoxFill size={50} />,
          },
          {
            title: p("serChooseUs.lis.2.title"),
            desc: p("serChooseUs.lis.2.desc"),
            icon: <RiHotelBedFill size={50} />,
          },
          {
            title: p("serChooseUs.lis.3.title"),
            desc: p("serChooseUs.lis.3.desc"),
            icon: <RiMapPinRangeFill size={50} />,
          },
        ]}
      />

      <ThreeGrid
        title={p("threeGrid.title")}
        desc={p("threeGrid.desc")}
        total={6}
        list={p.raw("threeGrid.list")}
      />
      <Gallery
        title={p("Gallery.title")}
        desc={p("Gallery.desc")}
        images={[
          "/tables/gallery-1.jpg",
          "/tables/gallery-2.jpg",
          "/tables/gallery-3.jpg",
          "/tables/gallery-4.jpg",
          "/tables/gallery-5.jpg",
          "/tables/gallery-6.jpg",
          "/tables/gallery-7.jpg",
          "/appliance/gallery-1.jpg",
          "/appliance/gallery-2.jpg",
          "/appliance/gallery-3.jpg",
          "/appliance/gallery-4.jpg",
          "/appliance/gallery-5.jpg",
          "/appliance/gallery-6.jpg",
          "/appliance/gallery-7.jpg",
          "/tables/gallery-8.jpg",
          "/tables/gallery-9.jpg",
        ]}
      />
      <FAQs Faqs={p.raw("faqs")} />
      <TwoGrid
        sideOne={{
          title: p("TwoGridOne.sideOne.title"),
          desc: p.raw("TwoGridOne.sideOne.desc"),
          src: p("TwoGridOne.sideOne.src"),
          alt: p("TwoGridOne.sideOne.alt"),
        }}
        sideTwo={{
          title: p("TwoGridOne.sideTwo.title"),
          desc: p.raw("TwoGridOne.sideTwo.desc"),
          src: p("TwoGridOne.sideTwo.src"),
          alt: p("TwoGridOne.sideTwo.alt"),
        }}
      />
      <TwoGrid
        sideOne={{
          title: p("TwoGridTwo.sideOne.title"),
          desc: p.raw("TwoGridTwo.sideOne.desc"),
          src: p("TwoGridTwo.sideOne.src"),
          alt: p("TwoGridTwo.sideOne.alt"),
        }}
        sideTwo={{
          title: p("TwoGridTwo.sideTwo.title"),
          desc: p.raw("TwoGridTwo.sideTwo.desc"),
          src: p("TwoGridTwo.sideTwo.src"),
          alt: p("TwoGridTwo.sideTwo.alt"),
        }}
      />
      <FooterCTA
        title={{ main: p("footerCTA.title") }}
        desc={p("footerCTA.desc")}
        src="/seating/contact-seating.png"
        alt={p("footerCTA.alt")}
        extra=""
      />
    </main>
  );
};

export default UsedFurnitureAjmanPage;

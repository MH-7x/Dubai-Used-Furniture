/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useTranslations } from "next-intl";
import FAQs from "@/components/base/FAQs";
import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import GetStarted from "@/components/base/GetStarted";
import SecondSec from "@/components/base/SecondSec";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import TwoGrid from "@/components/base/TwoGrid";
import Content from "@/components/Content";
import Extra from "@/components/Extra";
import SerChooseUs from "@/components/SerChooseUs";

import {
  RiArmchairFill,
  RiCalendarCheckFill,
  RiMedalFill,
  RiMoneyDollarCircleFill,
  RiRecycleFill,
  RiUserStarFill,
} from "@remixicon/react";

const UsedOfficeFurniturePage = () => {
  const t = useTranslations("UsedOfficeFurniturePage");
  const twoGridData = t.raw("twoGrid") as Array<{
    title?: string;
    desc?: string;
    sideOne: {
      title: string;
      desc: string[];
      src: string;
      alt: string;
    };
    sideTwo: {
      title: string;
      desc: string[];
      src: string;
      alt: string;
    };
  }>;

  // Build FAQs array manually from individual keys.
  const faqs = [
    { question: t("faqs.question1"), answer: t("faqs.answer1") },
    { question: t("faqs.question2"), answer: t("faqs.answer2") },
    { question: t("faqs.question3"), answer: t("faqs.answer3") },
    { question: t("faqs.question4"), answer: t("faqs.answer4") },
    { question: t("faqs.question5"), answer: t("faqs.answer5") },
    { question: t("faqs.question6"), answer: t("faqs.answer6") },
    { question: t("faqs.question7"), answer: t("faqs.answer7") },
  ];

  return (
    <main className="md:mt-24 mt-20">
      {/* Hero Section */}
      <ServiceHeroSection
        title={{
          main: t("hero.title.main"),
          auth: t("hero.title.auth"),
        }}
        desc={t("hero.desc")}
      />

      {/* Why Choose Us */}
      <SerChooseUs
        title={t("chooseUs.title")}
        desc={t("chooseUs.desc")}
        lis={t.raw("chooseUs.lis").map((item: any, index: number) => {
          let icon;
          switch (index) {
            case 0:
              icon = <RiMoneyDollarCircleFill size={50} />;
              break;
            case 1:
              icon = <RiRecycleFill size={50} />;
              break;
            case 2:
              icon = <RiArmchairFill size={50} />;
              break;
            default:
              icon = <RiArmchairFill size={50} />;
          }
          return { ...item, icon };
        })}
        extra={t("chooseUs.extra")}
      />

      {/* Second Section */}
      <SecondSec
        images={[
          {
            src: "/tables/used-tables-furniture.webp",
            alt: "Used tables furniture store image",
          },
          {
            src: "/tables/used-tables-furniture-2.jpeg",
            alt: "Tables furniture in Dubai",
          },
          {
            src: "/tables/used-tables-furniture-landscape.webp",
            alt: "Used Tables Furniture Dubai Store",
          },
        ]}
        title={t("secondSec.title")}
        desc={t("secondSec.desc")}
        lis={t.raw("secondSec.lis")}
      />

      {/* Footer CTA (First) */}
      <FooterCTA
        title={{
          main: t("footerCTA.title.main"),
          ath: t("footerCTA.title.ath"),
        }}
        src="/home/cta-img-2.png"
        alt="Seller of Dubai Used Furniture"
        desc={t("footerCTA.desc")}
      />

      {/* Content Section */}
      <Content title={t("content.title")} first={t.raw("content.first")} />

      {/* TwoGrid Section – First */}
      {twoGridData[0] && (
        <TwoGrid
          title={twoGridData[0].title}
          desc={twoGridData[0].desc}
          sideOne={{
            title: twoGridData[0].sideOne.title,
            desc: twoGridData[0].sideOne.desc,
            src: twoGridData[0].sideOne.src,
            alt: twoGridData[0].sideOne.alt,
          }}
          sideTwo={{
            title: twoGridData[0].sideTwo.title,
            desc: twoGridData[0].sideTwo.desc,
            src: twoGridData[0].sideTwo.src,
            alt: twoGridData[0].sideTwo.alt,
          }}
        />
      )}

      {/* TwoGrid Section – Second */}
      {twoGridData[1] && (
        <TwoGrid
          sideOne={{
            title: twoGridData[1].sideOne.title,
            desc: twoGridData[1].sideOne.desc,
            src: twoGridData[1].sideOne.src,
            alt: twoGridData[1].sideOne.alt,
          }}
          sideTwo={{
            title: twoGridData[1].sideTwo.title,
            desc: twoGridData[1].sideTwo.desc,
            src: twoGridData[1].sideTwo.src,
            alt: twoGridData[1].sideTwo.alt,
          }}
        />
      )}

      {/* Gallery Section */}
      <Gallery
        title={t("gallery.title")}
        desc={t("gallery.desc")}
        images={t.raw("gallery.images")}
      />

      {/* Get Started Section */}
      <GetStarted
        sub={t("getStarted.sub")}
        title={t("getStarted.title")}
        desc={t("getStarted.desc")}
        lis={t.raw("getStarted.lis")}
        extra={t("getStarted.extra")}
      />

      {/* Trust Dubai Used Furniture Section */}
      <SerChooseUs
        title={t("trustDUF.title")}
        desc={t("trustDUF.desc")}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lis={t.raw("trustDUF.lis").map((item: any, index: number) => {
          let icon;
          switch (index) {
            case 0:
              icon = <RiCalendarCheckFill size={50} />;
              break;
            case 1:
              icon = <RiMedalFill size={50} />;
              break;
            case 2:
              icon = <RiUserStarFill size={50} />;
              break;
            default:
              icon = <RiUserStarFill size={50} />;
          }
          return { ...item, icon };
        })}
        extra={t("trustDUF.extra")}
      />

      {/* Serving Businesses Section */}
      <Content
        title={t("servingBusinesses.title")}
        first={t.raw("servingBusinesses.first")}
      />

      {/* FAQs Section */}
      <FAQs Faqs={faqs} />

      {/* Final Footer CTA */}
      <FooterCTA
        title={{
          main: t("finalCTA.title"),
        }}
        desc={t("finalCTA.desc")}
        extra={t("finalCTA.extra")}
        src="/home/cta-img-2.png"
        alt="Seller of Dubai Used Furniture"
      />

      {/* Extra Contact Section */}
      <Extra
        title={t("extra.title")}
        desc={t("extra.desc")}
        list={t.raw("extra.list")}
      />
    </main>
  );
};

export default UsedOfficeFurniturePage;

import React from "react";
import { useTranslations } from "next-intl";
import LocHeroSection from "@/components/base/LocHeroSection";
import Text from "@/components/base/Text";
import SerChooseUs from "@/components/SerChooseUs";
import TestimonialSlider from "@/components/TestimonialsSlider";
import Services from "@/components/base/Services";
import TwoGrid from "@/components/base/TwoGrid";
import Content from "@/components/Content";
import TwoGridLi from "@/components/TwoGridLi";
import Boxs from "@/components/Boxs";
import Gallery from "@/components/base/Gallery";
import FAQs from "@/components/base/FAQs";
import { Link } from "@/i18n/routing";
import {
  RiMedal2Fill,
  RiSofaFill,
  RiMoneyDollarCircleFill,
  RiTruckFill,
  RiShieldUserLine,
} from "@remixicon/react";
import imgSrc from "../../../../public/ajman/used-furniture-store-in-ajman.jpg";

const UsedFurnitureSharjahPage: React.FC = () => {
  const t = useTranslations("UsedFurnitureSharjahPage");
  const serChooseUs1Icons: React.ReactNode[] = [
    <RiMedal2Fill size={50} key="icon0" />,
    <RiSofaFill size={50} key="icon1" />,
    <RiMoneyDollarCircleFill size={50} key="icon2" />,
    <RiTruckFill size={50} key="icon3" />,
    <RiShieldUserLine size={50} key="icon4" />,
  ];
  const r = useTranslations("testimonials");
  return (
    <main className="md:mt-24 mt-36">
      <LocHeroSection
        title={{
          main: t("locHeroSection.title.main"),
          auth: t("locHeroSection.title.auth"),
        }}
        desc={t("locHeroSection.desc")}
        src={imgSrc}
        alt={t("locHeroSection.alt")}
      />

      <Text title={t("text.title")} desc={t("text.desc")} />

      <SerChooseUs
        title={t("serChooseUs1.title")}
        desc={t("serChooseUs1.desc")}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lis={t.raw("serChooseUs1.items").map((item: any, index: number) => ({
          title: item.title,
          desc: item.desc,
          icon: serChooseUs1Icons[index],
        }))}
      />

      <TestimonialSlider testimonials={r.raw("sharjahPageTestimonials")} />

      <Services
        title={t("services.title")}
        desc={t("services.desc")}
        services={t.raw("services.serviceItems")}
        others={t.raw("services.others")}
      />

      <TwoGrid
        title={t("twoGrid.title")}
        desc={t("twoGrid.desc")}
        sideOne={{
          src: t("twoGrid.sideOne.src"),
          alt: t("twoGrid.sideOne.alt"),
          title: t("twoGrid.sideOne.title"),
          desc: t.raw("twoGrid.sideOne.desc"),
        }}
        sideTwo={{
          src: t("twoGrid.sideTwo.src"),
          alt: t("twoGrid.sideTwo.alt"),
          title: t("twoGrid.sideTwo.title"),
          desc: t.raw("twoGrid.sideTwo.desc"),
        }}
      />

      <SerChooseUs
        title={t("serChooseUs2.title")}
        desc={t("serChooseUs2.desc")}
        lis={t.raw("serChooseUs2.items")}
      />

      <Content
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        first={t.raw("content1.sections").map((section: any) => ({
          title: section.title,
          parts: section.parts,
          extra:
            typeof section.extra === "string" ? (
              <Link
                className="text-primary underline underline-offset-4"
                href="#furniture-categories"
              >
                {section.extra}
              </Link>
            ) : (
              section.extra
            ),
        }))}
      />

      <TwoGridLi
        title={t("twoGridLi.title")}
        desc={t("twoGridLi.desc")}
        list={t.raw("twoGridLi.lists")}
        extra={t("twoGridLi.extra")}
      />

      <Boxs
        heading={t("boxs.heading")}
        desc={t("boxs.desc")}
        boxs={t.raw("boxs.items")}
      />

      <Gallery
        title={t("gallery.title")}
        desc={t("gallery.desc")}
        images={t.raw("gallery.images")}
      />

      <Content
        title={t("content2.title")}
        desc={t("content2.desc")}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        first={t.raw("content2.sections").map((section: any) => ({
          title: section.title,
          desc: section.desc,
          extra:
            typeof section.extra === "string" ? (
              <Link
                className="text-primary underline underline-offset-4"
                href="#furniture-categories"
              >
                {section.extra}
              </Link>
            ) : (
              section.extra
            ),
        }))}
      />

      <FAQs Faqs={t.raw("faqs.questions")} />
    </main>
  );
};

export default UsedFurnitureSharjahPage;

import FAQs from "@/components/base/FAQs";
import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import Boxs from "@/components/Boxs";
import Extra from "@/components/Extra";
import SerChooseUs from "@/components/SerChooseUs";
import TwoGridLi from "@/components/TwoGridLi";
import {
  RiHandCoinFill,
  RiRecycleFill,
  RiShieldCheckFill,
  RiShoppingBagFill,
  RiShoppingCart2Fill,
  RiTruckFill,
} from "@remixicon/react";
import { useTranslations } from "next-intl";

const UsedHotelFurniturePage = () => {
  const t = useTranslations("UsedHotelFurniturePage");

  // Map icons for SerChooseUs list items
  const serChooseUsList = t
    .raw("serChooseUs.list")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((item: any, index: number) => ({
      ...item,
      icon:
        index === 0 ? (
          <RiShoppingBagFill size={50} />
        ) : index === 1 ? (
          <RiShoppingCart2Fill size={50} />
        ) : (
          <RiRecycleFill size={50} />
        ),
    }));

  // Map icons for Boxs component items
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const boxsData = t.raw("boxs.boxes").map((item: any, index: number) => ({
    ...item,
    icon:
      index === 0 ? (
        <RiTruckFill size={30} />
      ) : index === 1 ? (
        <RiHandCoinFill size={30} />
      ) : (
        <RiShieldCheckFill size={30} />
      ),
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
      <SerChooseUs
        title={t("serChooseUs.title")}
        desc={t("serChooseUs.desc")}
        lis={serChooseUsList}
      />
      <Boxs heading={t("boxs.heading")} boxs={boxsData} />
      <TwoGridLi
        title={t("twoGridLi1.title")}
        desc={t("twoGridLi1.desc")}
        list={t.raw("twoGridLi1.list")}
      />
      <TwoGridLi
        title={t("twoGridLi2.title")}
        desc={t("twoGridLi2.desc")}
        extra={t("twoGridLi2.extra")}
        list={t.raw("twoGridLi2.list")}
      />
      <FooterCTA
        title={{
          main: t("footerCTA1.title.main"),
        }}
        desc={t("footerCTA1.desc")}
        src={t("footerCTA1.src")}
        alt={t("footerCTA1.alt")}
      />
      <Gallery
        title={t("gallery.title")}
        desc={t("gallery.desc")}
        images={t.raw("gallery.images")}
      />
      <Extra
        title={t("extra.title")}
        desc={t("extra.desc")}
        list={t.raw("extra.list")}
      />
      <FAQs Faqs={t.raw("faqs.items")} />
      <FooterCTA
        title={{
          main: t("footerCTA2.title.main"),
        }}
        desc={t("footerCTA2.desc")}
        src={t("footerCTA2.src")}
        alt={t("footerCTA2.alt")}
      />
    </main>
  );
};

export default UsedHotelFurniturePage;

import { useTranslations } from "next-intl";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import IntroText from "@/components/base/IntroText";
import ThirdSec from "@/components/base/thirdSec";
import Extra from "@/components/Extra";
import ThreeGrid from "@/components/base/ThreeGrid";
import SerChooseUs from "@/components/SerChooseUs";
import Gallery from "@/components/base/Gallery";
import TwoGrid from "@/components/base/TwoGrid";
import Content from "@/components/Content";
import FooterCTA from "@/components/base/FooterCTA";

const SleepingFurniturePage = () => {
  const t = useTranslations("usedSleepingFurniturePage");

  const thirdSecItems = t.raw("thirdSec.items") as {
    title: string;
    desc?: string;
    src: string;
    extra?: string;
    alt: string;
    lis: { title?: string; desc: string }[];
  }[];

  const extra1List = t.raw("extra1.list") as string[];

  const threeGridList = t.raw("threeGrid.list") as {
    title: string;
    desc: string;
  }[];

  const extra2List = t.raw("extra2.list") as string[];

  const serChooseUsLis = t.raw("serChooseUs.lis") as {
    title: string;
    desc: string;
    icon?: React.ReactNode;
  }[];

  const galleryImages = t.raw("gallery.images") as string[];

  const twoGridDesc = t.raw("twoGrid.desc") as string;
  const twoGridSideOneDesc = t.raw("twoGrid.sideOne.desc") as string[];
  const twoGridSideTwoDesc = t.raw("twoGrid.sideTwo.desc") as string[];

  const contentFirst = t.raw("content.first") as {
    title: string;
    desc: string;
  }[];
  const contentSecond = t.raw("content.second") as {
    title: string;
    desc: string;
  }[];

  const closingSectionParagraphs = t.raw(
    "closingSection.paragraphs"
  ) as string[];

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
        items={thirdSecItems}
      />

      <Extra desc={t("extra1.desc")} list={extra1List} />

      <ThreeGrid
        title={t("threeGrid.title")}
        desc={t("threeGrid.desc")}
        list={threeGridList}
        total={Number(t("threeGrid.total"))}
      />

      <Extra desc={t("extra2.desc")} list={extra2List} />

      <SerChooseUs
        title={t("serChooseUs.title")}
        desc={t("serChooseUs.desc")}
        lis={serChooseUsLis}
        extra={t("serChooseUs.extra")}
      />

      <Gallery
        title={t("gallery.title")}
        desc={t("gallery.desc")}
        images={galleryImages}
      />

      <TwoGrid
        title={t("twoGrid.title")}
        desc={twoGridDesc}
        sideOne={{
          title: t("twoGrid.sideOne.title"),
          desc: twoGridSideOneDesc,
          src: t("twoGrid.sideOne.src"),
          alt: t("twoGrid.sideOne.alt"),
        }}
        sideTwo={{
          title: t("twoGrid.sideTwo.title"),
          desc: twoGridSideTwoDesc,
          src: t("twoGrid.sideTwo.src"),
          alt: t("twoGrid.sideTwo.alt"),
        }}
      />

      <Extra desc={t("extra3.desc")} list={t.raw("extra3.list") as string[]} />

      <Content
        title={t("content.title")}
        desc={t("content.desc")}
        sub1={t("content.sub1")}
        sub2={t("content.sub2")}
        first={contentFirst}
        second={contentSecond}
      />

      <FooterCTA
        src={t("footerCTA.src")}
        alt={t("footerCTA.alt")}
        title={{
          main: t("footerCTA.title.main"),
        }}
        desc={t("footerCTA.desc")}
      />

      <section className="max-w-4xl mx-auto mt-32 md:px-0 px-3 md:text-2xl text-text text-lg">
        {closingSectionParagraphs.map((para, index) => (
          <p key={index} className="mb-5">
            {para}
          </p>
        ))}
      </section>
    </main>
  );
};

export default SleepingFurniturePage;

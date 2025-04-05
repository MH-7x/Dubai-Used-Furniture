import AboutUs from "@/components/base/AboutUs";
import Cities from "@/components/base/Cities";
import FooterCTA from "@/components/base/FooterCTA";
import GetStarted from "@/components/base/GetStarted";
import IntroText from "@/components/base/IntroText";
import PersonText from "@/components/base/PersonText";
import Services from "@/components/base/Services";
import Types from "@/components/base/Types";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import SerChooseUs from "@/components/SerChooseUs";
import { App } from "@/constants/application";
import { GenerateJSON_LD } from "@/lib/GenerateJSON_LD";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  return MetadataTemplate({
    locale,
    namespace: "MetadataHome",
  });
}

export default function Home() {
  const t = useTranslations("cta2");
  const g = useTranslations("getStarted");
  const i = useTranslations("intro");
  const s = useTranslations("service");
  const c = useTranslations("whyChooseUs");

  const locale = useLocale();

  const JSON_LD = GenerateJSON_LD({
    name: "Dubai Used Furniture",
    url: `${App.appUrl}/${locale}`,
    description:
      "We are a buyer & seller of used furniture in Dubai, UAE. We also deal in used electronics, home, office, and hotel furniture. Contact us for the best price today!",
    inLanguage: locale,
    BreadcrumbList: {
      itemListElement: [
        {
          name: "Home",
          position: 1,
          url: `${App.appUrl}/${locale}`,
        },
        {
          name: "Used Furniture Sharjah",
          position: 2,
          url: `${App.appUrl}/${locale}/used-furniture-in-sharjah`,
        },
        {
          name: "Used Furniture Abu Dhabi",
          position: 3,
          url: `${App.appUrl}/${locale}/used-furniture-in-abu-dhabi`,
        },
        {
          name: "Used Office Furniture",
          position: 4,
          url: `${App.appUrl}/${locale}/used-office-furniture-dubai`,
        },
        {
          name: "Used Home Appliances",
          position: 5,
          url: `${App.appUrl}/${locale}/used-home-appliances`,
        },
        {
          name: "About Us",
          position: 7,
          url: `${App.appUrl}/${locale}/about-us`,
        },
        {
          name: "Contact Us",
          position: 8,
          url: `${App.appUrl}/${locale}/contact-us`,
        },
      ],
    },
    ImageObject: {
      url: `${App.appUrl}/images/Dubai-Used-Furniture.webp`,
      width: 580,
      height: 580,
      caption: "Dubai Used Furniture",
    },
    webpage: {
      thumbnailUrl: `${App.appUrl}/images/Dubai-Used-Furniture.webp`,
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    },
    website: {
      sameAs: [
        "https://www.facebook.com/profile.php?id=61574525996520",
        "https://www.pinterest.com/dubai_used_furniture/",
        "https://www.instagram.com/dubai_used_furniture/",
      ],
    },
  });

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON_LD }}
      />
      <main className="md:mt-24 mt-[70px]">
        <HeroSection />
        <IntroText text={i("text")} />
        <GetStarted
          sub={g("sub")}
          title={g("title")}
          desc={g("desciption")}
          lis={[
            {
              title: g("step1.title"),
              desc: g("step1.description"),
              src: "/images/call.svg",
              alt: g("step1.alt"),
            },
            {
              title: g("step2.title"),
              desc: g("step2.description"),
              src: "/images/evaculation.svg",
              alt: g("step2.alt"),
            },
            {
              title: g("step3.title"),
              desc: g("step3.description"),
              src: "/images/cash.svg",
              alt: g("step3.alt"),
            },
          ]}
        />
        <PersonText />
        <Types />
        <Services
          title={s("section_title")}
          desc={s("description")}
          services={s.raw("services")}
          others={s.raw("otherServices")}
        />
        <SerChooseUs
          title={c("mainTitle.main") + " " + c("mainTitle.ath")}
          desc={c("description")}
          lis={c.raw("sections")}
        />
        <AboutUs />
        <Cities />
        <Contact />
        <CallToAction />

        <FooterCTA
          title={{ ath: t("title.ath"), main: t("title.main") }}
          desc={t("desc")}
          src="/images/footerCTA.png"
          alt="Let Contact With Dubai Used Furniture"
        />
      </main>
    </>
  );
}

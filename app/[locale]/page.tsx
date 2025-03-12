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
import MetadataTemplate from "@/lib/MetaDataTemplate";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

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
  return (
    <>
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

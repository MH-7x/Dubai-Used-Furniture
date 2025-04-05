import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import GalleryGrid from "@/components/GalleryGrid";
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
    namespace: "GalleryPageMetadata",
  });
}

const GalleryPage: React.FC = () => {
  const t = useTranslations("GalleryPage");

  return (
    <main className="md:mt-24 mt-20">
      <ServiceHeroSection
        title={{
          main: t("title.main"),
          auth: t("title.auth"),
        }}
        desc={t("desc")}
        btnsEnable={false}
      />
      <section className="mt-32 con">
        <h2 className="md:text-3xl text-2xl text-primary text-center">
          {t("sections.0.heading")}
        </h2>
        <p className="mt-1 text-lg text-text text-center">
          {t("sections.0.subheading")}
        </p>

        {t
          .raw("sections")
          .slice(1)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((section: any, index: number) => (
            <div key={index} className="mt-16">
              <h3 className="text-2xl text-text font-bold">
                {section.heading}
              </h3>
              <p className="text-text mt-1">{section.description}</p>
              <GalleryGrid list={section.items} />
            </div>
          ))}
      </section>
    </main>
  );
};

export default GalleryPage;

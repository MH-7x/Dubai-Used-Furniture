import MetadataTemplate from "@/lib/MetaDataTemplate";
import { useTranslations } from "next-intl";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  return MetadataTemplate({
    namespace: "FaqsPageMetadata",
    locale,
  });
}

const FAQPage = () => {
  const t = useTranslations("faqsPage");
  const JSONLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      t.raw("faqs").map((faq: { question: string; answer: string }) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    ],
  };

  return (
    <>
      <main className="bg-white dark:bg-gray-900 md:mt-24 mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {t("title")}
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {t("desc")}
          </p>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            {t
              .raw("faqs")
              .map(
                (faq: { question: string; answer: string }, index: number) => (
                  <div key={index} className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )
              )}
          </div>
        </div>
      </main>

      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />
    </>
  );
};

export default FAQPage;

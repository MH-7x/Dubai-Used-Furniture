import Contact from "@/components/Contact";
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
    namespace: "ContactPageMetadata",
  });
}

const ContactUsPage = () => {
  const t = useTranslations("contactUsPage");
  return (
    <main className="md:mt-24 mt-28">
      <Contact h1 />
      <section className="bg-gray-100 mt-40">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{t("desc")}</p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1516.0869632093245!2d55.394757550354555!3d25.341713285450336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bda6b7e4791%3A0xac39a62bb9bf4d90!2s4%20Moatab%20Bin%20Auf%20St%20-%20Bu%20Shaghara%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1741082668347!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{
                    border: "0",
                  }}
                  title={t("alt")}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {t("address")}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Building No.4 Moatab Bin Auf St, Bu Shaghara Sharjah
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {t("hours")}
                    </h3>
                    <p className="mt-1 text-gray-600">Open 24/7</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {t("Contact")}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {t("Email")}: dubaiusedfurniture.ae@gmail.com
                    </p>
                    <p className="mt-1 text-gray-600">
                      {t("Phone")}:{" "}
                      <span dir="ltr">+971 55 123 4567, +971 55 123 4567</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;

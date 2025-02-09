import React from "react";
import personImage from "../../public/images/about-used-furniture-dubai.png";
import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
const AboutUs = () => {
  const locale = useLocale();
  const t = useTranslations("about");
  const b = useTranslations("buttons");
  return (
    <section
      className={`mt-32 md:pt-3 md:pb-16 pt-5 md:px-0 px-3 con bg-secondary relative `}
    >
      <span className="bg-pattren opacity-75" />
      <div
        className={`mt-16 grid md:grid-cols-2 grid-cols-1 items-center  md:gap-0 gap-y-5 ${
          locale === "ar" ? "md:pr-16" : "md:pl-16"
        }`}
      >
        <div>
          <h2 className="text-primary md:text-4xl text-3xl">
            {t("title.main")} <span className="md:block">{t("title.ath")}</span>
          </h2>
          <p className="md:text-xl text-base mt-5 text-text">
            {t("description")}
          </p>
          <div className="mt-7 flex md:gap-x-5 gap-x-3">
            <button className="px-5 py-2 text-secondary bg-primary">
              {b("about")}
            </button>
            <button className="px-5 py-2 text-primary bg-accent flex items-center gap-x-2">
              {b("contact")} <RiArrowRightLine size={15} />
            </button>
          </div>
        </div>
        <div className="relative md:h-96 h-80 flex justify-center">
          <Image
            alt="About Dubai Used Furniture Images"
            src={personImage}
            width={400}
            height={400}
            className={`object-contain  ${
              locale === "ar" ? "md:mr-10" : "md:ml-10"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

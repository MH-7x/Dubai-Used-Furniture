/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const t = useTranslations("whyChooseUs");
  return (
    <section className="mt-32 bg-accent py-10 md:px-0 px-3">
      <p className=" text-text text-center">{t("heading")}</p>
      <h2 className="text-center md:text-4xl text-3xl text-primary">
        {t("mainTitle.main")}{" "}
        <span className="md:block">{t("mainTitle.ath")}</span>
      </h2>
      <p className="con mt-10 text-text md:text-2xl text-lg font-light">
        {t("description")}
      </p>

      {t.raw("sections").map((section: any, index: number) => (
        <div
          key={index}
          className="mt-10 grid md:grid-cols-2 grid-cols-1 con items-center md:px-10 md:gap-0 gap-y-5 md:pl-10"
        >
          <div
            className={
              index % 2 === 0 ? "order-1 md:order-2" : "md:order-1 order-2"
            }
          >
            <h3 className="text-2xl text-primary font-bold">{section.title}</h3>
            <p className="text-text mt-3 md:text-lg text-base/5">
              {section.text}
            </p>
          </div>
          <div
            className={`flex justify-center md:p-0 px-10 ${
              index % 2 === 0 ? "md:order-1 order-2" : "order-2 md:order-1"
            }`}
          >
            <Image
              className="object-contain"
              alt={section.imageAlt}
              src={section.src}
              width={300}
              height={300}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhyChooseUs;

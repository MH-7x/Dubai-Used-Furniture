/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const list = [
  "/",
  "/used-furniture-in-sharjah",
  "/used-furniture-in-abu-dhabi",
  "/used-furniture-in-ajman",
  "/used-furniture-in-ajman",
  "/used-furniture-fujairah",
  "#",
  "/used-furniture-al-ain",
];

const Cities = () => {
  const locale = useLocale();
  const t = useTranslations("cities");
  const b = useTranslations("buttons");
  return (
    <section className="con mt-32 bg-accent md:p-10 py-10 px-3">
      <h2 className="md:text-4xl text-3xl text-center text-primary">
        {t("mainTitle.main")}{" "}
        <span className="md:block text-secondary">{t("mainTitle.oth")}</span>
      </h2>
      <p className="text-text text-lg text-center mt-5 max-w-5xl mx-auto">
        {t("intro")}
      </p>

      {t.raw("cities").map((city: any, index: number) => (
        <div
          key={index}
          className="mt-16 bg-white max-w-5xl mx-auto md:p-5 pt-5 px-3 pb-16 relative"
        >
          <h3 className=" md:text-2xl text-xl text-primary font-bold ">
            {city.heading}
          </h3>
          <p className="text-text md:text-lg text-base/5 mt-3">{city.text}</p>
          <div className="mt-5 flex md:gap-x-5 gap-x-2">
            <Link
              title={`more detail about ${city.heading}`}
              href={list[index]}
            >
              <button
                aria-label={`more detail about ${city.heading}`}
                className="md:px-5 px-2 md:text-base text-sm py-2 text-secondary bg-primary"
              >
                {b("details")}
              </button>
            </Link>
            <button className="md:px-5 px-2 md:text-base text-sm py-2 text-secondary bg-white">
              {b("call")} : +971 50 000 000
            </button>
          </div>
          <Image
            src={city.src}
            alt={city.heading}
            width={250}
            height={250}
            className={`absolute md:bottom-4 bottom-0  opacity-50 ${
              locale === "ar" ? "md:left-4 left-0" : "md:right-4 right-0"
            }`}
          />
        </div>
      ))}
    </section>
  );
};

export default Cities;

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  const t = useTranslations("cta");
  const b = useTranslations("buttons");
  const locale = useLocale();
  return (
    <section
      className={`mt-32 con grid md:grid-cols-2 grid-cols-1 gap-10 items-center  md:px-0 px-3 ${
        locale === "ar" ? "md:pr-10" : "md:pl-10"
      }`}
    >
      <div>
        <h2 className="md:text-3xl text-2xl text-primary">
          {t("heading.main")}{" "}
          <span className="md:block">{t("heading.auth")}</span>
        </h2>
        <p className="mt-6 text-gray-500 ">{t("desc")}</p>
        <div className="flex gap-x-2 mt-5 items-center max-w-[450px]">
          <input
            className="w-[70%] p-3 placeholder:text-gray-400 bg-accent outline-none border-b border-transparent focus:border-secondary transition-colors duration-300 ease-in-out"
            type="text"
            placeholder={t("placeholder")}
          />
          <button className="text-sm px-3 py-3.5 w-[30%] bg-secondary text-primary">
            {b("callback")}
          </button>
        </div>
      </div>
      <div className=" grid grid-col-2 gap-3 md:px-16">
        <div className="h-40 bg-accent relative overflow-hidden drop-shadow-md">
          <Image
            src={"/images/cta-img-1.jpg"}
            alt={t("alt1")}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="h-40 bg-accent relative overflow-hidden drop-shadow-md">
          <Image
            src={"/images/cta-im-2.jpg"}
            alt={t("alt2")}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="h-40 bg-accent relative overflow-hidden drop-shadow-md col-span-2">
          <Image
            src={"/images/cta-img-3.webp"}
            alt={t("alt2")}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

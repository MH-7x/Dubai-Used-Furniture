import React from "react";
import Image from "next/image";
import { RiArrowRightLongFill, RiWhatsappLine } from "@remixicon/react";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("heroSection");
  const b = useTranslations("buttons");
  return (
    <section className="w-full min-h-[450px] md:min-h-[540px] relative grid grid-cols-4">
      <div className="md:col-span-1 md:flex flex-col items-center justify-center gap-y-3 p-5 hidden bg-secondary">
        <div className="w-[173px] h-[200px] relative">
          <Image
            src={"/images/contact-mob.png"}
            alt="contact us"
            fill
            className="absolute object-contain"
          />
        </div>
        <span className="text-primary text-xl text-center">
          {t("leftTitle")}
        </span>
        <button className="px-3 py-2 text-primary md:text-[15px] text-sm flex items-center gap-x-2 border-b border-accent">
          {b("callOrWhatsapp")} <RiArrowRightLongFill />
        </button>
      </div>
      <div className="md:col-span-3 col-span-4 relative h-full min-h-[400px]">
        {/* Overlay */}
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-primary opacity-80" />

        {/* Content */}
        <div className="absolute z-20 top-1/2 transform -translate-y-1/2 text-accent md:px-5 px-3">
          <h1 className="font-bold max-w-3xl  md:text-5xl text-3xl">
            <span className="text-secondary md:leading-[50px]">
              {t("title.name")}{" "}
            </span>
            <span className="md:block md:leading-[50px]">{t("title.cap")}</span>
          </h1>
          <p className="max-w-4xl md:text-2xl text-lg font-light mt-5">
            {t("description")}
          </p>
          <div className="flex items-center md:justify-start justify-center md:gap-x-7 gap-x-5 mt-5">
            <button className="md:px-5 px-3 py-3 text-primary md:text-[15px] text-sm flex items-center gap-x-2 bg-secondary">
              <RiWhatsappLine /> {b("whatsapp")}
            </button>
            <button className="md:px-5 px-3 py-3 text-secondary md:text-[15px] text-sm flex items-center gap-x-2 border-b border-secondary">
              {b("explore")} <RiArrowRightLongFill />
            </button>
          </div>
        </div>

        {/* Background Image */}
        <Image
          src="/images/dubai-used-furniture.jpg" // ✅ Use relative path
          fill
          loading="eager"
          className="object-cover"
          alt="Dubai Used Furniture"
        />
      </div>
    </section>
  );
};

export default HeroSection;

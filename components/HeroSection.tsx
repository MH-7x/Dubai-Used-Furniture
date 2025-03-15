import { RiServiceFill, RiWhatsappFill } from "@remixicon/react";
import { Button } from "./ui/button";
import imgSrc from "../public/images/Dubai-Used-Furniture.webp";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
const HeroSection = () => {
  const b = useTranslations("buttons");
  const t = useTranslations("heroSection");
  const locale = useLocale();
  return (
    <section className="w-full lg:mt-24 mt-36 grid lg:grid-cols-2 grid-cols-1 items-center md:gap-0 gap-y-10">
      <div
        className={`${
          locale === "ar" ? "lg:pr-16" : "lg:pl-16"
        } lg:px-0 px-3 lg:grid-cols-1 grid-cols-2`}
      >
        <h1 className="md:text-5xl text-[33px] leading-10 text-secondary">
          {t("title.name")}{" "}
          <span className="block text-primary">{t("title.cap")}</span>
        </h1>
        <p className="mt-5 md:text-xl text-lg/5  text-text">
          {t("description")}
        </p>
        <div className="md:mt-5 mt-8 flex md:gap-x-5 gap-y-3 md:flex-row flex-col">
          <Button className="w-full" whatsappBtn size={"lg"}>
            <RiWhatsappFill size={25} /> {b("whatsapp")}
          </Button>
          <Link
            href={"#used-furniture-services"}
            title="used furniture services"
          >
            <Button className="w-full" variant={"accent"} size={"lg"}>
              <RiServiceFill size={25} />
              {b("service")}
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={`bg-gray-200 ${
          locale === "ar" ? "lg:mr-10" : "lg:ml-10"
        } md:h-[550px] h-96 relative md:mt-10  overflow-hidden`}
      >
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 via-black/40 flex items-end to-black/10  z-10">
          <p className="text-accent font-light z-10 md:p-5 p-3 md:text-xl text-base/5 drop-shadow">
            {t("extra")}
          </p>
        </div>
        <Image
          id="primaryimage"
          alt={t("alt")}
          src={imgSrc}
          fill
          loading="eager"
          placeholder="blur"
          priority
          className="absolute w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;

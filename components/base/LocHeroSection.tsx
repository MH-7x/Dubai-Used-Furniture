import { RiServiceFill, RiWhatsappFill } from "@remixicon/react";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
const LocHeroSection = ({
  title,
  desc,
  src,
  alt,
}: {
  title: { main: string; auth: string };
  desc: string;
  src: StaticImageData;
  alt: string;
}) => {
  const locale = useLocale();
  const b = useTranslations("buttons");
  return (
    <section className="w-full  grid md:grid-cols-2 grid-cols-1 items-center md:gap-0 gap-y-10">
      <div
        className={` md:px-0 px-3 ${locale === "ar" ? "md:pr-16" : "md:pl-16"}`}
      >
        <h1
          className={`md:text-5xl text-[33px]  text-primary ${
            locale === "ar" ? "md:leading-[55px] leading-10" : "leading-10"
          }`}
        >
          {title.main}{" "}
          <span className="block text-secondary">{title.auth}</span>
        </h1>
        <p className="mt-5  md:text-lg/5 text-base  text-text">{desc}</p>
        <div className="md:mt-5 mt-8 flex md:gap-x-5 gap-y-3 md:flex-row flex-col">
          <Button className="w-full" whatsappBtn size={"lg"}>
            <RiWhatsappFill size={25} /> {b("whatsapp")}
          </Button>
          <Link
            title="Our Used Furniture Services in Sharjah"
            href={"#used-furniture-services"}
          >
            <Button className="w-full" variant={"accent"} size={"lg"}>
              <RiServiceFill size={25} /> {b("service")}
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={`bg-gray-200  md:h-[550px] h-96 relative overflow-hidden ${
          locale === "ar" ? "md:mr-10" : "md:ml-10"
        }`}
      >
        <Image
          alt={alt}
          src={src}
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

export default LocHeroSection;

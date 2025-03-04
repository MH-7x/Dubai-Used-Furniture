import { RiServiceFill, RiWhatsappFill } from "@remixicon/react";
import { Button } from "./ui/button";
import imgSrc from "../public/images/Dubai-Used-Furniture.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
const HeroSection = () => {
  const b = useTranslations("buttons");
  return (
    <section className="w-full md:mt-24 mt-36 grid md:grid-cols-2 grid-cols-1 items-center md:gap-0 gap-y-10">
      <div className="md:pl-16 md:px-0 px-3">
        <h1 className="md:text-5xl text-[33px] leading-10 text-secondary">
          Dubai Used Furniture{" "}
          <span className="block text-primary">
            Buy & Sell Second Hand Furniture in Dubai{" "}
          </span>
        </h1>
        <p className="mt-5 md:text-xl text-lg/5  text-text">
          If you&apos;re interested in buying or selling used furniture in
          Dubai, UAE, Dubai Used Furniture offers a simple efficient, and direct
          process.
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
      <div className="bg-gray-200 md:ml-10 md:h-[550px] h-96 relative overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-t from-black/80 via-black/40 flex items-end to-black/10  z-10">
          <p className="text-accent font-light z-10 md:p-5 p-3 md:text-xl text-base/5 drop-shadow">
            Dubai Used Furniture is a trusted buyer and seller of second-hand
            furniture in Dubai, UAE. We provide competitive prices on used
            furniture for homes, offices, and hotels while maintaining safety
            and quality. Contact us for your used furniture needs in Dubai.
          </p>
        </div>
        <Image
          alt="Dubai Used Furniture, Buy & Sell Second Hand Furniture in Dubai"
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

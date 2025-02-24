import { RiServiceFill, RiWhatsappFill } from "@remixicon/react";
import { Button } from "../ui/button";
import imgSrc from "../../public/images/Dubai-Used-Furniture.webp";
import Image from "next/image";
const LocHeroSection = () => {
  return (
    <section className="w-full  grid md:grid-cols-2 grid-cols-1 items-center md:gap-0 gap-y-10">
      <div className="md:pl-16 md:px-0 px-3">
        <h1 className="md:text-5xl text-[33px] leading-10 text-primary">
          Used Furniture in Sharjah{" "}
          <span className="block text-secondary">
            Buy & Sell Second Hand Furniture in Sharjah
          </span>
        </h1>
        <p className="mt-5  md:text-lg/5 text-base  text-text">
          We Buy & Sell all kind used furniture in All Over in Sharjah, Leading
          Used Furniture and Buying/Selling Used Furniture & home Appliances
          Company In sharjah abu shaghara Dubai Used Furniture is very popular
          to have nowadays as people mostly wants to save money on buying second
          hand items that are in good condition and can use for a long time.
        </p>
        <div className="md:mt-5 mt-8 flex md:gap-x-5 gap-y-3 md:flex-row flex-col">
          <Button size={"lg"}>
            <RiWhatsappFill size={25} /> WHATSAPP US
          </Button>
          <Button variant={"accent"} size={"lg"}>
            <RiServiceFill size={25} /> OUR SERVICES
          </Button>
        </div>
      </div>
      <div className="bg-gray-200 md:ml-10 md:h-[550px] h-96 relative overflow-hidden">
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

export default LocHeroSection;

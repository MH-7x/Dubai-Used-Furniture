import React from "react";
import Image from "next/image";
import { RiArrowRightLongFill, RiWhatsappLine } from "@remixicon/react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[450px] md:min-h-[540px] relative grid grid-cols-4">
      <div className="md:col-span-1 md:block hidden bg-secondary" />
      <div className="md:col-span-3 col-span-4 relative h-full min-h-[400px]">
        {/* Overlay */}
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-primary opacity-70" />

        {/* Content */}
        <div className="absolute z-20 top-1/2 transform -translate-y-1/2 text-accent px-3">
          <h1 className="font-bold max-w-3xl  md:text-5xl text-3xl">
            <span className="text-secondary"> Dubai Used Furniture </span>
            <span className="md:block">
              Buy & Sell Second Hand Furniture in Dubai
            </span>
          </h1>
          <p className="max-w-4xl md:text-2xl text-lg font-light mt-5">
            If you&apos;re interested in buying or selling used furniture in
            Dubai, Dubai Used Furniture offers a simple, efficient, and direct
            process.
          </p>
          <div className="flex items-center md:justify-start justify-center md:gap-x-7 gap-x-5 mt-5">
            <button className="px-3 py-2 text-accent md:text-[15px] text-sm flex items-center gap-x-2 bg-primary">
              <RiWhatsappLine /> WHATSAPP
            </button>
            <button className="px-3 py-2 text-secondary md:text-[15px] text-sm flex items-center gap-x-2 border-b border-secondary">
              EXPLORE NOW <RiArrowRightLongFill />
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

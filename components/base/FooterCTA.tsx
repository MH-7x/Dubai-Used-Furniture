import Image from "next/image";
import React from "react";

const FooterCTA = () => {
  return (
    <section className="con mt-32 bg-secondary md:py-10 pt-16 md:gap-0 gap-10 px-3 md:px-16 grid md:grid-cols-3 grid-cols-1 items-center">
      <div className=" col-span-2">
        <h2 className="md:text-3xl text-2xl text-primary">
          Don&apos;t Look Further,{" "}
          <span className="md:block">
            Let Contact With Dubai Used Furniture
          </span>
        </h2>
        <p className="text-text md:text-xl text-lg mt-3">
          We are here to help you to find quality used furniture. Let us know
          what you need and we will get back to you.
        </p>
        <div className="mt-5 flex items-center gap-x-5">
          <button className="px-5 py-2.5 bg-primary text-secondary">
            WHATSAPP US
          </button>
          <button className="px-5 py-2.5 bg-accent text-primary">
            ABOUT US
          </button>
        </div>
      </div>
      <div className=" col-span-1 h-80 relative overflow-hidden">
        <Image
          src={"/images/footerCTA.png"}
          alt="Let Contact With Dubai Used Furniture"
          fill
          className="absolute object-contain z-10 md:pl-0 pl-5"
        />
      </div>
    </section>
  );
};

export default FooterCTA;

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { RiUserShared2Line, RiWhatsappFill } from "@remixicon/react";
import { Link } from "@/i18n/routing";

const FooterCTA = ({
  title,
  desc,
  src,
  alt,
  extra,
  em,
}: {
  title: { main: string; ath?: string };
  desc: string;
  src: string;
  alt: string;
  extra?: string;
  em?: string;
}) => {
  const b = useTranslations("buttons");
  return (
    <section className="con mt-32 bg-secondary md:py-10 pt-16 md:gap-0 gap-10 px-3 md:px-16 grid md:grid-cols-3 grid-cols-1 items-center">
      <div className=" col-span-2">
        <h2 className="md:text-3xl text-2xl text-primary">
          {title.main} <span className="md:block">{title.ath}</span>
        </h2>
        <p className="text-text md:text-xl text-lg mt-3">{desc}</p>
        {extra && <p className="text-text md:text-xl text-lg mt-3">{extra}</p>}
        {em && (
          <p className="text-text md:text-lg text-base mt-3">
            <em>{em}</em>
          </p>
        )}
        <div className="mt-5 flex items-center md:gap-x-5 gap-x-2">
          <Button whatsappBtn>
            <RiWhatsappFill /> {b("whatsapp")}
          </Button>
          <Link href={"/about-us"} title="Know more about us">
            <Button variant={"accent"}>
              <RiUserShared2Line /> {b("about")}
            </Button>
          </Link>
        </div>
      </div>
      <div className=" col-span-1 h-80 relative overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="absolute object-contain z-10 md:pl-0 pl-5"
        />
      </div>
    </section>
  );
};

export default FooterCTA;

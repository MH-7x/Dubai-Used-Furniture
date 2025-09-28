import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const BackLinks = () => {
  const b = useTranslations("buttons");
  return (
    <div className="max-w-5xl m-auto mt-20 mb-10 px-3">
      <p className="md:text-xl italic text-text">
        Looking for{" "}
        <Link href={"https://rukunalaroobausedfurniture.ae/"}>
          top used furniture in sharjah
        </Link>
        ? or{" "}
        <Link
          href={
            "https://rukunalaroobausedfurniture.ae/used-furniture-buyers-in-dubai"
          }
        >
          used furniture buyers in dubai
        </Link>
        . we are{" "}
        <Link
          href={
            "https://rukunalaroobausedfurniture.ae/used-furniture-buyers-in-sharjah"
          }
        >
          best used furniture buyers in sharjah
        </Link>{" "}
        and also seller of top{" "}
        <Link
          href={
            "https://rukunalaroobausedfurniture.ae/abu-shagara-used-furniture-market"
          }
        >
          used furniture market in abu shagara
        </Link>
        . contact us anytime anywhere.
      </p>
      <div className="flex md:gap-x-5 gap-x-3">
        <Button whatsappBtn variant={"secondary"} className="mt-5" size="lg">
          {b("whatsapp")}
        </Button>

        <Link href={"/contact-us"}>
          <Button variant={"outline"} className="mt-5" size="lg">
            {b("contact")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BackLinks;

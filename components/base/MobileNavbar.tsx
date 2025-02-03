"use client";
import { Link } from "@/i18n/routing";
import {
  RiAddLine,
  RiMenu3Fill,
  RiPhoneFill,
  RiSearchLine,
} from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import logo from "../../public/image001.png";
import Image from "next/image";
import AddressBox from "../AddressBox";
const MobileNavbar = () => {
  const locale = useLocale();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    return;
  }, [lastScrollY]);

  return (
    <header dir="ltr" className="w-full relative">
      <div
        className="bg-primary h-7 px-3 text-accent w-full flex items-center justify-between fixed top-0 left-0 z-40"
        aria-label="Upper Bar"
      >
        <div
          dir="ltr"
          className="flex items-center gap-1 text-sm  transition-colors tracking-wide"
        >
          <RiPhoneFill size={19} />
          <Link href={"#"} className="ml-2 hover:text-secondary">
            +971 55 123 4567
          </Link>
          <Link href={"#"} className="ml-2 hover:text-secondary">
            +971 55 123 4567
          </Link>
        </div>
        {locale === "ar" ? (
          <Link href={"/"} locale="en" className=" text-secondary mb-0.5">
            English
          </Link>
        ) : (
          <Link href={"/"} locale="ar" className="ml-6 text-secondary mb-1">
            عربي
          </Link>
        )}
      </div>
      <nav
        className={`fixed z-50 top-0 h-[55px] left-0 w-full px-3 flex items-center justify-between  ${
          !showNavbar
            ? "translate-y-0 bg-white shadow-lg shadow-black/5"
            : "translate-y-7 bg-accent"
        } transition-all duration-200`}
      >
        <div className="w-36 h-9 relative">
          <Image
            alt="dubai used furniture logo"
            title="dubai used furniture logo"
            src={logo}
            fill
            className="absolute object-contain"
          />
        </div>
        <div className="flex gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center  text-secondary">
            <RiSearchLine className="w-5 h-5" />
          </button>
          <AddressBox />

          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label
            htmlFor="menu-toggle"
            className="w-8 h-8 flex items-center justify-center bg-primary text-accent cursor-pointer"
          >
            <RiMenu3Fill className="w-5 h-5" />
          </label>

          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default MobileNavbar;

const Sidebar = () => {
  const l = useTranslations("NavList");

  return (
    <div className="sidebar scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary">
      {/* Close Button */}
      <label
        htmlFor="menu-toggle"
        className="absolute top-3 right-4 text-xl cursor-pointer"
      >
        <span className="text-2xl">✖</span>
      </label>

      <ul className="w-full px-5 mt-[70px] text-lg">
        {/* SERVICES DROPDOWN */}
        <li className="border-b border-accent/50 mb-2">
          <input type="checkbox" id="services-toggle" className="peer hidden" />
          <label
            htmlFor="services-toggle"
            className="flex items-center justify-between w-full pl-4 py-2 cursor-pointer"
          >
            <span>{l("services.title")}</span>
            <RiAddLine className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDonw
            list={[
              `${l("services.ser1")} ${l("services.buySell")}`,
              `${l("services.ser2")} ${l("services.buySell")}`,
              `${l("services.ser3")} ${l("services.buySell")}`,
              `${l("services.ser4")} ${l("services.buySell")}`,
              `${l("services.ser5")} ${l("services.buySell")}`,
              `${l("services.ser6")} ${l("services.buySell")}`,
              `${l("services.ser7")} ${l("services.buySell")}`,
              `${l("services.ser8")} ${l("services.buySell")}`,
              `${l("services.ser9")} ${l("services.buySell")}`,
            ]}
          />
        </li>

        {/* LOCATIONS DROPDOWN */}
        <li className="border-b border-accent/50 mb-2">
          <input
            type="checkbox"
            id="locations-toggle"
            className="peer hidden"
          />
          <label
            htmlFor="locations-toggle"
            className="flex items-center justify-between w-full pl-4 py-2 cursor-pointer"
          >
            <span>{l("locations.title")}</span>
            <RiAddLine className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDonw
            list={[
              `${l("locations.usedFurniture")} ${l("locations.loc1")}`,
              `${l("locations.usedFurniture")} ${l("locations.loc2")}`,
              `${l("locations.usedFurniture")} ${l("locations.loc3")}`,
              `${l("locations.usedFurniture")} ${l("locations.loc4")}`,
              `${l("locations.usedFurniture")} ${l("locations.loc5")}`,
              `${l("locations.usedFurniture")} ${l("locations.loc6")}`,
              `${l("locations.usedFurniture")} ${l("locations.loc7")}`,
            ]}
          />
        </li>

        {/* OTHER LINKS */}
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link href={"#"}>{l("aboutUs")}</Link>
        </li>
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link href={"#"}>{l("contactUs")}</Link>
        </li>
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link href={"#"}> {l("blogs")}</Link>
        </li>
      </ul>
    </div>
  );
};

const DropDonw = ({ list }: { list: string[] }) => {
  return (
    <ul className="hidden peer-checked:block pl-6 pb-2 space-y-2 text-sm text-accent/90 font-light">
      {list.map((item) => (
        <li key={item} title={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

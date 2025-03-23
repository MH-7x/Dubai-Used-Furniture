"use client";
import { Link } from "@/i18n/routing";
import { RiAddLine, RiMenu3Fill, RiPhoneFill } from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import logo from "../../public/logo-svg.svg";
import Image from "next/image";
import AddressBox from "../AddressBox";
import SearchLayout from "../SearchLayout";
import LanguageSwitcher from "../LanguageSwitcher";
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
        className="bg-primary h-8 px-3 text-accent w-full flex items-center justify-between fixed top-0 left-0 z-40"
        aria-label="Upper Bar"
      >
        <div
          dir="ltr"
          className="flex items-center gap-1 text-sm  transition-colors tracking-wide"
        >
          <RiPhoneFill size={19} />
          <Link
            href={"tel:+971545019655"}
            className="ml-2 hover:text-secondary"
          >
            +971 54 5019655
          </Link>
          <Link
            href={"tel:+971503626685"}
            className="ml-2 hover:text-secondary"
          >
            +0971 52 1314535
          </Link>
        </div>
        <LanguageSwitcher locale={locale} />
      </div>
      <nav
        className={`fixed z-50 top-0 h-[55px] left-0 w-full px-3 flex items-center justify-between  ${
          !showNavbar
            ? "translate-y-0 bg-white shadow-lg shadow-black/5"
            : "translate-y-8 bg-accent"
        } transition-all duration-200`}
      >
        <Link title="Home" href={"/"}>
          <Image
            alt="dubai used furniture logo"
            title="dubai used furniture logo"
            src={logo}
            width={150}
            height={150}
            className=""
            loading="eager"
            priority
          />
        </Link>
        <div className="flex gap-x-2">
          <SearchLayout forMobile={true} />
          <AddressBox />

          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label
            htmlFor="menu-toggle"
            className="w-10 rounded-md h-9 flex items-center justify-center bg-primary text-accent cursor-pointer"
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
  const closeSidebar = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };
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
          <DropDown
            list={[
              {
                title: `${l("services.buySell")} ${l("services.ser1")}`,
                link: "/used-home-furniture-dubai",
              },
              {
                title: `${l("services.buySell")} ${l("services.ser2")}`,
                link: "/used-office-furniture-dubai",
              },
              {
                title: `${l("services.buySell")} ${l("services.ser3")}`,
                link: "/used-home-appliances",
              },
              {
                title: `${l("services.buySell")} ${l("services.ser5")}`,
                link: "/used-seating-furniture",
              },
              {
                title: `${l("services.buySell")} ${l("services.ser6")}`,
                link: "/used-table-furniture",
              },
              {
                title: `${l("services.buySell")} ${l("services.ser7")}`,
                link: "/used-sleeping-furniture",
              },
              {
                title: `${l("services.buySell")} ${l("services.ser8")}`,
                link: "/used-storage-furniture",
              },
              {
                title: `${l("services.buySell")} ${l("services.ser9")}`,
                link: "/used-hotel-furniture-dubai",
              },
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
          <DropDown
            list={[
              {
                title: `${l("locations.usedFurniture")} ${l("locations.loc1")}`,
                link: "/used-furniture-in-abu-dhabi",
              },
              {
                title: `${l("locations.usedFurniture")} ${l("locations.loc2")}`,
                link: "/used-furniture-in-sharjah",
              },
              {
                title: `${l("locations.usedFurniture")} ${l("locations.loc3")}`,
                link: "/used-furniture-in-ajman",
              },
              {
                title: `${l("locations.usedFurniture")} ${l("locations.loc5")}`,
                link: "#",
              },
              {
                title: `${l("locations.usedFurniture")} ${l("locations.loc6")}`,
                link: "/used-furniture-fujairah",
              },
              {
                title: `${l("locations.usedFurniture")} ${l("locations.loc7")}`,
                link: "/used-furniture-al-ain",
              },
            ]}
          />
        </li>

        {/* OTHER LINKS */}
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link onClick={closeSidebar} href={"/about-us"}>
            {l("aboutUs")}
          </Link>
        </li>
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link onClick={closeSidebar} href={"/contact-us"}>
            {l("contactUs")}
          </Link>
        </li>
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link onClick={closeSidebar} href={"#"}>
            {" "}
            {l("blogs")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const DropDown = ({ list }: { list: { title: string; link: string }[] }) => {
  const closeSidebar = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <ul className="hidden peer-checked:block pl-4 pb-2 space-y-2 text-sm text-accent/80 font-light ">
      {list.map((item) => (
        <li key={item.title} title={item.title}>
          <Link
            className="pb-0.5 px-1 text-base"
            href={item.link}
            onClick={closeSidebar} // Close sidebar on link click
          >
            <span className="text-base text-accent pr-1">&rarr;</span>{" "}
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

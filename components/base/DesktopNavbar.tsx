"use client";

import Image from "next/image";
import logo from "../../public/logo-svg.svg";
import { RiCellphoneFill, RiMapPinFill, RiPhoneFill } from "@remixicon/react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import SearchLayout from "../SearchLayout";
import LanguageSwitcher from "../LanguageSwitcher";
const DesktopNavbar = () => {
  const locale = useLocale();
  const u = useTranslations("utils");
  const l = useTranslations("NavList");

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
    <header>
      <div
        aria-label="upper bar"
        className="bg-primary w-full z-40 fixed top-0 left-0 h-9 flex items-center"
      >
        <div className="con flex items-center justify-between text-accent font-light">
          <div
            dir="ltr"
            className="flex items-center gap-1 text-sm  transition-colors tracking-wide"
          >
            <RiPhoneFill size={21} />
            <Link
              href={"tel:+971545019655"}
              className="ml-2 hover:text-secondary"
            >
              +971 54 5019655
            </Link>
            <Link
              href={"tel:+971521314535"}
              className="ml-2 hover:text-secondary"
            >
              +971 52 1314535
            </Link>
          </div>
          <div className="flex items-center gap-1 text-sm ">
            <RiMapPinFill size={20} />
            <address className="ml-2 ">{u("address")}</address>

            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
      <nav
        className={`fixed z-50 bg-white top-0 left-0 w-full  ${
          !showNavbar
            ? "translate-y-0  shadow-lg shadow-black/5"
            : "translate-y-9 "
        } transition-all duration-200`}
      >
        <div className="con flex items-center h-16 justify-between">
          <Link id="logo" aria-label="Home" href={"/"}>
            <Image
              src={logo}
              alt="dubai used furniture logo"
              title="dubai used furniture logo"
              width={200}
              height={200}
              loading="eager"
              priority
              className=""
            />
          </Link>
          <div className="flex items-center gap-x-10">
            <ul className="flex items-center gap-x-1.5 text-primary relative">
              <NavItem
                locale={locale}
                title={l("services.title")}
                dropdownItems={[
                  {
                    title: `${l("services.ser1")} ${l("services.buySell")}`,
                    link: "/used-home-furniture-dubai",
                  },
                  {
                    title: `${l("services.ser2")} ${l("services.buySell")}`,
                    link: "/used-office-furniture-dubai",
                  },
                  {
                    title: `${l("services.ser3")} ${l("services.buySell")}`,
                    link: "/used-home-appliances",
                  },
                  {
                    title: `${l("services.ser5")} ${l("services.buySell")}`,
                    link: "/used-seating-furniture",
                  },
                  {
                    title: `${l("services.ser6")} ${l("services.buySell")}`,
                    link: "/used-table-furniture",
                  },
                  {
                    title: `${l("services.ser7")} ${l("services.buySell")}`,
                    link: "/used-sleeping-furniture",
                  },
                  {
                    title: `${l("services.ser8")} ${l("services.buySell")}`,
                    link: "/used-storage-furniture",
                  },
                  {
                    title: `${l("services.ser9")} ${l("services.buySell")}`,
                    link: "/used-hotel-furniture-dubai",
                  },
                ]}
              />
              <NavItem
                locale={locale}
                title={l("locations.title")}
                dropdownItems={[
                  {
                    title: `${l("locations.usedFurniture")} ${l(
                      "locations.loc1"
                    )}`,
                    link: "/used-furniture-in-abu-dhabi",
                  },
                  {
                    title: `${l("locations.usedFurniture")} ${l(
                      "locations.loc2"
                    )}`,
                    link: "/used-furniture-in-sharjah",
                  },
                  {
                    title: `${l("locations.usedFurniture")} ${l(
                      "locations.loc3"
                    )}`,
                    link: "/used-furniture-in-ajman",
                  },
                  {
                    title: `${l("locations.usedFurniture")} ${l(
                      "locations.loc5"
                    )}`,
                    link: "#",
                  },
                  {
                    title: `${l("locations.usedFurniture")} ${l(
                      "locations.loc6"
                    )}`,
                    link: "/used-furniture-fujairah",
                  },
                  {
                    title: `${l("locations.usedFurniture")} ${l(
                      "locations.loc7"
                    )}`,
                    link: "/used-furniture-al-ain",
                  },
                ]}
              />
              <li>
                <Link
                  className="hover:bg-accent px-2.5 py-2 text-[15px]"
                  href="/about-us"
                >
                  {l("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-accent px-2.5 py-2 text-[15px]"
                  href="/contact-us"
                >
                  {l("contactUs")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-accent px-2.5 py-2 text-[15px]"
                  href="#"
                >
                  {l("blogs")}
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-x-3">
              <SearchLayout />
              <Button callBtn>
                CALL US <RiCellphoneFill />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavbar;

function NavItem({
  title,
  dropdownItems,
  locale,
}: {
  title: string;
  locale: string;
  dropdownItems: { link: string; title: string }[];
}) {
  return (
    <li className="relative group">
      <Link className="hover:bg-accent px-2.5 py-2 text-[15px]" href="#">
        {title}
      </Link>
      <ul
        className={`absolute ${
          locale === "ar" ? "right-0" : "left-0"
        } mt-1 hidden w-72 bg-white shadow-2xl px-4 rounded group-hover:block`}
      >
        {dropdownItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2.5 hover:bg-gray-50 text-sm border-b"
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

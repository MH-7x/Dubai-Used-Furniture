"use client";

import Image from "next/image";
import logo from "../../public/image001.png";
import { RiMapPinFill, RiPhoneFill } from "@remixicon/react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
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
        className="bg-primary w-full z-40 fixed top-0 left-0 h-8 flex items-center"
      >
        <div className="con flex items-center justify-between text-accent font-light">
          <div
            dir="ltr"
            className="flex items-center gap-1 text-sm  transition-colors tracking-wide"
          >
            <RiPhoneFill size={21} />
            <Link href={"#"} className="ml-2 hover:text-secondary">
              +971 55 123 4567
            </Link>
            <Link href={"#"} className="ml-2 hover:text-secondary">
              +971 55 123 4567
            </Link>
          </div>
          <div className="flex items-center gap-1 text-sm ">
            <RiMapPinFill size={20} />
            <address className="ml-2 ">{u("address")}</address>

            {locale === "ar" ? (
              <Link
                href={"/"}
                locale="en"
                className="mr-6 text-secondary mb-0.5"
              >
                English
              </Link>
            ) : (
              <Link href={"/"} locale="ar" className="ml-6 text-secondary mb-1">
                عربي
              </Link>
            )}
          </div>
        </div>
      </div>
      <nav
        className={`fixed z-50 top-0 left-0 w-full  ${
          !showNavbar
            ? "translate-y-0 bg-white shadow-lg shadow-black/5"
            : "translate-y-8 bg-accent"
        } transition-all duration-200`}
      >
        <div className="con flex items-center h-16 justify-between">
          <Link aria-label="Home" href={"/"}>
            <div className="w-52 h-12 relative">
              <Image
                src={logo}
                alt="dubai used furniture logo"
                title="dubai used furniture logo"
                fill
                loading="eager"
                priority
                className="absolute object-contain object-center"
              />
            </div>
          </Link>
          <ul className="flex items-center gap-x-1.5 text-primary relative">
            <NavItem
              locale={locale}
              title={l("services.title")}
              dropdownItems={[
                {
                  title: `${l("services.ser1")} ${l("services.buySell")}`,
                  link: "#",
                },
                {
                  title: `${l("services.ser2")} ${l("services.buySell")}`,
                  link: "#",
                },
                {
                  title: `${l("services.ser3")} ${l("services.buySell")}`,
                  link: "#",
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
                  link: "#",
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
                  link: "#",
                },
                {
                  title: `${l("locations.usedFurniture")} ${l(
                    "locations.loc2"
                  )}`,
                  link: "#",
                },
                {
                  title: `${l("locations.usedFurniture")} ${l(
                    "locations.loc3"
                  )}`,
                  link: "#",
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
                  link: "#",
                },
                {
                  title: `${l("locations.usedFurniture")} ${l(
                    "locations.loc7"
                  )}`,
                  link: "#",
                },
              ]}
            />
            <li>
              <Link className="hover:bg-white px-2.5 py-2 text-[15px]" href="#">
                {l("aboutUs")}
              </Link>
            </li>
            <li>
              <Link className="hover:bg-white px-2.5 py-2 text-[15px]" href="#">
                {l("contactUs")}
              </Link>
            </li>
            <li>
              <Link className="hover:bg-white px-2.5 py-2 text-[15px]" href="#">
                {l("blogs")}
              </Link>
            </li>
          </ul>
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
      <Link className="hover:bg-white px-2.5 py-2 text-[15px]" href="#">
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

"use client";

import Image from "next/image";
import logo from "../../public/image001.png";
import { RiMapPinFill, RiPhoneFill } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
const BlogDesktopNav = () => {
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
            <address className="ml-2 ">
              Building No.4 Moatab Bin Auf St, Bu Shaghara Sharjah
            </address>
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
              title="SERVICES"
              dropdownItems={[
                "Home Furniture Buy & Sell",
                "Office Furniture Buy & Sell",
                "Home Appilance Buy & Sell",
                "Outdoor Furniture Buy & Sell",
                "Seating Furniture Buy & Sell",
                "Table Furniture Buy & Sell",
                "Sleeping / Buy & Sell Laying furniture",
                "Storage Furniture Buy & Sell",
                "Hotel Furniture Buy & Sell",
              ]}
            />
            <NavItem
              title="LOCATIONS"
              dropdownItems={[
                "Abu Dhabi",
                "Sharjah",
                "Ajman",
                "Ras Al Khaimah",
                "Umm Al Quwain",
                "Fujairah",
                "Al Ain",
              ]}
            />
            <li>
              <Link className="hover:bg-white px-2.5 py-2 text-[15px]" href="#">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link className="hover:bg-white px-2.5 py-2 text-[15px]" href="#">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link className="hover:bg-white px-2.5 py-2 text-[15px]" href="#">
                BLOGS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default BlogDesktopNav;

function NavItem({
  title,
  dropdownItems,
}: {
  title: string;

  dropdownItems: string[];
}) {
  return (
    <li className="relative group">
      <Link className="hover:bg-white px-2.5 py-2 text-[15px]" href="#">
        {title}
      </Link>
      <ul
        className={`absolute left-0
         mt-1 hidden w-72 bg-white shadow-2xl px-4 rounded group-hover:block`}
      >
        {dropdownItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2.5 hover:bg-gray-50 text-sm border-b"
          >
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

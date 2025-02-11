"use client";
import Link from "next/link";
import {
  RiAddLine,
  RiMenu3Fill,
  RiPhoneFill,
  RiSearchLine,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import logo from "../../public/image001.png";
import Image from "next/image";
import BlogAddressBox from "../BlogAddressBox";
const BlogMobileNav = () => {
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
          <BlogAddressBox />

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

export default BlogMobileNav;

const Sidebar = () => {
  return (
    <div className="sidebar scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary">
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
            <span>SERVICES</span>
            <RiAddLine className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDonw
            list={[
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
        </li>

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
            <span>LOCATIONS</span>
            <RiAddLine className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDonw
            list={[
              "Abu Dhabi",
              "Sharjah",
              "Ajman",
              "Ras Al Khaimah",
              "Umm Al Quwain",
              "Fujairah",
              "Al Ain",
            ]}
          />
        </li>

        {/* OTHER LINKS */}
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link href={"#"}>ABOUT US</Link>
        </li>
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link href={"#"}>CONTACT US</Link>
        </li>
        <li className="border-b border-accent/50 mb-2 pl-4 py-2">
          <Link href={"#"}>BLOGS</Link>
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

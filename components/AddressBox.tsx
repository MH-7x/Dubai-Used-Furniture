"use client";

import { Link } from "@/i18n/routing";
import {
  RiCustomerService2Fill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "@remixicon/react";
import { useTranslations } from "next-intl";
import { motion, useCycle } from "motion/react";
import React from "react";

const AddressBox = () => {
  const u = useTranslations("utils");
  const [isOpen, toggleOpen] = useCycle(false, true); // useCycle is used instead of useState

  return (
    <>
      <button
        onClick={() => toggleOpen()}
        className="w-8 h-8 flex items-center justify-center text-secondary"
        aria-label="contact details"
      >
        <RiCustomerService2Fill className="w-5 h-5" />
      </button>

      {/* Animated Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={
          isOpen
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: -10, scale: 0.9 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full bg-secondary text-primary py-5 absolute top-12 left-0 px-3 shadow-lg ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-1">
          <RiMapPin2Fill className="w-5 h-5" />
          <address className="text-sm">{u("address")}</address>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <RiPhoneFill className="w-5 h-5" />
          <p className="text-sm">+978 1234 5678, +978 1234 5678</p>
        </div>
        <div className="flex items-center justify-center gap-x-5 underline underline-offset-2 text-sm mt-3">
          <Link href={"#"}>CALL TO US</Link>
          <Link href={"#"}>CONTACT NOW</Link>
        </div>
      </motion.div>
    </>
  );
};

export default AddressBox;

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    }
  }, []);

  // Toggle locale in the pathname
  const newLocale = locale === "ar" ? "en" : "ar";
  const newPath = pathname.replace(/^\/(en|ar)/, `/${newLocale}`);

  return isMobile ? (
    locale === "ar" ? (
      <Link
        aria-label="switch to english"
        title="switch to english"
        href={newPath}
        locale="en"
        className="text-secondary mb-0.5"
      >
        English
      </Link>
    ) : (
      <Link
        aria-label="switch to arabic"
        title="switch to arabic"
        href={newPath}
        locale="ar"
        className="ml-6 text-secondary mb-1"
      >
        عربي
      </Link>
    )
  ) : locale === "ar" ? (
    <Link
      aria-label="switch to english"
      title="switch to english"
      href={newPath}
      locale="en"
      className="mr-6 text-secondary mb-0.5"
    >
      English
    </Link>
  ) : (
    <Link
      aria-label="switch to arabic"
      title="switch to arabic"
      href={newPath}
      locale="ar"
      className="ml-6 text-secondary mb-1"
    >
      عربي
    </Link>
  );
};

export default LanguageSwitcher;

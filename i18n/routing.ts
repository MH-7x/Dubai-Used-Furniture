import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localeDetection: true,
});

//warpper for next-intl
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false,
});

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;
  const url = nextUrl.clone();

  // Allow direct access to blogs without interference
  if (pathname.startsWith("/blogs")) {
    return NextResponse.next();
  }

  // Force HTTPS
  if (nextUrl.protocol === "http:") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // Redirect non-www to www (if preferred)
  if (!nextUrl.hostname.startsWith("www.")) {
    url.hostname = `www.${nextUrl.hostname}`;
    return NextResponse.redirect(url, 301);
  }

  // Ensure root ("/") redirects to the default locale ("/en/")
  if (pathname === "/") {
    url.pathname = `/${defaultLocale}/`;
    return NextResponse.redirect(url, 301);
  }

  // Ensure robots.txt is directly accessible (no redirect issues)
  if (pathname === "/robots.txt") {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(en|ar)/:path*"],
};

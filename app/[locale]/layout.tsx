import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "../globals.css";
import { LazyMotion, domAnimation } from "motion/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import BlogsList from "@/components/BlogsList";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GTM from "@/components/GTM";
const almarai = Almarai({
  weight: ["300", "400", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: "normal",
  subsets: ["arabic"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  applicationName: "Dubai Used Furniture",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
};
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const message = await getMessages();

  return (
    <html
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <GTM />
      </head>
      <body className={`${almarai.className} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-55PRPLF2`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NextIntlClientProvider messages={message}>
          <LazyMotion features={domAnimation}>
            <Navbar />
            {children}
            <BlogsList />
            <Footer />
          </LazyMotion>
        </NextIntlClientProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}

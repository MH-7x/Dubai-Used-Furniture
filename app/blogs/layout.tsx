import React from "react";
import { Almarai } from "next/font/google";
import "../globals.css";
import BlogNavbar from "@/components/base/BlogNavBar";
import Footer from "@/components/base/Footer";
import NormalFooter from "@/components/NormalFooter";
const almarai = Almarai({
  weight: ["300", "400", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: "normal",
  subsets: ["arabic"],
  variable: "--font-almarai",
});

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html>
      <body className={`antialiased ${almarai.className}`}>
        <BlogNavbar />
        <main className="md:mt-24 mt-[85px]">{children}</main>
        <NormalFooter />
      </body>
    </html>
  );
};

export default layout;

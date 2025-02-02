import { headers } from "next/headers";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = async () => {
  const reqHeaders = await headers();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(
    reqHeaders.get("user-agent") || ""
  );

  if (isMobile) {
    return <MobileNavbar />;
  }
  return <DesktopNavbar />;
};

export default Navbar;

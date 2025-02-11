import { headers } from "next/headers";
import React from "react";
import BlogMobileNav from "./BlogMobileNav";
import BlogDesktopNav from "./BlogDesktopNav";

const BlogNavbar = async () => {
  const reqHeaders = await headers();

  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(
    reqHeaders.get("user-agent") || ""
  );

  if (isMobile) {
    return <BlogMobileNav />;
  }
  return <BlogDesktopNav />;
};

export default BlogNavbar;

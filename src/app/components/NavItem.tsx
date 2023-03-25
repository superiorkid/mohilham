"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navItemStyle = "font-bold";

function NavItem() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row space-x-5">
      <Link
        href="/"
        className={`hover:text-orange-500 ${
          pathname === "/" ? `${navItemStyle}` : ""
        }`}
      >
        ABOUT
      </Link>
      <Link
        href="/projects"
        className={`hover:text-orange-500 ${
          pathname === "/projects" ? `${navItemStyle}` : ""
        }`}
      >
        PROJECTS
      </Link>
      <Link
        href="/blog"
        className={`hover:text-orange-500 ${
          pathname === "/blog" ? `${navItemStyle}` : ""
        }`}
      >
        BLOG
      </Link>
    </nav>
  );
}

export default NavItem;

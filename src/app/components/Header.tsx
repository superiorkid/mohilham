"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItemStyle = "font-bold";

function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="py-5">
      <div className="justify-between px-5 md:justify-start flex flex-row items-center md:space-x-10 ">
        <div>
          <strong className="text-md font-extrabold">ILHAM</strong>
        </div>
        <div className="text-xs hidden md:flex">
          <NavItem />
        </div>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button onClick={(e) => setOpenMobileMenu(!openMobileMenu)}>
            {openMobileMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className="md:hidden absolute w-full py-4">
        <div
          className={`${!openMobileMenu && "hidden"} space-y-3 bg-black py-4`}
        >
          <Link
            href="/"
            className={`hover:text-orange-500 mobile-menu-button ${
              pathname === "/" ? `${navItemStyle}` : ""
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className={`hover:text-orange-500 mobile-menu-button ${
              pathname === "/projects" ? `${navItemStyle}` : ""
            }`}
          >
            PROJECTS
          </Link>
          <Link
            href="/blog"
            className={`hover:text-orange-500 mobile-menu-button ${
              pathname === "/blog" ? `${navItemStyle}` : ""
            }`}
          >
            BLOG
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

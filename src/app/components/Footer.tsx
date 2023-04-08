import Link from "next/link";
import React from "react";
import { FiMail } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaRss,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCopyright,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="md:justify-between flex flex-col-reverse items-center space-y-3 md:space-y-0 md:flex-row py-5 md:pb-5 md:pt-14 px-5">
      <div>
        <span className="text-md text-neutral-600 flex items-center">
          Made with <FaHeart className="mx-1 text-red-500" /> by me
        </span>
        {/* <Link
          href="#subscribe"
          className="flex flex-row items-center space-x-1"
        >
          <FiMail />
          <span>Subscribe</span>
        </Link>
        <Link
          href="#subscribe"
          className="flex flex-row items-center space-x-1"
        >
          <AiOutlineHeart />
          <span>Support</span>
        </Link>
        <Link
          href="#subscribe"
          className="flex flex-row items-center space-x-1"
        >
          <FaRss />
          <span>RSS</span>
        </Link> */}
      </div>
      <div className="flex flex-row space-x-5">
        <Link
          href="#subscribe"
          className="flex flex-row items-center space-x-1"
        >
          <FiMail />
          <span>Subscribe</span>
        </Link>
        <Link
          href="#subscribe"
          className="flex flex-row items-center space-x-1"
        >
          <FaRss />
          <span>RSS</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;

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
    <div className="justify-center md:justify-start flex flex-row py-5 md:pb-5 md:pt-14 px-5">
      <div className="flex flex-row space-x-11 md:space-x-5">
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
    </div>
  );
}

export default Footer;

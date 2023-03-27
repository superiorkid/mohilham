import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function MediaConnect() {
  return (
    <div className="flex flex-row space-x-4 py-3 text-2xl">
      <Link
        href="https://github.com/superiorkid"
        className="hover:text-orange-600"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.facebook.com/ylmidorfeed/"
        className="hover:text-orange-600"
      >
        <FaFacebook />
      </Link>
      <Link
        href="https://www.instagram.com/__superiorkid/"
        className="hover:text-orange-600"
      >
        <FaInstagram />
      </Link>
    </div>
  );
}

export default MediaConnect;

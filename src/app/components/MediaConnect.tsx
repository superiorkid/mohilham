import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function MediaConnect() {
  return (
    <div className="flex flex-row space-x-3 py-3 text-2xl">
      <Link href="https://github.com/superiorkid">
        <FaGithub />
      </Link>
      <Link href="https://www.facebook.com/ylmidorfeed/">
        <FaFacebook />
      </Link>
      <Link href="https://www.instagram.com/__superiorkid/">
        <FaInstagram />
      </Link>
    </div>
  );
}

export default MediaConnect;

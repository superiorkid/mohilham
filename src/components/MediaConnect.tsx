import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import AcademiconsCv from "@/components/icons/AcademiconsCv";

function MediaConnect() {
  return (
    <div className="flex flex-row space-x-4 py-3 text-2xl items justify-center md:justify-start">
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
      <Link
        download
        href="https://www.cakeresume.com/pdf/s--D_q5UHO5i0zQnaCbtDGN7w--/ZPM8X.pdf"
        className="hover:text-orange-600"
      >
        <AcademiconsCv />
      </Link>
    </div>
  );
}

export default MediaConnect;

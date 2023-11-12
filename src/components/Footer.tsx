import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="md:justify-between flex flex-col-reverse items-center space-y-3 md:space-y-0 md:flex-row py-5 md:pb-5 md:pt-14 px-5">
      <div>
        <span className="text-md text-neutral-600 flex items-center">
          Made with <FaHeart className="mx-1 text-red-500" /> by me
        </span>
      </div>
    </div>
  );
}

export default Footer;

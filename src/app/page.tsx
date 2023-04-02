import Image from "next/image";
import React from "react";
import {
  FaDev,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
  FaTwitter,
  FaUniversity,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";
import Description from "./components/Description";
import MediaConnect from "./components/MediaConnect";
import Skills from "./components/Skills";

function Home() {
  return (
    <div className="px-5">
      <div className="py-5 md:flex md:flex-row space-x-1 w-full">
        <div>
          <Image
            src="/me.jpg"
            width={250}
            height={250}
            alt="Ilham"
            className="rounded-full"
            loading="lazy"
          />
        </div>
        <div className="p-6 space-y-5">
          <div className="space-y-2">
            <h1 className="font-extrabold text-4xl font-serif">
              Moh. Ilhamuddin
            </h1>
            <span className="text-md text-slate-500 font-normal flex flex-row items-center">
              <FaUniversity className="mr-1 text-lg" />
              Student at Hamzanwadi University
            </span>
            <p className="font-normal text-slate-500 flex flex-row items-center">
              <MdOutlineLocationOn className="mr-1 text-lg" />
              Lombok, West Nusa Tenggara
            </p>
          </div>
          <Skills />
          <MediaConnect />
        </div>
      </div>
      <div className="py-5">
        <Description />
      </div>
    </div>
  );
}

export default Home;

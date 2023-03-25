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

function Home() {
  return (
    <div>
      <div className="py-5 md:flex md:flex-row space-x-1">
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

          <div className="flex flex-row space-x-3 text-sm font-reg">
            <span className="px-2 py-1 bg-gray-200 rounded-sm">JavaScript</span>
            <span className="px-2 py-1 bg-gray-200 rounded-sm">Python</span>
            <span className="px-2 py-1 bg-gray-200 rounded-sm">ReactJS</span>
            <span className="px-2 py-1 bg-gray-200 rounded-sm">NextJS</span>
            <span className="px-2 py-1 bg-gray-200 rounded-sm">Flask</span>
          </div>

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

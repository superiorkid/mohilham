import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaPlay, FaRegStar } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";

const ProjectCard = () => {
  return (
    <div className="aspect-square flex grow flex-col rounded-md shadow-md border">
      <div className="flex-1 relative aspect-video hidden md:block">
        <Image
          fill
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="demo imgae"
          className="object-cover hover:brightness-75"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="min-h-[60%] text-sm py-5 px-6 flex flex-col justify-between space-y-6">
        <div>
          <h1 className="text-2xl font-black">
            <Link
              href="/projects/nextagram"
              className="hover:underline transition-transform"
            >
              Project Title
            </Link>
          </h1>
          <div className="mt-3 flex justify-between items-center">
            <p className="font-medium text-gray-500 flex items-center space-x-1.5">
              <MdCalendarMonth className=" w-5 h-5" />
              <span>3 june 2000</span>
            </p>
            <p className="font-bold items-center flex space-x-1.5 text-gray-700">
              <FaRegStar className="w-5 h-5" />
              <span>120</span>
            </p>
          </div>
          <p className="line-clamp-5 mt-3.5 leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            autem beatae blanditiis, doloribus eveniet id odio omnis. Aspernatur
            esse ex maiores porro tenetur. Alias amet asperiores beatae iusto
            laudantium nulla quam quasi qui, quisquam veritatis. Aliquid
            doloribus mollitia nam quis veritatis. Eveniet facilis id mollitia
            voluptatibus. Dolore reprehenderit rerum voluptatem.
          </p>

          <div className="flex space-x-2 mt-3.5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="border py-0.5 px-4 bg-gray-200">
                tag{index}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 text-sm">
          <button className="p-2 border border-gray-500 bg-white rounded-md font-medium col-span-2 flex space-x-2 items-center justify-center hover:bg-gray-200 transition-colors">
            <FaPlay className="h-4 w-4" />
            <span>Demo</span>
          </button>
          <button className="p-2 border border-gray-500 bg-white rounded-md font-medium flex space-x-2 items-center col-span-2 justify-center hover:bg-gray-200 transition-colors">
            <FaGithub className="h-4 w-4" />
            <span>Source Code</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

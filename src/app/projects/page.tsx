import { Metadata } from "next";
import React from "react";
import { FaStar } from "react-icons/fa";
import SortedOption from "./components/SortedOption";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ilham | Projects",
};

type PageParams = {
  searchParams: {
    sort: string;
  };
};

async function ProjectPage({ searchParams: { sort } }: PageParams) {
  return (
    <div className="py-5 space-y-3">
      <div className="flex flex-row space-x-1 px-5">
        <div>
          <h1 className="font-bold text-3xl">PROJECTS</h1>
        </div>
        <div>
          <span className="px-3 bg-slate-300 text-xs rounded-full">35</span>
        </div>
      </div>

      <div className="flex flex-row justify-between px-5">
        <SortedOption />
        <div className="font-reg text-sm text-slate-500 flex flex-row items-center">
          <label>Total stars</label>
          <span className="flex flex-row items-center text-black font-semibold">
            <FaStar className="ml-1" />
            15
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square flex grow flex-col rounded-md shadow-md border"
          >
            <div className="flex-1 relative aspect-video">
              <Image
                fill
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="demo imgae"
                className="object-cover hover:brightness-75"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="min-h-[60%] text-sm p-5 flex flex-col justify-between space-y-4">
              <div>
                <h1 className="text-2xl font-black">
                  <Link
                    href="/projects/nextagram"
                    className="hover:underline transition-transform"
                  >
                    Location Sharing App
                  </Link>
                </h1>
                <div className="mt-2 flex justify-between items-center">
                  <p className="font-light">3 june 2000</p>
                  <p className="font-bold">stars 120</p>
                </div>
                <p className="line-clamp-5 mt-3.5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque autem beatae blanditiis, doloribus eveniet id odio
                  omnis. Aspernatur esse ex maiores porro tenetur. Alias amet
                  asperiores beatae iusto laudantium nulla quam quasi qui,
                  quisquam veritatis. Aliquid doloribus mollitia nam quis
                  veritatis. Eveniet facilis id mollitia voluptatibus. Dolore
                  reprehenderit rerum voluptatem.
                </p>

                <div className="flex space-x-2 mt-3.5">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="border py-0.5 px-4 bg-gray-200">
                      tag{index}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4">
                <button className="p-2 border border-gray-500 bg-white rounded-md font-medium">
                  Demo
                </button>
                <button className="p-2 border border-gray-500 bg-white rounded-md font-medium">
                  Source Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;

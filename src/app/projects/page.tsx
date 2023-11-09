import { Metadata } from "next";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Repository } from "../../../typing";
import ReposCard from "./components/ReposCard";
import SortedOption from "./components/SortedOption";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-emerald-500 h-[44dvh] flex flex-col">
            <div className="flex-1 bg-rose-500">image</div>
            <div className="min-h-[7dvh]">caption</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;

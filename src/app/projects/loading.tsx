import React from "react";
import { FaStar } from "react-icons/fa";
import LoadingCard from "./components/LoadingCard";
import SortedOption from "./components/SortedOption";

function loading() {
  return (
    <div className="py-5 space-y-3">
      <div className="flex flex-row space-x-1 px-5">
        <div>
          <h1 className="font-bold text-3xl">PROJECTS</h1>
        </div>
        <div>
          <div className="px-3 bg-gray-200 animate-pulse rounded-full h-5 w-[20px]"></div>
        </div>
      </div>

      <div className="flex flex-row justify-between px-5">
        <SortedOption />
        <div className="font-reg text-sm text-slate-500 flex flex-row items-center">
          <label>Total stars</label>
          <span className="flex flex-row items-center bg-gray-200 animate-pulse w-[20px] h-6"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className="aspect-square flex grow flex-col rounded-md shadow-md border"
            key={index}
          >
            <div className="flex-1 relative aspect-video hidden md:block bg-gray-200 animate-pulse"></div>
            <div className="min-h-[60%] text-sm py-5 px-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-full h-6 bg-gray-200 animate-pulse"></div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="font-medium w-1/2 bg-gray-200 animate-pulse flex items-center space-x-1.5"></p>
                  <p className="font-medium w-1/2 bg-gray-200 animate-pulse flex items-center space-x-1.5"></p>
                </div>
                <p className="mt-3.5 h-[20dvh] w-full bg-gray-200 animate-pulse leading-relaxed"></p>

                <div className="flex space-x-2 mt-3.5">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="border py-0.5 px-4 h-5 bg-gray-200 animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 text-sm">
                <div className="p-2 border bg-gray-200 animate-pulse rounded-md font-medium col-span-2 flex space-x-2 items-center justify-center  transition-colors"></div>
                <div className="p-2 border bg-gray-200 animate-pulse rounded-md font-medium flex space-x-2 items-center col-span-2 justify-center transition-colors"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default loading;

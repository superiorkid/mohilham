import Image from "next/image";
import React from "react";

function loading() {
  return (
    <div>
      <div className="py-5 md:flex md:flex-row space-x-1">
        <div className="bg-slate-300 h-[250px] w-[250px] rounded-full"></div>
        <div className="p-6 space-y-5">
          <div className="space-y-2">
            <div className="bg-slate-300 h-10 w-[300px]"></div>
            <div className="text-md text-slate-500 font-normal flex flex-row items-center">
              <div className="bg-slate-300 w-5 h-5"></div>
              <div className="bg-slate-300 w-5 h-5"></div>
            </div>
            <div className="text-md text-slate-500 font-normal flex flex-row items-center">
              <div className="bg-slate-300 w-5 h-5"></div>
              <div className="bg-slate-300 w-5 h-5"></div>
            </div>
          </div>

          <div className="flex flex-row space-x-3">
            <div className="bg-slate-300 h-5 w-5"></div>
            <div className="bg-slate-300 h-5 w-5"></div>
            <div className="bg-slate-300 h-5 w-5"></div>
          </div>

          {/* <MediaConnect /> */}
        </div>
      </div>
    </div>
  );
}

export default loading;

import React from "react";

function LoadingCard() {
  return (
    <div className="md:flex md:flex-row space-x-3 border border-slate-200 shadow-sm rounded">
      <div className="w-full flex-none bg-slate-300 md:w-[400px] md:h-52"></div>
      <div className="px-3 py-7 flex flex-col space-y-2">
        <div className="bg-slate-300 h-10 w-48"></div>
        <div className="flex flex-row space-x-4 text-xs font-light text-slate-500 items-center">
          <div className="bg-slate-300 h-5 w-5"></div>
          <div className="bg-slate-300 h-5 w-5"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;

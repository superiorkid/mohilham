import React from "react";

function LoadingCard() {
  return (
    <>
      <div className="border flex flex-col mt-auto rounded-md shadow-md px-3 py-5 w-[368px] space-y-3">
        <div className="h-5 w-36 bg-slate-300"></div>

        <div className="flex flex-row justify-between text-xs font-light text-slate-700">
          <div className="bg-slate-300 h-2 w-12"></div>
          <div className="bg-slate-300 h-2 w-12"></div>
        </div>

        <div className={"my-auto"}>
          <div className="bg-slate-300 h-5 w-40"></div>
        </div>
      </div>
    </>
  );
}

export default LoadingCard;

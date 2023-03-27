import React from "react";
import LoadingCard from "./components/LoadingCard";

function loading() {
  return (
    <>
      <div className="py-5 space-y-3 animate-pulse">
        <div className="flex flex-row space-x-1">
          <div className="bg-slate-300 h-5 w-20"></div>
          <div className="bg-slate-300 h-3 w-5"></div>
        </div>

        {/* rest here */}
        <div className="md:space-y-4 py-2">
          {[1, 2].map((post) => (
            <LoadingCard key={post} />
          ))}
        </div>

        {/* rest here */}
      </div>
    </>
  );
}

export default loading;

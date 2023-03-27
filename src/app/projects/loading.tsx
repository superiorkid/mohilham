import React from "react";
import LoadingCard from "./components/LoadingCard";

function loading() {
  return (
    <div className="py-5 space-y-3 animate-pulse">
      <div className="flex flex-row space-x-1">
        <div className="h-5 w-10 bg-slate-300"></div>
        <div className="h-3 w-4 bg-slate-300"></div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="bg-slate-300 h-5 w-20"></div>
        <div className="bg-slate-300 h-5 w-20"></div>
      </div>
      <div className="pt-2 flex flex-wrap sm:space-y-2 gap-4 justify-center">
        {[1, 2, 3].map((repos) => (
          <LoadingCard key={repos} />
        ))}
      </div>
    </div>
  );
}

export default loading;

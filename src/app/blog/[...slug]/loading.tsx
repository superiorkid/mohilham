import React from "react";

function loading() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="w-[800px] h-[379px] mx-auto rounded-t-sm bg-slate-300"></div>
      <div className="container mx-auto prose flex flex-col space-y-3">
        <div className="bg-slate-300 h-5 w-[300px]"></div>
        <div className="bg-slate-300 h-[200px] w-full"></div>
        <div className="bg-slate-300 h-[120px] w-full"></div>
      </div>
    </div>
  );
}

export default loading;

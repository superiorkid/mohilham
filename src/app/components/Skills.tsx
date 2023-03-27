"use client";

import React, { useState } from "react";

const skillList = [
  "TypeScript",
  "Python",
  "ReactJS",
  "NextJS",
  "Flask",
  "MongoDB",
  "Postgresql",
  "MySQL",
];

function Skills() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex flex-row w-full space-x-3">
      <div className="flex flex-row space-x-3 text-sm font-reg">
        {!showMore
          ? skillList.slice(0, 3).map((skill, index) => (
              <span className="px-2 py-1 bg-gray-200 rounded-sm" key={index}>
                {skill}
              </span>
            ))
          : skillList.map((skill, index) => (
              <span className="px-2 py-1 bg-gray-200 rounded-sm" key={index}>
                {skill}
              </span>
            ))}
        {/* <span className="px-2 py-1 bg-gray-200 rounded-sm">TypeScript</span> */}
      </div>
      <div>
        <button
          className="text-xs hover:text-orange-500"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "- less" : "+ more"}
        </button>
      </div>
    </div>
  );
}

export default Skills;

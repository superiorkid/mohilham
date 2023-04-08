"use client";

import Link from "next/link";
import React, { useState } from "react";

const skillList = [
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    url: "https://www.python.org/",
  },
  {
    name: "ReactJs",
    url: "https://react.dev/",
  },
  {
    name: "NextJs",
    url: "https://nextjs.org/",
  },
  {
    name: "Flask",
    url: "https://flask.palletsprojects.com/en/2.2.x/",
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
  },
  {
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
];

function Skills() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex flex-row w-full space-x-3 items-center">
      <div className="flex flex-wrap space-y-1 md:space-y-0 space-x-3 text-sm font-reg">
        {!showMore
          ? skillList.slice(0, 3).map((skill, index) => (
              <Link
                href={skill.url}
                className="px-2 py-1 bg-gray-200 rounded-sm"
                key={index}
              >
                {skill.name}
              </Link>
            ))
          : skillList.map((skill, index) => (
              <Link
                href={skill.url}
                className="px-2 py-1 bg-gray-200 rounded-sm"
                key={index}
              >
                {skill.name}
              </Link>
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

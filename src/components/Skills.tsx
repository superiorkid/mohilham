import Link from "next/link";
import React, { useState } from "react";

const skills = [
  {
    name: "Full Stack",
    url: "#fullstack",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
  },
];

function Skills() {
  return (
    <div className="flex space-x-3 justify-center md:justify-start">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="px-3 py-0.5 border bg-gray-200 border-gray-300 hover:bg-gray-300"
        >
          <Link href={skill.url} className="text-sm">
            {skill.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Skills;

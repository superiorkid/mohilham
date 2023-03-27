import { Metadata } from "next";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Repository } from "../../../typing";
import Content from "./components/Content";
import ReposCard from "./components/ReposCard";

export const metadata: Metadata = {
  title: "Ilham | Projects",
};

const getRepository = async () => {
  const res = await fetch("https://api.github.com/users/superiorkid/repos", {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch repository.");
  }

  const data: Repository[] = await res.json();
  return data;
};

async function ProjectPage() {
  const repository = await getRepository();
  console.log(repository);

  const calculateTotalStars = repository.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.stargazers_count,
    0
  );

  return (
    <div className="py-5 space-y-3">
      <div className="flex flex-row space-x-1">
        <div>
          <h1 className="font-bold text-3xl">PROJECTS</h1>
        </div>
        <div>
          <span className="px-3 bg-slate-300 text-xs rounded-full">
            {repository.length}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <label className="font-reg text-sm text-slate-500 mr-1">
            Sort by
          </label>
          <select name="cars" id="cars" className="rounded-lg">
            <option value="startDateDesc" className="pl-2">
              start date
            </option>
            <option value="starsDesc" className="pl-2">
              stars
            </option>
          </select>
        </div>
        <div className="font-reg text-sm text-slate-500 flex flex-row items-center">
          <label>Total stars</label>
          <span className="flex flex-row items-center text-black font-semibold">
            <FaStar className="ml-1" />
            {calculateTotalStars}
          </span>
        </div>
      </div>
      <div className="pt-2 flex flex-wrap sm:space-y-2 gap-4 justify-center">
        {repository.map((repos) => (
          <ReposCard key={repos.id} repo={repos} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;

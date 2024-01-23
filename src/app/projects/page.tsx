import { Metadata } from "next";
import { FaStar } from "react-icons/fa";
import { getProjects, totalStars } from "../../../actions/project.action";
import ProjectCard from "./components/ProjectCard";
import SortedOption from "./components/SortedOption";

export const metadata: Metadata = {
  title: "Ilham | Projects",
};

type PageParams = {
  searchParams: {
    sort: "asc" | "desc";
  };
};

async function ProjectPage({ searchParams: { sort = "desc" } }: PageParams) {
  const [projects, stars] = await Promise.all([getProjects(), totalStars()]);

  return (
    <div className="py-5 space-y-3">
      <div className="flex flex-row space-x-1 px-5">
        <div>
          <h1 className="font-bold text-3xl">PROJECTS</h1>
        </div>
        <div>
          <span className="px-3 bg-slate-300 text-xs rounded-full">
            {projects.length}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between px-5">
        <SortedOption />
        <div className="font-reg text-sm text-slate-500 flex space-x-2 items-center">
          <label>Total stars</label>
          <span className="flex flex-row items-center text-black font-semibold">
            <FaStar className="mr-1" />
            {stars}
          </span>
        </div>
      </div>

      {projects.length < 1 ? (
        <div>
          <p className="text-rose-500">Projects empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectPage;

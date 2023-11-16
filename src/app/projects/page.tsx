import { Metadata } from "next";
import { FaStar } from "react-icons/fa";
import { getProjects } from "../../../actions/project.action";
import ProjectCard from "./components/ProjectCard";
import SortedOption from "./components/SortedOption";

export const metadata: Metadata = {
  title: "Ilham | Projects",
};

type PageParams = {
  searchParams: {
    sort: string;
  };
};

async function ProjectPage({ searchParams: { sort } }: PageParams) {
  const projects = await getProjects();

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
        <div className="font-reg text-sm text-slate-500 flex flex-row items-center">
          <label>Total stars</label>
          <span className="flex flex-row items-center text-black font-semibold">
            <FaStar className="ml-1" />
            15
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

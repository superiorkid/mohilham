import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaPlay, FaRegStar } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";
import { Prisma } from "@prisma/client";

interface ProjectCardProps {
  project: Prisma.ProjectGetPayload<{
    include: {
      TagOnProject: {
        include: {
          project: true;
          tag: true;
        };
      };
    };
  }>;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const tags = useMemo(() => {
    const tagonproject = project.TagOnProject;

    const tags = tagonproject.map((project) => project.tag.name);

    return tags;
  }, []);

  return (
    <div className="aspect-square flex grow flex-col rounded-md shadow-md border">
      <div className="flex-1 relative aspect-video hidden md:block">
        <Image
          fill
          src={project.thumbnail as string}
          alt={`${project.name} image`}
          className="object-cover hover:brightness-75"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="min-h-[60%] text-sm py-5 px-6 flex flex-col justify-between space-y-6">
        <div>
          <h1 className="text-2xl font-black">
            <Link
              href={`/projects/${project.id}`}
              className="hover:underline transition-transform capitalize"
            >
              {project.name}
            </Link>
          </h1>
          <div className="mt-3 flex justify-between items-center">
            <p className="font-medium text-gray-500 flex items-center space-x-1.5">
              <MdCalendarMonth className=" w-5 h-5" />
              <span>{project.createdAt?.toDateString()}</span>
            </p>
            <p className="font-bold items-center flex space-x-1.5 text-gray-700">
              <FaRegStar className="w-5 h-5" />
              <span>120</span>
            </p>
          </div>
          <p className="line-clamp-5 mt-3.5 leading-relamodexed text-gray-600">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3.5">
            {tags.map((tag, index) => (
              <div key={index} className="border py-0.5 px-4 bg-gray-200">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 text-sm">
          {project.demo_url && (
            <Link
              href={project.demo_url}
              target="_blank"
              className="p-2 border border-gray-500 bg-white rounded-md font-medium col-span-2 flex space-x-2 items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <FaPlay className="h-4 w-4" />
              <span>Demo</span>
            </Link>
          )}

          {project.github_url && (
            <Link
              href={project.github_url}
              target="_blank"
              className="p-2 border border-gray-500 bg-white rounded-md font-medium flex space-x-2 items-center col-span-2 justify-center hover:bg-gray-200 transition-colors"
            >
              <FaGithub className="h-4 w-4" />
              <span>Source Code</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

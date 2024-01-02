"use server";

import extractRepositoryName from "@/lib/extract-repo-name";
import extractRepositoryOwner from "@/lib/extract-repo-owner";
import prisma from "../prisma/client";

export const getPaginateProject = async (
  sort: "asc" | "desc" = "desc",
  page: number
) => {
  const perPage: number = 4;

  try {
    const projects = await prisma.project.findMany({
      include: {
        TagOnProject: {
          include: {
            project: true,
            tag: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return projects;
  } catch (error) {
    throw new Error("failed to fetch projects");
  }
};

export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        TagOnProject: {
          include: {
            project: true,
            tag: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return projects;
  } catch (error) {
    throw new Error("failed to fetch projects");
  }
};

export const getProject = async (id: string) => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        id,
      },
      include: {
        TagOnProject: {
          include: {
            tag: true,
          },
        },
      },
    });

    return project;
  } catch (error) {
    throw new Error("failed to fetch project");
  }
};

export const getRepositoryDetail = async (
  owner: string,
  repositoryName: string
) => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repositoryName}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    if (!res.ok) {
      throw new Error("error get repository detail");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("failed to get repository detail");
  }
};

export const totalStars = async () => {
  const projects = await getProjects();

  const repoUrls = projects.map((project) => project.github_url);

  let startCount: number = 0;

  for (const repoUrl of repoUrls) {
    const name = extractRepositoryName(repoUrl as string);
    const owner = extractRepositoryOwner(repoUrl as string);

    const repoDetail = await getRepositoryDetail(owner, name as string);
    startCount += Number(repoDetail.stargazers_count);
  }

  return startCount;
};

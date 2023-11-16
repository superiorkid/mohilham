"use server";

import prisma from "../prisma/client";

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

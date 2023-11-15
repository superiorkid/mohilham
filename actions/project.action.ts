"use server";

import prisma from "../prisma/client";

export const getProject = () => {
  try {
    const projects = prisma.proejct.findMany();
    return projects;
  } catch (error) {
    throw new Error("failed to fetch project");
  }
};

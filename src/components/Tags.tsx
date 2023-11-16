"use client";

import { Prisma, Tag } from "@prisma/client";
import React, { useMemo } from "react";

interface TagsProps {
  project: Prisma.ProjectGetPayload<{
    include: {
      TagOnProject: {
        include: {
          tag: true;
        };
      };
    };
  }> | null;
}

const Tags = ({ project }: TagsProps) => {
  const tags = useMemo(() => {
    const tagonproject = project?.TagOnProject;

    const tags = tagonproject?.map((project) => project.tag.name);

    return tags?.join(", ");
  }, []);

  return (
    <p className="hidden md:block">
      <span className="text-gray-500"> Tags:</span>
      {"  "} {tags}
    </p>
  );
};

export default Tags;

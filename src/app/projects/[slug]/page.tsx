import React from "react";

interface Props {
  params: { slug: string };
}

function ProjectDetailPage({ params: { slug } }: Props) {
  return <div>project detail with slug {slug}</div>;
}

export default ProjectDetailPage;

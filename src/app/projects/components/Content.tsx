"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Repository } from "../../../../typing";
import ReposCard from "./ReposCard";

type PageProps = {
  repository: Array<Repository>;
};

function Content({ repository }: PageProps) {
  const [filtered, setFiltered] = useState<string>("startDateDesc");

  const handleFilterChange = (selectedOptions: string) => {
    console.log(selectedOptions);
  };

  return (
    <>
    
    </>
  );
}

export default Content;

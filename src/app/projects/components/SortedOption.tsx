"use client";

import React from "react";
import { useRouter } from "next/navigation";

function SortedOption() {
  const router = useRouter();
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/projects?sort=${event.target.value}`);
  };

  return (
    <div>
      <label className="font-reg text-sm text-slate-500 mr-1">Sort by</label>
      <select
        name="cars"
        id="cars"
        className="rounded-lg"
        onChange={handleFilterChange}
        disabled
      >
        <option value="dateDesc" className="pl-2">
          start date
        </option>
        <option value="starsDesc" className="pl-2">
          stars
        </option>
      </select>
    </div>
  );
}

export default SortedOption;

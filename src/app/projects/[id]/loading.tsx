import Link from "next/link";
import React from "react";
import { MdCalendarMonth, MdKeyboardBackspace } from "react-icons/md";

const loading = () => {
  return (
    <main className="mt-8 max-w-screen-md mx-auto px-3 md:px-0 mb-7">
      <div className="mt-6 mb-12">
        <Link href="/projects" className="text-gray-600 hover:underline">
          <MdKeyboardBackspace className="h-4 w-4 inline-flex mr-2" />
          back to projects
        </Link>
      </div>

      <article className="prose-lg dark:prose-invert prose-h1:font-bold prose-h1:text-4xl">
        <div className="mb-5 h-8 w-1/2 bg-gray-200 animate-pulse"></div>

        <div className="flex items-center justify-between text-sm">
          <div className="bg-gray-200 animate-pulse h-5 w-1/2"></div>
          <div className="bg-gray-200 animate-pulse h-5 w-1/2"></div>
        </div>

        {/* heading image */}
        <div className="relative h-[35dvh] bg-gray-200 animate-pulse"></div>

        <div className="mt-20 md:mt-20 space-y-4">
          <div className="w-full bg-gray-200 animate-pulse h-6"></div>
          <div className="w-full bg-gray-200 animate-pulse h-6"></div>
          <div className="w-full bg-gray-200 animate-pulse h-6"></div>
        </div>
      </article>
    </main>
  );
};

export default loading;

import Image from "next/image";
import React from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
import { Post } from "../../../../typing";
import moment from "moment";

import urlFor from "../../../../utils/imageBuilder";
import calculateReadingTime from "../../../../utils/calculateReadingTime";
import Link from "next/link";

type PageProps = {
  post: Pick<
    Post,
    "body" | "cover" | "description" | "_createdAt" | "title" | "slug"
  >;
};

function BlogCard({ post }: PageProps) {
  const year = new Date().getFullYear();
  return (
    <div className="md:flex md:flex-row space-x-3 border border-slate-200 shadow-sm rounded hover:bg-slate-50 hover:cursor-pointer">
      <div className="w-full flex-none bg-slate-300 md:w-[320px] md:h-44">
        <img
          src={urlFor(post.cover).url()}
          alt="thumbnail"
          loading="lazy"
          className="w-full h-full"
        />
      </div>
      <div className="px-3 py-7 flex flex-col space-y-2">
        <h1 className="font-lg text-2xl hover:text-orange-600">
          <Link href={`/blog/${year}/${post.slug.current}`}>{post.title}</Link>
        </h1>
        <div className="flex flex-row space-x-4 text-xs font-light text-slate-500 items-center">
          <span className="flex flex-row">
            <FaCalendar className="mr-1" />
            {moment(post._createdAt).format("MMM D, YYYY")}
          </span>
          <span className="flex flex-row">
            <FaClock className="mr-1" />1 min to read
          </span>
        </div>
        {/* <p className="font-light">{post.description}</p> */}
        <p className="font-light">{post.description}</p>
      </div>
    </div>
  );
}

export default BlogCard;

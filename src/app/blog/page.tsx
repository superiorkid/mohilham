import { Metadata } from "next";
import React from "react";
import BlogCard from "./components/BlogCard";
import client from "../../../client";
import { Post } from "../../../typing";

export const metadata: Metadata = {
  title: "Ilham | Blog",
};

const getPosts = async () => {
  const posts: Post[] = await client.fetch('*[_type == "blog"]');
  return posts;
};

async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <div className="py-5 space-y-3 px-5">
        <div className="flex flex-row space-x-1">
          <div>
            <h1 className="font-extrabold text-3xl">BLOG</h1>
          </div>
          <div>
            <span className="px-3 bg-slate-300 text-xs rounded-full">
              {posts.length}
            </span>
          </div>
        </div>

        {/* rest here */}
        <div className="md:space-y-4 py-2">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {/* rest here */}
      </div>
    </>
  );
}

export default BlogPage;

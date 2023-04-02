import React from "react";
import client from "../../../../client";
import { Post } from "../../../../typing";
import urlFor from "../../../../utils/imageBuilder";
import { PortableText } from "@portabletext/react";

const getArticle = async (slug: string) => {
  const post: Post[] = await client.fetch(`*[slug.current == $slug]`, { slug });
  return post;
};

type PageParams = {
  params: {
    slug: string[];
  };
};

async function ArticlePage({ params: { slug } }: PageParams) {
  const post = await getArticle(slug[1]);

  return (
    <>
      <div className="flex flex-col space-y-5 px-5">
        <img
          src={urlFor(post[0].cover).url()}
          alt="thumbnail"
          loading="lazy"
          className="w-[800px] h-[379px] mx-auto rounded-t-sm"
        />
        <article className="prose prose-lg pb-3 dark:prose-invert mx-auto prose-h1:text-4xl">
          <PortableText value={post[0].body} />
        </article>
      </div>
    </>
  );
}

export default ArticlePage;

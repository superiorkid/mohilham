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

  // console.log(slug[1]);

  return (
    <article className="prose pb-3 prose-sm md:prose-base lg:prose-lg dark:prose-invert container mx-auto">
      <img
        src={urlFor(post[0].cover).url()}
        alt="thumbnail"
        loading="lazy"
        className="w-full h-[395px]"
      />
      <PortableText value={post[0].body} />
    </article>
  );
}

export default ArticlePage;

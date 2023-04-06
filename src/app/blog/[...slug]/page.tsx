import React from "react";
import client from "../../../../client";
import { Post } from "../../../../typing";
import urlFor from "../../../../utils/imageBuilder";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const getArticle = async (slug: string) => {
  const post: Post[] = await client.fetch(
    `*[slug.current == $slug]{categories[]->{title}, author, title, mainImage, publishedAt, slug, title, body}`,
    { slug }
  );
  return post;
};

type PageParams = {
  params: {
    slug: string[];
  };
};

const serializers = {
  types: {
    code: ({
      value,
    }: {
      value: { _key: string; _type: string; code: string; language: string };
    }) => {
      console.log(value);
      return (
        <pre data-language={value.language} className="py-5">
          <code>{value.code}</code>
        </pre>
      );
    },
  },
};

async function ArticlePage({ params: { slug } }: PageParams) {
  const post = await getArticle(slug[1]);
  console.log(post);

  return (
    <>
      <div className="flex flex-col space-y-5 px-5">
        <Image
          src={urlFor(post[0].mainImage).url()}
          alt="thumbnail"
          loading="lazy"
          className="w-[800px] h-[409px] mx-auto rounded-t-sm"
          width={900}
          height={650}
        />
        <article className="prose prose-lg pb-3 dark:prose-invert mx-auto prose-h1:text-4xl">
          <PortableText value={post[0].body} components={serializers} />
        </article>
      </div>
    </>
  );
}

export default ArticlePage;

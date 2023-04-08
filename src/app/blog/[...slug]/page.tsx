import React from "react";
import client from "../../../../client";
import { Post } from "../../../../typing";
import urlFor from "../../../../utils/imageBuilder";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import moment from "moment";

const getArticle = async (slug: string) => {
  const post: Post[] = await client.fetch(
    `*[slug.current == $slug]{categories[]->{title}, author->{name, image}, title, mainImage, publishedAt, slug, title, body, "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )}`,
    { slug }
  );
  return post;
};

type PageParams = {
  params: {
    slug: string;
  };
};

const serializers = {
  types: {
    code: ({
      value,
    }: {
      value: { _key: string; _type: string; code: string; language: string };
    }) => {
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

  return (
    <>
      <div className="flex flex-col space-y-5 px-5">
        <Image
          src={urlFor(post[0].mainImage).url()}
          alt="thumbnail"
          loading="lazy"
          className="mx-auto rounded-t-sm"
          width={900}
          height={600}
        />

        <div className="max-w-6xl mx-autor py-5 bg-neutral-50 rounded-lg">
          <h1 className="text-2xl xl:text-3xl font-bold py-2 text-center mb-2">
            {post[0].title}
          </h1>
          <div className="justify-center flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 divide-x-2-reverse items-center">
            <div className="flex flex-row items-center">
              <Image
                src={urlFor(post[0].author.image).url()}
                width={50}
                height={50}
                className="rounded-full w-7 h-7 md:w-10 md:h-10 mr-1.5"
                alt="author photos"
              />
              <span className="text-sm font-light md:text-md md:font-medium">
                {post[0].author.name}
              </span>
            </div>
            <div className="flex flex-row space-x-3">
              <span className="text-sm font-light md:text-md text-slate-500 md:font-medium">
                {moment(post[0].publishedAt).format("MMM D, YYYY")}
              </span>
              <span className="text-sm font-light md:text-md text-slate-500 md:font-medium">
                {post[0].estimatedReadingTime} min read
              </span>
            </div>
          </div>
        </div>

        <article className="prose prose:sm prose-slate md:prose-lg pb-3 dark:prose-invert mx-auto">
          <PortableText value={post[0].body} components={serializers} />
        </article>
      </div>
    </>
  );
}

// dynamic metadata
export async function generateMetadata({ params: { slug } }: PageParams) {
  const post = await getArticle(slug[1]);

  return {
    title: post[0].title,
    desctiption: post[0].title,
  };
}

export default ArticlePage;

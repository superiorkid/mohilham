import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const builder = imageUrlBuilder(client);

export default function urlFor(source: any) {
  return builder.image(source);
}

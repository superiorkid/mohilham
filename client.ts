import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITYID,
  dataset: "production",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
  apiVersion: "2021-08-31",
});

export default client;

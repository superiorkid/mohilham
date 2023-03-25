import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "vqcru2ex",
  dataset: "production",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
  apiVersion: "2021-08-31",
});

export default client
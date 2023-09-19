import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

export const sanityClienfConfig = {
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  apiVersion: "2021-03-25",
  useCdn: true,
};

// https://astro.build/config
export default defineConfig({
  site: "https://alexuix.design",
  integrations: [sitemap(), react(), tailwind(), sanity(sanityClienfConfig)],
});

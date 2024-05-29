import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: "https://github.com/joao-alvar/sthenes",
  compressHTML: true,
  integrations: [tailwind(), sitemap()],
});

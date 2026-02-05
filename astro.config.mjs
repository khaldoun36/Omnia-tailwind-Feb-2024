import icon from "astro-icon";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
const env = loadEnv("", process.cwd(), "STORYBLOK");

/*
    https://astro.build/config

*/
export default defineConfig({
    integrations: [
        tailwind(),
        icon(),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            bridge: env.STORYBLOK_IS_PREVIEW === "yes",
            components: {
                blogPost: "stroyblok/BlogPost",
                blogPostList: "stroyblok/BlogPostList",
                page: "stroyblok/Page",
                freeResource: "stroyblok/FreeResource",
                freeResourcesList: "stroyblok/FreeResourcesList",
                freeResourcesPage: "stroyblok/FreeResourcesPage",
            },
        }),
    ],
});

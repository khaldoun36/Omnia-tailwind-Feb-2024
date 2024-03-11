import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
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
            },
        }),
    ],
    output: env.STORYBLOK_IS_PREVIEW === "yes" ? "server" : "static",
    adapter: vercel({
        imageService: true,
    }),
});

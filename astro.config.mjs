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
            accessToken: "TeKuT4VuYc6ykJD8KjUGAQtt",
            components: {
                blogPost: "stroyblok/BlogPost",
                blogPostList: "stroyblok/BlogPostList",
                page: "stroyblok/Page",
            },
        }),
    ],
    output: "server",
    adapter: vercel({
        imageService: true,
    }),
});

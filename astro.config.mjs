import icon from "astro-icon";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), "STORYBLOK");

const STORYBLOK_TOKEN = "TeKuT4VuYc6ykJD8KjUGAQtt";
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
            },
        }),
    ],
    output: "server",
    // adapter: vercel({
    //     imageService: true,
    // }),
    adapter: vercel(),
});

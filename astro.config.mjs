import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
const env = loadEnv("", process.cwd(), "STORYBLOK");

/*
    https://astro.build/config

*/
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
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

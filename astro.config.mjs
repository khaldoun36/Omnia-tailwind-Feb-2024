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
            accessToken: "TeKuT4VuYc6ykJD8KjUGAQtt",
            bridge: env.STORYBLOK_IS_PREVIEW === "yes",
            components: {
                blogPost: "storyblok/BlogPost",
                blogPostList: "storyblok/BlogPostList",
                page: "storyblok/Page",
                freeResource: "storyblok/FreeResource",
                freeResourcesList: "storyblok/FreeResourcesList",
                freeResourcesPage: "storyblok/FreeResourcesPage",
            },
        }),
    ],
});

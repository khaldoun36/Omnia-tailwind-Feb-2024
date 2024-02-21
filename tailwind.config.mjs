/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: colors.orange,
                neutral: colors.zinc,
            },
        },
    },
};

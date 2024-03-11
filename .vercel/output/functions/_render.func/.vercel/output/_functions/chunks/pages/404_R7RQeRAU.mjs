/* empty css                          */
import { storyblokInit, apiPlugin } from '@storyblok/js';
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead } from '../astro_OJd1UA1c.mjs';
import 'kleur/colors';
import 'clsx';

const { storyblokApi } = storyblokInit({
            accessToken: "TeKuT4VuYc6ykJD8KjUGAQtt",
            use: [apiPlugin],
            apiOptions: undefined,
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en"> <head><title>Not found</title>${renderHead()}</head> <body> <p>Sorry, this page does not exist.</p> </body></html>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/404.astro", void 0);

const $$file = "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };

import './404_Z7YZgW6P.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../astro_lvwGnhBe.mjs';
import 'kleur/colors';
import { v as ve, c as $$StoryblokComponent, a as $$Layout } from './__y7k8UoNi.mjs';

const $$Astro = createAstro();
const $$Insights = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Insights;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "published"
  });
  const content = data.story.content;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "insights" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": content })} ` })}`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/insights.astro", void 0);
const $$file = "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/insights.astro";
const $$url = "/insights";

export { $$Insights as default, $$file as file, $$url as url };

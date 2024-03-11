import './404_Z7YZgW6P.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, e as renderComponent, u as unescapeHTML, F as Fragment, f as renderSlot, b as renderHead } from '../astro_lvwGnhBe.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';
import camelcase from 'camelcase';
/* empty css                          */
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';
import 'clsx';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$a = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$9 = createAstro();
const $$ButtonLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const button = cva(
    [
      "flex",
      "h-10",
      "max-w-fit",
      "items-center",
      "justify-center",
      "rounded-full",
      "px-5",
      "text-sm",
      "font-semibold",
      "transition-colors",
      "focus:outline-none"
    ],
    {
      variants: {
        intent: {
          primary: [
            "bg-primary-500",
            "text-neutral-50",
            "hover:bg-primary-600",
            "focus:bg-primary-600"
          ],
          secondary: [
            "border",
            "border-primary-300",
            "text-neutral-800",
            "hover:border-primary-500",
            "focus:border-primary-500"
          ]
        }
      }
    }
  );
  const { intent = "primary", classList, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(twMerge([button({ intent }), `${classList}`]), "class:list")} target="_blank" rel="noopener"${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/components/ButtonLink.astro", void 0);

const navigationLinks = [
    {
        text: "About me",
        slug: "/about",
    },
    {
        text: "Insights",
        slug: "/insights",
    },
    {
        text: "Free resources",
        slug: "/free-resources",
    },
];

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="full-width content-grid sticky left-0 top-0 z-30 border-b border-neutral-200 bg-neutral-50/60 backdrop-blur"> <div class="flex items-center justify-between py-4 lg:py-2"> <a href="/">${renderComponent($$result, "Icon", $$Icon, { "name": "logo", "style": "font-size: 40px" })}</a> <nav class="hidden items-center justify-between gap-1 rounded-full border border-neutral-200 p-1 lg:flex"> ${navigationLinks.map((data) => renderTemplate`<a${addAttribute(data.slug, "href")}${addAttribute(twMerge(
    "flex h-10 items-center rounded-full px-5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none"
  ), "class")}> ${data.text} </a>`)} </nav> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "intent": "secondary", "href": "https://maxibestof.one/typefaces/inter" }, { "default": ($$result2) => renderTemplate`helllo world` })} </div> <nav class="hidden-scrollbar flex items-center justify-between gap-1 overflow-x-scroll border-t border-neutral-200 py-2 lg:hidden"> ${navigationLinks.map((data) => renderTemplate`<a${addAttribute(data.slug, "href")}${addAttribute(twMerge(
    "flex h-10 items-center whitespace-nowrap text-nowrap rounded-full px-5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none"
  ), "class")}> ${data.text} </a>`)} </nav> </header> `;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="breakout content-grid border-t border-neutral-200"> <div class="flex flex-col items-center justify-center gap-4 py-6 md:flex-row md:justify-between lg:-mx-8"> <a href="/"> ${renderComponent($$result, "Icon", $$Icon, { "name": "logo", "style": "font-size: 40px" })} </a> <p class="flex items-center gap-1 text-sm text-neutral-600"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ph:copyright", "class": "text-xl" })} <span>Omnia Coaching 2023. All rights reserved.</span> </p> </div> </footer>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="content-grid"> ${renderComponent($$result, "Header", $$Header, {})} <div class="full-width content-grid py-20 lg:py-24"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/layouts/Layout.astro", void 0);

var P = Object.defineProperty, _ = (r, t, e) => t in r ? P(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, p = (r, t, e) => (_(r, typeof t != "symbol" ? t + "" : t, e), e);
class z {
  constructor() {
    p(this, "isCDNUrl", (t = "") => t.indexOf("/cdn/") > -1), p(this, "getOptionsPage", (t, e = 25, o = 1) => ({
      ...t,
      per_page: e,
      page: o
    })), p(this, "delay", (t) => new Promise((e) => setTimeout(e, t))), p(this, "arrayFrom", (t = 0, e) => [...Array(t)].map(e)), p(this, "range", (t = 0, e = t) => {
      const o = Math.abs(e - t) || 0, s = t < e ? 1 : -1;
      return this.arrayFrom(o, (a, n) => n * s + t);
    }), p(this, "asyncMap", async (t, e) => Promise.all(t.map(e))), p(this, "flatMap", (t = [], e) => t.map(e).reduce((o, s) => [...o, ...s], [])), p(this, "escapeHTML", function(t) {
      const e = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, o = /[&<>"']/g, s = RegExp(o.source);
      return t && s.test(t) ? t.replace(o, (a) => e[a]) : t;
    });
  }
  /**
   * @method stringify
   * @param  {Object} params
   * @param  {String} prefix
   * @param  {Boolean} isArray
   * @return {String} Stringified object
   */
  stringify(t, e, o) {
    const s = [];
    for (const a in t) {
      if (!Object.prototype.hasOwnProperty.call(t, a))
        continue;
      const n = t[a], c = o ? "" : encodeURIComponent(a);
      let l;
      typeof n == "object" ? l = this.stringify(
        n,
        e ? e + encodeURIComponent("[" + c + "]") : c,
        Array.isArray(n)
      ) : l = (e ? e + encodeURIComponent("[" + c + "]") : c) + "=" + encodeURIComponent(n), s.push(l);
    }
    return s.join("&");
  }
  /**
   * @method getRegionURL
   * @param  {String} regionCode region code, could be eu, us, cn, ap or ca
   * @return {String} The base URL of the region
   */
  getRegionURL(t) {
    const e = "api.storyblok.com", o = "api-us.storyblok.com", s = "app.storyblokchina.cn", a = "api-ap.storyblok.com", n = "api-ca.storyblok.com";
    switch (t) {
      case "us":
        return o;
      case "cn":
        return s;
      case "ap":
        return a;
      case "ca":
        return n;
      default:
        return e;
    }
  }
}
const U = function(r, t) {
  const e = {};
  for (const o in r) {
    const s = r[o];
    t.indexOf(o) > -1 && s !== null && (e[o] = s);
  }
  return e;
}, D = (r) => r === "email", B = () => ({
  singleTag: "hr"
}), q = () => ({
  tag: "blockquote"
}), F = () => ({
  tag: "ul"
}), J = (r) => ({
  tag: [
    "pre",
    {
      tag: "code",
      attrs: r.attrs
    }
  ]
}), K = () => ({
  singleTag: "br"
}), V = (r) => ({
  tag: `h${r.attrs.level}`
}), H = (r) => ({
  singleTag: [
    {
      tag: "img",
      attrs: U(r.attrs, ["src", "alt", "title"])
    }
  ]
}), G = () => ({
  tag: "li"
}), W = () => ({
  tag: "ol"
}), Y = () => ({
  tag: "p"
}), Q = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: {
        "data-type": "emoji",
        "data-name": r.attrs.name,
        emoji: r.attrs.emoji
      }
    }
  ]
}), X = () => ({
  tag: "b"
}), Z = () => ({
  tag: "s"
}), ee = () => ({
  tag: "u"
}), te = () => ({
  tag: "strong"
}), re = () => ({
  tag: "code"
}), oe = () => ({
  tag: "i"
}), se = (r) => {
  if (!r.attrs)
    return {
      tag: ""
    };
  const t = new z().escapeHTML, e = { ...r.attrs }, { linktype: o = "url" } = r.attrs;
  if (delete e.linktype, e.href && (e.href = t(r.attrs.href || "")), D(o) && (e.href = `mailto:${e.href}`), e.anchor && (e.href = `${e.href}#${e.anchor}`, delete e.anchor), e.custom) {
    for (const s in e.custom)
      e[s] = e.custom[s];
    delete e.custom;
  }
  return {
    tag: [
      {
        tag: "a",
        attrs: e
      }
    ]
  };
}, ae = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ne = () => ({
  tag: "sub"
}), le = () => ({
  tag: "sup"
}), ie = (r) => ({
  tag: [
    {
      tag: "span",
      attrs: r.attrs
    }
  ]
}), ce = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `background-color:${r.attrs.color};`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ge = (r) => {
  var t;
  return (t = r.attrs) != null && t.color ? {
    tag: [
      {
        tag: "span",
        attrs: {
          style: `color:${r.attrs.color}`
        }
      }
    ]
  } : {
    tag: ""
  };
}, ue = {
  nodes: {
    horizontal_rule: B,
    blockquote: q,
    bullet_list: F,
    code_block: J,
    hard_break: K,
    heading: V,
    image: H,
    list_item: G,
    ordered_list: W,
    paragraph: Y,
    emoji: Q
  },
  marks: {
    bold: X,
    strike: Z,
    underline: ee,
    strong: te,
    code: re,
    italic: oe,
    link: se,
    styled: ae,
    subscript: ne,
    superscript: le,
    anchor: ie,
    highlight: ce,
    textStyle: ge
  }
}, pe = function(r) {
  const t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, e = /[&<>"']/g, o = RegExp(e.source);
  return r && o.test(r) ? r.replace(e, (s) => t[s]) : r;
};
class fe {
  constructor(t) {
    p(this, "marks"), p(this, "nodes"), t || (t = ue), this.marks = t.marks || [], this.nodes = t.nodes || [];
  }
  addNode(t, e) {
    this.nodes[t] = e;
  }
  addMark(t, e) {
    this.marks[t] = e;
  }
  render(t, e = { optimizeImages: !1 }) {
    if (t && t.content && Array.isArray(t.content)) {
      let o = "";
      return t.content.forEach((s) => {
        o += this.renderNode(s);
      }), e.optimizeImages ? this.optimizeImages(o, e.optimizeImages) : o;
    }
    return console.warn(
      `The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`
    ), "";
  }
  optimizeImages(t, e) {
    let o = 0, s = 0, a = "", n = "";
    typeof e != "boolean" && (typeof e.width == "number" && e.width > 0 && (a += `width="${e.width}" `, o = e.width), typeof e.height == "number" && e.height > 0 && (a += `height="${e.height}" `, s = e.height), (e.loading === "lazy" || e.loading === "eager") && (a += `loading="${e.loading}" `), typeof e.class == "string" && e.class.length > 0 && (a += `class="${e.class}" `), e.filters && (typeof e.filters.blur == "number" && e.filters.blur >= 0 && e.filters.blur <= 100 && (n += `:blur(${e.filters.blur})`), typeof e.filters.brightness == "number" && e.filters.brightness >= -100 && e.filters.brightness <= 100 && (n += `:brightness(${e.filters.brightness})`), e.filters.fill && (e.filters.fill.match(/[0-9A-Fa-f]{6}/g) || e.filters.fill === "transparent") && (n += `:fill(${e.filters.fill})`), e.filters.format && ["webp", "png", "jpeg"].includes(e.filters.format) && (n += `:format(${e.filters.format})`), typeof e.filters.grayscale == "boolean" && e.filters.grayscale && (n += ":grayscale()"), typeof e.filters.quality == "number" && e.filters.quality >= 0 && e.filters.quality <= 100 && (n += `:quality(${e.filters.quality})`), e.filters.rotate && [90, 180, 270].includes(e.filters.rotate) && (n += `:rotate(${e.filters.rotate})`), n.length > 0 && (n = "/filters" + n))), a.length > 0 && (t = t.replace(/<img/g, `<img ${a.trim()}`));
    const c = o > 0 || s > 0 || n.length > 0 ? `${o}x${s}${n}` : "";
    return t = t.replace(
      /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,
      `a.storyblok.com/f/$1/$2.$3/m/${c}`
    ), typeof e != "boolean" && (e.sizes || e.srcset) && (t = t.replace(/<img.*?src=["|'](.*?)["|']/g, (l) => {
      var i, g;
      const f = l.match(
        /a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g
      );
      if (f && f.length > 0) {
        const d = {
          srcset: (i = e.srcset) == null ? void 0 : i.map((u) => {
            if (typeof u == "number")
              return `//${f}/m/${u}x0${n} ${u}w`;
            if (typeof u == "object" && u.length === 2) {
              let b = 0, y = 0;
              return typeof u[0] == "number" && (b = u[0]), typeof u[1] == "number" && (y = u[1]), `//${f}/m/${b}x${y}${n} ${b}w`;
            }
          }).join(", "),
          sizes: (g = e.sizes) == null ? void 0 : g.map((u) => u).join(", ")
        };
        let h = "";
        return d.srcset && (h += `srcset="${d.srcset}" `), d.sizes && (h += `sizes="${d.sizes}" `), l.replace(/<img/g, `<img ${h.trim()}`);
      }
      return l;
    })), t;
  }
  renderNode(t) {
    const e = [];
    t.marks && t.marks.forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderOpeningTag(a.tag));
    });
    const o = this.getMatchingNode(t);
    return o && o.tag && e.push(this.renderOpeningTag(o.tag)), t.content ? t.content.forEach((s) => {
      e.push(this.renderNode(s));
    }) : t.text ? e.push(pe(t.text)) : o && o.singleTag ? e.push(this.renderTag(o.singleTag, " /")) : o && o.html ? e.push(o.html) : t.type === "emoji" && e.push(this.renderEmoji(t)), o && o.tag && e.push(this.renderClosingTag(o.tag)), t.marks && t.marks.slice(0).reverse().forEach((s) => {
      const a = this.getMatchingMark(s);
      a && a.tag !== "" && e.push(this.renderClosingTag(a.tag));
    }), e.join("");
  }
  renderTag(t, e) {
    return t.constructor === String ? `<${t}${e}>` : t.map((o) => {
      if (o.constructor === String)
        return `<${o}${e}>`;
      {
        let s = `<${o.tag}`;
        if (o.attrs)
          for (const a in o.attrs) {
            const n = o.attrs[a];
            n !== null && (s += ` ${a}="${n}"`);
          }
        return `${s}${e}>`;
      }
    }).join("");
  }
  renderOpeningTag(t) {
    return this.renderTag(t, "");
  }
  renderClosingTag(t) {
    return t.constructor === String ? `</${t}>` : t.slice(0).reverse().map((e) => e.constructor === String ? `</${e}>` : `</${e.tag}>`).join("");
  }
  getMatchingNode(t) {
    const e = this.nodes[t.type];
    if (typeof e == "function")
      return e(t);
  }
  getMatchingMark(t) {
    const e = this.marks[t.type];
    if (typeof e == "function")
      return e(t);
  }
  renderEmoji(t) {
    if (t.attrs.emoji)
      return t.attrs.emoji;
    const e = [
      {
        tag: "img",
        attrs: {
          src: t.attrs.fallbackImage,
          draggable: "false",
          loading: "lazy",
          align: "absmiddle"
        }
      }
    ];
    return this.renderTag(e, " /");
  }
}
const ke = (r) => {
  if (typeof r != "object" || typeof r._editable > "u")
    return {};
  try {
    const t = JSON.parse(
      r._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
    );
    return t ? {
      "data-blok-c": JSON.stringify(t),
      "data-blok-uid": t.id + "-" + t.uid
    } : {};
  } catch {
    return {};
  }
};
let de;
const be = (r, t) => {
  r.addNode("blok", (e) => {
    let o = "";
    return e.attrs.body.forEach((s) => {
      o += t(s.component, s);
    }), {
      html: o
    };
  });
}, me = (r) => !r || !(r != null && r.content.some((t) => t.content || t.type === "blok" || t.type === "horizontal_rule")), ye = (r, t, e) => {
  let o = e || de;
  if (!o) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return me(r) ? "" : (t && (o = new fe(t.schema), t.resolver && be(o, t.resolver)), o.render(r));
};
function ve() {
  return globalThis.storyblokApiInstance || console.error("storyblokApiInstance has not been initialized correctly"), globalThis.storyblokApiInstance;
}
function Ie(r, t) {
  const e = globalThis.storyblokApiInstance.richTextResolver;
  if (!e) {
    console.error(
      "Please initialize the Storyblok SDK before calling the renderRichText function"
    );
    return;
  }
  return ye(r, t, e);
}

const $$Astro$5 = createAstro();
const $$BlogPost$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BlogPost$1;
  const { blok } = Astro2.props;
  const content = Ie(blok.content);
  return renderTemplate`${maybeRenderHead()}<article${spreadAttributes(ke(blok))} class="prose"> <time class="text-base text-neutral-400"> ${new Date(blok.date).toLocaleDateString("en-US", {
    dateStyle: "medium"
  })} </time> <h1 class="max-w-[30ch] text-4xl font-bold text-neutral-800 md:text-5xl"> ${blok.title} </h1> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </article>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/stroyblok/BlogPost.astro", void 0);

const $$Astro$4 = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    date,
    title = "hello world",
    desc = "hello world",
    to = "https://docs.astro.build/en/basics/astro-components/"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(to, "href")}> <article class="flex max-w-fit flex-col items-baseline gap-6 rounded-lg p-6 pl-0 transition-colors hover:bg-neutral-200/75 focus:bg-neutral-200/75 focus:outline-none md:flex-row md:pl-6"> <time${addAttribute(date, "datetime")} class="border-l border-neutral-400 pl-4 text-base font-medium text-neutral-400 md:border-0 md:pl-0">${date}</time> <div class="flex flex-col items-start"> <h2 class="max-w-[45ch] text-balance text-xl font-semibold text-neutral-800"> ${title} </h2> <p class="mt-2 max-w-[55ch] text-base text-neutral-400"> ${desc} </p> <button class="mt-4 flex items-center gap-1 text-primary-500"> <span class="text-base font-semibold">Read more</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "ph:caret-right", "class": "text-base" })} </button> </div> </article> </a>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/components/BlogPost.astro", void 0);

const $$Astro$3 = createAstro();
const $$BlogPostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogPostList;
  const storyblokApi = ve();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "published",
    content_type: "blogPost"
  });
  const posts = data.stories.map((story) => {
    return {
      title: story.content.title,
      date: new Date(story.published_at).toLocaleDateString("en-US", {
        dateStyle: "medium"
      }),
      description: story.content.description,
      slug: story.full_slug
    };
  });
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${spreadAttributes(ke(blok))}> ${posts.map((post) => renderTemplate`<li> ${renderComponent($$result, "BlogPost", $$BlogPost, { "to": post.slug, "title": post.title, "desc": post.description, "date": post.date })} </li>`)} </ul>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/stroyblok/BlogPostList.astro", void 0);

const $$Astro$2 = createAstro();
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Page;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main> <h1 class="max-w-[30ch] text-4xl font-bold text-neutral-800 md:text-5xl">
Exploring the dynamics of weight loss, optimal training intensity, and
        cutting-edge dieting tools
</h1> </main> <section${spreadAttributes(ke(blok))} class="mt-16 flex flex-col items-start justify-start gap-8 md:border-l md:border-neutral-200 md:pl-6"> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </section>`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/stroyblok/Page.astro", void 0);

const components = {blogPost: $$BlogPost$1,blogPostList: $$BlogPostList,page: $$Page};

const $$Astro$1 = createAstro();
const $$StoryblokComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = camelcase(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/node_modules/@storyblok/astro/components/StoryblokComponent.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const storyblokApi = ve();
  const slug = Astro2.params.slug;
  let content;
  try {
    const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
      version: false ? "draft" : "published"
    });
    content = data.story.content;
  } catch (error) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "insights" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": content })} ` })}`;
}, "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/blog/[...slug].astro", void 0);
const $$file = "/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, ____slug_ as _, $$Layout as a, $$ButtonLink as b, $$StoryblokComponent as c, ve as v };
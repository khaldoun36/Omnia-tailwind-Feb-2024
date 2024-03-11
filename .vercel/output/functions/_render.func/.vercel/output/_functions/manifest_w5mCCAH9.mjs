import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_lvwGnhBe.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.GIRzuc2W.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CqkSpCYV.js"}],"styles":[{"type":"external","src":"/_astro/about.GIRzuc2W.css"},{"type":"external","src":"/_astro/about.ehCu8h4S.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CqkSpCYV.js"}],"styles":[{"type":"external","src":"/_astro/about.GIRzuc2W.css"},{"type":"external","src":"/_astro/about.ehCu8h4S.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CqkSpCYV.js"}],"styles":[{"type":"external","src":"/_astro/about.GIRzuc2W.css"},{"type":"external","src":"/_astro/about.ehCu8h4S.css"}],"routeData":{"route":"/insights","isIndex":false,"type":"page","pattern":"^\\/insights\\/?$","segments":[[{"content":"insights","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/insights.astro","pathname":"/insights","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.gv89rtbv.js"}],"styles":[{"type":"external","src":"/_astro/about.GIRzuc2W.css"},{"type":"external","src":"/_astro/about.ehCu8h4S.css"},{"type":"inline","content":".scroller[data-astro-cid-tpudeaz7]{max-width:100%}.scroller__inner[data-astro-cid-tpudeaz7]{padding-block:1rem;display:flex;flex-wrap:wrap;gap:2rem}.scroller[data-astro-cid-tpudeaz7][data-animated=true]{overflow:hidden;-webkit-mask:linear-gradient(90deg,transparent,#f4f4f5 10%,#f4f4f5 90%,transparent);mask:linear-gradient(90deg,transparent,#f4f4f5 20%,#f4f4f5 80%,transparent)}.scroller[data-astro-cid-tpudeaz7][data-animated=true] .scroller__inner[data-astro-cid-tpudeaz7]{width:-moz-max-content;width:max-content;flex-wrap:nowrap;animation:scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite}.scroller[data-astro-cid-tpudeaz7][data-direction=right]{--_animation-direction: reverse}.scroller[data-astro-cid-tpudeaz7][data-direction=left]{--_animation-direction: forwards}.scroller[data-astro-cid-tpudeaz7][data-speed=fast]{--_animation-duration: 20s}.scroller[data-astro-cid-tpudeaz7][data-speed=slow]{--_animation-duration: 100s}@keyframes scroll{to{transform:translate(calc(-50% - .5rem))}}.cursor[data-astro-cid-lq3dx26q]{--cursor-clr: #f97316;display:inline-block;width:3px;margin-left:4px;background:var(--cursor-clr)}.cursor[data-astro-cid-lq3dx26q].blink{animation:blink .8s ease-in-out infinite}@keyframes blink{0%,to{background:var(--cursor-clr)}40%,50%{background:transparent}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/blog/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/src/pages/insights.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/404.astro":"chunks/pages/404_Z7YZgW6P.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_HJIlqf0A.mjs","/src/pages/index.astro":"chunks/pages/index_XsXzVoaL.mjs","/src/pages/insights.astro":"chunks/pages/insights_etqjcfYh.mjs","\u0000@astrojs-manifest":"manifest_w5mCCAH9.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_29pKlORj.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_LUFkhK9o.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_LUx9E2dn.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._vqoxOttR.mjs","\u0000@astro-page:src/pages/insights@_@astro":"chunks/insights_6aeT8Xmj.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_is4bYbKK.mjs","/Users/khaldounalnuaimi/Desktop/Omnia_new/omnia_landing-page/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_ybWcQEeq.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.CqkSpCYV.js","/astro/hoisted.js?q=0":"_astro/hoisted.gv89rtbv.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about-me-page.iXdNLbsj.jpg","/_astro/about-me.9QcWYUB5.jpeg","/_astro/client-photo-1.54_vjpSI.jpeg","/_astro/client-photo-5.ylBM-W9H.jpeg","/_astro/client-photo-3.GKG08Qm8.jpeg","/_astro/client-photo-6.Z8PivFHR.jpeg","/_astro/client-photo-8.Fu20tUVb.jpeg","/_astro/client-photo-7.TqEz5Ijv.jpeg","/_astro/client-photo-2.UAMQxg-v.jpeg","/_astro/client-photo-4.8ro9249I.jpeg","/_astro/about.ehCu8h4S.css","/_astro/about.GIRzuc2W.css","/favicon.svg","/_astro/hoisted.CqkSpCYV.js","/_astro/hoisted.gv89rtbv.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };

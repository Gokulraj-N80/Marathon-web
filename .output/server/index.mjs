globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
		"mtime": "2026-07-21T07:17:12.744Z",
		"size": 0,
		"path": "../public/favicon.ico"
	},
	"/assets/about-7Xsy3I18.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bf-tEl6sPy3p0kgpBUWqTLMQj9JkAI\"",
		"mtime": "2026-07-22T05:49:52.328Z",
		"size": 959,
		"path": "../public/assets/about-7Xsy3I18.js"
	},
	"/assets/BibPickupSection-BilliYYG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce6-Ln0H7NjC3t788yAKPmLIE7IVuqw\"",
		"mtime": "2026-07-22T05:49:52.309Z",
		"size": 3302,
		"path": "../public/assets/BibPickupSection-BilliYYG.js"
	},
	"/background.jpg": {
		"type": "image/jpeg",
		"etag": "\"7537a-Ab+KScA38BHYGHrh1gVDUcvBvOE\"",
		"mtime": "2026-07-21T15:30:00.236Z",
		"size": 480122,
		"path": "../public/background.jpg"
	},
	"/assets/about-runners-C1KMfJYf.jpg": {
		"type": "image/jpeg",
		"etag": "\"30ecb-o2NTUve4fE+A1EW1Ls9GpYrSTak\"",
		"mtime": "2026-07-22T05:49:52.348Z",
		"size": 200395,
		"path": "../public/assets/about-runners-C1KMfJYf.jpg"
	},
	"/assets/check-CLYb6C-z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-q9MN4hG0mIic3nCAZiJni4DSLgI\"",
		"mtime": "2026-07-22T05:49:52.328Z",
		"size": 124,
		"path": "../public/assets/check-CLYb6C-z.js"
	},
	"/assets/contact-D0HeWi3F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37a-viAjpHGcmLOgj5xNQC0vupSmJXs\"",
		"mtime": "2026-07-22T05:49:52.333Z",
		"size": 890,
		"path": "../public/assets/contact-D0HeWi3F.js"
	},
	"/assets/ContactSection-mjU6ElQX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"162b-qq5E5PtMgr17vk8ziqpODMWsPnQ\"",
		"mtime": "2026-07-22T05:49:52.309Z",
		"size": 5675,
		"path": "../public/assets/ContactSection-mjU6ElQX.js"
	},
	"/assets/event-info-BPzyz1Bk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"860-0dvOY2Lq6MjD4AzgRmuHQhHaafc\"",
		"mtime": "2026-07-22T05:49:52.333Z",
		"size": 2144,
		"path": "../public/assets/event-info-BPzyz1Bk.js"
	},
	"/assets/createLucideIcon-B4jqqaQH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2542-rj8ey/pXWFvT55EMX7TrP8NthMs\"",
		"mtime": "2026-07-22T05:49:52.333Z",
		"size": 9538,
		"path": "../public/assets/createLucideIcon-B4jqqaQH.js"
	},
	"/assets/FAQ-BiRd-WW-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2fd2-PEWYswJO6HjX3ZRnsdLtMa8s6mc\"",
		"mtime": "2026-07-22T05:49:52.309Z",
		"size": 12242,
		"path": "../public/assets/FAQ-BiRd-WW-.js"
	},
	"/assets/gallery-BC_RsN4I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a6-Mk6Dm0Y7PgK45gvnmTr1azyK9Jg\"",
		"mtime": "2026-07-22T05:49:52.338Z",
		"size": 678,
		"path": "../public/assets/gallery-BC_RsN4I.js"
	},
	"/assets/register-DJ2TfEfU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bd0-+t46h3YSRwKrpYMfKFTbWJArBA8\"",
		"mtime": "2026-07-22T05:49:52.338Z",
		"size": 11216,
		"path": "../public/assets/register-DJ2TfEfU.js"
	},
	"/assets/PressHighlights-3fzKYj9d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1433-sTYypi1RopZIpu2ZxDYhlYlgiOg\"",
		"mtime": "2026-07-22T05:49:52.309Z",
		"size": 5171,
		"path": "../public/assets/PressHighlights-3fzKYj9d.js"
	},
	"/assets/RegistrationCTA-C038DGUP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a96-BG7GidFy9/Zpe9zHXyj48zl8BMA\"",
		"mtime": "2026-07-22T05:49:52.328Z",
		"size": 14998,
		"path": "../public/assets/RegistrationCTA-C038DGUP.js"
	},
	"/assets/index-27qZUDjJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e2ee-7/mJhw0Xx3g7OG1d9VN2+9VVDlk\"",
		"mtime": "2026-07-22T05:49:52.307Z",
		"size": 385774,
		"path": "../public/assets/index-27qZUDjJ.js"
	},
	"/assets/routes-mYuWrHkB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2acd-StsHL0BmK2lNPBg6ON2iPJx8O5I\"",
		"mtime": "2026-07-22T05:49:52.338Z",
		"size": 10957,
		"path": "../public/assets/routes-mYuWrHkB.js"
	},
	"/assets/g5-CaWd3jjk.jpg": {
		"type": "image/jpeg",
		"etag": "\"eb156-d75p6tpYiCBAq3kUalbss1zbZSg\"",
		"mtime": "2026-07-22T05:49:52.371Z",
		"size": 962902,
		"path": "../public/assets/g5-CaWd3jjk.jpg"
	},
	"/assets/g2-CDCtE_Q-.jpg": {
		"type": "image/jpeg",
		"etag": "\"d88e2-dByPP2nQ3VZJFQFuWUIEyW7PgTw\"",
		"mtime": "2026-07-22T05:49:52.361Z",
		"size": 887010,
		"path": "../public/assets/g2-CDCtE_Q-.jpg"
	},
	"/assets/img-DTeR9SNL.png": {
		"type": "image/png",
		"etag": "\"99ca5-Z7Hyw3uz4UxnetteLMXsKSWagSM\"",
		"mtime": "2026-07-22T05:49:52.371Z",
		"size": 629925,
		"path": "../public/assets/img-DTeR9SNL.png"
	},
	"/assets/g1-Dhx_e2E-.jpg": {
		"type": "image/jpeg",
		"etag": "\"10b2a1-hZzl742/CvboKHXvZuY1S4vsUeA\"",
		"mtime": "2026-07-22T05:49:52.350Z",
		"size": 1094305,
		"path": "../public/assets/g1-Dhx_e2E-.jpg"
	},
	"/assets/g3-4Gb42dpM.jpg": {
		"type": "image/jpeg",
		"etag": "\"10bee2-6WQCLG0mOfu0rmTnsogTeT3qkV8\"",
		"mtime": "2026-07-22T05:49:52.364Z",
		"size": 1097442,
		"path": "../public/assets/g3-4Gb42dpM.jpg"
	},
	"/assets/g4-CvPZW7s-.jpg": {
		"type": "image/jpeg",
		"etag": "\"10352e-+PuUQPbzT90lVZmApOVIkt4qqDU\"",
		"mtime": "2026-07-22T05:49:52.364Z",
		"size": 1062190,
		"path": "../public/assets/g4-CvPZW7s-.jpg"
	},
	"/assets/trophy-CcPTNklj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2fb-Gf8Hu0hzf9qs6ulAwdNJk1P6zkk\"",
		"mtime": "2026-07-22T05:49:52.338Z",
		"size": 763,
		"path": "../public/assets/trophy-CcPTNklj.js"
	},
	"/assets/styles-Dmrfmz5n.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b82b-YrIKqUILy6lRXPmlTMrl1cymwaQ\"",
		"mtime": "2026-07-22T05:49:52.371Z",
		"size": 112683,
		"path": "../public/assets/styles-Dmrfmz5n.css"
	},
	"/assets/types-Ck9BYy3q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc54-J55+T9uFaje4sy4JtecrD311nHI\"",
		"mtime": "2026-07-22T05:49:52.338Z",
		"size": 56404,
		"path": "../public/assets/types-Ck9BYy3q.js"
	},
	"/background.png": {
		"type": "image/png",
		"etag": "\"2b40d5-GzjWhzqBS/5zkT0UtwERPZhp+gQ\"",
		"mtime": "2026-07-21T13:56:33.371Z",
		"size": 2834645,
		"path": "../public/background.png"
	},
	"/assets/background-DyMdkfUM.png": {
		"type": "image/png",
		"etag": "\"2b40d5-GzjWhzqBS/5zkT0UtwERPZhp+gQ\"",
		"mtime": "2026-07-22T05:49:52.350Z",
		"size": 2834645,
		"path": "../public/assets/background-DyMdkfUM.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_R36kTl = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_R36kTl
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

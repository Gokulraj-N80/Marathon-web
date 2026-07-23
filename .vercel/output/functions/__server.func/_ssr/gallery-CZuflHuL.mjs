import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PressHighlights, r as background_default, t as Gallery } from "./background-C1aOxnuU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CZuflHuL.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative py-20 md:py-28 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: background_default,
						alt: "Marathon gallery background",
						className: "absolute inset-0 h-full w-full object-cover object-center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-navy/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 pointer-events-none",
						style: {
							backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
							backgroundSize: "20px 20px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "flex items-center gap-2 text-sm text-white/60 mb-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "hover:text-white transition-colors",
										children: "Home"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-medium",
										children: "Gallery"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-orange font-semibold text-sm tracking-widest uppercase",
								children: "Gallery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight",
								children: ["Moments That ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Made Us"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-white/70 max-w-xl leading-relaxed",
								children: "Relive the energy, emotion and spirit of Run Beyond Limits through our collection of unforgettable moments."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressHighlights, {})
		]
	});
}
//#endregion
export { GalleryPage as component };

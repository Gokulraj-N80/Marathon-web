import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PressHighlights, t as Gallery } from "./PressHighlights-DoRqiBqN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-4P9JswYE.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gradient-page min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-header-banner text-white py-10 md:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-orange font-semibold text-sm tracking-widest uppercase",
						children: "Gallery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl md:text-5xl font-extrabold",
						children: "Moments That Made Us"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressHighlights, {})
		]
	});
}
//#endregion
export { GalleryPage as component };

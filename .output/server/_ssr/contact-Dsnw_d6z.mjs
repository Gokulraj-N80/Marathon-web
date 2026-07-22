import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ContactSection } from "./ContactSection-4DuUSRRc.mjs";
import { t as BibPickupSection } from "./BibPickupSection-g0s0umzA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dsnw_d6z.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gradient-page min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-header-banner text-white py-10 md:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-orange font-semibold text-sm tracking-widest uppercase",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-3xl md:text-5xl font-extrabold",
							children: "Say Hello"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base md:text-lg text-white/80 max-w-xl mx-auto",
							children: "Have a question about registration, race day or partnerships? Our team is here to help."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BibPickupSection, {})
		]
	});
}
//#endregion
export { ContactPage as component };

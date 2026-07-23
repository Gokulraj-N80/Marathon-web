import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as WhyParticipate, i as RegistrationCTA, n as HeartHealthSection, r as MarathonDifference, t as AboutEvent } from "./RegistrationCTA-BUagi0KE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CPCXQtA7.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gradient-page min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "page-header-banner text-white py-10 md:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/70 font-semibold text-sm tracking-widest uppercase",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-3xl md:text-5xl font-extrabold",
							children: "Our Story, Our Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base md:text-lg text-white/80 max-w-2xl mx-auto",
							children: "Run Beyond Limits is a community-first running movement dedicated to endurance, resilience, and personal records."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutEvent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyParticipate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarathonDifference, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHealthSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationCTA, {})
		]
	});
}
//#endregion
export { AboutPage as component };

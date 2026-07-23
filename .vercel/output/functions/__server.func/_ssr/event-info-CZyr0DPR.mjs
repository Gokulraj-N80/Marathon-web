import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { P as Coffee, S as Medal, U as Award, d as Shirt, s as Timer, u as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as EVENT } from "./marathon-DjS4FD98.mjs";
import { t as BibPickupSection } from "./BibPickupSection-BMEWO1nK.mjs";
import { i as RaceCategories, n as EventTimeline, r as FAQ, t as EventHighlights } from "./FAQ-BkyjBx92.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/event-info-CZyr0DPR.js
var import_jsx_runtime = require_jsx_runtime();
var benefits = [
	{
		icon: Shirt,
		title: "Event T-Shirt"
	},
	{
		icon: Medal,
		title: "Finisher Medal"
	},
	{
		icon: Timer,
		title: "Timing Chip"
	},
	{
		icon: Award,
		title: "E-Certificate"
	},
	{
		icon: Coffee,
		title: "Breakfast"
	},
	{
		icon: ShoppingBag,
		title: "Goodie Bag"
	}
];
function ParticipantBenefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-24 bg-white dots-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-royal font-semibold text-sm tracking-widest uppercase",
					children: "Your Registration"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl md:text-4xl font-extrabold text-charcoal",
					children: "What’s Included In Your Registration?"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
				children: benefits.map(({ icon: Icon, title }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border p-5 text-center hover:border-royal hover:bg-royal/5 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "mx-auto h-8 w-8 text-royal",
						strokeWidth: 1.75
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-semibold text-charcoal",
						children: title
					})]
				}, title))
			})]
		})
	});
}
function EventInfo() {
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
							children: "Event Info"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-3xl md:text-5xl font-extrabold",
							children: "Everything You Need to Know"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-base md:text-lg text-white/80",
							children: [
								EVENT.date,
								" · ",
								EVENT.location
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RaceCategories, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventHighlights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventTimeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticipantBenefits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BibPickupSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {})
		]
	});
}
//#endregion
export { EventInfo as component };

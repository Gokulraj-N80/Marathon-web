import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Flag, B as Check, H as Award, P as Coffee, S as Medal, U as ArrowRight, d as Shirt, g as Plus, h as Rocket, o as Trophy, s as Timer, u as ShoppingBag, y as Minus } from "../_libs/lucide-react.mjs";
import { i as RACES, r as FAQS } from "./marathon-B7kyZOaQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQ-SB66Ux1o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: Timer,
		title: "Timing Chip",
		desc: "Certified electronic timing",
		num: "01"
	},
	{
		icon: Award,
		title: "E-Certificate",
		desc: "Digital finisher certificate",
		num: "02"
	},
	{
		icon: Coffee,
		title: "Breakfast",
		desc: "Post-race healthy meal",
		num: "03"
	},
	{
		icon: Shirt,
		title: "Event T-Shirt",
		desc: "Premium technical fabric",
		num: "04"
	},
	{
		icon: ShoppingBag,
		title: "Goodie Bag",
		desc: "Sponsor gifts & samples",
		num: "05"
	},
	{
		icon: Medal,
		title: "Finisher Medal",
		desc: "Keepsake to remember",
		num: "06"
	}
];
function EventHighlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-24 bg-background dots-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-royal font-semibold text-sm tracking-widest uppercase",
						children: "Every Participant Gets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-extrabold text-charcoal",
						children: "Included In Every Bib"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1 w-16 mx-auto rounded-full gradient-cta" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6",
				children: items.map(({ icon: Icon, title, desc, num }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group bg-gradient-to-b from-white to-slate-50/80 rounded-2xl p-6 text-center border border-slate-200/60 shadow-sm hover:border-royal/30 hover:shadow-elevated hover-lift relative overflow-hidden transition-all duration-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-3 right-3 text-[10px] font-bold text-navy/20",
							children: num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid place-items-center h-14 w-14 rounded-2xl bg-royal/5 text-royal group-hover:bg-gradient-to-br group-hover:from-royal group-hover:to-navy group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-6 w-6 transition-transform duration-300",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-bold text-charcoal text-sm md:text-base tracking-tight transition-colors duration-300 group-hover:text-royal",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-slate-500 leading-relaxed",
							children: desc
						})
					]
				}, title))
			})]
		})
	});
}
var styles = {
	magenta: {
		ring: "ring-slate-200/80 hover:ring-royal/40",
		accent: "text-royal",
		bg: "from-royal/5 via-white to-white",
		btn: "bg-royal hover:bg-navy text-white hover:scale-105 transition-all duration-300"
	},
	gold: {
		ring: "ring-orange/40 hover:ring-orange/80 shadow-soft hover:shadow-glow scale-102 md:scale-105 z-10",
		accent: "text-orange",
		bg: "from-orange/10 via-white to-white",
		btn: "gradient-orange hover:shadow-glow text-white hover:scale-105 transition-all duration-300"
	},
	cream: {
		ring: "ring-slate-200/80 hover:ring-emerald/40",
		accent: "text-emerald",
		bg: "from-emerald/5 via-white to-white",
		btn: "bg-emerald hover:bg-emerald-600 text-white hover:scale-105 transition-all duration-300"
	}
};
function RaceCategories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "races",
		className: "py-20 md:py-28 bg-[#F8FAFC] dots-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-royal font-semibold text-sm tracking-widest uppercase",
						children: "Race Categories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight",
						children: "Choose Your Challenge"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1.5 w-20 mx-auto rounded-full gradient-cta" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-slate-500 text-lg leading-relaxed",
						children: "Every step counts. Pick the distance that inspires you to go further."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3 items-center",
				children: RACES.map((r) => {
					const s = styles[r.accent];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative rounded-3xl bg-gradient-to-b ${s.bg} p-8 md:p-10 ring-1 ${s.ring} hover-lift transition-all duration-300`,
						children: [
							r.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full gradient-orange text-white text-[10px] font-black uppercase tracking-widest px-5 py-1.5 shadow-soft animate-pulse-glow",
								children: "Most Popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `font-display text-6xl md:text-7xl font-black ${s.accent} leading-none`,
									children: r.distance
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-xl font-bold ${s.accent}`,
									children: "KM"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-2xl font-extrabold text-charcoal",
								children: r.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-slate-400 mt-0.5",
								children: r.subtype
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-8 space-y-3.5 text-sm text-slate-600 border-t border-slate-100 pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "h-4 w-4 text-emerald shrink-0",
												strokeWidth: 3
											}),
											" Minimum age: ",
											r.minAge
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-4 w-4 text-emerald shrink-0",
											strokeWidth: 3
										}), " Timing chip & bib inclusion"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-4 w-4 text-emerald shrink-0",
											strokeWidth: 3
										}), " T-shirt · Medal · Hot Breakfast"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex items-center justify-between gap-4 border-t border-slate-100/60 pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest",
									children: "Registration"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-3xl font-extrabold text-charcoal",
									children: ["₹", r.fee]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/register",
									className: `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-soft transition-all ${s.btn}`,
									children: ["Register ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						]
					}, r.id);
				})
			})]
		})
	});
}
var steps = [
	{
		time: "05:00 AM",
		title: "Reporting & Warm-up",
		icon: Timer,
		desc: "Arrive, stretch and prepare with our fitness team."
	},
	{
		time: "05:30 AM",
		title: "Flag-off",
		icon: Flag,
		desc: "Ceremonial flag-off with dignitaries and community leaders."
	},
	{
		time: "06:00 AM",
		title: "Race Begins",
		icon: Rocket,
		desc: "All race categories start based on staggered waves."
	},
	{
		time: "07:30 AM",
		title: "Breakfast & Recovery",
		icon: Coffee,
		desc: "Healthy breakfast and recovery zone for all finishers."
	},
	{
		time: "08:30 AM",
		title: "Awards & Celebration",
		icon: Trophy,
		desc: "Winners ceremony, music and community celebration."
	}
];
function EventTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-24 bg-white dots-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-royal font-semibold text-sm tracking-widest uppercase",
					children: "Race Day Schedule"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl md:text-5xl font-extrabold text-charcoal",
					children: "The Event Day Experience"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block absolute left-4 right-4 top-14 h-1.5 bg-gradient-to-r from-royal/20 via-orange/40 to-royal/20 rounded-full -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:gap-8 lg:grid-cols-5 relative z-10",
					children: steps.map(({ time, title, icon: Icon, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex lg:flex-col items-start lg:items-center gap-4 lg:text-center bg-white rounded-2xl p-5 md:p-6 ring-1 ring-slate-100 shadow-soft hover:shadow-elevated hover:ring-royal/20 transition-all duration-300 group hover-lift h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative shrink-0 lg:mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid place-items-center h-14 w-14 rounded-full bg-gradient-to-br from-royal to-navy text-white shadow-elevated ring-4 ring-white group-hover:scale-110 transition-transform duration-300",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 h-5 w-5 rounded-full gradient-orange text-white text-[10px] font-black grid place-items-center shadow-sm",
								children: i + 1
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-extrabold text-base text-orange",
								children: time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-charcoal mt-1 text-sm md:text-base leading-snug",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs md:text-sm text-slate-500 mt-2 leading-relaxed max-w-xs",
								children: desc
							})
						] })]
					}, title))
				})]
			})]
		})
	});
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-20 md:py-24 bg-[#F8FAFC] dots-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-royal font-semibold text-sm tracking-widest uppercase",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl md:text-5xl font-extrabold text-charcoal",
					children: "Frequently Asked Questions"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: FAQS.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-2xl border transition-all duration-300 ${isOpen ? "bg-white border-royal/40 shadow-elevated shadow-glow scale-[1.01]" : "bg-white border-slate-100 shadow-sm hover:border-slate-200/80"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "w-full text-left flex items-center justify-between gap-4 p-5 md:p-7 cursor-pointer",
							onClick: () => setOpen(isOpen ? null : i),
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-slate-800 text-sm md:text-base leading-snug",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `shrink-0 grid place-items-center h-9 w-9 rounded-full transition-all duration-300 ${isOpen ? "gradient-orange text-white rotate-180" : "bg-royal/5 text-royal hover:bg-royal/10"}`,
								children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									className: "h-4 w-4",
									strokeWidth: 3
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "h-4 w-4",
									strokeWidth: 3
								})
							})]
						}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 md:px-7 pb-5 md:pb-7 text-xs md:text-sm text-slate-500 leading-relaxed animate-fade-up",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "border-t border-slate-50 pt-4",
								children: f.a
							})
						})]
					}, f.q);
				})
			})]
		})
	});
}
//#endregion
export { RaceCategories as i, EventTimeline as n, FAQ as r, EventHighlights as t };

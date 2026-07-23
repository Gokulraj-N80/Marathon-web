import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Calendar, M as Dumbbell, W as ArrowRight, c as Stethoscope, i as Users, v as Newspaper, z as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as WhyParticipate, i as RegistrationCTA, n as HeartHealthSection, r as MarathonDifference, t as AboutEvent } from "./RegistrationCTA-BUagi0KE.mjs";
import { n as EVENT } from "./marathon-DjS4FD98.mjs";
import { t as ContactSection } from "./ContactSection-to1Ycoic.mjs";
import { t as BibPickupSection } from "./BibPickupSection-BMEWO1nK.mjs";
import { i as RaceCategories, n as EventTimeline, r as FAQ, t as EventHighlights } from "./FAQ-BkyjBx92.mjs";
import { n as PressHighlights, r as background_default, t as Gallery } from "./background-C1aOxnuU.mjs";
import { t as img_default } from "./img-Rdt-I_xG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D7gBlxp3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen flex items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: background_default,
				alt: "Runners during the Run Beyond Limits marathon",
				className: "absolute inset-0 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-0 h-px w-48 bg-gradient-to-r from-transparent to-orange/40 animate-float" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 left-10 h-px w-32 bg-gradient-to-r from-transparent to-royal/40",
						style: { animationDelay: "0.4s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-1/3 right-0 h-px w-64 bg-gradient-to-l from-transparent to-orange/30 animate-float",
						style: { animationDelay: "0.8s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 right-1/4 h-2 w-2 rounded-full bg-orange/40 animate-pulse-glow" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-40 left-1/3 h-1.5 w-1.5 rounded-full bg-royal/40 animate-pulse-glow",
						style: { animationDelay: "1s" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-white w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 animate-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img_default,
								alt: "Run Beyond Limits",
								className: "h-20 md:h-28 w-auto object-contain drop-shadow-lg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full gradient-orange text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest animate-pulse-glow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white" }), " Registration Open"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
										" ",
										EVENT.date
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-md",
								children: [
									"Run Beyond ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Limits 2026"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl md:text-2xl font-semibold text-white/95",
								children: "Push Your Endurance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base md:text-lg text-white/70 max-w-xl leading-relaxed",
								children: "Join thousands of runners across three cities for an unforgettable celebration of health, fitness, resilience and community."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/register",
									className: "inline-flex items-center gap-2 rounded-full gradient-orange text-white px-8 py-4 font-bold shadow-elevated hover:shadow-glow hover:scale-105 transition-all duration-300 text-base",
									children: ["Register Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/event-info",
									className: "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 hover:ring-white/50 text-white px-8 py-4 font-semibold hover:bg-white/25 transition-all duration-300 text-base",
									children: "Explore Event"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:flex flex-col gap-5 items-end animate-fade-up",
						style: { animationDelay: "0.3s" },
						children: [
							{
								name: "CHENNAI",
								state: "Tamil Nadu",
								color: "group-hover:text-rose-500"
							},
							{
								name: "BENGALURU",
								state: "Karnataka",
								color: "group-hover:text-amber-500"
							},
							{
								name: "SALEM",
								state: "Tamil Nadu",
								color: "group-hover:text-emerald-500"
							}
						].map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-6 rounded-2xl bg-navy/40 backdrop-blur-md ring-1 ring-white/15 px-7 py-4.5 min-w-[310px] hover:translate-x-[-12px] hover:bg-navy/60 hover:ring-white/30 transition-all duration-300 group cursor-pointer shadow-soft hover:shadow-glow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `font-city text-4xl md:text-5xl text-white tracking-wide transition-colors duration-300 ${city.color}`,
									children: city.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/50 uppercase tracking-widest",
									children: city.state
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-white/30 group-hover:bg-orange group-hover:scale-125 transition-all duration-300" })]
						}, city.name))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-scroll-bounce",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-white/50 uppercase tracking-widest",
						children: "Scroll"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 text-white/50" })]
				})]
			})
		]
	});
}
function diff(target) {
	const d = Math.max(0, target - Date.now());
	return {
		days: Math.floor(d / 864e5),
		hours: Math.floor(d / 36e5 % 24),
		minutes: Math.floor(d / 6e4 % 60),
		seconds: Math.floor(d / 1e3 % 60)
	};
}
function Countdown() {
	const target = new Date(EVENT.dateISO).getTime();
	const [t, setT] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setT(diff(target));
		const id = setInterval(() => setT(diff(target)), 1e3);
		return () => clearInterval(id);
	}, [target]);
	const cells = [
		["Days", t?.days ?? null],
		["Hours", t?.hours ?? null],
		["Minutes", t?.minutes ?? null],
		["Seconds", t?.seconds ?? null]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-28 md:py-36 gradient-hero text-white overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none",
				style: {
					backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1.2px, transparent 1.2px)",
					backgroundSize: "20px 20px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-royal/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-orange/15 blur-3xl" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/70 font-semibold text-sm tracking-widest uppercase",
						children: "Countdown"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold",
						children: "Race Day Is Coming"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-white/70 text-lg",
						children: [
							EVENT.date,
							" · ",
							EVENT.location
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto",
						children: cells.map(([label, val]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-white/5 backdrop-blur-xl ring-1 ring-white/15 p-5 md:p-10 shadow-elevated hover:bg-white/10 hover:ring-white/30 hover:-translate-y-2 hover:shadow-glow transition-all duration-500 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-6xl md:text-9xl font-black tabular-nums tracking-tight text-white drop-shadow-[0_4px_12px_rgba(37,99,235,0.4)] group-hover:text-orange transition-colors duration-300",
								children: val === null ? "--" : String(val).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors duration-300",
								children: label
							})]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						className: "mt-14 inline-flex items-center gap-2 rounded-full gradient-orange text-white px-10 py-5 font-bold shadow-glow hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] hover:scale-105 transition-all duration-300 text-lg",
						children: "Secure Your Spot"
					})
				]
			})
		]
	});
}
var partners = [
	{
		icon: Stethoscope,
		name: "Healthcare Partner"
	},
	{
		icon: Dumbbell,
		name: "Fitness Partner"
	},
	{
		icon: Users,
		name: "Community Partner"
	},
	{
		icon: Newspaper,
		name: "Media Partner"
	}
];
function Sponsors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-24 bg-white border-y border-border dots-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-navy font-semibold text-sm tracking-widest uppercase",
				children: "Event Powered By"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-6",
				children: partners.map(({ icon: Icon, name }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-4.5 rounded-[1.25rem] border border-slate-100 bg-white py-7 px-5 shadow-card hover:shadow-card-hover hover:border-royal/30 hover:scale-[1.03] transition-all duration-300 group cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2.5 rounded-xl bg-slate-50 group-hover:bg-navy/10 group-hover:text-navy transition-all duration-300 text-slate-400",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-7 w-7 transition-transform duration-500 group-hover:rotate-3",
							strokeWidth: 1.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-slate-600 group-hover:text-charcoal transition-colors duration-300 text-sm md:text-base",
						children: name
					})]
				}, name))
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gradient-page min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventHighlights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RaceCategories, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutEvent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyParticipate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarathonDifference, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventTimeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHealthSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BibPickupSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { compact: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressHighlights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sponsors, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
		]
	});
}
//#endregion
export { Index as component };

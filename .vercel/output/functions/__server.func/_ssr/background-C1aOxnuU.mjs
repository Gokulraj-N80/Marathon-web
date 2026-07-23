import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as Clock, H as Calendar, L as ChevronRight, R as ChevronLeft, V as Camera, W as ArrowRight, n as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/background-C1aOxnuU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var g1_default = "/assets/g1-Dhx_e2E-.jpg";
var g2_default = "/assets/g2-CDCtE_Q-.jpg";
var g3_default = "/assets/g3-4Gb42dpM.jpg";
var g4_default = "/assets/g4-CvPZW7s-.jpg";
var g5_default = "/assets/g5-CaWd3jjk.jpg";
var g6_default = "/assets/g1-Dhx_e2E-.jpg";
var IMAGES = [
	{
		src: g1_default,
		alt: "Runners at the start line"
	},
	{
		src: g2_default,
		alt: "Finisher medal moment"
	},
	{
		src: g3_default,
		alt: "Runners forming a heart"
	},
	{
		src: g4_default,
		alt: "Volunteers cheering runners"
	},
	{
		src: g5_default,
		alt: "Winners on the podium"
	},
	{
		src: g6_default,
		alt: "Community runners together"
	},
	{
		src: g1_default,
		alt: "Start line crowd"
	},
	{
		src: g4_default,
		alt: "High fives at the aid station"
	},
	{
		src: g2_default,
		alt: "Proud finisher"
	}
];
function Gallery({ compact = false }) {
	const [open, setOpen] = (0, import_react.useState)(null);
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(compact ? 6 : 9);
	const images = compact ? IMAGES.slice(0, 6) : IMAGES;
	const visibleImages = images.slice(0, visibleCount);
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(null);
			if (e.key === "ArrowRight" && open < images.length - 1) setOpen(open + 1);
			if (e.key === "ArrowLeft" && open > 0) setOpen(open - 1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, images.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 md:py-28 bg-white dots-pattern",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-navy font-semibold text-sm tracking-widest uppercase",
							children: "Moments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl md:text-5xl font-extrabold text-charcoal",
							children: "Last Year's Event Gallery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1.5 w-20 mx-auto rounded-full bg-navy" })
					]
				}),
				visibleImages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-12 w-12 text-slate-300 mx-auto mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-500 text-lg",
						children: "No photos to display."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "columns-2 md:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5",
					children: visibleImages.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(i),
						className: "group relative overflow-hidden rounded-[1.5rem] shadow-card hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-royal break-inside-avoid hover-lift transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img.src,
								alt: img.alt,
								loading: "lazy",
								className: `w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-8 w-8 text-white mb-2 drop-shadow-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white text-sm font-semibold drop-shadow-lg",
									children: "View Photo"
								})]
							})
						]
					}, i))
				}),
				!compact && visibleCount < images.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setVisibleCount((c) => c + 6),
						className: "inline-flex items-center gap-2 rounded-full gradient-orange text-white px-8 py-3.5 font-semibold shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300",
						children: "Load More Photos"
					})
				})
			]
		}), open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: () => setOpen(null),
			className: "fixed inset-0 z-[100] bg-black/90 backdrop-blur-md grid place-items-center p-4 animate-fade-up",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close",
					className: "absolute top-6 right-6 h-12 w-12 grid place-items-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors z-10",
					onClick: () => setOpen(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
				}),
				open > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Previous",
					className: "absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors z-10",
					onClick: (e) => {
						e.stopPropagation();
						setOpen(open - 1);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
				}),
				open < images.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Next",
					className: "absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors z-10",
					onClick: (e) => {
						e.stopPropagation();
						setOpen(open + 1);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-4xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images[open].src,
						alt: images[open].alt,
						className: "max-h-[75vh] max-w-full rounded-2xl shadow-elevated mx-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-lg",
							children: images[open].alt
						})
					})]
				})
			]
		})]
	});
}
var stories = [
	{
		img: g5_default,
		title: "Thousands Run for a Healthier Heart",
		tag: "Community",
		date: "Sep 2025",
		readTime: "3 min"
	},
	{
		img: g6_default,
		title: "A Celebration of Community",
		tag: "Culture",
		date: "Sep 2025",
		readTime: "4 min"
	},
	{
		img: g4_default,
		title: "Every Step Creates an Impact",
		tag: "Impact",
		date: "Sep 2025",
		readTime: "2 min"
	}
];
function PressHighlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-28 bg-[#F8FAFC] dots-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-navy font-semibold text-sm tracking-widest uppercase",
						children: "Highlights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl md:text-5xl font-extrabold text-charcoal",
						children: "Run Beyond Limits Highlights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-1.5 w-20 mx-auto rounded-full bg-navy" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[2rem] shadow-elevated group cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g3_default,
							alt: "Aerial heart formation",
							loading: "lazy",
							className: "w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-6 left-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full gradient-orange text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5",
								children: "Featured"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 ring-1 ring-white/20",
								children: "Inspiration"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 p-8 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-xs text-white/60 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }), " Sep 2025"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }), " 5 min read"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl md:text-3xl font-extrabold",
									children: "Karnataka's Largest Heart Formation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-white/80 max-w-md leading-relaxed",
									children: "Over 5,000 runners came together to form a giant human heart — a symbol of unity and cardiovascular awareness."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange group-hover:gap-3 transition-all duration-200",
									children: ["Read Story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6",
					children: stories.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-4 rounded-[1.5rem] overflow-hidden bg-white border border-border shadow-card hover:shadow-card-hover hover-lift transition-all duration-300 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.img,
							alt: s.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-orange uppercase tracking-widest",
											children: s.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-slate-400",
											children: "·"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-slate-400",
											children: s.readTime
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-charcoal text-lg leading-snug group-hover:text-navy transition-colors duration-200",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground line-clamp-2",
									children: "Read how runners of all ages made this event unforgettable through resilience and heart."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center gap-1.5 text-xs text-slate-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }), s.date]
								})
							]
						})]
					}, s.title))
				})]
			})]
		})
	});
}
var background_default = "/assets/background-CSN9SVCX.png";
//#endregion
export { PressHighlights as n, background_default as r, Gallery as t };

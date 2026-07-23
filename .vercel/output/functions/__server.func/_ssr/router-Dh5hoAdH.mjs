import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MapPin, T as Instagram, _ as Phone, a as Twitter, b as MessageCircle, j as Facebook, n as X, t as Youtube, w as Mail, x as Menu } from "../_libs/lucide-react.mjs";
import { n as EVENT } from "./marathon-DjS4FD98.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as img_default } from "./img-Rdt-I_xG.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dh5hoAdH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BEUbf-Sc.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Event Info",
		to: "/event-info"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Logo({ compact = false, inFooter = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		onClick: (e) => {
			if (window.location.pathname === "/") {
				e.preventDefault();
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}
		},
		className: `flex items-center group ${inFooter ? "bg-white rounded-2xl px-4 py-2 w-fit" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: img_default,
			alt: "Run Beyond Limits",
			className: `w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${inFooter ? "h-10 max-w-[140px]" : compact ? "h-7" : "h-9 md:h-10"}`
		})
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-lg shadow-soft border-b border-white/20" : "bg-white border-b border-slate-100"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-[68px] flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden lg:flex items-center gap-1",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						onClick: (e) => {
							if (n.to === "/" && window.location.pathname === "/") {
								e.preventDefault();
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}
						},
						className: "relative px-4 py-2 text-sm font-medium tracking-wide text-slate-500 hover:text-royal rounded-full hover:bg-royal/5 transition-all duration-200 after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-royal after:rounded-full after:transition-all after:duration-300 hover:after:w-6",
						activeProps: { className: "!text-royal !font-semibold !bg-royal/5 after:!w-6" },
						children: n.label
					}) }, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						className: "hidden sm:inline-flex items-center rounded-full gradient-cta text-white px-6 py-2.5 text-sm font-semibold tracking-wide shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300",
						children: "Register Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						className: `lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full transition-all duration-200 ${open ? "bg-royal/10 text-royal" : "hover:bg-slate-100 text-slate-500"}`,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `relative bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-elevated transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "px-4 py-4 space-y-1",
					children: [NAV.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: `transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`,
						style: { transitionDelay: open ? `${i * 50}ms` : "0ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							onClick: (e) => {
								setOpen(false);
								if (n.to === "/" && window.location.pathname === "/") {
									e.preventDefault();
									window.scrollTo({
										top: 0,
										behavior: "smooth"
									});
								}
							},
							className: "block px-4 py-3 text-base font-medium text-slate-500 hover:text-royal hover:bg-royal/5 rounded-xl transition-all duration-150",
							children: n.label
						})
					}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: `pt-2 transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`,
						style: { transitionDelay: open ? `${NAV.length * 50}ms` : "0ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							onClick: () => setOpen(false),
							className: "block text-center rounded-full gradient-cta text-white py-3 text-base font-semibold shadow-soft",
							children: "Register Now"
						})
					})]
				})
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "gradient-footer text-white/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "[&_span]:!text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inFooter: true })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-white/60 max-w-xs leading-relaxed",
							children: "A community marathon uniting runners across India to celebrate health, endurance and pushing past limits."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-3",
							children: [
								Facebook,
								Instagram,
								Twitter,
								Youtube
							].map((Ico, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "social",
								className: "grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-orange hover:scale-110 transition-all duration-300",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ico, { className: "h-4 w-4" })
							}, i))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-5 text-sm uppercase tracking-wider",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-orange transition-colors duration-200",
							children: "Home"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/event-info",
							className: "hover:text-orange transition-colors duration-200",
							children: "Event Info"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-orange transition-colors duration-200",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: "hover:text-orange transition-colors duration-200",
							children: "Gallery"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							className: "hover:text-orange transition-colors duration-200",
							children: "Register"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-5 text-sm uppercase tracking-wider",
					children: "Support"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-orange transition-colors duration-200",
							children: "Contact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							className: "hover:text-orange transition-colors duration-200",
							children: "FAQ"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-orange transition-colors duration-200",
							children: "Privacy Policy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-orange transition-colors duration-200",
							children: "Terms & Conditions"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-5 text-sm uppercase tracking-wider",
					children: "Get In Touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-8 w-8 rounded-lg bg-white/10 text-orange shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1",
								children: EVENT.location
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-8 w-8 rounded-lg bg-white/10 text-orange shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EVENT.email}`,
								className: "mt-1 hover:text-orange transition-colors",
								children: EVENT.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-8 w-8 rounded-lg bg-white/10 text-orange shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${EVENT.phone}`,
								className: "mt-1 hover:text-orange transition-colors",
								children: EVENT.phone
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Run Beyond Limits. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-white/70",
					children: "Run Beyond Limits"
				})]
			})
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `https://wa.me/911234567890`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Contact us on WhatsApp",
		className: "fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] text-white pl-4 pr-6 py-3.5 font-semibold text-sm shadow-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-10 w-10 items-center justify-center rounded-full bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-[#25D366]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: "Chat with us"
		})]
	});
}
function LoadingScreen() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setTimeout(() => setLoading(false), 300);
					return 100;
				}
				return prev + Math.random() * 15 + 5;
			});
		}, 100);
		return () => clearInterval(interval);
	}, []);
	if (!loading) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[200] bg-navy flex flex-col items-center justify-center transition-opacity duration-500",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-16 rounded-full border-4 border-white/10 border-t-royal animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xs font-bold text-royal",
						children: "RBL"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-2xl font-extrabold text-white tracking-tight",
				children: "Run Beyond Limits"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-white/50",
				children: "Loading your experience..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 w-48 h-1 rounded-full bg-white/10 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full gradient-cta transition-all duration-300",
					style: { width: `${Math.min(progress, 100)}%` }
				})
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-black text-royal",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-charcoal",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-6 inline-flex rounded-full gradient-cta text-white px-6 py-3 text-sm font-semibold shadow-soft",
					children: "Back to Home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full gradient-cta text-white px-5 py-2.5 text-sm font-semibold",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-input px-5 py-2.5 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Run Beyond Limits 2026 · Run Beyond Limits" },
			{
				name: "description",
				content: "Join Run Beyond Limits on September 27, 2026 across Chennai, Bengaluru, and Salem. Push your endurance across 21.1K, 10K and 5K categories."
			},
			{
				name: "author",
				content: "Run Beyond Limits"
			},
			{
				property: "og:title",
				content: "Run Beyond Limits 2026 · Run Beyond Limits"
			},
			{
				property: "og:description",
				content: "Join Run Beyond Limits on September 27, 2026 across Chennai, Bengaluru, and Salem. Push your endurance across 21.1K, 10K and 5K categories."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Run Beyond Limits 2026 · Run Beyond Limits"
			},
			{
				name: "twitter:description",
				content: "Join Run Beyond Limits on September 27, 2026 across Chennai, Bengaluru, and Salem. Push your endurance across 21.1K, 10K and 5K categories."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e5ecaf9f-b5d0-45c0-9e3c-1fbdec4ad95c/id-preview-cd4fab79--f4afad68-ee54-4656-81c8-41650b828d4e.lovable.app-1784613300369.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e5ecaf9f-b5d0-45c0-9e3c-1fbdec4ad95c/id-preview-cd4fab79--f4afad68-ee54-4656-81c8-41650b828d4e.lovable.app-1784613300369.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800;900&display=swap"
			},
			{
				rel: "preload",
				href: "/src/assets/background.png",
				as: "image"
			},
			{
				rel: "preload",
				href: "/src/assets/hero-bg.jpg",
				as: "image"
			},
			{
				rel: "preload",
				href: "/src/assets/img.png",
				as: "image"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col min-h-screen",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					richColors: true,
					position: "top-center"
				})
			]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-D7gBlxp3.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./about-CPCXQtA7.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About · Run Beyond Limits 2026" }, {
		name: "description",
		content: "Learn about the mission behind Run Beyond Limits — pushing your endurance and celebrating community."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-DHXOl_xg.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact · Run Beyond Limits 2026" }, {
		name: "description",
		content: "Get in touch with the Run Beyond Limits team for registration, partnerships and support."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./event-info-CZyr0DPR.mjs");
var Route$3 = createFileRoute("/event-info")({
	head: () => ({ meta: [{ title: "Event Info · Run Beyond Limits 2026" }, {
		name: "description",
		content: "Race categories, schedule, bib pickup and everything you need to know about Run Beyond Limits 2026."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./gallery-CZuflHuL.mjs");
var Route$2 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery · Run Beyond Limits 2026" }, {
		name: "description",
		content: "Moments from previous Run Beyond Limits events."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./register-D0G_UKf8.mjs");
var Route$1 = createFileRoute("/register")({
	head: () => ({ meta: [{ title: "Register · Run Beyond Limits 2026" }, {
		name: "description",
		content: "Complete your registration for Run Beyond Limits 2026 in a few simple steps."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	EventInfoRoute: Route$3.update({
		id: "/event-info",
		path: "/event-info",
		getParentRoute: () => Route$7
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$7
	}),
	RegisterRoute: Route$1.update({
		id: "/register",
		path: "/register",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

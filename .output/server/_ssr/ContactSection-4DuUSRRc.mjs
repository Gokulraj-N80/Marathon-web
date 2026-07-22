import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as MapPin, _ as Phone, p as Send, w as Mail } from "../_libs/lucide-react.mjs";
import { n as EVENT } from "./marathon-B7kyZOaQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactSection-4DuUSRRc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, "Enter your full name").max(100),
	email: stringType().trim().email("Invalid email").max(255),
	phone: stringType().trim().min(7, "Enter a valid phone").max(20),
	message: stringType().trim().min(5, "Message is too short").max(1e3)
});
function ContactSection() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sending, setSending] = (0, import_react.useState)(false);
	function onChange(e) {
		setForm((f) => ({
			...f,
			[e.target.name]: e.target.value
		}));
	}
	function onSubmit(e) {
		e.preventDefault();
		const parsed = schema.safeParse(form);
		if (!parsed.success) {
			const errs = {};
			parsed.error.issues.forEach((i) => errs[String(i.path[0])] = i.message);
			setErrors(errs);
			return;
		}
		setErrors({});
		setSending(true);
		setTimeout(() => {
			setSending(false);
			setForm({
				name: "",
				email: "",
				phone: "",
				message: ""
			});
			toast.success("Message sent! We'll be in touch soon.");
		}, 700);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-20 md:py-24 bg-white dots-pattern",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-royal font-semibold text-sm tracking-widest uppercase",
					children: "Contact Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl md:text-5xl font-extrabold text-charcoal leading-tight",
					children: "We’d love to hear from you"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground max-w-lg",
					children: "Have a question about registration, race day or partnerships? Our team is here to help."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-11 w-11 rounded-xl bg-royal/10 text-royal shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground uppercase tracking-widest",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EVENT.email}`,
								className: "font-semibold text-charcoal hover:text-royal transition-colors",
								children: EVENT.email
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-11 w-11 rounded-xl bg-royal/10 text-royal shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground uppercase tracking-widest",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${EVENT.phone}`,
								className: "font-semibold text-charcoal hover:text-royal transition-colors",
								children: EVENT.phone
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-11 w-11 rounded-xl bg-royal/10 text-royal shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground uppercase tracking-widest",
								children: "Registration Support"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EVENT.supportEmail}`,
								className: "font-semibold text-charcoal hover:text-royal transition-colors",
								children: EVENT.supportEmail
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-11 w-11 rounded-xl bg-royal/10 text-royal shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground uppercase tracking-widest",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-charcoal",
								children: EVENT.location
							})] })]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-3xl bg-white border border-slate-100 p-6 md:p-10 space-y-5 shadow-elevated",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full Name",
						name: "name",
						value: form.name,
						onChange,
						error: errors.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						type: "email",
						value: form.email,
						onChange,
						error: errors.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						name: "phone",
						type: "tel",
						value: form.phone,
						onChange,
						error: errors.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
							children: "Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 4,
							value: form.message,
							onChange,
							className: `mt-2 w-full rounded-xl border bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:bg-white focus:border-royal/60 focus:ring-4 focus:ring-royal/10 transition-all duration-200 ${errors.message ? "border-destructive" : "border-slate-200"}`
						}),
						errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: sending,
						className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full gradient-cta text-white px-8 py-3.5 font-bold shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 disabled:opacity-70 cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
							" ",
							sending ? "Sending..." : "Send Message"
						]
					})
				]
			})]
		})
	});
}
function Field({ label, name, type = "text", value, onChange, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			name,
			value,
			onChange,
			className: `mt-2 w-full rounded-xl border bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus:bg-white focus:border-royal/60 focus:ring-4 focus:ring-royal/10 transition-all duration-200 ${error ? "border-destructive" : "border-slate-200"}`
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
//#endregion
export { ContactSection as t };

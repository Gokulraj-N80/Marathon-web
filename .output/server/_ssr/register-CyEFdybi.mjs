import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Check, C as MapPin, I as CircleCheck, L as ChevronRight, R as ChevronLeft } from "../_libs/lucide-react.mjs";
import { i as RACES, n as EVENT, t as CITIES } from "./marathon-B7kyZOaQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-CyEFdybi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	"City",
	"Race",
	"Details",
	"Address",
	"T-Shirt",
	"Review"
];
var SIZES = [
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"XXL"
];
var detailsSchema = objectType({
	fullName: stringType().trim().min(2, "Enter your full name").max(100),
	dob: stringType().min(1, "Select your date of birth"),
	gender: enumType([
		"Male",
		"Female",
		"Other"
	], { message: "Select gender" }),
	phone: stringType().trim().min(7, "Enter a valid phone").max(20),
	email: stringType().trim().email("Invalid email").max(255),
	emergencyContact: stringType().trim().min(7, "Enter emergency contact").max(20)
});
var addressSchema = objectType({
	address: stringType().trim().min(5, "Address is too short").max(200),
	city: stringType().trim().min(2).max(80),
	state: stringType().trim().min(2).max(80),
	pincode: stringType().trim().regex(/^\d{5,6}$/, "Enter a valid pincode")
});
function RegisterPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [cityId, setCityId] = (0, import_react.useState)("chennai");
	const [raceId, setRaceId] = (0, import_react.useState)("10k");
	const [details, setDetails] = (0, import_react.useState)({
		fullName: "",
		dob: "",
		gender: "",
		phone: "",
		email: "",
		emergencyContact: ""
	});
	const [address, setAddress] = (0, import_react.useState)({
		address: "",
		city: "",
		state: "",
		pincode: ""
	});
	const [size, setSize] = (0, import_react.useState)("M");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	const race = (0, import_react.useMemo)(() => RACES.find((r) => r.id === raceId), [raceId]);
	function next() {
		if (step === 2) {
			const p = detailsSchema.safeParse(details);
			if (!p.success) {
				const e = {};
				p.error.issues.forEach((i) => e[String(i.path[0])] = i.message);
				setErrors(e);
				return;
			}
		}
		if (step === 3) {
			const p = addressSchema.safeParse(address);
			if (!p.success) {
				const e = {};
				p.error.issues.forEach((i) => e[String(i.path[0])] = i.message);
				setErrors(e);
				return;
			}
		}
		setErrors({});
		setStep((s) => Math.min(s + 1, STEPS.length - 1));
	}
	function back() {
		setErrors({});
		setStep((s) => Math.max(0, s - 1));
	}
	function confirm() {
		setDone(true);
		toast.success("Registration confirmed! Redirecting to payment...");
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "min-h-[70vh] grid place-items-center gradient-page px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg text-center bg-white rounded-3xl p-10 shadow-elevated",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-16 w-16 text-emerald" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-3xl font-extrabold text-charcoal",
					children: "You're In!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-muted-foreground",
					children: [
						"Your spot for the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-charcoal",
							children: [
								race.distance,
								" KM ",
								race.type
							]
						}),
						" is reserved. A confirmation with payment link has been sent to your email."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-full gradient-cta text-white px-6 py-3 font-semibold",
					children: "Back to Home"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gradient-page min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "page-header-banner text-white py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-orange font-semibold text-sm tracking-widest uppercase",
						children: "Registration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl md:text-5xl font-extrabold",
						children: "Join Run Beyond Limits 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base md:text-lg text-white/80 max-w-xl mx-auto",
						children: "Complete your registration in a few simple steps and secure your spot."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[#F8FAFC] py-14 md:py-20 min-h-screen",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 grid grid-cols-5 gap-2",
					children: STEPS.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `mx-auto h-9 w-9 rounded-full grid place-items-center text-xs font-bold ${i < step ? "bg-royal text-white" : i === step ? "gradient-cta text-white shadow-glow" : "bg-white text-muted-foreground border border-border"}`,
							children: i < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 text-[10px] md:text-xs font-semibold uppercase tracking-widest ${i === step ? "text-royal" : "text-muted-foreground"}`,
							children: label
						})]
					}, label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-white p-6 md:p-10 shadow-soft",
					children: [
						step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-bold text-charcoal",
								children: "Select Your City"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Choose where you want to run."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 md:grid-cols-3",
								children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setCityId(c.id),
									className: `text-left rounded-2xl p-5 border-2 transition ${cityId === c.id ? "border-royal bg-royal/5 shadow-soft" : "border-border hover:border-royal/50"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl font-black text-charcoal",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
											" ",
											c.venue
										]
									})]
								}, c.id))
							})
						] }),
						step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-bold text-charcoal",
								children: "Select Your Race"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Choose the distance that inspires you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 md:grid-cols-3",
								children: RACES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setRaceId(r.id),
									className: `text-left rounded-2xl p-5 border-2 transition ${raceId === r.id ? "border-royal bg-royal/5 shadow-soft" : "border-border hover:border-royal/50"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-display text-4xl font-black text-charcoal",
											children: [r.distance, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lg",
												children: " KM"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-semibold",
											children: r.type
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												r.subtype,
												" · Min age ",
												r.minAge
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-royal font-bold",
											children: ["₹", r.fee]
										})
									]
								}, r.id))
							})
						] }),
						step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-charcoal",
							children: "Participant Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Full Name",
									value: details.fullName,
									error: errors.fullName,
									onChange: (v) => setDetails({
										...details,
										fullName: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Date of Birth",
									type: "date",
									value: details.dob,
									error: errors.dob,
									onChange: (v) => setDetails({
										...details,
										dob: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									label: "Gender",
									value: details.gender,
									error: errors.gender,
									onChange: (v) => setDetails({
										...details,
										gender: v
									}),
									options: [
										"Male",
										"Female",
										"Other"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Phone",
									type: "tel",
									value: details.phone,
									error: errors.phone,
									onChange: (v) => setDetails({
										...details,
										phone: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Email",
									type: "email",
									value: details.email,
									error: errors.email,
									onChange: (v) => setDetails({
										...details,
										email: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Emergency Contact",
									type: "tel",
									value: details.emergencyContact,
									error: errors.emergencyContact,
									onChange: (v) => setDetails({
										...details,
										emergencyContact: v
									})
								})
							]
						})] }),
						step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-charcoal",
							children: "Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: "Address",
										value: address.address,
										error: errors.address,
										onChange: (v) => setAddress({
											...address,
											address: v
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "City",
									value: address.city,
									error: errors.city,
									onChange: (v) => setAddress({
										...address,
										city: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "State",
									value: address.state,
									error: errors.state,
									onChange: (v) => setAddress({
										...address,
										state: v
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Pincode",
									value: address.pincode,
									error: errors.pincode,
									onChange: (v) => setAddress({
										...address,
										pincode: v
									})
								})
							]
						})] }),
						step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-bold text-charcoal",
								children: "T-Shirt Size"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Pick the size that fits you best."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-3 md:grid-cols-6 gap-3",
								children: SIZES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSize(s),
									className: `h-14 rounded-xl font-bold text-lg border-2 transition ${size === s ? "border-royal bg-royal text-white" : "border-border hover:border-royal/50"}`,
									children: s
								}, s))
							})
						] }),
						step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-charcoal",
							children: "Review & Confirm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "City",
									value: CITIES.find((c) => c.id === cityId)?.name || ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Race",
									value: `${race.distance} KM ${race.type}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Participant",
									value: details.fullName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Email · Phone",
									value: `${details.email} · ${details.phone}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Address",
									value: `${address.address}, ${address.city}, ${address.state} - ${address.pincode}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "T-Shirt Size",
									value: size
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl gradient-cta text-white p-5 flex items-center justify-between mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-widest text-white/80",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-3xl font-black",
										children: ["₹", race.fee]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-white/80 max-w-[150px] text-right",
										children: [
											EVENT.date,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											CITIES.find((c) => c.id === cityId)?.name
										]
									})]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: back,
								disabled: step === 0,
								className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-muted disabled:opacity-40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), " Back"]
							}), step < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: next,
								className: "inline-flex items-center gap-2 rounded-full gradient-cta text-white px-6 py-3 font-semibold shadow-soft hover:scale-105 transition",
								children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: confirm,
								className: "inline-flex items-center gap-2 rounded-full bg-orange hover:bg-[#EA580C] text-white px-6 py-3 font-semibold shadow-soft hover:scale-105 transition",
								children: "Proceed to Payment"
							})]
						})
					]
				})]
			})
		})]
	});
}
function Input({ label, value, onChange, type = "text", error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-semibold text-charcoal",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: `mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-royal ${error ? "border-destructive" : "border-border"}`
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
function Select({ label, value, onChange, options, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-semibold text-charcoal",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: `mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-royal ${error ? "border-destructive" : "border-border"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "Select..."
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))]
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-destructive",
			children: error
		})
	] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 py-3 border-b border-border last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold text-charcoal text-right",
			children: value
		})]
	});
}
//#endregion
export { RegisterPage as component };

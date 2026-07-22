import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Event Info", to: "/event-info" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

import logo from "@/assets/img.png";

export function Logo({ compact = false, inFooter = false }: { compact?: boolean; inFooter?: boolean }) {
  return (
    <Link
      to="/"
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className={`flex items-center group ${inFooter ? "bg-white rounded-2xl px-4 py-2 w-fit" : ""}`}
    >
      <img
        src={logo}
        alt="Run Beyond Limits"
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${inFooter ? "h-10 max-w-[140px]" : compact ? "h-7" : "h-9 md:h-10"}`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-white/60 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <Logo />
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                onClick={(e) => {
                  if (n.to === "/" && window.location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="px-4 py-2 text-sm font-medium text-slate hover:text-navy hover:bg-royal/5 rounded-xl transition-all duration-200"
                activeProps={{ className: "!text-royal font-semibold !bg-royal/5" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            to="/register"
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-orange hover:bg-[#EA580C] text-white px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Register Now
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-navy/5 text-charcoal transition-all duration-200"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-navy/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`relative bg-white/95 backdrop-blur-xl border-b border-border shadow-elevated transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="px-6 py-4 space-y-1">
            {NAV.map((n, i) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={(e) => {
                    setOpen(false);
                    if (n.to === "/" && window.location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="block px-4 py-3 rounded-2xl text-base font-medium text-slate hover:text-navy hover:bg-royal/5 transition-all duration-200"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="block text-center rounded-2xl bg-orange hover:bg-[#EA580C] text-white px-5 py-3.5 text-sm font-semibold shadow-soft"
              >
                Register Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

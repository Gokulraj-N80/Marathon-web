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
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : "border-b border-slate-100"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-[68px] flex items-center justify-between">
        <Logo />
        <ul className="hidden lg:flex items-center gap-0.5">
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
                className="relative px-3 py-2 text-[13px] font-normal tracking-wide text-slate-500 hover:text-navy transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-navy after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
                activeProps={{ className: "!text-navy !font-medium after:!scale-x-100" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            to="/register"
            className="hidden sm:inline-flex items-center rounded-lg bg-navy text-white px-4 py-2 text-[13px] font-medium tracking-wide hover:bg-navy/90 transition-colors duration-200"
          >
            Register Now
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors duration-200"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 transition-all duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/10" onClick={() => setOpen(false)} />
        <div
          className={`relative bg-white border-b border-slate-100 shadow-sm transition-all duration-200 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <ul className="px-4 py-3">
            {NAV.map((n) => (
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
                  className="block px-3 py-2.5 text-sm font-normal text-slate-500 hover:text-navy hover:bg-slate-50 rounded-lg transition-colors duration-150"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 px-3">
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="block text-center rounded-lg bg-navy text-white py-2.5 text-sm font-medium"
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

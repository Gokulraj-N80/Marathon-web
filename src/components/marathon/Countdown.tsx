import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { EVENT } from "@/data/marathon";

function diff(target: number) {
  const now = Date.now();
  const d = Math.max(0, target - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export default function Countdown() {
  const target = new Date(EVENT.dateISO).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);
  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, number | null][] = [
    ["Days", t?.days ?? null],
    ["Hours", t?.hours ?? null],
    ["Minutes", t?.minutes ?? null],
    ["Seconds", t?.seconds ?? null],
  ];

  return (
    <section className="relative py-24 md:py-32 gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1.2px, transparent 1.2px)", backgroundSize: "20px 20px" }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-royal/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-orange/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange font-semibold text-sm tracking-widest uppercase">Countdown</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-extrabold">Race Day Is Coming</h2>
        <p className="mt-3 text-white/70 text-lg">{EVENT.date} · {EVENT.location}</p>

        <div className="mt-12 grid grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
          {cells.map(([label, val]) => (
            <div
              key={label}
              className="rounded-3xl bg-white/5 backdrop-blur-lg ring-1 ring-white/15 p-5 md:p-10 shadow-elevated hover:bg-white/10 hover:ring-white/30 hover:-translate-y-2 hover:shadow-glow transition-all duration-500 group"
            >
              <div className="font-display text-5xl md:text-8xl font-black tabular-nums tracking-tight text-white drop-shadow-[0_4px_12px_rgba(37,99,235,0.4)] group-hover:text-orange transition-colors duration-300">
                {val === null ? "--" : String(val).padStart(2, "0")}
              </div>
              <div className="mt-3 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors duration-300">{label}</div>
            </div>
          ))}
        </div>

        <Link
          to="/register"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-orange hover:bg-[#EA580C] text-white px-8 py-4 font-bold shadow-elevated hover:scale-105 transition text-base"
        >
          Secure Your Spot
        </Link>
      </div>
    </section>
  );
}

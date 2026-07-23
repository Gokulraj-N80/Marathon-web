import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setExiting(true), 200);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return Math.min(prev + Math.random() * 12 + 4, 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-all duration-700 ease-out ${
        exiting ? "opacity-0 scale-[1.02]" : "opacity-100"
      }`}
      style={{ background: "linear-gradient(160deg, #0F172A 0%, #111D40 50%, #0F172A 100%)" }}
    >
      {/* Circular progress ring */}
      <div className="relative h-36 w-36 mb-8">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          {/* Background ring */}
          <circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          {/* Animated progress ring */}
          <circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * Math.min(progress, 100)) / 100}
            className="transition-all duration-300 ease-out"
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-extrabold text-white tracking-tight">
            R<span className="text-orange">B</span>L
          </span>
          <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-0.5">
            {Math.round(Math.min(progress, 100))}%
          </span>
        </div>
      </div>

      {/* Title */}
      <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
        Run Beyond <span className="text-orange">Limits</span>
      </h1>

      {/* Loading dots */}
      <div className="flex items-center gap-1.5 mt-4">
        {[0, 0.2, 0.4].map((delay, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-royal animate-loader-dot"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-6 w-48 h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(90deg, #2563EB, #F97316)",
          }}
        />
      </div>
    </div>
  );
}

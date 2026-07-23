import { useState, useEffect } from "react";

const WORDS = [
  { text: "Run", color: "text-white" },
  { text: "Beyond", color: "text-white" },
  { text: "Limits", color: "text-orange" },
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [revealCount, setRevealCount] = useState(0);

  const totalLetters = WORDS.reduce((sum, w) => sum + w.text.length, 0);

  // Letter reveal counter
  useEffect(() => {
    let count = 0;
    const id = setInterval(() => {
      count++;
      setRevealCount(count);
      if (count >= totalLetters) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [totalLetters]);

  // Progress counter
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(id);
          setTimeout(() => setExiting(true), 300);
          setTimeout(() => setLoading(false), 900);
          return 100;
        }
        return Math.min(prev + Math.random() * 10 + 4, 100);
      });
    }, 100);
    return () => clearInterval(id);
  }, []);

  if (!loading) return null;

  let letterIdx = 0;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
        exiting ? "opacity-0 scale-[1.02]" : "opacity-100"
      }`}
      style={{ background: "linear-gradient(160deg, #0F172A 0%, #111D40 50%, #0F172A 100%)" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Circular progress ring */}
      <div className="relative h-32 w-32 mb-10">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
          <circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="url(#lg)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * Math.min(progress, 100)) / 100}
            className="transition-all duration-300 ease-out"
          />
          <defs>
            <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-extrabold text-white tracking-tight">
            R<span className="text-orange">B</span>L
          </span>
        </div>
      </div>

      {/* Letter-by-letter title */}
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight flex flex-wrap justify-center gap-x-5 gap-y-1">
        {WORDS.map((word, wIdx) => (
          <span key={wIdx} className={`inline-flex ${word.color}`}>
            {word.text.split("").map((char, cIdx) => {
              const idx = letterIdx++;
              const show = idx < revealCount;
              return (
                <span
                  key={cIdx}
                  className={`inline-block ${show ? "animate-letter-in" : "opacity-0"}`}
                  style={{ animationDelay: `${idx * 0.055}s` }}
                >
                  <span className={`inline-block ${show ? "animate-letter-glow" : ""}`} style={{ animationDelay: `${idx * 0.055 + 0.5}s` }}>
                    {char}
                  </span>
                </span>
              );
            })}
          </span>
        ))}
      </h1>

      {/* Gradient underline */}
      <div
        className={`mt-4 h-[3px] w-36 rounded-full origin-left ${
          revealCount >= totalLetters ? "animate-underline-grow" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, #2563EB, #F97316)",
          animationDelay: "0.2s",
        }}
      />

      {/* Subtitle */}
      <p
        className={`mt-5 text-xs uppercase tracking-[0.35em] font-semibold text-white/30 transition-opacity duration-500 ${
          revealCount >= totalLetters ? "opacity-100" : "opacity-0"
        }`}
      >
        Loading your experience
      </p>

      {/* Progress bar */}
      <div
        className={`mt-8 w-48 transition-opacity duration-500 ${
          revealCount >= totalLetters ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: "linear-gradient(90deg, #2563EB, #F97316)",
            }}
          />
        </div>
        <p className="mt-2 text-right text-[10px] text-white/25 tabular-nums font-medium">
          {Math.round(Math.min(progress, 100))}%
        </p>
      </div>
    </div>
  );
}

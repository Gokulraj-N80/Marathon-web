import { useState, useEffect } from "react";

const TITLE_WORDS = ["Run", "Beyond", "Limits"];
const TITLE_COLORS = ["text-white", "text-white", "text-orange"];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visibleLetters, setVisibleLetters] = useState(0);

  const totalLetters = TITLE_WORDS.join("").length;

  useEffect(() => {
    let count = 0;
    const letterInterval = setInterval(() => {
      count++;
      setVisibleLetters(count);
      if (count >= totalLetters) clearInterval(letterInterval);
    }, 60);
    return () => clearInterval(letterInterval);
  }, [totalLetters]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setExiting(true), 300);
          setTimeout(() => setLoading(false), 900);
          return 100;
        }
        const increment = prev < 50 ? Math.random() * 10 + 5 : Math.random() * 6 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  let letterIndex = 0;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
        exiting ? "opacity-0 scale-[1.03]" : "opacity-100 scale-100"
      }`}
      style={{ background: "linear-gradient(160deg, #0F172A 0%, #111D40 40%, #0F172A 100%)" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Outer decorative ring */}
      <div className="absolute pointer-events-none">
        <div className="w-[260px] h-[260px] rounded-full border border-white/[0.06] animate-ring-pulse" />
      </div>
      <div className="absolute pointer-events-none">
        <div className="w-[320px] h-[320px] rounded-full border border-white/[0.04] animate-ring-rotate" style={{ borderStyle: "dashed" }} />
      </div>

      {/* Orbiting dot */}
      <div className="absolute pointer-events-none">
        <div className="animate-orbit">
          <div className="h-2 w-2 rounded-full bg-orange shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
        </div>
      </div>

      {/* Center content */}
      <div className="relative flex flex-col items-center">
        {/* Title — letter-by-letter reveal */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-1">
          {TITLE_WORDS.map((word, wIdx) => {
            const wordEl = (
              <span key={wIdx} className={`inline-flex ${TITLE_COLORS[wIdx]}`}>
                {word.split("").map((char, cIdx) => {
                  const idx = letterIndex++;
                  const isVisible = idx < visibleLetters;
                  const delay = idx * 0.06;
                  return (
                    <span
                      key={cIdx}
                      className={`inline-block transition-none ${
                        isVisible ? "animate-letter-reveal" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: `${delay}s`,
                        animationFillMode: "both",
                      }}
                    >
                      <span
                        className={`inline-block ${
                          isVisible ? "animate-letter-glow" : ""
                        }`}
                        style={{ animationDelay: `${delay + 0.6}s` }}
                      >
                        {char}
                      </span>
                    </span>
                  );
                })}
              </span>
            );
            return wordEl;
          })}
        </h1>

        {/* Gradient underline */}
        <div
          className={`mt-4 h-[3px] w-40 rounded-full origin-left ${
            visibleLetters >= totalLetters ? "animate-line-draw" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, #2563EB, #F97316)",
            animationDelay: "0.8s",
          }}
        />

        {/* Subtitle */}
        <p
          className={`mt-5 text-xs sm:text-sm uppercase tracking-[0.35em] font-semibold text-white/35 ${
            visibleLetters >= totalLetters ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          Loading your experience
        </p>

        {/* Progress bar */}
        <div
          className={`mt-8 w-48 sm:w-56 ${
            visibleLetters >= totalLetters ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "1.5s" }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-white/25 uppercase tracking-widest font-medium">Progress</span>
            <span className="text-[10px] text-orange font-bold tabular-nums">
              {Math.round(Math.min(progress, 100))}%
            </span>
          </div>
          <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-200 ease-out relative overflow-hidden"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, #2563EB, #F97316)",
              }}
            >
              <div
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

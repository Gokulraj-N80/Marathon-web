import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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

  return (
    <div className="fixed inset-0 z-[200] bg-navy flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-white/10 border-t-royal animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-xs font-bold text-royal">RBL</span>
        </div>
      </div>
      <p className="mt-6 font-display text-2xl font-extrabold text-white tracking-tight">Run Beyond Limits</p>
      <p className="mt-1 text-sm text-white/50">Loading your experience...</p>
      <div className="mt-6 w-48 h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full gradient-cta transition-all duration-300"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}

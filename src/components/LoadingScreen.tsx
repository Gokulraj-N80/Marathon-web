import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-navy flex flex-col items-center justify-center">
      <div className="h-12 w-12 rounded-full border-[3px] border-white/10 border-t-royal animate-spin" />
      <p className="mt-4 font-display text-lg font-bold text-white tracking-tight">Run Beyond Limits</p>
    </div>
  );
}

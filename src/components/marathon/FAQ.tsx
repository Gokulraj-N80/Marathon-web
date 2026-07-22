import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/marathon";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-24 bg-[#F8FAFC] dots-pattern">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-royal font-semibold text-sm tracking-widest uppercase">FAQ</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold text-charcoal">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-royal/40 shadow-elevated shadow-glow scale-[1.01]"
                    : "bg-white border-slate-100 shadow-sm hover:border-slate-200/80"
                }`}
              >
                <button
                  className="w-full text-left flex items-center justify-between gap-4 p-5 md:p-7 cursor-pointer"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-800 text-sm md:text-base leading-snug">{f.q}</span>
                  <span
                    className={`shrink-0 grid place-items-center h-9 w-9 rounded-full transition-all duration-300 ${
                      isOpen ? "gradient-orange text-white rotate-180" : "bg-royal/5 text-royal hover:bg-royal/10"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" strokeWidth={3} /> : <Plus className="h-4 w-4" strokeWidth={3} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-7 pb-5 md:pb-7 text-xs md:text-sm text-slate-500 leading-relaxed animate-fade-up">
                    <p className="border-t border-slate-50 pt-4">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

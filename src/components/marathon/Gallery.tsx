import { useEffect, useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const IMAGES = [
  { src: g1, alt: "Runners at the start line" },
  { src: g2, alt: "Finisher medal moment" },
  { src: g3, alt: "Runners forming a heart" },
  { src: g4, alt: "Volunteers cheering runners" },
  { src: g5, alt: "Winners on the podium" },
  { src: g6, alt: "Community runners together" },
  { src: g1, alt: "Start line crowd" },
  { src: g4, alt: "High fives at the aid station" },
  { src: g2, alt: "Proud finisher" },
];

export default function Gallery({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const list = compact ? IMAGES.slice(0, 6) : IMAGES;

  return (
    <section className="py-20 md:py-24 bg-white dots-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-royal font-semibold text-sm tracking-widest uppercase">Moments</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold text-charcoal">Last Year’s Event Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {list.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-royal"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                View Image
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm grid place-items-center p-4 animate-fade-up"
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setOpen(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={list[open].src}
            alt={list[open].alt}
            className="max-h-[85vh] max-w-full rounded-2xl shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

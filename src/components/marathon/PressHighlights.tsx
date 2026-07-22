import g3 from "@/assets/g3.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g4 from "@/assets/g4.jpg";

const stories = [
  { img: g5, title: "Thousands Run for a Healthier Heart", tag: "Community" },
  { img: g6, title: "A Celebration of Community", tag: "Culture" },
  { img: g4, title: "Every Step Creates an Impact", tag: "Impact" },
];

export default function PressHighlights() {
  return (
    <section className="py-20 md:py-24 bg-[#F8FAFC] dots-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-royal font-semibold text-sm tracking-widest uppercase">Highlights</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold text-charcoal">Run Beyond Limits Highlights</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-elevated group">
            <img src={g3} alt="Aerial heart formation" loading="lazy" className="w-full h-full object-cover aspect-[4/3] transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <span className="inline-block rounded-full gradient-orange text-white text-xs font-bold uppercase tracking-widest px-3 py-1">Featured</span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-extrabold">Karnataka’s Largest Heart Formation</h3>
              <p className="mt-2 text-sm text-white/80 max-w-md">
                Over 5,000 runners came together to form a giant human heart — a symbol of unity and cardiovascular awareness.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            {stories.map((s) => (
              <article key={s.title} className="group grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-4 rounded-2xl overflow-hidden bg-white border border-border hover-lift">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="p-4 sm:p-5">
                  <span className="text-xs font-semibold text-orange uppercase tracking-widest">{s.tag}</span>
                  <h3 className="mt-2 font-bold text-charcoal text-lg leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    Read how runners of all ages made this edition unforgettable through resilience and heart.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

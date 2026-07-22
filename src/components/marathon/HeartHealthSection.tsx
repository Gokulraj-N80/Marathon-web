import { Heart, Droplet, Activity, Wind, ArrowRight } from "lucide-react";

const tips = [
  { icon: Heart, title: "Know Your Baseline", desc: "Get a fitness assessment before starting any training program." },
  { icon: Droplet, title: "Hydration Matters", desc: "Drink water regularly, especially the day before your race." },
  { icon: Activity, title: "Warm-up Well", desc: "Dynamic warm-ups reduce injury and prepare your heart." },
  { icon: Wind, title: "Recover Fully", desc: "Cool down, stretch and rest to help your body rebuild." },
];

export default function HeartHealthSection() {
  return (
    <section className="py-20 md:py-24 bg-[#F8FAFC] relative overflow-hidden dots-pattern">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-royal font-semibold text-sm tracking-widest uppercase">Heart Health</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-charcoal leading-tight">
            Run for Your <span className="text-royal">Limits</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Run Beyond Limits is more than a race — it’s a movement for pushing personal boundaries.
            Every stride is a reminder that regular activity, mindful nutrition and small daily habits
            add up to a lifetime of incredible endurance and strength.
          </p>
          <a
            href="#faq"
            className="mt-6 inline-flex items-center gap-2 rounded-full gradient-cta text-white px-6 py-3 font-semibold shadow-soft hover:scale-105 transition"
          >
            Learn More About Endurance <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {tips.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-soft border border-slate-100 hover:border-royal/30 hover:shadow-elevated hover-lift transition-all duration-300 group">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-royal/5 text-royal group-hover:bg-gradient-to-br group-hover:from-royal group-hover:to-navy group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-extrabold text-charcoal text-base md:text-lg">{title}</h3>
              <p className="mt-1.5 text-xs md:text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

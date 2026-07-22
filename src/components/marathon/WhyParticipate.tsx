import { HeartPulse, Users, Trophy, Footprints } from "lucide-react";

const items = [
  { icon: HeartPulse, title: "Run for Your Health", desc: "Improve cardiovascular health while training for a purposeful cause.", num: "01" },
  { icon: Users, title: "Build a Stronger Community", desc: "Connect with thousands of runners who share your passion.", num: "02" },
  { icon: Trophy, title: "Celebrate Your Achievement", desc: "Earn your finisher medal and a moment you'll remember for life.", num: "03" },
  { icon: Footprints, title: "Make Every Step Count", desc: "Support heart health awareness with each stride you take.", num: "04" },
];

export default function WhyParticipate() {
  return (
    <section className="py-20 md:py-24 bg-[#F8FAFC] dots-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-royal font-semibold text-sm tracking-widest uppercase">Why Participate</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-charcoal">Reasons to Run With Us</h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full gradient-cta" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, num }) => (
            <div key={title} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 hover:border-royal/30 hover:shadow-elevated hover-lift relative overflow-hidden transition-all duration-300">
              <span className="absolute top-4 right-4 text-4xl font-black text-navy/5 group-hover:text-navy/10 transition duration-300">{num}</span>
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-royal to-navy text-white group-hover:scale-105 transition-all duration-300 shadow-soft">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-extrabold text-lg text-slate-800 tracking-tight">{title}</h3>
              <p className="mt-2 text-xs md:text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";

export default function RegistrationCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden gradient-hero text-white">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1.2px, transparent 1.2px)", backgroundSize: "20px 20px" }} />
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-8 left-8 h-24 w-24 text-white/10" />
        <Heart className="absolute bottom-8 right-8 h-40 w-40 text-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange font-semibold text-sm tracking-widest uppercase">Join The Movement</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight">
          Ready to Protect Your Heart?
        </h2>
        <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-orange/40" />
        <p className="mt-6 text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
          Join thousands of runners and take your first step toward a healthier, stronger future.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-8 py-4 font-bold shadow-elevated hover:scale-105 transition text-base"
          >
            Register Now <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/40 text-white px-8 py-4 font-semibold hover:bg-white/10 transition text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

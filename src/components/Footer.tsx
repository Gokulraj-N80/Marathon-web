import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Navbar";
import { EVENT } from "@/data/marathon";

export default function Footer() {
  return (
    <footer className="gradient-footer text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1 space-y-4">
          <div className="[&_span]:!text-white"><Logo inFooter /></div>
          <p className="text-sm text-white/60 max-w-xs">
            A community marathon uniting runners across India to celebrate health, endurance and pushing past limits.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Ico, i) => (
              <a key={i} href="#" aria-label="social" className="grid place-items-center h-9 w-9 rounded-full bg-white/10 hover:bg-royal transition">
                <Ico className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange transition-colors">Home</Link></li>
            <li><Link to="/event-info" className="hover:text-orange transition-colors">Event Info</Link></li>
            <li><Link to="/about" className="hover:text-orange transition-colors">About</Link></li>
            <li><Link to="/gallery" className="hover:text-orange transition-colors">Gallery</Link></li>
            <li><Link to="/register" className="hover:text-orange transition-colors">Register</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-orange transition-colors">Contact</Link></li>
            <li><a href="#faq" className="hover:text-orange transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-orange transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-orange shrink-0" /> {EVENT.location}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-orange shrink-0" /> {EVENT.email}</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-orange shrink-0" /> {EVENT.phone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>&copy; 2026 Run Beyond Limits. All rights reserved.</p>
          <p>Run Beyond Limits</p>
        </div>
      </div>
    </footer>
  );
}

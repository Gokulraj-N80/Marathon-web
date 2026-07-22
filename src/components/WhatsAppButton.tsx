import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "911234567890";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] text-white pl-4 pr-6 py-3.5 font-semibold text-sm shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
        <MessageCircle className="h-5 w-5 text-[#25D366]" />
      </div>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}

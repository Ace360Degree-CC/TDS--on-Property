import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export const FloatingWhatsApp = () => (
  <a
    href={waLink("Hi CA Praveen, I need help with TDS filing.")}
    target="_blank"
    rel="noopener"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-24 right-4 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[hsl(var(--whatsapp))] text-white shadow-glow transition-smooth hover:scale-110 md:right-6 md:bottom-6 md:grid"
  >
    <span className="absolute inset-0 animate-pulse-ring rounded-full" />
    <MessageCircle className="relative h-7 w-7" />
  </a>
);

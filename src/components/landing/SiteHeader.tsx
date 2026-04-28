import { Button } from "@/components/ui/button";
import { CONTACT, waLink } from "@/lib/contact";
import { MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
    <div className="container flex h-16 items-center justify-between gap-4">
      <a href="#top" className="flex items-center gap-3">
        <img src={logo} alt="Praveen J & Associates - Chartered Accountants" className="h-10 w-auto md:h-11" />
      </a>
      <div className="hidden items-center gap-2 md:flex">
        <a
          href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-smooth hover:text-primary"
        >
          <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
        </a>
        <Button asChild variant="whatsapp" size="sm">
          <a href={waLink("Hi! I need help with TDS filing.")} target="_blank" rel="noopener">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </Button>
      </div>
      <Button asChild variant="hero" size="sm" className="md:hidden">
        <a href={waLink("Hi! I need help with TDS filing.")} target="_blank" rel="noopener">
          <MessageCircle className="h-4 w-4" /> Chat
        </a>
      </Button>
    </div>
  </header>
);

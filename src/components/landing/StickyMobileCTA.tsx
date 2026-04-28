import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";
import { waLink } from "@/lib/contact";

export const StickyMobileCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-card backdrop-blur md:hidden">
    <div className="flex gap-2">
      <Button asChild variant="hero" size="lg" className="flex-1">
        <a href="#header-form"><FileText className="h-4 w-4" /> File TDS</a>
      </Button>
      <Button asChild variant="whatsapp" size="lg" className="flex-1">
        <a href={waLink("Hi! I need help with TDS filing.")} target="_blank" rel="noopener">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </Button>
    </div>
  </div>
);

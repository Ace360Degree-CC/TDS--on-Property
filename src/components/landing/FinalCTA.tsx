import { Button } from "@/components/ui/button";
import { Clock, FileText, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export const FinalCTA = () => (
  <section className="relative overflow-hidden bg-gradient-cta py-16 text-primary-foreground sm:py-20">
    <div className="pointer-events-none absolute inset-0 opacity-20">
      <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-white blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-white blur-3xl" />
    </div>
    <div className="container relative text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
        <Clock className="h-3.5 w-3.5" /> Time-Sensitive
      </span>
      <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
        Late Mat Karein — Penalty Avoid Karein <span aria-hidden>⏳</span>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-base opacity-95">
        Galti se interest lag sakta hai • Delay se notice aa sakta hai. Aaj hi file karein.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button asChild size="xl" className="bg-background text-primary shadow-glow hover:bg-background/95">
          <a href="#footer-form"><FileText className="h-5 w-5" /> File TDS Now</a>
        </Button>
        <Button asChild size="xl" variant="whatsapp" className="shadow-glow">
          <a href={waLink("Hi CA Praveen, I want to talk about TDS filing.")} target="_blank" rel="noopener">
            <MessageCircle className="h-5 w-5" /> Talk to CA
          </a>
        </Button>
      </div>
    </div>
  </section>
);

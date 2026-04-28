import { Button } from "@/components/ui/button";
import { Home, Building2, Check, Sparkles, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export const Services = () => (
  <section className="bg-background py-16 sm:py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Choose Your TDS Service
        </h2>
        <p className="mt-3 text-muted-foreground">Property buyer ho ya tenant — hum dono ke liye complete filing handle karte hain.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* PRIMARY — Property */}
        <article className="relative overflow-hidden rounded-3xl border-2 border-primary bg-card p-7 shadow-glow transition-smooth hover:-translate-y-1 sm:p-8">
          <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-cta px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-soft">
            <Sparkles className="h-3 w-3" /> Most Popular
          </div>
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
            <Home className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-extrabold text-foreground">TDS on Property</h3>
          <p className="mt-1 text-sm font-semibold text-primary">Section 194IA — Form 26QB</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Property kharidte time <span className="font-semibold text-foreground">1% TDS mandatory</span> hota hai (₹50 lakh+).
          </p>
          <ul className="mt-5 space-y-2.5">
            {["Form 26QB filing", "Payment calculation", "Form 16B download", "Correction support", "TRACES compliance"].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl bg-primary/5 p-3 text-xs text-foreground/80">
            <span className="font-semibold text-primary">💡 Ideal for: </span>
            Property buyers, real estate investors, first-time buyers
          </div>
            <Button asChild variant="hero" size="lg" className="mt-6 w-full">
            <a href="#footer-form">File Property TDS Now</a>
              </Button>
        </article>

        {/* SECONDARY — Rent */}
        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/40 sm:p-8">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-foreground/90 text-background shadow-soft">
            <Building2 className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-extrabold text-foreground">TDS on Rent</h3>
          <p className="mt-1 text-sm font-semibold text-foreground/70">Section 194IB — Form 26QC</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Agar rent <span className="font-semibold text-foreground">₹50,000+ monthly</span> hai toh TDS applicable hai.
          </p>
          <ul className="mt-5 space-y-2.5">
            {["Form 26QC filing", "TDS payment", "Form 16C certificate", "Compliance support", "Tenant guidance"].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl bg-secondary p-3 text-xs text-foreground/80">
            <span className="font-semibold">💡 Ideal for: </span>
            Tenants paying high rent, working professionals, business rentals
          </div>
          <Button asChild variant="outlinePrimary" size="lg" className="mt-6 w-full">
            <a href={waLink("Hi! I want help with Rent TDS (26QC) filing.")} target="_blank" rel="noopener">
              <MessageCircle className="h-5 w-5" /> Talk to CA on WhatsApp
            </a>
          </Button>
        </article>
      </div>
    </div>
  </section>
);

import { AlertTriangle, FileWarning, HelpCircle, Mail } from "lucide-react";

const items = [
  { icon: AlertTriangle, title: "Property buy kiya — TDS file nahi kiya?", desc: "₹50 lakh+ ki property pe 1% TDS mandatory hai." },
  { icon: HelpCircle, title: "Rent pe TDS apply hota hai ya nahi?", desc: "₹50,000+ monthly rent pe TDS lagta hai — confusion?" },
  { icon: FileWarning, title: "Form 26QB / 26QC galat file ho gaya?", desc: "Wrong PAN, wrong amount — correction zaruri hai." },
  { icon: Mail, title: "Notice aa gaya hai?", desc: "Penalty + interest avoid karna zaruri hai." },
];

export const Problem = () => (
  <section className="bg-background py-16 sm:py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-destructive">
          <AlertTriangle className="h-3.5 w-3.5" /> High Risk
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Yeh Mistakes Aapko Mehengi Pad Sakti Hai 😟
        </h2>
        <p className="mt-3 text-muted-foreground">Penalty + interest se bachne ka sirf ek tareeka — sahi waqt par sahi filing.</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-destructive/40 hover:shadow-card">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-destructive/5 transition-smooth group-hover:bg-destructive/10" />
            <div className="relative">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

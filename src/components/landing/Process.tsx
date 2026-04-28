import { MessageSquare, FileSignature, ShieldCheck } from "lucide-react";

const steps = [
  { n: "01", icon: MessageSquare, title: "Details Share Karein", desc: "WhatsApp ya form se documents bhejo. 5 min ka kaam." },
  { n: "02", icon: FileSignature, title: "CA Filing Karega", desc: "Praveen Jain & team accurate filing complete karenge." },
  { n: "03", icon: ShieldCheck, title: "Certificate Confirmation", desc: "Form 16B / 16C certificate aur acknowledgement milega." },
];

export const Process = () => (
  <section className="bg-secondary py-16 sm:py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Simple Process — No Hassle
        </h2>
        <p className="mt-3 text-muted-foreground">3 easy steps. Quick & accurate.</p>
      </div>
      <div className="relative mt-12 grid gap-6 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
        {steps.map(({ n, icon: Icon, title, desc }) => (
          <div key={n} className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-cta text-primary-foreground shadow-cta">
              <Icon className="h-7 w-7" />
            </div>
            <div className="mt-3 font-display text-sm font-bold text-primary">STEP {n}</div>
            <h3 className="mt-1 font-display text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

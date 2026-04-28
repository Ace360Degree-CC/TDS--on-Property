import { Calculator, FileCheck2, ShieldCheck, Wrench, BadgeCheck } from "lucide-react";

const items = [
  { icon: Calculator, title: "Accurate Calculation", desc: "Sahi rate, sahi base — zero errors." },
  { icon: FileCheck2, title: "Proper Filing", desc: "26QB / 26QC time pe submit." },
  { icon: ShieldCheck, title: "TRACES Compliance", desc: "Form 16B / 16C smoothly download." },
  { icon: Wrench, title: "Error Correction", desc: "Galti ho gayi? Hum sudhar denge." },
];

export const Solution = () => (
  <section className="bg-secondary py-16 sm:py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-success">
          <BadgeCheck className="h-3.5 w-3.5" /> Expert Solution
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Expert CA Support for TDS Filing
        </h2>
        <p className="mt-3 text-muted-foreground">
          CA Praveen Jain aur team aapka TDS filing & compliance end-to-end manage karti hai. Aapko tension lene ki zarurat nahi.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display font-bold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

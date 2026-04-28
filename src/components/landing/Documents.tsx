import { Home, Building2, FileText } from "lucide-react";

const property = ["PAN — Buyer & Seller", "Property details (address, area)", "Agreement value & date", "Payment proof / bank details"];
const rent = ["PAN — Tenant & Owner", "Rent agreement copy", "Monthly payment details", "Aadhaar (optional)"];

export const Documents = () => (
  <section className="bg-background py-16 sm:py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Kya Documents Chahiye?
        </h2>
        <p className="mt-3 text-muted-foreground">Missing ho toh hum guide kar denge — koi tension nahi 👍</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Home className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Property TDS</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {property.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-lg bg-secondary/60 p-3 text-sm">
                <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground/90 text-background">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Rent TDS</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {rent.map((d) => (
              <li key={d} className="flex items-start gap-3 rounded-lg bg-secondary/60 p-3 text-sm">
                <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

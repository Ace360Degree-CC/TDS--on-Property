import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sudalaimuthu Srinivasagam", city: "Mumbai", text: "I sincerely appreciate the support provided by the CA Praveen Jain for timely and accurate TDS (26qb) filing and after 16b, The process was handled with professionalism, clear communication" },
  { name: "Edmund Rocha.", city: "Thane", text: "CA Praveen Jain personally attended and solved our Income Tax issue immediately. He is also very knowledgeable." },
  { name: "satya agarwal", city: "Navi Mumbai", text: "Excellent, very quick services and humble support by Mr Praveen Jain and Team, I got my TDS done.Must suggest for superb support." },
];

export const Trust = () => (
  <section className="bg-secondary py-16 sm:py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-soft">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-warning text-warning" />
            ))}
          </div>
          <span className="text-sm font-bold text-foreground">5/5</span>
          <span className="text-xs text-muted-foreground">• 1000+ reviews</span>
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Clients Ka Experience
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.name} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
            <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warning text-warning" />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground">"{r.text}"</p>
            <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-bold text-primary-foreground">
                {r.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

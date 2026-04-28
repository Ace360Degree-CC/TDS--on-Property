import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Property pe TDS kab lagta hai?", a: "Agar property value ₹50 lakh ya zyada hai, toh buyer ko 1% TDS deduct karke government ko 30 din ke andar file karna hota hai (Form 26QB)." },
  { q: "Rent pe TDS kab lagta hai?", a: "Section 194IB ke under, agar monthly rent ₹50,000+ hai toh tenant ko 5% TDS deduct karna hota hai aur Form 26QC file karna hota hai." },
  { q: "Form 26QB kya hai?", a: "Property purchase pe TDS deposit karne ka form. Buyer ko file karna hota hai. Iska certificate Form 16B hota hai." },
  { q: "Form 26QC kya hai?", a: "Rent pe TDS deposit karne ka form. Tenant file karta hai. Iska certificate Form 16C hota hai jo landlord ko diya jata hai." },
  { q: "Late filing pe kya hota hai?", a: "Late filing pe ₹200/day late fee (Section 234E), interest @1-1.5% per month, aur penalty Section 271H ke under ₹10,000 se ₹1,00,000 tak ho sakti hai." },
  { q: "Galat file ho gaya — correction possible hai?", a: "Bilkul. TRACES portal pe correction request file ki ja sakti hai. Hum complete correction support dete hain." },
];

export const FAQ = () => (
  <section className="bg-background py-16 sm:py-20">
    <div className="container max-w-3xl">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-muted-foreground">TDS ke baare mein common doubts — clear kar lo.</p>
      </div>
      <Accordion type="single" collapsible className="mt-8 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-soft transition-smooth data-[state=open]:border-primary/40"
          >
            <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

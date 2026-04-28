import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { Documents } from "@/components/landing/Documents";
import { Trust } from "@/components/landing/Trust";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { FAQ } from "@/components/landing/FAQ";
import { FooterForm } from "@/components/landing/FooterForm";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { ExitIntentPopup } from "@/components/landing/ExitIntentPopup";
import { ScrollToTopButton } from "@/components/landing/ScrollToTopButton";

const Index = () => {
  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Praveen J & Associates — Chartered Accountants",
    description: "TDS filing on Property (26QB) and Rent (26QC) by CA Praveen Jain. Mumbai, Navi Mumbai, Thane, Pune.",
    areaServed: ["Mumbai", "Navi Mumbai", "Thane", "Pune"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "300" },
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Process />
        <Documents />
        <Trust />
        <FinalCTA />
        <FAQ />
        <FooterForm />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <ScrollToTopButton />
      <StickyMobileCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;

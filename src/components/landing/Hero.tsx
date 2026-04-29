import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeaderForm } from "./HeaderForm";
import {
  CheckCircle2,
  Star,
  MapPin,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { waLink } from "@/lib/contact";
import praveen from "@/assets/praveen.png";

export const Hero = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const timeoutRef = useRef<any>(null);

  const handlePlay = () => {
    setPlayVideo(true);

    // Auto reset after video duration (adjust if needed)
    timeoutRef.current = setTimeout(() => {
      setPlayVideo(false);
    }, 60000); // 60 sec fallback
  };

  const handleClose = () => {
    setPlayVideo(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="container relative grid gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">

        {/* LEFT */}
        <div className="lg:col-span-7">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15" variant="secondary">
            <ShieldCheck className="mr-1 h-3.5 w-3.5" /> Trusted Mumbai CA • Avoid Penalty
          </Badge>

          <h1 className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            TDS on Property ya Rent?{" "}
            <span className="text-primary">Galti Se Penalty Lag Sakti Hai</span> ⚠️
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            TDS filing mein mistake ya delay ={" "}
            <span className="font-semibold text-foreground">penalty + interest</span>.
            CA Praveen Jain ke saath accurate filing karein — fast, error-free, fully compliant.
          </p>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              "Property TDS (26QB / 16B)",
              "Rent TDS (26QC / 16C)",
              "Correction & compliance",
              "TRACES support end-to-end",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#footer-form">
                <FileText className="h-5 w-5" /> File TDS Now
              </a>
            </Button>

            <Button asChild variant="outlinePrimary" size="xl">
              <a
                href={waLink("Hi CA Praveen, I want to file TDS. Please help.")}
                target="_blank"
                rel="noopener"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp CA
              </a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1 font-semibold text-foreground">
              <Star className="h-4 w-4 fill-warning text-warning" /> 5/5
            </span>
            <span>•</span>
            <span><span className="font-semibold text-foreground">1000+</span> Clients</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Mumbai • Navi Mumbai • Thane • Pune
            </span>
          </div>

          {/* VIDEO SECTION */}
          <div
            className={`group relative mt-8 overflow-hidden rounded-2xl border border-border shadow-card transition-all duration-500 ${
              playVideo ? "bg-black flex items-center justify-center" : "bg-foreground"
            }`}
          >

            {/* THUMBNAIL */}
            {!playVideo && (
              <div className="aspect-video w-full relative">
                <img
                  src={praveen}
                  alt="TDS Video"
                  className="h-full w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button
                    onClick={handlePlay}
                    className="grid h-20 w-20 place-items-center rounded-full bg-white text-primary shadow-glow transition hover:scale-105"
                  >
                    <PlayCircle className="h-12 w-12" />
                  </button>
                </div>
              </div>
            )}

            {/* SHORT VIDEO */}
            {playVideo && (
              <div className="w-full h-[80vh] flex items-center justify-center relative">

                {/* CLOSE BUTTON */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow"
                >
                  ✕
                </button>

                {/* VERTICAL PLAYER */}
                <div className="aspect-[9/16] h-full max-h-[700px]">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/XTKa74jK9Z4?autoplay=1&mute=1&rel=0"
                    title="YouTube Short"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

          </div>
        </div>

        {/* RIGHT */}
<div id="header-form" className="lg:col-span-5 flex items-start">
  <div className="w-full lg:sticky lg:top-40 mt-12 lg:mt-60">
    <HeaderForm
      variant="hero"
      title="File Your TDS Easily"
      subtitle="Property ya Rent — CA support available"
    />
  </div>
</div>
      </div>
    </section>
  );
};
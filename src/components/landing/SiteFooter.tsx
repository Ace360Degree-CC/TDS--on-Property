import { CONTACT } from "@/lib/contact";
import logo from "@/assets/logo.jpg";
import { MapPin, Phone, Mail } from "lucide-react";

export const SiteFooter = () => (
  <footer className="border-t border-border bg-foreground py-12 text-background">
    <div className="container grid gap-8 md:grid-cols-3">
      <div>
        <div className="rounded-lg bg-background p-3 inline-block">
          <img src={logo} alt="Praveen J & Associates" className="h-10 w-auto" />
        </div>
        <p className="mt-4 text-sm text-background/70">
          Chartered Accountants specialising in TDS, Income Tax, GST &amp; full compliance services.
        </p>
      </div>
      <div>
        <h4 className="font-display font-bold">Contact</h4>
        <ul className="mt-3 space-y-2 text-sm text-background/80">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {CONTACT.email}</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {CONTACT.locations}</li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold">Services</h4>
        <ul className="mt-3 space-y-2 text-sm text-background/80">
          <li>TDS on Property (26QB)</li>
          <li>TDS on Rent (26QC)</li>
          <li>TDS Correction & Notice</li>
          <li>Income Tax & GST Filing</li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/60">
      © {new Date().getFullYear()} Praveen J &amp; Associates, Chartered Accountants. All rights reserved.
    </div>
  </footer>
);

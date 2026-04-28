 import { CheckCircle, FileText, Clock, MessageCircle, Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { CONTACT, waLink } from "@/lib/contact";
 import { useEffect } from "react";
 
 const ThankYou = () => {
   // Scroll to top on mount
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
 
   const whatsappMessage = "Hi, I just submitted a request on your website. Please help me with my TDS filing.";
 
   const steps = [
     { icon: FileText, title: "Document Check", desc: "We'll review your documents" },
     { icon: Clock, title: "Filing Start", desc: "CA begins your TDS filing" },
     { icon: CheckCircle, title: "Confirmation", desc: "Receive filed confirmation" },
   ];
 
   return (
     <div className="min-h-screen bg-background flex flex-col">
       {/* Header */}
       <header className="bg-white border-b border-border py-4">
         <div className="container mx-auto px-4 md:px-6">
           <a href="/" className="flex items-center gap-2">
             <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded flex items-center justify-center text-white font-bold text-sm">
               PJ
             </div>
             <span className="font-bold text-lg text-foreground">Praveen J & Associates</span>
           </a>
         </div>
       </header>
 
       {/* Main Content */}
       <main className="flex-1 flex items-center justify-center py-12 px-4">
         <div className="max-w-lg w-full text-center">
           {/* Success Icon */}
           <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
             <CheckCircle className="w-10 h-10 text-green-600" />
           </div>
 
           {/* Headline */}
           <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
             Request Received! ✅
           </h1>
           <p className="text-muted-foreground mb-8">
             Thank you for reaching out. Our team will contact you within 30 minutes.
           </p>
 
           {/* Steps */}
           <div className="bg-white rounded-xl border border-border p-6 mb-8 text-left">
             <h3 className="font-semibold text-foreground mb-4 text-center">What happens next?</h3>
             <div className="space-y-4">
               {steps.map((step, index) => (
                 <div key={index} className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-[hsl(var(--primary))]/10 rounded-lg flex items-center justify-center shrink-0">
                     <step.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                   </div>
                   <div>
                     <p className="font-medium text-foreground">{step.title}</p>
                     <p className="text-sm text-muted-foreground">{step.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
 
           {/* CTA Buttons */}
           <div className="space-y-3">
             <Button
               asChild
               className="w-full h-12 text-base bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90"
             >
               <a href={waLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                 <MessageCircle className="w-5 h-5 mr-2" />
                 WhatsApp Now
               </a>
             </Button>
 
             <Button
               asChild
               variant="outline"
               className="w-full h-12 text-base"
             >
               <a href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, "")}`}>
                 <Phone className="w-5 h-5 mr-2" />
                 Call: {CONTACT.phoneDisplay}
               </a>
             </Button>
           </div>
 
           {/* Back Link */}
           <a 
             href="/" 
             className="inline-block mt-6 text-sm text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors"
           >
             ← Back to Home
           </a>
         </div>
       </main>
 
       {/* Footer */}
       <footer className="bg-muted py-6 border-t border-border">
         <div className="container mx-auto px-4 text-center">
           <p className="text-sm text-muted-foreground">
             © 2024 Praveen J & Associates — Chartered Accountants
           </p>
           <p className="text-xs text-muted-foreground/70 mt-1">
             Mumbai • Navi Mumbai • Thane • Pune
           </p>
         </div>
       </footer>
     </div>
   );
 };
 
 export default ThankYou;
import { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONTACT, waLink } from "@/lib/contact";
import { Zap, ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
  service: z.enum(["Property TDS", "Rent TDS"]),
});
type FormData = z.infer<typeof schema>;

interface Props {
  variant?: "hero" | "card";
  title?: string;
  subtitle?: string;
}

export const HeaderForm = ({ variant = "hero", title, subtitle }: Props) => {
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: "Property TDS" },
  });
  const service = watch("service");

  const onSubmit = (data: FormData) => {
    setLoading(true);
    const msg = `Hi CA Praveen Jain, I need help with *${data.service}* filing.\n\nName: ${data.name}\nMobile: ${data.mobile}`;
    window.open(waLink(msg), "_blank");
     navigate("/thank-you");
  };

  return (
    <div className={variant === "hero"
      ? "rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6"
      : "rounded-2xl border border-border bg-card p-6 shadow-soft"}>
      {title && <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>}
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <div>
          <Label htmlFor="hf-name" className="sr-only">Name</Label>
          <Input id="hf-name" placeholder="Your full name" autoComplete="name" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="hf-mobile" className="sr-only">Mobile</Label>
          <Input id="hf-mobile" type="tel" inputMode="numeric" placeholder="10-digit mobile number" autoComplete="tel" {...register("mobile")} />
          {errors.mobile && <p className="mt-1 text-xs text-destructive">{errors.mobile.message}</p>}
        </div>
        <div>
          <Label className="sr-only">Service</Label>
          <Select value={service} onValueChange={(v) => setValue("service", v as FormData["service"])}>
            <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Property TDS">TDS on Property (26QB) ✅</SelectItem>
              <SelectItem value="Rent TDS">TDS on Rent (26QC)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
          Get Expert Help <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Zap className="h-3.5 w-3.5 text-warning" /> Quick response guaranteed
        </p>
      </form>
    </div>
  );
};

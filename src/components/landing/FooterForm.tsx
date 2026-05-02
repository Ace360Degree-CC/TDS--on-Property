import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { waLink } from "@/lib/contact";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile"),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.enum(["Property TDS", "Rent TDS"]),
  caseType: z.enum(["New Filing", "Correction", "Notice"]),
});

type FormData = z.infer<typeof schema>;

export const FooterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: "Property TDS", caseType: "New Filing" },
  });

  const service = watch("service");
  const caseType = watch("caseType");

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const msg = `Hi CA Praveen,\n\n*TDS Filing Request*\nName: ${data.name}\nMobile: ${data.mobile}\nEmail: ${data.email}\nService: ${data.service}\nCase Type: ${data.caseType}`;
    window.open(waLink(msg), "_blank");

    try {
      const response = await fetch("/api/tds-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name.trim(),
          mobile: data.mobile.trim(),
          email: data.email.trim(),
          service: data.service,
          caseType: data.caseType,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.message ?? "Failed to send email.");
      }

      const payload = await response.json();
      if (!payload.success) {
        throw new Error(payload.message ?? "Failed to send email.");
      }

      reset();
      toast({
        title: "Form submitted",
        description: "Your request was sent. Check your email for confirmation.",
      });
      navigate("/thank-you");
    } catch (error) {
      console.error(error);
      const description =
        error instanceof Error
          ? error.message
          : "Email could not be sent automatically. Please try again or use WhatsApp.";
      toast({
        title: "Submission failed",
        description,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="footer-form" className="bg-secondary py-16 sm:py-20">
      <div className="container max-w-2xl">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-10">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Need Help with TDS Filing?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Details share karein - hum handle karenge
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="ff-name">Full Name</Label>
                <Input id="ff-name" placeholder="Aapka naam" {...register("name")} />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="ff-mobile">Mobile</Label>
                <Input
                  id="ff-mobile"
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit number"
                  {...register("mobile")}
                />
                {errors.mobile && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="ff-email">Email</Label>
              <Input
                id="ff-email"
                type="email"
                placeholder="you@email.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Service Type</Label>
                <Select
                  value={service}
                  onValueChange={(v) => setValue("service", v as FormData["service"])}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Property TDS">Property TDS</SelectItem>
                    <SelectItem value="Rent TDS">Rent TDS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Case Type</Label>
                <Select
                  value={caseType}
                  onValueChange={(v) => setValue("caseType", v as FormData["caseType"])}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New Filing">New Filing</SelectItem>
                    <SelectItem value="Correction">Correction</SelectItem>
                    <SelectItem value="Notice">Notice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
              Submit & Talk to CA <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              100% confidential - No spam
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

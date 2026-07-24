"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { ProxiIcon } from "@/components/ui/icons";
import {
  CheckCircle2,
  UserRound,
  BriefcaseBusiness,
  MapPin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

const waitlistSchema = z
  .object({
    fullName: z.string().trim().min(2, "Please enter your full name."),
    email: z.string().trim().email("Please enter a valid email address."),
    phoneNumber: z.string().trim().optional().or(z.literal("")),
    role: z.enum(["customer", "artisan"]),
    location: z.string().trim().min(2, "Please enter your location."),
    trade: z.string().trim().optional().or(z.literal("")),
  })
  .superRefine((value, ctx) => {
    if (value.role === "artisan" && !value.trade) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["trade"],
        message: "Please tell us your trade or service.",
      });
    }
  });

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [submittedRole, setSubmittedRole] = React.useState<
    "customer" | "artisan" | null
  >(null);
  const [isPreview, setIsPreview] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      role: undefined,
      location: "",
      trade: "",
    },
  });

  const selectedRole = watch("role");

  const onSubmit = (data: WaitlistFormValues) => {
    setSubmittedRole(data.role);
    setIsPreview(true);
  };

  return (
    <div className="grid gap-8 laptop:grid-cols-[0.95fr_1.05fr]">
      <Card
        className="border-brand-border/80 bg-brand-surface p-6 shadow-card laptop:p-8"
        padding="lg"
      >
        <div className="space-y-4">
          <Badge variant="primary">Early access</Badge>
          <Typography as="h2" variant="h2" className="text-brand-dark">
            Join the Proxi waitlist
          </Typography>
          <Typography variant="body">
            Be first to know when Proxi opens for trusted local professionals
            and customers in your area.
          </Typography>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
          noValidate
        >
          <div className="grid gap-5 tablet:grid-cols-2">
            <div className="space-y-2 tablet:col-span-2">
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-brand-textPrimary"
              >
                Full name
              </label>
              <Input
                id="fullName"
                placeholder="Amina Okafor"
                aria-invalid={Boolean(errors.fullName)}
                {...register("fullName")}
              />
              {errors.fullName ? (
                <p className="text-sm text-brand-error">
                  {errors.fullName.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-brand-textPrimary"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-textSecondary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email")}
                />
              </div>
              {errors.email ? (
                <p className="text-sm text-brand-error">
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-semibold text-brand-textPrimary"
              >
                Phone number{" "}
                <span className="font-normal text-brand-textSecondary">
                  (optional)
                </span>
              </label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-textSecondary" />
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="0801 234 5678"
                  className="pl-10"
                  {...register("phoneNumber")}
                />
              </div>
            </div>

            <div className="space-y-2 tablet:col-span-2">
              <label className="text-sm font-semibold text-brand-textPrimary">
                I am joining as
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${selectedRole === "customer" ? "border-brand-primary bg-brand-tealLight" : "border-brand-border bg-brand-background"}`}
                >
                  <input
                    type="radio"
                    value="customer"
                    className="h-4 w-4 accent-brand-primary"
                    {...register("role")}
                  />
                  <span className="flex items-center gap-2 text-sm font-semibold text-brand-textPrimary">
                    <UserRound className="h-4 w-4 text-brand-primary" />
                    Customer
                  </span>
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${selectedRole === "artisan" ? "border-brand-primary bg-brand-tealLight" : "border-brand-border bg-brand-background"}`}
                >
                  <input
                    type="radio"
                    value="artisan"
                    className="h-4 w-4 accent-brand-primary"
                    {...register("role")}
                  />
                  <span className="flex items-center gap-2 text-sm font-semibold text-brand-textPrimary">
                    <BriefcaseBusiness className="h-4 w-4 text-brand-primary" />
                    Artisan
                  </span>
                </label>
              </div>
              {errors.role ? (
                <p className="text-sm text-brand-error">
                  {errors.role.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="location"
                className="text-sm font-semibold text-brand-textPrimary"
              >
                Location
              </label>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-textSecondary" />
                <Input
                  id="location"
                  placeholder="Benin City"
                  className="pl-10"
                  aria-invalid={Boolean(errors.location)}
                  {...register("location")}
                />
              </div>
              {errors.location ? (
                <p className="text-sm text-brand-error">
                  {errors.location.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="trade"
                className="text-sm font-semibold text-brand-textPrimary"
              >
                Trade{" "}
                <span className="font-normal text-brand-textSecondary">
                  (for artisans)
                </span>
              </label>
              <Input
                id="trade"
                placeholder="Plumbing, Carpentry..."
                aria-invalid={Boolean(errors.trade)}
                {...register("trade")}
              />
              {errors.trade ? (
                <p className="text-sm text-brand-error">
                  {errors.trade.message}
                </p>
              ) : null}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Preparing..." : "Join waitlist"}
          </Button>
        </form>
      </Card>

      <Card
        className="border-brand-border/80 bg-gradient-to-br from-brand-primary to-brand-secondary p-6 text-white shadow-card laptop:p-8"
        padding="lg"
      >
        <div className="flex h-full flex-col justify-between gap-8">
          <div className="space-y-4">
            <Badge variant="dark">What you get</Badge>
            <Typography as="h3" variant="h3" className="text-white">
              A front-row seat to the future of Proxi
            </Typography>
            <Typography variant="body" className="text-brand-accent">
              We will share launch updates, beta access, and early benefits with
              selected members.
            </Typography>
          </div>

          <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Preview mode</p>
                <p className="text-sm text-brand-accent">
                  This is a UI-only experience.
                </p>
              </div>
            </div>

            {isPreview && submittedRole ? (
              <div className="mt-5 rounded-2xl bg-brand-surface p-4 text-brand-textPrimary">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  Ready for review
                </div>
                <p className="mt-2 text-sm text-brand-textSecondary">
                  You selected{" "}
                  <span className="font-semibold text-brand-dark">
                    {submittedRole === "customer" ? "Customer" : "Artisan"}
                  </span>{" "}
                  for the waitlist preview.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  );
}

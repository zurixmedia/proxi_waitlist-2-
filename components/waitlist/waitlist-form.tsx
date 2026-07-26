"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { ProxiIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  UserRound,
  BriefcaseBusiness,
  MapPin,
  Mail,
  Sparkles,
} from "lucide-react";

const serviceCategories = [
  "Plumbing",
  "Electrical",
  "Painting",
  "Cleaning",
  "Carpentry",
  "AC Repair",
  "Appliance Repair",
  "Gardening",
];

const waitlistSchema = z
  .object({
    fullName: z.string().trim().min(2, "Please enter your full name."),
    email: z.string().trim().email("Please enter a valid email address."),
    role: z.enum(["customer", "artisan"], "Please select your role."),
    location: z.string().trim().min(2, "Please enter your location."),
    category: z.string().trim().optional(),
  })
  .superRefine((value, ctx) => {
    if (value.role === "artisan" && !value.category) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["category"],
        message: "Please select your service category.",
      });
    }
  });

interface WaitlistFormProps {
  defaultRole?: "customer" | "artisan";
  fixedRole?: boolean;
  onSuccess?: (values: WaitlistFormValues) => void;
}

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

type FormStatus = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  defaultRole,
  fixedRole = false,
  onSuccess,
}: WaitlistFormProps) {
  const [submittedRole, setSubmittedRole] = React.useState<
    "customer" | "artisan" | null
  >(null);
  const [formStatus, setFormStatus] = React.useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = React.useState<string | undefined>(
    undefined,
  );

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
      role: defaultRole,
      location: "",
      category: "",
    },
    mode: "onTouched",
  });

  const selectedRole = watch("role") ?? defaultRole;

  const onSubmit = async (data: WaitlistFormValues) => {
    setFormStatus("loading");
    setStatusMessage(undefined);
    setSubmittedRole(null);

    await new Promise((resolve) => setTimeout(resolve, 700));

    if (data.email.toLowerCase().includes("error")) {
      setFormStatus("error");
      setStatusMessage(
        "There was an issue preparing your preview. Please update your email and try again.",
      );
      return;
    }

    setSubmittedRole(data.role);
    setFormStatus("success");

    if (onSuccess) {
      onSuccess(data);
      return;
    }
  };

  const inputErrorClass = (error?: unknown) =>
    cn(
      error
        ? "border-brand-error focus:border-brand-error focus:ring-brand-error/40"
        : "",
    );

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
            Sign up for early updates and access to trusted local artisans or
            customers in your area.
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
                className={inputErrorClass(errors.fullName)}
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
                  className={cn("pl-10", inputErrorClass(errors.email))}
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
                  className={cn("pl-10", inputErrorClass(errors.location))}
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

            <div className="space-y-2 tablet:col-span-2">
              <label className="text-sm font-semibold text-brand-textPrimary">
                I am joining as
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <label
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition",
                    selectedRole === "customer"
                      ? "border-brand-primary bg-brand-tealLight"
                      : "border-brand-border bg-brand-background",
                  )}
                >
                  <input
                    type="radio"
                    value="customer"
                    className="h-4 w-4 accent-brand-primary"
                    disabled={fixedRole}
                    {...register("role")}
                  />
                  <span className="flex items-center gap-2 text-sm font-semibold text-brand-textPrimary">
                    <UserRound className="h-4 w-4 text-brand-primary" />
                    Customer
                  </span>
                </label>

                <label
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition",
                    selectedRole === "artisan"
                      ? "border-brand-primary bg-brand-tealLight"
                      : "border-brand-border bg-brand-background",
                  )}
                >
                  <input
                    type="radio"
                    value="artisan"
                    className="h-4 w-4 accent-brand-primary"
                    disabled={fixedRole}
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

            {selectedRole === "artisan" ? (
              <div className="space-y-2 tablet:col-span-2">
                <label
                  htmlFor="category"
                  className="text-sm font-semibold text-brand-textPrimary"
                >
                  Service category
                </label>
                <Select
                  id="category"
                  className={inputErrorClass(errors.category)}
                  aria-invalid={Boolean(errors.category)}
                  {...register("category")}
                >
                  <option value="">Select category</option>
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
                {errors.category ? (
                  <p className="text-sm text-brand-error">
                    {errors.category.message}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || formStatus === "loading"}
          >
            {isSubmitting || formStatus === "loading"
              ? "Loading..."
              : "Preview waitlist"}
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
              Frontend validation preview
            </Typography>
            <Typography variant="body" className="text-brand-accent">
              This is a client-only experience with no API, no database, and no
              real submission.
            </Typography>
          </div>

          <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Sparkles className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold">Preview mode</p>
                <p className="text-sm text-brand-accent">
                  Loading, error, and success states render inside the UI.
                </p>
              </div>
            </div>

            {formStatus === "loading" ? (
              <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-4 text-brand-accent">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ProxiIcon
                    icon="loading"
                    className="h-4 w-4 text-white animate-spin"
                  />
                  Generating preview
                </div>
                <p className="mt-2 text-sm text-white/80">
                  Validating your fields and preparing the preview state.
                </p>
              </div>
            ) : null}

            {formStatus === "error" ? (
              <div className="mt-5 rounded-2xl bg-red-50 p-4 text-red-700">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>Validation error</span>
                </div>
                <p className="mt-2 text-sm">{statusMessage}</p>
              </div>
            ) : null}

            {formStatus === "success" && submittedRole ? (
              <div className="mt-5 rounded-2xl bg-brand-surface p-4 text-brand-textPrimary">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  Success preview
                </div>
                <p className="mt-2 text-sm text-brand-textSecondary">
                  Ready as a{" "}
                  <span className="font-semibold text-brand-dark">
                    {submittedRole === "customer" ? "Customer" : "Artisan"}
                  </span>
                  .
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </Card>
    </div>
  );
}

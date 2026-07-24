"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { MapPin, Wrench, ShieldCheck, Lock, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenRoleModal?: (role: "homeowner" | "artisan") => void;
}

export function HeroSection({ onOpenRoleModal }: HeroSectionProps) {
  const [city, setCity] = React.useState("Benin City");
  const [service, setService] = React.useState("Plumbing");
  const [isSearching, setIsSearching] = React.useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    window.setTimeout(() => {
      setIsSearching(false);
      onOpenRoleModal?.("homeowner");
    }, 600);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-background to-brand-background py-16 tablet:py-20 laptop:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-accent/10 to-transparent" />
      <Container className="relative grid items-center gap-12 laptop:grid-cols-[1.1fr_0.9fr] laptop:gap-10">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
            <span className="mr-2 text-sm">⚡</span>
            5,000+ homeowners already joined
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl laptop:text-6xl">
              Find trusted local
              <span className="block text-brand-primary">
                service professionals
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-textSecondary">
              Connect with verified artisans for plumbing, electrical, painting,
              cleaning, and more — with transparent pricing and trusted reviews.
            </p>
          </div>

          <form
            onSubmit={handleSearchSubmit}
            className="mt-2 flex flex-col gap-3 rounded-[1.5rem] border border-brand-border bg-white p-3 shadow-card sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 flex-col rounded-xl px-4 py-3 transition-colors hover:bg-brand-background">
              <label
                htmlFor="city-input"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-textSecondary"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-primary" />
                City / area
              </label>
              <input
                id="city-input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city or ZIP"
                className="mt-1 bg-transparent text-sm font-semibold text-brand-dark outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="hidden h-10 w-px bg-brand-border sm:block" />

            <div className="flex flex-1 flex-col rounded-xl px-4 py-3 transition-colors hover:bg-brand-background">
              <label
                htmlFor="service-input"
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-textSecondary"
              >
                <Wrench className="h-3.5 w-3.5 text-brand-primary" />
                Service needed
              </label>
              <input
                id="service-input"
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="Plumbing, electrical..."
                className="mt-1 bg-transparent text-sm font-semibold text-brand-dark outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-secondary active:scale-[0.98] disabled:opacity-75"
            >
              {isSearching ? "Matching..." : "Find pros"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {["SJ", "MK", "TR"].map((initials, index) => (
                <div
                  key={initials}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white ${index === 0 ? "bg-brand-accent" : index === 1 ? "bg-brand-green" : "bg-brand-primary"}`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-textSecondary">
              Joined by{" "}
              <span className="font-semibold text-brand-dark">
                3,200+ homeowners
              </span>{" "}
              and{" "}
              <span className="font-semibold text-brand-dark">
                1,800+ vetted pros
              </span>
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-lg rounded-[2rem] border border-brand-border bg-white p-4 shadow-card">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand-tealLight to-white p-4">
              <Image
                src="/images/hero-illustration.png"
                alt="Proxi verified artisans and homeowners"
                width={580}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-brand-border bg-white p-3 shadow-badge animate-float-slow sm:-left-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tealLight text-brand-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary">
                  100% checked
                </p>
                <p className="text-xs font-semibold text-brand-dark">
                  Background verified
                </p>
              </div>
            </div>

            <div className="absolute -right-3 bottom-8 flex items-center gap-3 rounded-2xl border border-brand-border bg-white p-3 shadow-badge animate-float-delayed sm:-right-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-600">
                  Escrow protected
                </p>
                <p className="text-xs font-semibold text-brand-dark">
                  Pay after approval
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

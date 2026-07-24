import * as React from "react";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  onOpenRoleModal?: (role: "homeowner" | "artisan") => void;
}

export function CtaBanner({ onOpenRoleModal }: CtaBannerProps) {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand-primary via-[#266879] to-brand-primary px-6 py-12 text-center text-white shadow-card laptop:px-16 laptop:py-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-accentLight/10 blur-3xl" />

          <h2 className="relative z-10 text-2xl font-extrabold tracking-tight sm:text-3xl laptop:text-4xl">
            Join the Proxi early access community
          </h2>
          <p className="relative z-10 mt-3 text-base text-brand-accent sm:text-lg">
            Select your role and unlock exclusive beta benefits today.
          </p>

          <div className="relative z-10 mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onOpenRoleModal?.("homeowner")}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-sm font-semibold text-brand-primary shadow-md transition-all hover:bg-gray-100 active:scale-[0.98]"
            >
              <span>As homeowner</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onOpenRoleModal?.("artisan")}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-accentLight px-8 text-sm font-semibold text-brand-dark shadow-md transition-all hover:bg-[#6ecb55] active:scale-[0.98]"
            >
              <span>As professional</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Check, ArrowRight } from "lucide-react";

interface RolesSectionProps {
  onOpenRoleModal?: (role: "homeowner" | "artisan") => void;
}

export function RolesSection({ onOpenRoleModal }: RolesSectionProps) {
  return (
    <section id="features" className="section-spacing bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-primary">
            Join the community
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl laptop:text-5xl">
            Built for everyone
          </h2>
        </div>

        <div className="mt-12 grid gap-8 laptop:grid-cols-2">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-brand-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute inset-x-0 top-0 h-2 bg-brand-primary" />

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
                For homeowners
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-brand-dark sm:text-3xl">
                Find the right pro
              </h3>
              <p className="mt-2 text-sm leading-7 text-brand-textSecondary sm:text-base">
                Post your job, compare quotes, and pay safely with complete
                visibility.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Free to post any home project",
                  "Vetted and background-checked pros",
                  "Escrow payment protection after sign-off",
                  "Launch credit applied to your first booking",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-brand-textPrimary sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => onOpenRoleModal?.("homeowner")}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-secondary active:scale-[0.98]"
              >
                <span>Join as homeowner</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-brand-border bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute inset-x-0 top-0 h-2 bg-brand-green" />

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-green">
                For artisans & pros
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-brand-dark sm:text-3xl">
                Grow your business
              </h3>
              <p className="mt-2 text-sm leading-7 text-brand-textSecondary sm:text-base">
                Get matched with high-intent local clients and build your
                reputation faster.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "0% commission on your first 10 bookings",
                  "Instant direct escrow payouts",
                  "Pioneer verified pro badge on profile",
                  "Free business toolkit and scheduling support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-brand-textPrimary sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => onOpenRoleModal?.("artisan")}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-6 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 active:scale-[0.98]"
              >
                <span>Join as professional</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

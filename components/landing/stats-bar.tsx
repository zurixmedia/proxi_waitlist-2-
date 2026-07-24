import * as React from "react";
import { Container } from "@/components/ui/container";

export function StatsBar() {
  const stats = [
    { value: "5,000+", label: "Homeowners joined" },
    { value: "1,800+", label: "Verified pros" },
    { value: "100%", label: "Escrow safe" },
    { value: "< 3 min", label: "Average match time" },
  ];

  return (
    <section className="bg-brand-primary py-10 text-white shadow-inner">
      <Container>
        <div className="grid grid-cols-2 gap-8 text-center laptop:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
            >
              <span className="text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-brand-accent">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

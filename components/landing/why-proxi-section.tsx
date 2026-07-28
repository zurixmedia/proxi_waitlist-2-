import * as React from 'react';
import { Container } from '@/components/ui/container';
import { ShieldCheck, Receipt, Lock, MapPin } from 'lucide-react';

export function WhyProxiSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% vetted pros',
      description:
        'Every professional passes background checks, license verification, and portfolio review before joining Proxi.',
    },
    {
      icon: Receipt,
      title: 'Clear, upfront quotes',
      description:
        'Compare itemized quotes with no hidden fees. Know exactly what you pay before work starts.',
    },
    {
      icon: Lock,
      title: 'Escrow payment safety',
      description:
        'Your payment is held safely until you are satisfied. Release funds only when the job is done right.',
    },
    {
      icon: MapPin,
      title: 'Instant local matching',
      description:
        'Connect with skilled professionals in your immediate neighborhood. Fast responses, real relationships.',
    },
  ];

  return (
    <section
      id="why-proxi"
      className="section-spacing bg-gradient-to-b from-brand-accent/5 to-transparent/90"
    >
      <Container>
        <div id="how-it-works" className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-primary">
            Why Proxi
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl laptop:text-5xl">
            How it works for you
          </h2>
          <p className="mt-4 text-base leading-8 text-brand-textSecondary sm:text-lg">
            Everything you need, nothing you do not.
          </p>
        </div>

        <div className="mt-12 grid gap-6 tablet:grid-cols-2 laptop:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-[1.5rem] border border-brand-border bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-card"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-tealLight text-brand-primary transition-transform duration-200 group-hover:scale-105">
                    <IconComponent className="h-7 w-7 stroke-[2]" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-brand-dark sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-textSecondary sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

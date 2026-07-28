'use client';

import * as React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { ShieldCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onOpenRoleModal?: (role: 'homeowner' | 'artisan') => void;
}

export function HeroSection({ onOpenRoleModal }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-transparent py-6 tablet:py-8 laptop:py-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-accent/10 to-transparent" />
      <Container className="relative grid items-center gap-12 laptop:grid-cols-[1.1fr_0.9fr] laptop:gap-10">
        <div className="flex flex-col gap-3">
          <div className="inline-flex w-fit items-center rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] text-brand-primary">
            Coming soon in benin city.
          </div>

          <div className="space-y-2">
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl laptop:text-6xl">
              Find <br></br>trusted local
              <span className="block text-brand-primary">
                service <br></br>professionals
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-textSecondary font-semibold">
              Connect with verified artisans <br />
              for plumbing, electrical, painting, cleaning, and more — with transparent pricing and
              trusted reviews.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {['SJ', 'MK', 'TR'].map((initials, index) => (
                <div
                  key={initials}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white ${index === 0 ? 'bg-brand-accent' : index === 1 ? 'bg-brand-green' : 'bg-brand-primary'}`}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-textSecondary">
              Joined by <span className="font-semibold text-brand-dark">10+ homeowners</span> and{' '}
              <span className="font-semibold text-brand-dark">8+ vetted pros</span>
            </p>
          </div>
          <div className="mt-4">
            <Button
              onClick={() => onOpenRoleModal?.('homeowner')}
              className="bg-[#498899] hover:bg-[#3e7076] text-white"
            >
              Join the Waitlist
            </Button>
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
                <p className="text-xs font-semibold text-brand-dark">Background verified</p>
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
                <p className="text-xs font-semibold text-brand-dark">Pay after approval</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/ui/navbar';
import { HeroSection } from '@/components/landing/hero-section';
import { StatsBar } from '@/components/landing/stats-bar';
import { WhyProxiSection } from '@/components/landing/why-proxi-section';
import { RolesSection } from '@/components/landing/roles-section';
import { CtaBanner } from '@/components/landing/cta-banner';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/ui/footer';

export default function LandingPage() {
  const router = useRouter();

  const handleOpenRoleModal = (_role: 'homeowner' | 'artisan') => {
    router.push('/join');
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-textPrimary antialiased selection:bg-brand-accent selection:text-brand-dark">
      {/* Navigation Header */}
      <Navbar onOpenRoleModal={handleOpenRoleModal} />

      {/* Main Landing Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection onOpenRoleModal={handleOpenRoleModal} />

        {/* Stats Counter Bar */}
        <StatsBar />

        {/* Why Proxi & How It Works */}
        <WhyProxiSection />

        {/* Built for Everyone / Roles Breakdown */}
        <RolesSection onOpenRoleModal={handleOpenRoleModal} />

        {/* FAQ */}
        <FaqSection />

        {/* Early Access CTA Banner */}
        <CtaBanner onOpenRoleModal={handleOpenRoleModal} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import * as React from "react";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { CheckCircle2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-brand-footerDark text-gray-400">
      <Container className="pt-16 pb-12">
        {/* Top Columns Grid */}
        <div className="grid gap-10 sm:grid-cols-2 laptop:grid-cols-12 laptop:gap-8">
          {/* Column 1: Logo & Mission (Col span 4) */}
          <div className="laptop:col-span-4 flex flex-col gap-4">
            <Logo variant="light" href="#home" />
            <p className="max-w-xs text-sm leading-relaxed text-brand-textMuted">
              Connecting communities with vetted local professionals.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7AD462]">
              <span>✓ Escrow Guaranteed</span>
              <span>·</span>
              <span>✓ 100% Vetted</span>
            </div>
          </div>

          {/* Column 2: Platform Links (Col span 2) */}
          <div className="laptop:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              PLATFORM
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "For Homeowners",
                "For Local Pros",
                "Escrow Safety",
                "Verified Pros",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#features"
                    className="transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links (Col span 2) */}
          <div className="laptop:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["About Proxi", "Careers", "Press", "Help Center"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#why-proxi"
                      className="transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 4: Newsletter / Stay Updated (Col span 4) */}
          <div className="laptop:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              STAY UPDATED
            </h4>
            <p className="text-xs text-brand-textMuted leading-relaxed">
              Be first to know when Proxi launches near you.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-2 flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-11 flex-1 rounded-lg border border-brand-footerBorder bg-brand-footerInput px-3.5 text-xs text-white placeholder:text-gray-500 focus:border-brand-primary focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 rounded-lg bg-brand-green px-5 text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <p className="flex items-center gap-1.5 text-xs font-semibold text-[#7AD462]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                You will be notified on launch!
              </p>
            )}
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-10 h-[1px] w-full bg-brand-footerBorder" />

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500">
          <p>© 2026 Proxi Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-300">
              Privacy
            </a>
            <span>·</span>
            <a href="#home" className="hover:text-gray-300">
              Terms
            </a>
            <span>·</span>
            <a href="#home" className="hover:text-gray-300">
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

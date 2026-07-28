"use client";

import * as React from "react";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenRoleModal?: (role: "homeowner" | "artisan") => void;
  right?: React.ReactNode;
  bgClass?: string;
}

export function Navbar({ onOpenRoleModal, right, bgClass }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "why-proxi", "how-it-works"];
      const scrollPos = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Why Proxi", href: "#why-proxi", id: "why-proxi" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
  ];

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-brand-border/80 backdrop-blur-md transition-all", bgClass ?? 'bg-brand-surface/90')}>
      <Container className="flex h-20 items-center justify-between py-4">
        {/* Left: Logo */}
        <Logo href="#home" />

        {/* Center: Nav links (Desktop) */}
        <nav
          className="hidden items-center gap-8 laptop:flex"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors hover:text-brand-primary",
                  isActive
                    ? "font-bold text-brand-dark"
                    : "text-brand-textSecondary",
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-brand-primary" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Buttons (Desktop) */}
        <div className="hidden items-center gap-3 tablet:flex">
          {right ? (
            right
          ) : (
            <>
              <button
                type="button"
                onClick={() => onOpenRoleModal?.("artisan")}
                className="h-10 rounded-lg border border-brand-border bg-[#F3F4F6] px-4 text-sm font-semibold text-brand-primary transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                Become a Pro
              </button>
              <button
                type="button"
                onClick={() => onOpenRoleModal?.("homeowner")}
                className="h-10 rounded-lg bg-brand-primary px-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                Join Waitlist
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border p-2 text-brand-dark hover:bg-gray-50 laptop:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-brand-border bg-brand-surface px-6 py-6 laptop:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-brand-dark hover:text-brand-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-brand-border">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRoleModal?.("artisan");
                }}
                className="w-full rounded-lg border border-brand-border py-2.5 text-center text-sm font-semibold text-brand-primary hover:bg-gray-50"
              >
                Become a Pro
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRoleModal?.("homeowner");
                }}
                className="w-full rounded-lg bg-brand-primary py-2.5 text-center text-sm font-bold text-white hover:bg-brand-secondary"
              >
                Join Waitlist
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-background text-brand-textPrimary">
      <header className="border-b border-brand-border/70 bg-brand-surface/80 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <Link
            href={ROUTES.home}
            className="text-lg font-semibold text-brand-dark"
          >
            Proxi
          </Link>
          <nav className="flex items-center gap-4 text-sm text-brand-textSecondary">
            <Link
              href={ROUTES.waitlist}
              className="font-medium text-brand-teal hover:text-brand-secondary"
            >
              Join waitlist
            </Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-brand-border/70 bg-brand-surface">
        <div className="container-shell py-8 text-sm text-brand-textSecondary">
          <p>Trusted local services, made simple.</p>
        </div>
      </footer>
    </div>
  );
}

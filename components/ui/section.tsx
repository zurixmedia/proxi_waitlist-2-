import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  "title"
> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  compact?: boolean;
}

export function Section({
  className,
  eyebrow,
  title,
  description,
  actions,
  compact = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        compact
          ? "py-10 tablet:py-14 laptop:py-16"
          : "py-14 tablet:py-16 laptop:py-20 desktop:py-24",
        className,
      )}
      {...props}
    >
      <Container>
        {(eyebrow || title || description || actions) && (
          <div className="mb-8 flex flex-col gap-4 tablet:flex-row tablet:items-end tablet:justify-between">
            <div className="max-w-2xl space-y-3">
              {eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-secondary">
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark tablet:text-4xl">
                  {title}
                </h2>
              ) : null}
              {description ? (
                <p className="text-base leading-7 text-brand-textSecondary">
                  {description}
                </p>
              ) : null}
            </div>
            {actions ? (
              <div className="flex items-center gap-3">{actions}</div>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium",
  {
    variants: {
      variant: {
        default:
          "border-brand-border bg-brand-background text-brand-textPrimary",
        primary: "border-brand-teal/30 bg-brand-teal/10 text-brand-secondary",
        success:
          "border-brand-success/30 bg-brand-success/10 text-brand-success",
        warning:
          "border-brand-warning/30 bg-brand-warning/10 text-brand-warning",
        dark: "border-brand-dark/20 bg-brand-dark text-brand-surface",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

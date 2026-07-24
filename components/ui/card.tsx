import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

export function Card({
  className,
  padding = "md",
  hover = false,
  ...props
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-border bg-brand-surface shadow-soft",
        paddingClasses[padding],
        hover && "transition-transform duration-200 hover:-translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

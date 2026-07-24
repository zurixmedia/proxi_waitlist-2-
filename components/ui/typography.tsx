import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body"
    | "small"
    | "caption";
  weight?: "regular" | "medium" | "semibold" | "bold";
}

export function Typography({
  as: Component = "p",
  variant = "body",
  weight = "regular",
  className,
  ...props
}: TypographyProps) {
  const classes = {
    display:
      "text-4xl font-bold tracking-tight text-brand-dark tablet:text-5xl",
    h1: "text-3xl font-bold tracking-tight text-brand-dark tablet:text-4xl",
    h2: "text-2xl font-semibold tracking-tight text-brand-dark tablet:text-3xl",
    h3: "text-xl font-semibold text-brand-dark",
    h4: "text-lg font-semibold text-brand-dark",
    h5: "text-base font-semibold text-brand-dark",
    body: "text-base leading-7 text-brand-textSecondary",
    small: "text-sm leading-6 text-brand-textSecondary",
    caption:
      "text-xs font-semibold uppercase tracking-[0.24em] text-brand-textSecondary",
  };

  const weights = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <Component
      className={cn(classes[variant], weights[weight], className)}
      {...props}
    />
  );
}

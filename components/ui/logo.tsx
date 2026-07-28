import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const logoSrc = "/logos/logo.svg";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  variant?: "dark" | "light" | "default";
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  href = "#",
  variant = "default",
  size = "md",
  ...props
}: LogoProps) {
  const sizeClasses = {
    sm: "text-lg gap-2",
    md: "text-xl gap-2.5",
    lg: "text-2xl gap-3",
  };

  const logoSizes = {
    sm: "h-6 w-16 sm:h-7 sm:w-20",
    md: "h-7 w-20 sm:h-8 sm:w-24",
    lg: "h-8 w-24 sm:h-10 sm:w-28",
  };

  const textColors = {
    default: "text-brand-dark",
    dark: "text-brand-dark",
    light: "text-white",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center font-extrabold tracking-tight transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg p-1",
        sizeClasses[size],
        textColors[variant],
        className,
      )}
      aria-label="Proxi Home"
      {...props}
    >
      <div className={cn("relative flex shrink-0 items-center justify-center", logoSizes[size])}>
        <img
          src={logoSrc}
          alt="Proxi logo"
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  );
}

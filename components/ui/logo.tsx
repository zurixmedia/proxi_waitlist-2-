import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white shadow-sm ring-1 ring-brand-primary/20">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#62C3D4"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M9 16V8H13.5C14.8807 8 16 9.11929 16 10.5C16 11.8807 14.8807 13 13.5 13H9"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-extrabold tracking-tight">Proxi</span>
    </Link>
  );
}

import * as React from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
  Search,
  Sparkles,
} from "lucide-react";

export function ProxiIcon({
  icon = "sparkles",
  className,
}: {
  icon?: "sparkles" | "search" | "check" | "warning" | "loading";
  className?: string;
}) {
  const shared = { className, strokeWidth: 1.8 };

  switch (icon) {
    case "search":
      return <Search {...shared} />;
    case "check":
      return <CheckCircle2 {...shared} />;
    case "warning":
      return <CircleAlert {...shared} />;
    case "loading":
      return (
        <LoaderCircle
          {...shared}
          className={className ? `${className} animate-spin` : "animate-spin"}
        />
      );
    case "sparkles":
    default:
      return <Sparkles {...shared} />;
  }
}

export function ArrowIcon({ className }: { className?: string }) {
  return <ArrowRight className={className} strokeWidth={1.8} />;
}

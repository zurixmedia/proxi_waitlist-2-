import * as React from "react";
import { cn } from "@/lib/utils";
import { ProxiIcon } from "@/components/ui/icons";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function Loading({
  className,
  label = "Loading...",
  ...props
}: LoadingProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 py-10 text-brand-textSecondary",
        className,
      )}
      {...props}
    >
      <ProxiIcon icon="loading" className="h-5 w-5 text-brand-teal" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export function MobileMenu({
  open = false,
  className,
  children,
  ...props
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      className={cn(
        "border-b border-brand-border bg-brand-surface px-6 py-6 animate-in slide-in-from-top-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default MobileMenu;

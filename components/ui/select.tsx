import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "appearance-none w-full rounded-2xl border border-brand-border bg-brand-surface px-4 py-3 pr-10 text-sm text-brand-textPrimary outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-accent/40",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="h-4 w-4 text-brand-textSecondary"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.586l3.71-3.397a.75.75 0 111.02 1.1l-4.25 3.897a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z" />
          </svg>
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;

import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className={cn("inline-flex items-center gap-2", className)}>
      <input
        type="checkbox"
        className="h-4 w-4 rounded-sm border border-brand-border text-brand-teal focus:ring-brand-accent"
        {...props}
      />
      {label ? (
        <span className="text-sm text-brand-textSecondary">{label}</span>
      ) : null}
    </label>
  );
}

export default Checkbox;

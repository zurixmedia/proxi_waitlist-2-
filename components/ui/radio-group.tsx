import * as React from "react";
import { cn } from "@/lib/utils";

interface RadioOption {
  value: string;
  label: React.ReactNode;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  className,
}: RadioGroupProps) {
  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      role="radiogroup"
      aria-label={name}
    >
      {options.map((opt) => (
        <label key={opt.value} className="inline-flex items-center gap-3">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange?.(opt.value)}
            className="h-4 w-4 border border-brand-border text-brand-teal focus:ring-brand-accent"
          />
          <span className="text-sm text-brand-textSecondary">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;

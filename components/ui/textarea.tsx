import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, onInput, style, ...props }, ref) => {
    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const el = e.currentTarget;
      el.style.height = "auto";
      el.style.height = `${Math.max(120, el.scrollHeight)}px`;
      onInput?.(e as any);
    };

    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none rounded-2xl border border-brand-border bg-brand-surface px-4 py-3 text-sm text-brand-textPrimary outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-accent/40",
          className,
        )}
        onInput={handleInput}
        style={{ minHeight: 120, ...(style || {}) }}
        {...props}
      />
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;

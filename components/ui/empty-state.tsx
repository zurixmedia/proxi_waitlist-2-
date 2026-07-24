import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { ProxiIcon } from "@/components/ui/icons";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: "sparkles" | "search" | "check" | "warning" | "loading";
  action?: React.ReactNode;
}

export function EmptyState({
  className,
  title,
  description,
  icon = "sparkles",
  action,
  ...props
}: EmptyStateProps) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center justify-center text-center",
        className,
      )}
      padding="lg"
      {...props}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-background text-brand-teal">
        <ProxiIcon icon={icon} className="h-6 w-6" />
      </div>
      <Typography as="h3" variant="h3" className="mb-2 text-center">
        {title}
      </Typography>
      {description ? (
        <Typography variant="body" className="mb-6 max-w-md text-center">
          {description}
        </Typography>
      ) : null}
      {action ? <div>{action}</div> : null}
    </Card>
  );
}

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { ProxiIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function ErrorState({
  title = "Something went wrong",
  description,
  action,
  className,
  ...props
}: ErrorStateProps) {
  return (
    <Card
      className={cn("flex flex-col items-center text-center p-6", className)}
      {...props}
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-background text-error">
        <ProxiIcon icon="warning" className="h-6 w-6" />
      </div>
      <Typography as="h3" variant="h3" className="mb-2">
        {title}
      </Typography>
      {description ? (
        <Typography variant="body" className="mb-4">
          {description}
        </Typography>
      ) : null}
      {action ? <div>{action}</div> : null}
    </Card>
  );
}

export default ErrorState;

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card className={cn("flex items-start gap-4", className)} {...props}>
      {icon && <div className="mt-1">{icon}</div>}
      <div>
        <Typography as="h3" variant="h3" className="mb-1">
          {title}
        </Typography>
        {description && <Typography variant="body">{description}</Typography>}
      </div>
    </Card>
  );
}

export default FeatureCard;

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description?: string;
  count?: number;
  icon?: React.ReactNode;
}

export function CategoryCard({
  name,
  description,
  count,
  icon,
  className,
  ...props
}: CategoryCardProps) {
  return (
    <Card className={cn("flex items-center gap-4", className)} {...props}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-background text-brand-teal">
        {icon}
      </div>
      <div>
        <Typography as="h4" variant="h4">
          {name}
        </Typography>
        {description ? (
          <Typography variant="small">{description}</Typography>
        ) : null}
        {typeof count === "number" ? (
          <Typography variant="caption" className="mt-2">
            {count} professionals
          </Typography>
        ) : null}
      </div>
    </Card>
  );
}

export default CategoryCard;

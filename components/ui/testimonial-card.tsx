import * as React from "react";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role?: string;
  avatar?: React.ReactNode;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <Card className={cn("flex flex-col gap-4", className)} {...props}>
      <Typography variant="body" className="text-brand-textSecondary">
        “{quote}”
      </Typography>
      <div className="flex items-center gap-3">
        {avatar ? (
          <div className="h-10 w-10 rounded-full overflow-hidden">{avatar}</div>
        ) : null}
        <div>
          <Typography
            as="p"
            variant="small"
            className="font-semibold text-brand-dark"
          >
            {author}
          </Typography>
          {role ? <Typography variant="caption">{role}</Typography> : null}
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard;

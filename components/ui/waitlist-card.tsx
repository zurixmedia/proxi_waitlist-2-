import * as React from "react";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { PrimaryButton } from "@/components/ui/primary-button";
import { cn } from "@/lib/utils";

interface WaitlistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  cta?: React.ReactNode;
}

export function WaitlistCard({
  title,
  description,
  cta,
  className,
  ...props
}: WaitlistCardProps) {
  return (
    <Card className={cn("flex flex-col gap-4", className)} {...props}>
      <div>
        <Typography as="h3" variant="h3">
          {title}
        </Typography>
        {description ? (
          <Typography variant="body">{description}</Typography>
        ) : null}
      </div>
      <div>{cta ?? <PrimaryButton>Join Waitlist</PrimaryButton>}</div>
    </Card>
  );
}

export default WaitlistCard;

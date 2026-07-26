import * as React from "react";
import { Typography } from "@/components/ui/typography";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
}

export function Heading({ level = 2, children, ...props }: HeadingProps) {
  const map: Record<number, any> = {
    1: { as: "h1", variant: "h1" },
    2: { as: "h2", variant: "h2" },
    3: { as: "h3", variant: "h3" },
    4: { as: "h4", variant: "h4" },
    5: { as: "h5", variant: "h5" },
  };

  const cfg = map[level];

  return (
    <Typography as={cfg.as} variant={cfg.variant} {...(props as any)}>
      {children}
    </Typography>
  );
}

export default Heading;

import * as React from "react";
import { Typography } from "@/components/ui/typography";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Text(props: TextProps) {
  return <Typography {...props} variant="body" />;
}

export default Text;

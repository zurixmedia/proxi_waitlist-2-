import * as React from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface PageWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function PageWrapper({
  as: Component = "main",
  className,
  children,
  ...props
}: PageWrapperProps) {
  return (
    <Component className={cn("w-full", className)} {...props}>
      <Container>{children}</Container>
    </Component>
  );
}

export default PageWrapper;

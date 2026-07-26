import * as React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
}

export function Skeleton({
  width = "100%",
  height = 12,
  rounded = true,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "bg-brand-background animate-pulse",
        rounded ? "rounded-lg" : "",
        className,
      )}
      style={{ width, height }}
      {...props}
    />
  );
}

export default Skeleton;

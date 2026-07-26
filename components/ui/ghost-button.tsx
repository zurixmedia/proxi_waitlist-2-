import * as React from "react";
import { Button } from "@/components/ui/button";

export type GhostButtonProps = React.ComponentProps<typeof Button>;

export function GhostButton(props: GhostButtonProps) {
  return <Button variant="ghost" {...props} />;
}

export default GhostButton;

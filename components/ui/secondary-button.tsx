import * as React from "react";
import { Button } from "@/components/ui/button";

export type SecondaryButtonProps = React.ComponentProps<typeof Button>;

export function SecondaryButton(props: SecondaryButtonProps) {
  return <Button variant="secondary" {...props} />;
}

export default SecondaryButton;

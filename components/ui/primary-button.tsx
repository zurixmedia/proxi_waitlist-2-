import * as React from "react";
import { Button } from "@/components/ui/button";

export type PrimaryButtonProps = React.ComponentProps<typeof Button>;

export function PrimaryButton(props: PrimaryButtonProps) {
  return <Button variant="default" {...props} />;
}

export default PrimaryButton;

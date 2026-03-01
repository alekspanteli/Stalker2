import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center px-3 py-1 text-xs font-medium tracking-widest uppercase font-[family-name:var(--font-oswald)]",
  {
    variants: {
      variant: {
        default: "bg-stalker-orange/20 text-stalker-orange border border-stalker-orange/40",
        secondary: "text-stalker-gray border border-stalker-gray/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

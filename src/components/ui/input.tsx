import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full min-w-0 border border-stalker-cream/15 bg-stalker-dark px-4 py-3 text-base text-stalker-cream placeholder:text-stalker-gray transition-colors outline-none focus:border-stalker-orange disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };

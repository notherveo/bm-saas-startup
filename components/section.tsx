import * as React from "react";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-white/10 bg-white/5",
        className
      )}
    >
      {children}
    </section>
  );
}

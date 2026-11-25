"use client";
import * as React from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export function Counter({
  value,
  className,
  direction = "up",
}: {
  value: number;
  className?: string;
  direction?: "up" | "down";
}) {
  const motionValue = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const smoothed = useSpring(motionValue, {
    mass: 0.5,
    stiffness: 100,
    damping: 20,
  });

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (!isInView || reducedMotion) return;
    motionValue.set(direction === "up" ? value : 0);
  }, [isInView, motionValue, reducedMotion, value, direction]);

  return (
    <div
      ref={ref}
      className={cn(
        "font-medium tabular-nums tracking-tight",
        className
      )}
      style={{
        transform: reducedMotion ? undefined : `translate3d(0px, ${smoothed.get() * -1}px, 0px)`,
      }}
    >
      {Math.round(smoothed.get())}
    </div>
  );
}

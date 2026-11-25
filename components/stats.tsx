"use client";

import { Counter } from "@/components/counter";
import { useReducedMotion } from "motion/react";

const stats = [
  { value: 12000, label: "engineering teams" },
  { value: 99.9, label: "uptime" },
  { value: 45, label: "min average response time" },
  { value: 28, label: "countries served" },
];

export default function Stats() {
  const reduced = useReducedMotion();
  return (
    <div className="border-y border-white/10 bg-white/5">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 py-12 sm:px-6 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="pt-6 lg:pt-0">
            <div className="text-4xl font-bold tracking-tight">
              <Counter value={s.value} className="tabular-nums" />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

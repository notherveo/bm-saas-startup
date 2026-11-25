"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

const features = [
  {
    title: "Distributed tracing",
    description: "Follow a request across every service, from the first click to the final response.",
    icon: "⚡",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Logs",
    description: "Structured logs with full-text search and smart grouping. No more scrolling through walls of text.",
    icon: "📝",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Alerts",
    description: "Get notified the moment something breaks. Context-rich alerts that tell you what to do.",
    icon: "🔔",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Dashboards",
    description: "Visualize what matters. Drag and drop widgets to build your own views in seconds.",
    icon: "📊",
    color: "from-amber-500 to-orange-500",
  },
];

export default function Features() {
  const reduced = useReducedMotion();
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Everything you need to see what&apos;s happening
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          A complete observability platform, built for modern engineering
          teams.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <motion.div
            key={f.title}
            whileHover={!reduced ? { y: -6, scale: 1.02 } : undefined}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/8"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br {f.color} text-base">
                {f.icon}
              </div>
              <span className="text-2xl font-bold tracking-tight">
                {f.title.charAt(0)}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {f.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-white">
              Learn more
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="/features"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#060607] transition hover:bg-white/90"
        >
          Explore features
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

const steps = [
  {
    title: "Connect your services",
    body: "Integrate with your existing infrastructure in a few clicks.",
    icon: "🔌",
  },
  {
    title: "Visualize what matters",
    body: "Build custom dashboards with drag-and-drop widgets.",
    icon: "📊",
  },
  {
    title: "Get notified when it counts",
    body: "AI-powered alerts that only fire when something unusual happens.",
    icon: "🔔",
  },
];

export default function Overview() {
  const reduced = useReducedMotion();
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          A better way to see your systems
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          From chaos to clarity in three simple steps.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <span className="text-sm font-medium">Step {i + 1}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-white">
              Learn more
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </div>
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

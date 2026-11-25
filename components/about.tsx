"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

const stats = [
  { value: "12k", label: "teams" },
  { value: "99.99%", label: "uptime" },
  { value: "45", label: "min average response time" },
  { value: "28", label: "countries served" },
];

const team = [
  { name: "Sarah Chen", role: "Founder & CEO", avatar: "SC" },
  { name: "Marcus Webb", role: "CTO", avatar: "MW" },
  { name: "Elena Rodriguez", role: "Head of Product", avatar: "ER" },
  { name: "David Kim", role: "Head of Engineering", avatar: "DK" },
];

export default function About() {
  const reduced = useReducedMotion();
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          About NOVA
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          We build tools that help engineering teams do their best work.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            whileHover={!reduced ? { y: -6 } : undefined}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <div className="text-3xl font-bold tracking-tight">
              <span className="tabular-nums">{s.value}</span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-semibold">Our mission</h3>
        <p className="mt-4 text-base text-muted-foreground">
          We believe that every engineering team deserves a tool that makes
          their work easier. That&apos;s why we built NOVA — a complete
          observability platform that brings distributed tracing, logs, alerts
          and dashboards together in one place.
        </p>
      </div>
      <div className="mt-16">
        <h3 className="text-center text-xl font-semibold">Meet the team</h3>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-white text-lg font-bold text-[#060607]">
                {t.avatar}
              </div>
              <h4 className="mt-4 text-base font-semibold">{t.name}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
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

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Aurora from "./aurora";

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <div className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <Aurora />
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm font-medium text-muted-foreground">
            Now in public beta
            <ArrowRight className="ml-2 size-4" />
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-5xl font-bold tracking-tight md:text-7xl"
        >
          See what&apos;s happening, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
            without the chaos.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Distributed tracing, logs, alerts and dashboards in one place.
          Built for modern engineering teams.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-medium text-[#060607] transition hover:bg-white/90"
          >
            Get started
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-base font-medium text-muted-foreground transition hover:text-white"
          >
            Explore features
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060607] to-transparent" />
    </div>
  );
}

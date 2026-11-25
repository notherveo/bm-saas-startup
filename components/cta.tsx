"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

export default function Cta() {
  const reduced = useReducedMotion();
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Ready to see what&apos;s happening?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Start free. No credit card required.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
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
        </div>
      </div>
    </div>
  );
}

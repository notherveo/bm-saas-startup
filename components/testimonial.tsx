"use client";
import { ArrowRight } from "lucide-react";

import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";

const quotes = [
  {
    quote: "NOVA transformed how we debug our production issues. What used to take hours now takes minutes.",
    author: "Sarah Chen",
    role: "CTO, Orbitly",
  },
  {
    quote: "The best observability tool we've used. Clean interface, powerful features, and excellent support.",
    author: "Marcus Webb",
    role: "Engineering Lead, Pixelate",
  },
  {
    quote: "We switched to NOVA and our incident response time dropped by 70%. Highly recommended.",
    author: "Elena Rodriguez",
    role: "DevOps Engineer, Cloudify",
  },
];

export default function Testimonial() {
  const reduced = useReducedMotion();
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Loved by engineering teams
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          See what others are saying about NOVA.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <motion.div
            key={q.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-lg">"</span>
              <span className="font-medium">{q.author}</span>
            </div>
            <p className="mt-4 text-base">{q.quote}</p>
            <p className="mt-4 text-sm text-muted-foreground">{q.role}</p>
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

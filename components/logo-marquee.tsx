"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "motion/react";

const logos = [
  { name: "Vercel", class: "text-violet-500" },
  { name: "Next.js", class: "text-cyan-500" },
  { name: "AWS", class: "text-orange-500" },
  { name: "Google Cloud", class: "text-blue-500" },
  { name: "Netfox", class: "text-emerald-500" },
  { name: "Cloudflare", class: "text-sky-500" },
  { name: "Supabase", class: "text-purple-500" },
  { name: "Railway", class: "text-pink-500" },
];

export default function LogoMarquee() {
  const reduced = useReducedMotion();
  return (
    <div className="relative overflow-hidden py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by modern engineering teams
        </p>
        <div className="mt-8 flex items-center justify-center gap-12 overflow-hidden">
          <motion.div
            animate={{ x: reduced ? 0 : [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex items-center gap-12 whitespace-nowrap"
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className={cn(
                  "text-xl font-semibold",
                  logo.class
                )}
              >
                {logo.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

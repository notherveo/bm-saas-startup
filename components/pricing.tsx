"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useReducedMotion } from "motion/react";

const tiers = [
  {
    name: "Starter",
    price: 0,
    description: "For individuals and small projects.",
    features: ["1 project", "Community support", "Basic analytics", "100MB storage"],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    price: 29,
    description: "For growing teams that need more power.",
    features: [
      "10 projects",
      "Priority support",
      "Advanced analytics",
      "10GB storage",
      "Team collaboration",
    ],
    cta: "Start free",
    popular: true,
  },
  {
    name: "Scale",
    price: 99,
    description: "For large organizations with complex needs.",
    features: [
      "Unlimited projects",
      "24/7 dedicated support",
      "Custom integrations",
      "1TB storage",
      "SSO & audit logs",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const features = [
  "Real-time distributed tracing",
  "Structured log aggregation",
  "AI-powered anomaly detection",
  "Customizable alerting",
  "Interactive dashboards",
  "API access & webhooks",
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const reduced = useReducedMotion();
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Start free, upgrade when you&apos;re ready. No hidden fees.
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => setAnnual((v) => !v)}
          className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
        >
          <span className={cn("mr-2", annual && "text-white")}>
            {annual ? "Annual" : "Monthly"}
          </span>
          <span className="ml-1 inline-flex items-center">
            <motion.span
              animate={{ rotate: annual ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="size-4" />
            </motion.span>
          </span>
        </button>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <motion.div
            key={tier.name}
            whileHover={!reduced ? { y: -6 } : undefined}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative flex flex-col rounded-3xl border bg-white/5 p-6 transition-colors",
              tier.popular && "border-white/30 ring-1 ring-white/20"
            )}
          >
            {tier.popular && (
              <span className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-[#060607]">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight">
                ${annual ? tier.price * 0.8 : tier.price}
              </span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {tier.description}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 shrink-0 text-emerald-400" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="/pricing"
              className="mt-8 w-full rounded-full bg-white px-5 py-2.5 text-center text-sm font-medium text-[#060607] transition hover:bg-white/90"
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-xl font-semibold">What&apos;s included</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <Check className="size-4 shrink-0 text-emerald-400" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

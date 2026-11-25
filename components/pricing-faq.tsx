"use client";
import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel from your dashboard with one click. No lock-in, no penalties.",
  },
  {
    q: "Do you offer a free plan?",
    a: "Yes. The Starter plan is free forever — no card required. It's perfect for getting started and testing the waters.",
  },
  {
    q: "Is there a contract?",
    a: "No. All plans are month-to-month. Upgrade or downgrade whenever you like.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards and PayPal. Invoices are available for Scale plans.",
  },
];

export default function PricingFaq() {
  const [open, setOpen] = useState<string | null>(null);
  const reduced = useReducedMotion();
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-5xl">
        Pricing FAQ
      </h2>
      <div className="mt-12 divide-y divide-white/10">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <button
              type="button"
              onClick={() => setOpen(open === f.q ? null : f.q)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-base font-medium">{f.q}</span>
              <span className="text-muted-foreground">
                {open === f.q ? (
                  <ChevronUp className="size-4" />
                ) : (
                  <ChevronDown className="size-4" />
                )}
              </span>
            </button>
            <motion.p
              initial={false}
              animate={{
                opacity: open === f.q ? 1 : 0,
                height: open === f.q ? "auto" : 0,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-sm text-muted-foreground"
            >
              {f.a}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}

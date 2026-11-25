"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is NOVA?",
    a: "NOVA is an AI-powered observability platform that brings distributed tracing, logs, alerts and dashboards together in one place. It helps engineering teams understand, debug and optimize their systems.",
  },
  {
    q: "How does it integrate with my stack?",
    a: "NOVA integrates with over 100 tools including Kubernetes, AWS, Docker, and popular frameworks like Next.js, React, and Node.js. We also offer custom integrations for enterprise customers.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use industry-standard encryption (TLS 1.3, AES-256), SOC 2 Type II certified infrastructure, and offer SSO and audit logs for enterprise customers. Your data never leaves your control.",
  },
  {
    q: "Can I use NOVA for free?",
    a: "Yes! We offer a free Starter plan that includes 1 project, basic analytics, and community support. It's perfect for getting started and testing the waters.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);
  const reduced = useReducedMotion();
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight md:text-5xl">
        Frequently asked questions
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

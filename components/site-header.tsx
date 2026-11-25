"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const nav = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const t = pathname === "/" ? "Home" : pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060607]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-white text-[#060607] font-bold text-lg">
            N
          </span>
          <span className="text-lg font-semibold tracking-tight">NOVA</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === item.href
                  ? "text-white"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/pricing"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#060607] transition hover:bg-white/90"
          >
            Get started
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-muted-foreground hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-[#060607]"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors",
                  pathname === item.href
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-2.5 text-center text-sm font-medium text-[#060607]"
            >
              Get started
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

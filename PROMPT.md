Build a complete, production-quality multi-page Next.js (App Router) website — a modern,
futuristic, minimalist **SaaS / technology startup**. The feeling: precise, calm, engineered,
sophisticated product design. Think top-tier developer-tool marketing.

## Routes (all must be fully implemented and linked from the nav)
`/`, `/home`, `/features`, `/pricing`, `/about`

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` → `{ Button }`
- `@/components/ui/card` → `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` → `{ Badge }`
- `@/components/ui/input` → `{ Input }`
- `@/components/ui/label` → `{ Label }`
Everything else (bento grid, counters, tabs, accordion, marquee, aurora…) you MUST write yourself as a new file under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create in this response.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1.
2. Icons are components: `<ArrowRight className="size-4" />`. NEVER write `{icon.size}`. NEVER wrap an icon in `<p>`.
3. Shared chrome (header/nav, footer) is defined in `app/layout.tsx` and rendered EXACTLY ONCE. Pages must NOT render the header or footer themselves.
4. Import every symbol you use. No unused imports. No `any`. Type props explicitly.
5. Graphics: build product "screenshots"/dashboards from real DOM + inline SVG sparklines/bars (no images needed). If you use a photo at all, use plain `<img>` (never `next/image`). No empty src.
6. Respect reduced motion: read `useReducedMotion()` and skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy. No "Lorem ipsum", no "TODO", no "sample text".
8. Responsive mobile-first; never overflow horizontally.

## Design language
- Precise, engineered rhythm: 8pt spacing, hairline borders, soft panel depth (subtle shadow, not heavy).
- Refined type: tight display headings, comfortable body, **monospace** for labels/metrics/code.
- Cool neutral palette (near-white / slate) with ONE vivid accent and a soft gradient glow; a faint grid or dot background.
- Glassy panels, `rounded-2xl` cards, believable product UI built from real DOM.

## Motion language (this site's signature — no custom cursor)
- Scroll-reveal (fade + translate) via `whileInView`.
- An **animated bento grid** with hover lift and per-tile micro-interactions.
- **Animated counters** (count up when scrolled into view) for stats.
- **Interactive tabbed product demo**: tabs switch a mock dashboard whose content animates.
- **Pricing toggle** (Monthly / Annual) that animates the price, with a highlighted "Most popular" tier.
- A subtle animated **aurora / grid background** in the hero.
- An **FAQ accordion** with smooth height animation.

Write these components: `components/site-header.tsx`, `components/site-footer.tsx`, `components/bento.tsx`, `components/counter.tsx`, `components/dashboard-mock.tsx`, `components/pricing.tsx`, `components/faq.tsx`, `components/aurora.tsx`, `components/logo-marquee.tsx`.

## Content
Fictional product **"NOVA"** — an AI observability & analytics platform for engineering teams.
- `/` — hero with product visual, trust logos, three headline features, a stats band, CTA.
- `/home` — a concise product overview: the problem, the workflow (3 steps), highlights, testimonial.
- `/features` — a bento grid (distributed tracing, logs, alerts, dashboards, anomaly detection, cost control) + a tabbed product demo + FAQ.
- `/pricing` — three tiers (Starter / Pro / Scale) with a monthly↔annual toggle, a feature-comparison list, and pricing FAQ.
- `/about` — mission, company story, stats, team, investors/backers.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="…">…</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route above, and every component you reference.

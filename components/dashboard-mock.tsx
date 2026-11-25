"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { Activity, BarChart3, CalendarDays, ChevronDown, ChevronUp, Clock, LayoutDashboard, MessageSquare, Settings, Sun, SunDim, TrendingUp, ArrowRight } from "lucide-react";
import * as React from "react";

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "logs", label: "Logs", icon: MessageSquare },
  { id: "alerts", label: "Alerts", icon: Activity },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "settings", label: "Settings", icon: Settings },
];

const sparkline = (points: number[]) => {
  const w = 200,
    h = 40,
    m = 15,
    s = 2;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const d = points
    .map((v, i) => {
      const x = s + i * (w - s * 2) / (points.length - 1);
      const y = h - m - ((v - min) / range) * (h - 2 * m);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} className="overflow-visible">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d={`${d} L ${w - s} ${h - m} L ${s} ${h - m} Z`}
        fill="currentColor"
        className="opacity-20"
      />
    </svg>
  );
};

const widgets = [
  {
    id: "top",
    title: "Live traffic",
    icon: Activity,
    color: "text-cyan-400",
    data: [3200, 4100, 3800, 5200, 4900, 6100, 5800, 7200, 6900, 8100, 7800, 9200],
  },
  {
    id: "top2",
    title: "Error rate",
    icon: Activity,
    color: "text-rose-400",
    data: [12, 8, 15, 4, 9, 6, 11, 3, 7, 2, 5, 1],
  },
  {
    id: "top3",
    title: "Active users",
    icon: TrendingUp,
    color: "text-emerald-400",
    data: [8400, 8900, 9200, 9600, 9100, 9800, 10200, 10500, 10100, 10800, 11200, 11600],
  },
  {
    id: "top4",
    title: "API latency (ms)",
    icon: Clock,
    color: "text-amber-400",
    data: [42, 38, 45, 36, 40, 34, 39, 32, 37, 35, 33, 31],
  },
];

const charts = [
  {
    id: "chart1",
    title: "Requests per minute",
    icon: BarChart3,
    color: "text-cyan-400",
    data: [
      { label: "Mon", value: 12400 },
      { label: "Tue", value: 14800 },
      { label: "Wed", value: 13200 },
      { label: "Thu", value: 16100 },
      { label: "Fri", value: 15600 },
      { label: "Sat", value: 9800 },
      { label: "Sun", value: 11200 },
    ],
  },
  {
    id: "chart2",
    title: "Top endpoints",
    icon: BarChart3,
    color: "text-emerald-400",
    data: [
      { label: "/api/v1/users", value: 84 },
      { label: "/api/v1/products", value: 62 },
      { label: "/api/v1/orders", value: 41 },
      { label: "/api/v1/search", value: 28 },
    ],
  },
];

const Widget = ({
  title,
  icon: Icon,
  color,
  data,
  spark = false,
}: {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  data: number[];
  spark?: boolean;
}) => {
  const reduced = useReducedMotion();
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn("size-8 rounded-lg bg-white/10", color)}>
            <Icon className="size-4" />
          </span>
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
        <span className="text-xs text-muted-foreground">Live</span>
      </div>
      <div className="mt-3 h-16">
        {spark ? (
          sparkline(data)
        ) : (
          <div className="h-full w-full flex items-end gap-1">
            {data.map((v, i) => (
              <div
                key={i}
                className="w-full rounded-t-sm bg-white/20 transition-all duration-500"
                style={{
                  height: `${Math.min(100, v / Math.max(...data) * 100)}%`,
                  opacity: reduced ? 1 : 1 - i * 0.06,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Chart = ({
  title,
  icon: Icon,
  color,
  data,
}: {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  data: { label: string; value: number }[];
}) => {
  const reduced = useReducedMotion();
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn("size-8 rounded-lg bg-white/10", color)}>
            <Icon className="size-4" />
          </span>
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
        <span className="text-xs text-muted-foreground">Last 7 days</span>
      </div>
      <div className="mt-3 h-32">
        <div className="h-full w-full flex items-end gap-1">
          {data.map((d, i) => (
            <div key={i} className="flex w-full flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-sm bg-white/20 transition-all duration-500"
                style={{
                  height: `${Math.min(100, d.value / max * 100)}%`,
                  opacity: reduced ? 1 : 1 - i * 0.08,
                }}
              />
              <span className="text-[10px] text-muted-foreground">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function DashboardMock() {
  const [active, setActive] = useState("overview");
  const [expanded, setExpanded] = useState<string[]>([]);
  const [time, setTime] = useState(0);
  const reduced = useReducedMotion();
  React.useEffect(() => {
    const id = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const tabsRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const ro = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-4");
        } else {
          el.classList.add("opacity-0", "translate-y-4");
          el.classList.remove("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Try NOVA yourself
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A mock dashboard that shows you what NOVA looks like in action.
        </p>
      </div>
      <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="flex items-center gap-4 border-b border-white/10 bg-black/40 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-2.5 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium">NOVA Cloud</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setTime((t) => (t + 1) % (reduced ? 1 : 24))
              }
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-white"
            >
              {reduced ? "12:00" : `${time}:00`}
            </button>
            <button
              type="button"
              className="rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-[#060607] transition hover:bg-white/90"
            >
              Export
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto border-b border-white/10">
          <div
            ref={tabsRef}
            className="flex items-center gap-1 px-4 py-3"
            style={{
              opacity: reduced ? 1 : 0,
              transform: reduced ? undefined : "translate3d(0, 16px, 0)",
              transition: reduced ? undefined : "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    active === tab.id
                      ? "bg-white text-[#060607]"
                      : "text-muted-foreground hover:text-white"
                  )}
                >
                  <Icon className="size-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            {widgets.map((w) => (
              <Widget
                key={w.id}
                id={w.id}
                title={w.title}
                icon={w.icon}
                color={w.color}
                data={w.data}
                spark
              />
            ))}
            {charts.map((c) => (
              <Chart
                key={c.id}
                id={c.id}
                title={c.title}
                icon={c.icon}
                color={c.color}
                data={c.data}
              />
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-cyan-400">
                  <SunDim className="size-4" />
                </span>
                <div>
                  <h3 className="text-sm font-medium">
                    Server health
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    All systems operational
                  </p>
                </div>
              </div>
              <span className="text-xs text-emerald-400">Healthy</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {["CPU", "Memory", "Disk"].map((m) => (
                <div key={m}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{m}</span>
                    <span className="font-medium">{Math.floor(Math.random() * 40 + 55)}%</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all"
                      style={{ width: `${Math.floor(Math.random() * 40 + 55)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
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

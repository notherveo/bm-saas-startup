import Link from "next/link";

const links = {
  product: ["Features", "Pricing", "API", "Integrations"],
  company: ["About", "Blog", "Careers", "Partners"],
  legal: ["Privacy", "Terms", "Security"],
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050506]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-white text-[#060607] font-bold text-lg">
                N
              </span>
              <span className="text-lg font-semibold tracking-tight">NOVA</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI observability for engineering teams. Distributed tracing,
              logs, alerts and dashboards in one place.
            </p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold">{title}</h3>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-muted-foreground">
          <p>&copy; 2026 NOVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

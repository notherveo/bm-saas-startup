import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "NOVA · AI observability for engineering teams",
  description:
    "Distributed tracing, logs, alerts and dashboards in one place. Get a free plan.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-[#060607] text-white font-sans antialiased selection:bg-white/20 selection:text-white">
        <SiteHeader />
        <main className="flex min-h-screen flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // Generated sites may reference remote imagery (e.g. picsum.photos). Allow any
  // https host so `next/image` never breaks a build.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: "/:locale(en|es)/services/lifecycle-marketing", destination: "/:locale/services/email-marketing", permanent: true },
      { source: "/:locale(en|es)/services/paid-media", destination: "/:locale/services/meta-advertising", permanent: true },
    ];
  },
};

export default nextConfig;

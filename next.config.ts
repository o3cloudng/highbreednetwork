import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles image optimisation natively — no external loader needed
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable strict mode for React
  reactStrictMode: true,
};

export default nextConfig;

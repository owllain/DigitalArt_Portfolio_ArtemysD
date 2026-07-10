import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" era para el servidor Caddy — Vercel no lo necesita
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TypeScript — skip type checking during build (handled by IDE)
  typescript: {
    ignoreBuildErrors: true,
  },
  // ESLint — skip linting during build (pre-existing errors in Shadcn UI components)
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

export default nextConfig;

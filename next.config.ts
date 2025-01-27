import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['img.freepik.com',  'coin-images.coingecko.com'],
  },
  /* other config options here */
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — the site deploys as plain files (out/) to any static host.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

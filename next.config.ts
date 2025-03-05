import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains:['cdn.imagin.studio']
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig

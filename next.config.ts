import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
  images: {
    domains: ["f005.backblazeb2.com"],
  },
  basePath: "/realestate",
};

export default nextConfig;

import { BASE_PATH } from "@/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
  images: {
    domains: ["f005.backblazeb2.com"],
  },
  basePath: BASE_PATH,
  assetPrefix:`${BASE_PATH}/`
};

export default nextConfig;

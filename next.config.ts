import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://res.cloudinary.com/dcmdurre4/image/upload/***/**"),
    ],
  },
};

export default nextConfig;

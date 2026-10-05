import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home2",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

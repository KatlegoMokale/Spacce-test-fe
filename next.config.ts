import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Required for Azure Web Apps
  images: {
    domains: ["*"], // Replace with your production domain
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "file-loader", // Replace raw-loader with file-loader
    });
    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  },
};

export default withNextVideo(nextConfig);

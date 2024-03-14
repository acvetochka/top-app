/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["courses-top.ru", "old-images.hb.ru-msk.vkcs.cloud", "courses-top.ruhttps"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;

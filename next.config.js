/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["http.cat"],
  },
};

module.exports = nextConfig;

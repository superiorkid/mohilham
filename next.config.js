/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["http.cat", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;

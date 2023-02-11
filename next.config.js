/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "tailwindui.com", "images.unsplash.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;

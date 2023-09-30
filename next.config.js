/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);

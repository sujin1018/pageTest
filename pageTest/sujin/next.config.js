/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production';
const repository = 'pageTest';

const nextConfig = {
  basePath: '/pageTest',
  reactStrictMode: false,
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    loader: 'imgix',
    unoptimized: true,
    path: 'https://sujin1018.github.io/pageTest'
  },
}

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://sujin1018.github.io/pageTest"
    : "";

module.exports = nextConfig
module.exports = prefix

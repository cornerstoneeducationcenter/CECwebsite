/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'default',
    domains: ['localhost'],
  },
  basePath: '/CECwebsite',
  assetPrefix: '/CECwebsite',
}

module.exports = nextConfig

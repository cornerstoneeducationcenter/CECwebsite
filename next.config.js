/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/CECwebsite',
  assetPrefix: '/CECwebsite',
}

module.exports = nextConfig

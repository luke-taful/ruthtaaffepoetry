const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: isProd ? '/rtp/' : '',
}

export default nextConfig

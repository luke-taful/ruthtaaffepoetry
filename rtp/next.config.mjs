const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/ruthtaaffepoetry' : '',
  assetPrefix: isProd ? '/ruthtaaffepoetry/' : '',
}

export default nextConfig

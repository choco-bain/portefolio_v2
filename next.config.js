/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/portefolio_v2' : '',
  assetPrefix: isProd ? '/portefolio_v2/' : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

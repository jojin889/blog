/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    domains:["links.papareact.com", "cdn.sanity.io"]
  }
}

module.exports = nextConfig

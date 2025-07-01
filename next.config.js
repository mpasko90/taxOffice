/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  async redirects() {
    return [
      // Redirect old English paths to Polish equivalents
      {
        source: '/about',
        destination: '/o-nas',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/kontakt',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/uslugi',
        permanent: true,
      },
      // Redirect dynamic service pages from /service to /uslugi
      {
        source: '/service/:serviceSlug*',
        destination: '/uslugi/:serviceSlug*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 
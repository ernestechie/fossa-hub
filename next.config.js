/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.propertypro.ng',
      },
    ],
  },
};

module.exports = nextConfig;

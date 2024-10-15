/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.nmcms.ru',
        pathname: '/resources/catalog/images/**',
      },
    ],
  },
};

export default nextConfig;

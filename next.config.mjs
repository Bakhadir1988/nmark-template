/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.dirname('styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.nmcms.ru',
        pathname: '/resources/catalog/images/**',
      },
    ]
  },
};

export default nextConfig;

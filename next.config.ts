import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // remote pattern for images in github
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        search: '?v=4',
      },
      // TODO: implement the remote pattern for images on google
    ],
  },
};

export default nextConfig;

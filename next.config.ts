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
      // remote pattern for images in google
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;

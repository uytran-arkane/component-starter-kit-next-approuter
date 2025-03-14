import { NextConfig } from 'next';
import { withUniformConfig } from '@uniformdev/canvas-next-rsc/config';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '*' }],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
  },
  publicRuntimeConfig: {
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
  },
};

export default withUniformConfig(nextConfig);

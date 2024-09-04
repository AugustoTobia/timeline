/** @type {import('next').NextConfig} */

const nextConfig = {
	i18n: {
		debug: process.env.NODE_ENV === 'development',
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
	images: {
		formats: ['image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
};

export default nextConfig;

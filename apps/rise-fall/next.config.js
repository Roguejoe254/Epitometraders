/** @type {import('next').NextConfig} */
const suffix = process.env.BASE44_PUBLIC_HOST_SUFFIX ?? '';

const nextConfig = {
  transpilePackages: ['@deriv/core'],
  basePath: '/rise-fall',
  allowedDevOrigins: suffix ? [`https://3000-${suffix}`] : [],
};

module.exports = nextConfig;

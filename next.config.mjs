/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [], // We only use local images in /public
  },
};
export default nextConfig;

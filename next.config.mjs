/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['c10.patreonusercontent.com'],
        domains: ['images.pexels.com'],
    },
};

export default nextConfig;

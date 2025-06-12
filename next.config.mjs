/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['c10.patreonusercontent.com'],
    },
};

export default nextConfig;

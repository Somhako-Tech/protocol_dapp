/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [{ source: "/docs", destination: "/index.html" }];
    },
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "avatars.githubusercontent.com",
            "gateway.pinata.cloud",
        ],
    },
};

module.exports = nextConfig;

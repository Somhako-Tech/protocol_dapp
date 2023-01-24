/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [{ source: "/docs", destination: "/html/docs.html" }];
    },
};

module.exports = nextConfig;

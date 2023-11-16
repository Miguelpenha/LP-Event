/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            { hostname: 'www.datocms-assets.com' }
        ]
    }
}

module.exports = nextConfig
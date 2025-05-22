import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    trailingSlash: false,
    output: 'standalone',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.(ts|tsx|js|jsx|md|mdx)$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.voicecoin.co',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;

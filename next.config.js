/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  // webpack: (config, { isServer }) => {
  //       if (!isServer) {
  //       config.node = {
  //       fs: 'empty'
  //           }
  //     }
  //   return config
  // },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  target: 'serverless',
})

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

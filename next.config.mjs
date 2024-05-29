/** @type {import('next').NextConfig} */
const nextConfig = {
     swcMinify: true,
  swcLoaderOptions: {
    jsc: {
      transform: {
        react: {
          throwIfNamespace: false,
        },
      },
    },
  },
};

export default nextConfig;

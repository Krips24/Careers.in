/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "3vcfywqjeme2stab.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;

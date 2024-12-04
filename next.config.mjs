/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["fakestoreapi.com"],
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;

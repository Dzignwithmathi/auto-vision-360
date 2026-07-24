/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Swap in real remote patterns once final renders/photography are hosted.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

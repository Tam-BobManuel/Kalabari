/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa"

const withPWA = withPWAInit({
    dest: "public",
});

const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'unsplash.com', 'plus.unsplash.com'],
      },
};

export default withPWA(nextConfig);

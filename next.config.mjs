/**
 * Next.js settings. Nothing site-specific lives here; use the files in config/ to customize the site.
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Qualities used by <Image quality={...}> in the app. Next only allows values listed here.
    qualities: [75, 80, 85],
  },
};

export default nextConfig;

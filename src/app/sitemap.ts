import type { MetadataRoute } from "next";

const SITE_URL = "https://kalabari.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "yearly", priority: 1 },
    { url: `${SITE_URL}/photos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/names`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE_URL}/history/kalabari/regions`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${SITE_URL}/history/`, changeFrequency: "daily", priority: 0.5 },
  ];
}

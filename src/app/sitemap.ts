import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kalabari.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://kalabari.vercel.app/photos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }, {
        url: 'https://kalabari.vercel.app/names',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    {
      url: 'https://kalabari.vercel.app/history/kalabari/regions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
        url: 'https://kalabari.vercel.app/history/',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.5,
      }
  ]
}
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://uno-plast.com',
    },
    {
      url: 'https://uno-plast.com/products',
    },
    {
      url: 'https://uno-plast.com/about-us',
    },
    {
      url: 'https://uno-plast.com/contact-us',
    },
    {
      url: 'https://uno-plast.com/distributors',
    }
  ]
}
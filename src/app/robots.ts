import { MetadataRoute } from 'next';
import { companyConfig } from '@/config/company';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = companyConfig.seo.siteUrl;

  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/faq',
    '/careers',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }));

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...serviceUrls];
}
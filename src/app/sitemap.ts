import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
    const host = siteConfig.domain || 'localhost';

    const staticPages = [
        '',
        '/about',
        '/projects',
        '/contact',
    ];

    return staticPages.map((path) => ({
        url: `https://${host}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
    }));
}

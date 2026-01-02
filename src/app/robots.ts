import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export default function robots(): MetadataRoute.Robots {
    const host = siteConfig.domain || 'localhost';
    return {
        rules: {
            userAgent: '*',
            allow: [
                '/api/razorpay',
                '/api/payment',
                '/api/webhook',
                '/verify',
                '/payments',
            ],
            disallow: '',
        },
        sitemap: `https://${host}/sitemap.xml`,
    };
}

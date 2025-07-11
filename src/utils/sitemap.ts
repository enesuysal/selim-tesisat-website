import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

interface SitemapUrl {
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
}

const sitemapUrls: SitemapUrl[] = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString()
  },
  {
    url: '/hizmetler',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString()
  },
  {
    url: '/hakkimizda',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString()
  },
  {
    url: '/iletisim',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  }
];

export const createSitemap = async (): Promise<string> => {
  const stream = new SitemapStream({ 
    hostname: 'https://selimtesisat.com',
    cacheTime: 600000, // 10 minutes
    xmlns: {
      news: false,
      xhtml: false,
      image: false,
      video: false
    }
  });

  const xmlString = await streamToPromise(Readable.from(sitemapUrls).pipe(stream));
  return xmlString.toString();
};

export const generateRobotsTxt = (hostname: string): string => {
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*

# Sitemap
Sitemap: ${hostname}/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Yandex
Allow: /
Crawl-delay: 1`;
};
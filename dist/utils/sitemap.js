"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRobotsTxt = exports.createSitemap = void 0;
const sitemap_1 = require("sitemap");
const stream_1 = require("stream");
const sitemapUrls = [
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
        url: '/referanslar',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
    },
    {
        url: '/galeri',
        changefreq: 'weekly',
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
const createSitemap = async () => {
    const stream = new sitemap_1.SitemapStream({
        hostname: 'https://selimtesisat.com',
        xmlns: {
            news: false,
            xhtml: false,
            image: false,
            video: false
        }
    });
    const xmlString = await (0, sitemap_1.streamToPromise)(stream_1.Readable.from(sitemapUrls).pipe(stream));
    return xmlString.toString();
};
exports.createSitemap = createSitemap;
const generateRobotsTxt = (hostname) => {
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
exports.generateRobotsTxt = generateRobotsTxt;
//# sourceMappingURL=sitemap.js.map
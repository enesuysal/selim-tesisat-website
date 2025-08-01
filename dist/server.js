"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const sitemap_1 = require("./utils/sitemap");
const contact_1 = require("./routes/contact");
const data_1 = require("./routes/data");
const database_1 = require("./config/database");
const models_1 = require("./models");
dotenv_1.default.config();
(0, database_1.connectDB)();
const app = (0, express_1.default)();
const PORT = process.env['PORT'] || 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.use((0, helmet_1.default)({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "http:", "https:", "*"],
        },
    },
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use('/api/contact', contact_1.contactRouter);
app.use('/api/data', data_1.dataRouter);
app.get('/sitemap.xml', async (req, res) => {
    try {
        const sitemap = await (0, sitemap_1.createSitemap)();
        res.header('Content-Type', 'application/xml');
        res.send(sitemap);
    }
    catch (error) {
        res.status(500).send('Error generating sitemap');
    }
});
app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: ${req.protocol}://${req.get('host')}/sitemap.xml`);
});
app.get('/', async (req, res) => {
    try {
        const [services, contactInfo, heroContent, whyChoose, cta, siteInfo, servicesData] = await Promise.all([
            models_1.Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).limit(6),
            models_1.ContactInfo.findOne(),
            models_1.HeroContent.findOne(),
            models_1.WhyChoose.findOne(),
            models_1.CTA.findOne(),
            models_1.SiteInfo.findOne(),
            models_1.ServicesPage.findOne()
        ]);
        res.render('index', {
            services: services || [],
            contactInfo,
            heroContent,
            whyChoose,
            cta,
            siteInfo,
            servicesData
        });
    }
    catch (error) {
        console.error('Error loading homepage:', error);
        try {
            const [contactInfo, siteInfo] = await Promise.all([
                models_1.ContactInfo.findOne(),
                models_1.SiteInfo.findOne()
            ]);
            res.status(500).render('error', { contactInfo, siteInfo });
        }
        catch (renderError) {
            res.status(500).sendFile(path_1.default.join(__dirname, '../public/error.html'));
        }
    }
});
app.get('/hizmetler', async (req, res) => {
    try {
        const [allServices, contactInfo, servicesPage, siteInfo, seoPage] = await Promise.all([
            models_1.Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 }),
            models_1.ContactInfo.findOne(),
            models_1.ServicesPage.findOne(),
            models_1.SiteInfo.findOne(),
            models_1.SeoPage.findOne({ page: 'services' })
        ]);
        const urgentServices = allServices.filter(service => service.category === 'urgent');
        const regularServices = allServices.filter(service => service.category === 'regular');
        res.render('services', {
            services: allServices || [],
            urgentServices,
            regularServices,
            contactInfo,
            servicesPage,
            siteInfo,
            seoPage
        });
    }
    catch (error) {
        console.error('Error loading services page:', error);
        try {
            const [contactInfo, siteInfo] = await Promise.all([
                models_1.ContactInfo.findOne(),
                models_1.SiteInfo.findOne()
            ]);
            res.status(500).render('error', { contactInfo, siteInfo });
        }
        catch (renderError) {
            res.status(500).sendFile(path_1.default.join(__dirname, '../public/error.html'));
        }
    }
});
app.get('/galeri', async (req, res) => {
    try {
        const [gallery, galleryPage, contactInfo, siteInfo, services] = await Promise.all([
            models_1.Gallery.find({ isActive: true }).sort({ featured: -1, order: 1, createdAt: -1 }),
            models_1.GalleryPage.findOne(),
            models_1.ContactInfo.findOne(),
            models_1.SiteInfo.findOne(),
            models_1.Service.find({ isActive: true }).sort({ order: 1 }).limit(6)
        ]);
        res.render('gallery-simple', {
            gallery: gallery || [],
            galleryPage,
            contactInfo,
            siteInfo,
            services: services || []
        });
    }
    catch (error) {
        console.error('Error loading gallery page:', error);
        try {
            const [contactInfo, siteInfo] = await Promise.all([
                models_1.ContactInfo.findOne(),
                models_1.SiteInfo.findOne()
            ]);
            res.status(500).render('error', { contactInfo, siteInfo });
        }
        catch (renderError) {
            res.status(500).sendFile(path_1.default.join(__dirname, '../public/error.html'));
        }
    }
});
app.get('/referanslar', async (req, res) => {
    try {
        const [portfolio, portfolioPage, contactInfo, siteInfo, services] = await Promise.all([
            models_1.Portfolio.find({ isActive: true }).sort({ featured: -1, order: 1, createdAt: -1 }),
            models_1.PortfolioPage.findOne(),
            models_1.ContactInfo.findOne(),
            models_1.SiteInfo.findOne(),
            models_1.Service.find({ isActive: true }).sort({ order: 1 }).limit(6)
        ]);
        res.render('portfolio', {
            portfolio: portfolio || [],
            portfolioPage,
            contactInfo,
            siteInfo,
            services: services || []
        });
    }
    catch (error) {
        console.error('Error loading portfolio page:', error);
        try {
            const [contactInfo, siteInfo] = await Promise.all([
                models_1.ContactInfo.findOne(),
                models_1.SiteInfo.findOne()
            ]);
            res.status(500).render('error', { contactInfo, siteInfo });
        }
        catch (renderError) {
            res.status(500).sendFile(path_1.default.join(__dirname, '../public/error.html'));
        }
    }
});
app.get('/api/portfolio/:id', async (req, res) => {
    try {
        const project = await models_1.Portfolio.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        return res.json(project);
    }
    catch (error) {
        console.error('Error fetching project:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/hakkimizda', async (req, res) => {
    try {
        const [aboutPage, contactInfo, siteInfo] = await Promise.all([
            models_1.AboutPage.findOne(),
            models_1.ContactInfo.findOne(),
            models_1.SiteInfo.findOne()
        ]);
        res.render('about', {
            aboutPage,
            contactInfo,
            siteInfo
        });
    }
    catch (error) {
        console.error('Error loading about page:', error);
        try {
            const [contactInfo, siteInfo] = await Promise.all([
                models_1.ContactInfo.findOne(),
                models_1.SiteInfo.findOne()
            ]);
            res.status(500).render('error', { contactInfo, siteInfo });
        }
        catch (renderError) {
            res.status(500).sendFile(path_1.default.join(__dirname, '../public/error.html'));
        }
    }
});
app.get('/iletisim', async (req, res) => {
    try {
        const [contactPage, contactInfo, siteInfo, services, servicesPage] = await Promise.all([
            models_1.ContactPage.findOne(),
            models_1.ContactInfo.findOne(),
            models_1.SiteInfo.findOne(),
            models_1.Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 }),
            models_1.ServicesPage.findOne()
        ]);
        res.render('contact', {
            contactPage,
            contactInfo,
            siteInfo,
            services: services || [],
            servicesPage
        });
    }
    catch (error) {
        console.error('Error loading contact page:', error);
        try {
            const [contactInfo, siteInfo] = await Promise.all([
                models_1.ContactInfo.findOne(),
                models_1.SiteInfo.findOne()
            ]);
            res.status(500).render('error', { contactInfo, siteInfo });
        }
        catch (renderError) {
            res.status(500).sendFile(path_1.default.join(__dirname, '../public/error.html'));
        }
    }
});
app.get('/admin', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/admin.html'));
});
app.use(async (req, res) => {
    try {
        const [contactInfo, siteInfo] = await Promise.all([
            models_1.ContactInfo.findOne(),
            models_1.SiteInfo.findOne()
        ]);
        res.status(404).render('404', { contactInfo, siteInfo });
    }
    catch (error) {
        console.error('Error rendering 404 page:', error);
        res.status(404).sendFile(path_1.default.join(__dirname, '../public/404.html'));
    }
});
app.use(async (err, req, res, next) => {
    console.error(err.stack);
    try {
        const [contactInfo, siteInfo] = await Promise.all([
            models_1.ContactInfo.findOne(),
            models_1.SiteInfo.findOne()
        ]);
        res.status(500).render('error', { contactInfo, siteInfo });
    }
    catch (renderError) {
        console.error('Error rendering error page:', renderError);
        res.status(500).sendFile(path_1.default.join(__dirname, '../public/error.html'));
    }
});
app.listen(PORT, () => {
    console.log(`SELİM Tesisat website running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map
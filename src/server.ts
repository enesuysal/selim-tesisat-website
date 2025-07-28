import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import path from 'path';
import dotenv from 'dotenv';
import { createSitemap } from './utils/sitemap';
import { contactRouter } from './routes/contact';
import { dataRouter } from './routes/data';
import { seoMiddleware } from './middleware/seo';
import { connectDB } from './config/database';
import { Service, ContactInfo, HeroContent, WhyChoose, CTA, SiteInfo, AboutPage, ContactPage, ServicesPage, SeoPage, Portfolio, PortfolioPage, Gallery, GalleryPage } from './models';

dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env['PORT'] || 3000;

// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "http:", "https:", "*"], // Allow all image sources
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);
// app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// SEO middleware
// app.use(seoMiddleware);

// Routes
app.use('/api/contact', contactRouter);
app.use('/api/data', dataRouter);

// Sitemap
app.get('/sitemap.xml', async (req, res) => {
  try {
    const sitemap = await createSitemap();
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    res.status(500).send('Error generating sitemap');
  }
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: ${req.protocol}://${req.get('host')}/sitemap.xml`);
});

// Main routes
app.get('/', async (req, res) => {
  try {
    const [services, contactInfo, heroContent, whyChoose, cta, siteInfo, servicesData] = await Promise.all([
      Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).limit(6),
      ContactInfo.findOne(),
      HeroContent.findOne(),
      WhyChoose.findOne(),
      CTA.findOne(),
      SiteInfo.findOne(),
      ServicesPage.findOne()
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
  } catch (error) {
    console.error('Error loading homepage:', error);
    try {
      const [contactInfo, siteInfo] = await Promise.all([
        ContactInfo.findOne(),
        SiteInfo.findOne()
      ]);
      res.status(500).render('error', { contactInfo, siteInfo });
    } catch (renderError) {
      res.status(500).sendFile(path.join(__dirname, '../public/error.html'));
    }
  }
});

app.get('/hizmetler', async (req, res) => {
  try {
    const [allServices, contactInfo, servicesPage, siteInfo, seoPage] = await Promise.all([
      Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 }),
      ContactInfo.findOne(),
      ServicesPage.findOne(),
      SiteInfo.findOne(),
      SeoPage.findOne({ page: 'services' })
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
  } catch (error) {
    console.error('Error loading services page:', error);
    try {
      const [contactInfo, siteInfo] = await Promise.all([
        ContactInfo.findOne(),
        SiteInfo.findOne()
      ]);
      res.status(500).render('error', { contactInfo, siteInfo });
    } catch (renderError) {
      res.status(500).sendFile(path.join(__dirname, '../public/error.html'));
    }
  }
});

app.get('/galeri', async (req, res) => {
  try {
    const [gallery, galleryPage, contactInfo, siteInfo, services] = await Promise.all([
      Gallery.find({ isActive: true }).sort({ featured: -1, order: 1, createdAt: -1 }),
      GalleryPage.findOne(),
      ContactInfo.findOne(),
      SiteInfo.findOne(),
      Service.find({ isActive: true }).sort({ order: 1 }).limit(6)
    ]);

    res.render('gallery-simple', { 
      gallery: gallery || [],
      galleryPage,
      contactInfo,
      siteInfo,
      services: services || []
    });
  } catch (error) {
    console.error('Error loading gallery page:', error);
    try {
      const [contactInfo, siteInfo] = await Promise.all([
        ContactInfo.findOne(),
        SiteInfo.findOne()
      ]);
      res.status(500).render('error', { contactInfo, siteInfo });
    } catch (renderError) {
      res.status(500).sendFile(path.join(__dirname, '../public/error.html'));
    }
  }
});

app.get('/referanslar', async (req, res) => {
  try {
    const [portfolio, portfolioPage, contactInfo, siteInfo, services] = await Promise.all([
      Portfolio.find({ isActive: true }).sort({ featured: -1, order: 1, createdAt: -1 }),
      PortfolioPage.findOne(),
      ContactInfo.findOne(),
      SiteInfo.findOne(),
      Service.find({ isActive: true }).sort({ order: 1 }).limit(6)
    ]);

    res.render('portfolio', { 
      portfolio: portfolio || [],
      portfolioPage,
      contactInfo,
      siteInfo,
      services: services || []
    });
  } catch (error) {
    console.error('Error loading portfolio page:', error);
    try {
      const [contactInfo, siteInfo] = await Promise.all([
        ContactInfo.findOne(),
        SiteInfo.findOne()
      ]);
      res.status(500).render('error', { contactInfo, siteInfo });
    } catch (renderError) {
      res.status(500).sendFile(path.join(__dirname, '../public/error.html'));
    }
  }
});

app.get('/hakkimizda', async (req, res) => {
  try {
    const [aboutPage, contactInfo, siteInfo] = await Promise.all([
      AboutPage.findOne(),
      ContactInfo.findOne(),
      SiteInfo.findOne()
    ]);

    res.render('about', { 
      aboutPage,
      contactInfo,
      siteInfo
    });
  } catch (error) {
    console.error('Error loading about page:', error);
    try {
      const [contactInfo, siteInfo] = await Promise.all([
        ContactInfo.findOne(),
        SiteInfo.findOne()
      ]);
      res.status(500).render('error', { contactInfo, siteInfo });
    } catch (renderError) {
      res.status(500).sendFile(path.join(__dirname, '../public/error.html'));
    }
  }
});

app.get('/iletisim', async (req, res) => {
  try {
    const [contactPage, contactInfo, siteInfo, services] = await Promise.all([
      ContactPage.findOne(),
      ContactInfo.findOne(),
      SiteInfo.findOne(),
      Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 })
    ]);

    res.render('contact', { 
      contactPage,
      contactInfo,
      siteInfo,
      services: services || []
    });
  } catch (error) {
    console.error('Error loading contact page:', error);
    try {
      const [contactInfo, siteInfo] = await Promise.all([
        ContactInfo.findOne(),
        SiteInfo.findOne()
      ]);
      res.status(500).render('error', { contactInfo, siteInfo });
    } catch (renderError) {
      res.status(500).sendFile(path.join(__dirname, '../public/error.html'));
    }
  }
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin.html'));
});

// 404 handler
app.use(async (req, res) => {
  try {
    const [contactInfo, siteInfo] = await Promise.all([
      ContactInfo.findOne(),
      SiteInfo.findOne()
    ]);
    res.status(404).render('404', { contactInfo, siteInfo });
  } catch (error) {
    console.error('Error rendering 404 page:', error);
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
  }
});

// Error handler
app.use(async (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  try {
    const [contactInfo, siteInfo] = await Promise.all([
      ContactInfo.findOne(),
      SiteInfo.findOne()
    ]);
    res.status(500).render('error', { contactInfo, siteInfo });
  } catch (renderError) {
    console.error('Error rendering error page:', renderError);
    res.status(500).sendFile(path.join(__dirname, '../public/error.html'));
  }
});

app.listen(PORT, () => {
  console.log(`SELİM Tesisat website running on port ${PORT}`);
});

export default app;
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import path from 'path';
import dotenv from 'dotenv';
import { createSitemap } from './utils/sitemap';
import { contactRouter } from './routes/contact';
import { seoMiddleware } from './middleware/seo';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
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
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// SEO middleware
app.use(seoMiddleware);

// Routes
app.use('/api/contact', contactRouter);

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
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/hizmetler', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/services.html'));
});

app.get('/hakkimizda', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

app.get('/iletisim', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, '../public/error.html'));
});

app.listen(PORT, () => {
  console.log(`Selim Tesisat website running on port ${PORT}`);
});

export default app;
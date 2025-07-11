# Selim Sıhhi Tesisat ve Tamirat Website

Professional plumbing services website built with Node.js, TypeScript, and Docker. Optimized for SEO and Google search ranking.

## 🚀 Features

- **SEO Optimized**: Meta tags, structured data, sitemap, robots.txt
- **Performance**: Compression, caching, lazy loading
- **Responsive Design**: Mobile-first responsive layout
- **Security**: Helmet.js, rate limiting, input validation
- **Contact System**: Email forms with validation and auto-reply
- **Docker Support**: Complete containerization with Docker Compose
- **TypeScript**: Full type safety and modern development
- **Turkish Localization**: Optimized for Turkish market and keywords

## 🛠 Tech Stack

- **Backend**: Node.js + Express + TypeScript
- **Frontend**: Vanilla HTML/CSS/JS (optimized for performance)
- **Email**: Nodemailer with SMTP
- **Containerization**: Docker + Docker Compose
- **Security**: Helmet, Rate Limiting, Input Validation
- **SEO Tools**: Sitemap generation, Meta tags, Structured data

## 🏗 Project Structure

```
selim-tesisat-website/
├── src/
│   ├── server.ts              # Main server file
│   ├── routes/
│   │   └── contact.ts         # Contact form routes
│   ├── middleware/
│   │   └── seo.ts            # SEO middleware
│   └── utils/
│       └── sitemap.ts        # Sitemap generation
├── public/
│   ├── index.html            # Homepage
│   ├── css/
│   │   └── styles.css        # Main styles with logo colors
│   ├── js/
│   │   └── main.js          # Frontend JavaScript
│   └── images/              # Images and assets
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose setup
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── .env.example           # Environment variables template
```

## 🚀 Quick Start

### 1. Clone and Setup

```bash
git clone <repository-url>
cd selim-tesisat-website
cp .env.example .env
```

### 2. Configure Environment

Edit `.env` file with your settings:

```bash
# Email Configuration (Gmail App Password recommended)
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password
CONTACT_EMAIL=info@selimtesisat.com

# Domain
DOMAIN=your-domain.com
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Development Mode

```bash
npm run dev
```

### 5. Production with Docker

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t selim-tesisat .
docker run -p 3000:3000 --env-file .env selim-tesisat
```

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication on Gmail
2. Generate App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App Passwords
   - Generate password for "Mail"
3. Use the 16-digit app password in `.env`

## 🎨 Design & Colors

The website uses your logo's color scheme:
- **Primary Blue**: `#0ea5e9` (from water drop)
- **Secondary Purple**: `#7c3aed` (from text)
- **Gradient**: Combined blue-to-purple gradients

## 📈 SEO Features

### Technical SEO
- ✅ Meta titles and descriptions
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Fast loading times
- ✅ Mobile-responsive
- ✅ SSL-ready

### Content SEO
- ✅ Turkish keyword optimization
- ✅ Local Istanbul targeting
- ✅ Service-specific landing pages
- ✅ Schema.org LocalBusiness markup
- ✅ Breadcrumb navigation

### Key Target Keywords
- tesisatçı istanbul
- su kaçağı tamiri
- tıkanıklık açma
- kombi tamiri
- banyo tadilat
- mutfak tadilat
- acil tesisatçı
- sıhhi tesisat

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `production` |
| `PORT` | Server port | `3000` |
| `SMTP_HOST` | Email server | `smtp.gmail.com` |
| `SMTP_USER` | Email username | `your-email@gmail.com` |
| `SMTP_PASS` | Email password | `app-password` |
| `CONTACT_EMAIL` | Contact recipient | `info@selimtesisat.com` |
| `DOMAIN` | Your domain | `selimtesisat.com` |

### Performance Optimizations

- Compression middleware
- Static file caching
- Image lazy loading
- Minified CSS/JS
- CDN-ready structure

## 📱 Pages Included

1. **Ana Sayfa** (`/`) - Homepage with hero, services, CTA
2. **Hizmetler** (`/hizmetler`) - Services detailed page
3. **Hakkımızda** (`/hakkimizda`) - About page
4. **İletişim** (`/iletisim`) - Contact page with form

## 🛡 Security Features

- Helmet.js for security headers
- Rate limiting on API endpoints
- Input validation and sanitization
- CSRF protection ready
- XSS protection
- Content Security Policy

## 📊 Analytics Ready

The template is ready for:
- Google Analytics 4
- Google Tag Manager
- Google Search Console
- Facebook Pixel (if needed)

Add your tracking IDs to `.env`:

```bash
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
```

## 🚀 Deployment

### Docker Deployment

```bash
# Production deployment
docker-compose -f docker-compose.yml up -d

# With custom environment
docker-compose --env-file .env.production up -d
```

### Manual Deployment

```bash
# Build TypeScript
npm run build

# Start production server
npm start
```

### Nginx Configuration (Included)

The project includes nginx configuration for:
- SSL termination
- Static file serving
- Gzip compression
- Security headers

## 📈 SEO Checklist

### Before Going Live:
- [ ] Update contact information in footer
- [ ] Add real phone number and email
- [ ] Configure SMTP settings
- [ ] Add Google Analytics
- [ ] Submit sitemap to Search Console
- [ ] Set up Google My Business
- [ ] Add real business address
- [ ] Optimize images with alt tags
- [ ] Test contact form
- [ ] Configure SSL certificate
- [ ] Set up redirects (www to non-www)

### Content Updates:
- [ ] Add real service descriptions
- [ ] Include customer testimonials
- [ ] Add before/after photos
- [ ] Create service area pages
- [ ] Add FAQ section
- [ ] Include service pricing
- [ ] Add emergency contact banner

## 🔍 Local SEO Tips

1. **Google My Business**: Create and optimize listing
2. **Local Citations**: Add business to local directories
3. **Reviews**: Encourage customer reviews
4. **Local Keywords**: Include neighborhood names
5. **Contact Info**: Keep NAP consistent everywhere

## 📞 Support

For technical support or customization:
- Check documentation in `/docs` folder
- Review environment variables
- Test email configuration
- Verify Docker setup

## 📄 License

MIT License - feel free to customize for your business needs.

---

**Selim Sıhhi Tesisat ve Tamirat** - *Kalite de Tanışın...*
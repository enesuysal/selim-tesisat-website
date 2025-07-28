import mongoose from 'mongoose';

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'editor'], default: 'admin' },
  lastLogin: { type: Date },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

// Service Schema
const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  icon: { type: String, required: true },
  features: [{ type: String }],
  category: { type: String, enum: ['urgent', 'regular'], default: 'regular' },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export const Service = mongoose.model('Service', serviceSchema);

// Contact Info Schema
const contactInfoSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  workingHours: { type: String, required: true },
  emergencyPhone: { type: String },
  whatsapp: { type: String },
}, { timestamps: true });

export const ContactInfo = mongoose.model('ContactInfo', contactInfoSchema);

// Hero Content Schema
const heroContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  buttonText: { type: String, default: 'Hemen Ara' },
  buttonLink: { type: String, default: 'tel:+905551234567' },
  backgroundImage: { type: String },
}, { timestamps: true });

export const HeroContent = mongoose.model('HeroContent', heroContentSchema);

// SEO Pages Schema
const seoPageSchema = new mongoose.Schema({
  path: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  keywords: { type: String, required: true },
  canonical: { type: String, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const SeoPage = mongoose.model('SeoPage', seoPageSchema);

// Site Info Schema
const siteInfoSchema = new mongoose.Schema({
  siteName: { type: String, required: true },
  tagline: { type: String },
  description: { type: String, required: true },
  logo: { type: String, default: '/images/selim-logo.png' },
  footerText: { type: String }
}, { timestamps: true });

export const SiteInfo = mongoose.model('SiteInfo', siteInfoSchema);

// About Page Schema
const aboutPageSchema = new mongoose.Schema({
  heroTitle: { type: String, required: true },
  heroSubtitle: { type: String, required: true },
  heroDescription: { type: String, required: true },
  heroImage: { type: String, default: '/images/anton-savinov-lDwKKjlHL2Y-unsplash.jpg' },
  
  // Mission & Vision
  missionTitle: { type: String, default: 'Misyonumuz' },
  missionDescription: { type: String, required: true },
  missionImage: { type: String, default: '/images/team-evelo-XTstePKvIro-unsplash.jpg' },
  
  visionTitle: { type: String, default: 'Vizyonumuz' },
  visionDescription: { type: String, required: true },
  visionImage: { type: String, default: '/images/pexels-kseniachernaya-5691536.jpg' },
  
  // Stats
  statsTitle: { type: String, default: 'Rakamlarla Biz' },
  stats: [{
    number: { type: String, required: true },
    label: { type: String, required: true }
  }],
  
  // Values
  valuesTitle: { type: String, default: 'Değerlerimiz' },
  values: [{
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  
  // Team
  teamTitle: { type: String, default: 'Ekibimiz' },
  teamMembers: [{
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    expertise: { type: String },
    image: { type: String }
  }],
  
  // Certifications
  certificationsTitle: { type: String, default: 'Sertifikalarımız & Yetkinliklerimiz' },
  certifications: [{
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  
  // Testimonials
  testimonialsTitle: { type: String, default: 'Müşteri Yorumları' },
  testimonials: [{
    text: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, default: '/images/pexels-bulat369-1243575272-32588548.jpg' }
  }],
  
  // CTA
  ctaTitle: { type: String, default: 'Bizimle Çalışmaya Hazır mısınız?' },
  ctaDescription: { type: String, required: true },
  ctaButtons: [{
    text: { type: String, required: true },
    link: { type: String, required: true },
    icon: { type: String }
  }]
}, { timestamps: true });

export const AboutPage = mongoose.model('AboutPage', aboutPageSchema);

// Why Choose Us Schema
const whyChooseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [{
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }]
}, { timestamps: true });

export const WhyChoose = mongoose.model('WhyChoose', whyChooseSchema);

// CTA Section Schema
const ctaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  primaryButtonText: { type: String, default: 'Hemen Ara' },
  primaryButtonLink: { type: String, default: 'tel:+905551234567' },
  secondaryButtonText: { type: String, default: 'İletişim Formu' },
  secondaryButtonLink: { type: String, default: '/iletisim' }
}, { timestamps: true });

export const CTA = mongoose.model('CTA', ctaSchema);

// Contact Page Schema
const contactPageSchema = new mongoose.Schema({
  heroTitle: { type: String, required: true },
  heroDescription: { type: String, required: true },
  heroImage: { type: String, default: '/images/stockvault-pipes-with-handle97235.jpg' },
  
  // Emergency Banner
  emergencyTitle: { type: String, default: '🚨 ACİL DURUM 🚨' },
  emergencyDescription: { type: String, required: true },
  emergencyPhone: { type: String, required: true },
  
  // Contact Info Section
  contactInfoTitle: { type: String, default: 'İletişim Bilgileri' },
  contactInfoImage: { type: String, default: '/images/nikkan-navidi-Y9xZc0PSTvo-unsplash.jpg' },
  responseTime: { type: String, default: '30 Dakika içinde' },
  
  // Contact Form
  formTitle: { type: String, default: 'İletişim Formu' },
  formDescription: { type: String, default: 'Tesisat sorunlarınız için hemen bizimle iletişime geçin.' },
  
  firstNameLabel: { type: String, default: 'Ad' },
  lastNameLabel: { type: String, default: 'Soyad' },
  phoneLabel: { type: String, default: 'Telefon' },
  emailLabel: { type: String, default: 'E-posta' },
  serviceLabel: { type: String, default: 'Hizmet Türü' },
  serviceSelectDefault: { type: String, default: 'Hizmet seçin...' },
  locationLabel: { type: String, default: 'Konum' },
  locationPlaceholder: { type: String, default: 'Bornova, İzmir' },
  messageLabel: { type: String, default: 'Mesajınız' },
  messagePlaceholder: { type: String, default: 'Sorunuzu detaylı bir şekilde açıklayın...' },
  submitButton: { type: String, default: 'Mesaj Gönder' },
  
  formServices: [{
    value: { type: String, required: true },
    label: { type: String, required: true }
  }],
  
  // Service Areas
  serviceAreasTitle: { type: String, default: 'Hizmet Verdiğimiz Bölgeler' },
  serviceAreasImage: { type: String, default: '/images/taylor-heery-M0lMY68aMfM-unsplash.jpg' },
  serviceAreas: [{ type: String }],
  
  // Footer
  footerSlogan: { type: String, default: 'Kalite ile Tanışın... 💧' }
}, { timestamps: true });

export const ContactPage = mongoose.model('ContactPage', contactPageSchema);

// Services Page Schema
const servicesPageSchema = new mongoose.Schema({
  // Hero Section
  heroTitle: { type: String, default: 'Hizmetlerimiz' },
  heroSubtitle: { type: String, default: 'Profesyonel Sıhhi Tesisat Çözümleri' },
  heroDescription: { type: String, default: 'İzmir\'de 15 yıllık tecrübemiz ile kaliteli ve güvenilir tesisat hizmetleri sunuyoruz. 7/24 acil servis ile yanınızdayız.' },
  emergencyText: { type: String, default: '🚨 ACİL DURUM' },
  
  // Process Section
  processTitle: { type: String, default: 'Çalışma Sürecimiz' },
  processSteps: [{
    number: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }],
  
  // Coverage Section
  coverageTitle: { type: String, default: 'Hizmet Verdiğimiz Bölgeler' },
  coverageDescription: { type: String, default: 'İzmir\'in tüm ilçelerinde hizmet veriyoruz' },
  serviceAreas: [{ type: String }],
  
  // Warranty Section
  warrantyTitle: { type: String, default: 'Garantili Hizmet' },
  warrantyDescription: { type: String, default: 'İşçiliğimize güveniyoruz, size de güven veriyoruz' },
  warrantyFeatures: [{
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }]
}, { timestamps: true });

export const ServicesPage = mongoose.model('ServicesPage', servicesPageSchema);

// Portfolio/References Schema
const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['su-kacagi', 'tikaniklik', 'kombi', 'tadilat', 'genel'], 
    required: true 
  },
  images: [{
    url: { type: String, required: true },
    alt: { type: String, required: true },
    isPrimary: { type: Boolean, default: false }
  }],
  location: { type: String, required: true },
  completionDate: { type: Date, required: true },
  clientName: { type: String }, // Optional for privacy
  projectDuration: { type: String }, // e.g., "2 gün", "1 hafta"
  materials: [{ type: String }], // Used materials
  challenges: { type: String }, // Challenges faced and how solved
  result: { type: String }, // Final result description
  isActive: { type: Boolean, default: true },
  featured: { type: Boolean, default: false }, // For homepage display
  order: { type: Number, default: 0 },
  tags: [{ type: String }], // For better filtering
  beforeImages: [{ 
    url: { type: String },
    alt: { type: String }
  }],
  afterImages: [{ 
    url: { type: String },
    alt: { type: String }
  }]
}, { timestamps: true });

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Portfolio Page Content Schema
const portfolioPageSchema = new mongoose.Schema({
  seoTitle: { type: String, default: 'Referans İşlerimiz | Selim Sıhhi Tesisat' },
  seoDescription: { type: String, default: 'Başarıyla tamamladığımız tesisat projeleri ve müşteri referansları. Kaliteli işçiliğimizin örneklerini inceleyin.' },
  seoKeywords: { type: String, default: 'referans işler, tesisat projeleri, müşteri yorumları, başarılı projeler' },
  pageTitle: { type: String, default: 'Referans İşlerimiz' },
  pageDescription: { type: String, default: 'Başarıyla tamamladığımız projeler ve memnun müşterilerimizin yorumları' },
  heroTitle: { type: String, default: 'Kaliteli İşçiliğimizin Kanıtı' },
  heroSubtitle: { type: String, default: 'Referans İşlerimiz' },
  heroDescription: { type: String, default: 'Yılların tecrübesi ve kaliteli malzeme kullanımıyla tamamladığımız başarılı projelerimizi inceleyin.' },
  categories: [{
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true }
  }],
  ctaTitle: { type: String, default: 'Projeniz İçin Teklif Alın' },
  ctaDescription: { type: String, default: 'Sizin de projenizi başarıyla tamamlayalım. Ücretsiz keşif için bizi arayın.' },
  ctaButtonText: { type: String, default: 'Ücretsiz Keşif' }
}, { timestamps: true });

export const PortfolioPage = mongoose.model('PortfolioPage', portfolioPageSchema);

// Gallery Schema
const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  thumbnailUrl: { type: String }, // Smaller version for grid display
  category: { 
    type: String, 
    enum: ['su-kacagi', 'tikaniklik', 'kombi', 'tadilat', 'genel', 'oncesi', 'sonrasi'], 
    required: true 
  },
  tags: [{ type: String }],
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' }, // Link to portfolio project
  isActive: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  location: { type: String },
  captureDate: { type: Date, default: Date.now },
  altText: { type: String, required: true }, // For SEO and accessibility
  dimensions: {
    width: { type: Number },
    height: { type: Number }
  },
  fileSize: { type: Number }, // in bytes
  photographer: { type: String, default: 'Selim Tesisat Ekibi' }
}, { timestamps: true });

export const Gallery = mongoose.model('Gallery', gallerySchema);

// Gallery Page Content Schema
const galleryPageSchema = new mongoose.Schema({
  seoTitle: { type: String, default: 'Galeri | Selim Sıhhi Tesisat' },
  seoDescription: { type: String, default: 'Tamamladığımız projelerin fotoğrafları, işçiliğimizin kalitesi ve müşteri memnuniyetinin görsel kanıtları.' },
  seoKeywords: { type: String, default: 'galeri, proje fotoğrafları, tesisat işleri, önce sonra, işçilik kalitesi' },
  pageTitle: { type: String, default: 'Galeri' },
  pageDescription: { type: String, default: 'Tamamladığımız projelerin fotoğrafları ve işçiliğimizin kalitesi' },
  heroTitle: { type: String, default: 'İşçiliğimizin Görsel Kanıtı' },
  heroSubtitle: { type: String, default: 'Proje Galerimiz' },
  heroDescription: { type: String, default: 'Yaptığımız işlerin kalitesini fotoğraflarla görün. Her projede aynı özenle çalışıyoruz.' },
  categories: [{
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true }
  }],
  ctaTitle: { type: String, default: 'Sizin Projeniz de Galerimizde Yer Alsın' },
  ctaDescription: { type: String, default: 'Kaliteli işçilik ve mükemmel sonuçlar için bize ulaşın.' },
  ctaButtonText: { type: String, default: 'Proje Başlat' }
}, { timestamps: true });

export const GalleryPage = mongoose.model('GalleryPage', galleryPageSchema);
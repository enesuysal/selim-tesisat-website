"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryPage = exports.Gallery = exports.PortfolioPage = exports.Portfolio = exports.ServicesPage = exports.ContactPage = exports.CTA = exports.WhyChoose = exports.AboutPage = exports.SiteInfo = exports.SeoPage = exports.HeroContent = exports.ContactInfo = exports.Service = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'editor'], default: 'admin' },
    lastLogin: { type: Date },
}, { timestamps: true });
exports.User = mongoose_1.default.model('User', userSchema);
const serviceSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    icon: { type: String, required: true },
    features: [{ type: String }],
    category: { type: String, enum: ['urgent', 'regular'], default: 'regular' },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
}, { timestamps: true });
exports.Service = mongoose_1.default.model('Service', serviceSchema);
const contactInfoSchema = new mongoose_1.default.Schema({
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    workingHours: { type: String, required: true },
    emergencyPhone: { type: String },
    whatsapp: { type: String },
}, { timestamps: true });
exports.ContactInfo = mongoose_1.default.model('ContactInfo', contactInfoSchema);
const heroContentSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    buttonText: { type: String, default: 'Hemen Ara' },
    buttonLink: { type: String, default: 'tel:+905551234567' },
    backgroundImage: { type: String },
}, { timestamps: true });
exports.HeroContent = mongoose_1.default.model('HeroContent', heroContentSchema);
const seoPageSchema = new mongoose_1.default.Schema({
    path: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: { type: String, required: true },
    canonical: { type: String, required: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
exports.SeoPage = mongoose_1.default.model('SeoPage', seoPageSchema);
const siteInfoSchema = new mongoose_1.default.Schema({
    siteName: { type: String, required: true },
    tagline: { type: String },
    description: { type: String, required: true },
    logo: { type: String, default: '/images/selim-logo.png' },
    footerText: { type: String }
}, { timestamps: true });
exports.SiteInfo = mongoose_1.default.model('SiteInfo', siteInfoSchema);
const aboutPageSchema = new mongoose_1.default.Schema({
    heroTitle: { type: String, required: true },
    heroSubtitle: { type: String, required: true },
    heroDescription: { type: String, required: true },
    heroImage: { type: String, default: '/images/anton-savinov-lDwKKjlHL2Y-unsplash.jpg' },
    missionTitle: { type: String, default: 'Misyonumuz' },
    missionDescription: { type: String, required: true },
    missionImage: { type: String, default: '/images/team-evelo-XTstePKvIro-unsplash.jpg' },
    visionTitle: { type: String, default: 'Vizyonumuz' },
    visionDescription: { type: String, required: true },
    visionImage: { type: String, default: '/images/pexels-kseniachernaya-5691536.jpg' },
    statsTitle: { type: String, default: 'Rakamlarla Biz' },
    stats: [{
            number: { type: String, required: true },
            label: { type: String, required: true }
        }],
    valuesTitle: { type: String, default: 'Değerlerimiz' },
    values: [{
            icon: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true }
        }],
    teamTitle: { type: String, default: 'Ekibimiz' },
    teamMembers: [{
            name: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true },
            expertise: { type: String },
            image: { type: String }
        }],
    certificationsTitle: { type: String, default: 'Sertifikalarımız & Yetkinliklerimiz' },
    certifications: [{
            icon: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true }
        }],
    testimonialsTitle: { type: String, default: 'Müşteri Yorumları' },
    testimonials: [{
            text: { type: String, required: true },
            author: { type: String, required: true },
            image: { type: String, default: '/images/pexels-bulat369-1243575272-32588548.jpg' }
        }],
    ctaTitle: { type: String, default: 'Bizimle Çalışmaya Hazır mısınız?' },
    ctaDescription: { type: String, required: true },
    ctaButtons: [{
            text: { type: String, required: true },
            link: { type: String, required: true },
            icon: { type: String }
        }]
}, { timestamps: true });
exports.AboutPage = mongoose_1.default.model('AboutPage', aboutPageSchema);
const whyChooseSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    items: [{
            icon: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true }
        }]
}, { timestamps: true });
exports.WhyChoose = mongoose_1.default.model('WhyChoose', whyChooseSchema);
const ctaSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    primaryButtonText: { type: String, default: 'Hemen Ara' },
    primaryButtonLink: { type: String, default: 'tel:+905551234567' },
    secondaryButtonText: { type: String, default: 'İletişim Formu' },
    secondaryButtonLink: { type: String, default: '/iletisim' }
}, { timestamps: true });
exports.CTA = mongoose_1.default.model('CTA', ctaSchema);
const contactPageSchema = new mongoose_1.default.Schema({
    heroTitle: { type: String, required: true },
    heroDescription: { type: String, required: true },
    heroImage: { type: String, default: '/images/stockvault-pipes-with-handle97235.jpg' },
    emergencyTitle: { type: String, default: '🚨 ACİL DURUM 🚨' },
    emergencyDescription: { type: String, required: true },
    emergencyPhone: { type: String, required: true },
    contactInfoTitle: { type: String, default: 'İletişim Bilgileri' },
    contactInfoImage: { type: String, default: '/images/nikkan-navidi-Y9xZc0PSTvo-unsplash.jpg' },
    responseTime: { type: String, default: '30 Dakika içinde' },
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
    serviceAreasTitle: { type: String, default: 'Hizmet Verdiğimiz Bölgeler' },
    serviceAreasImage: { type: String, default: '/images/taylor-heery-M0lMY68aMfM-unsplash.jpg' },
    serviceAreas: [{ type: String }],
    footerSlogan: { type: String, default: 'Kalite ile Tanışın... 💧' }
}, { timestamps: true });
exports.ContactPage = mongoose_1.default.model('ContactPage', contactPageSchema);
const servicesPageSchema = new mongoose_1.default.Schema({
    heroTitle: { type: String, default: 'Hizmetlerimiz' },
    heroSubtitle: { type: String, default: 'Profesyonel Sıhhi Tesisat Çözümleri' },
    heroDescription: { type: String, default: 'İzmir\'de 15 yıllık tecrübemiz ile kaliteli ve güvenilir tesisat hizmetleri sunuyoruz. 7/24 acil servis ile yanınızdayız.' },
    emergencyText: { type: String, default: '🚨 ACİL DURUM' },
    processTitle: { type: String, default: 'Çalışma Sürecimiz' },
    processSteps: [{
            number: { type: Number, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true }
        }],
    coverageTitle: { type: String, default: 'Hizmet Verdiğimiz Bölgeler' },
    coverageDescription: { type: String, default: 'İzmir\'in tüm ilçelerinde hizmet veriyoruz' },
    serviceAreas: [{ type: String }],
    warrantyTitle: { type: String, default: 'Garantili Hizmet' },
    warrantyDescription: { type: String, default: 'İşçiliğimize güveniyoruz, size de güven veriyoruz' },
    warrantyFeatures: [{
            icon: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true }
        }]
}, { timestamps: true });
exports.ServicesPage = mongoose_1.default.model('ServicesPage', servicesPageSchema);
const portfolioSchema = new mongoose_1.default.Schema({
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
    clientName: { type: String },
    projectDuration: { type: String },
    materials: [{ type: String }],
    challenges: [{ type: String }],
    solutions: [{ type: String }],
    results: [{ type: String }],
    technologies: [{ type: String }],
    warrantyPeriod: { type: String, default: '2 yıl' },
    teamSize: { type: String, default: '2 Kişi' },
    customerRating: { type: Number, min: 1, max: 5, default: 5 },
    customerReview: {
        text: { type: String },
        customerName: { type: String },
        date: { type: Date, default: Date.now }
    },
    cost: { type: String },
    difficulty: { type: String, enum: ['Kolay', 'Orta', 'Zor'], default: 'Orta' },
    isActive: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    tags: [{ type: String }],
    beforeImages: [{
            url: { type: String },
            alt: { type: String }
        }],
    afterImages: [{
            url: { type: String },
            alt: { type: String }
        }]
}, { timestamps: true });
exports.Portfolio = mongoose_1.default.model('Portfolio', portfolioSchema);
const portfolioPageSchema = new mongoose_1.default.Schema({
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
exports.PortfolioPage = mongoose_1.default.model('PortfolioPage', portfolioPageSchema);
const gallerySchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    thumbnailUrl: { type: String },
    category: {
        type: String,
        enum: ['su-kacagi', 'tikaniklik', 'kombi', 'tadilat', 'genel', 'oncesi', 'sonrasi'],
        required: true
    },
    tags: [{ type: String }],
    projectId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Portfolio' },
    isActive: { type: Boolean, default: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    location: { type: String },
    captureDate: { type: Date, default: Date.now },
    altText: { type: String, required: true },
    dimensions: {
        width: { type: Number },
        height: { type: Number }
    },
    fileSize: { type: Number },
    photographer: { type: String, default: 'Selim Tesisat Ekibi' }
}, { timestamps: true });
exports.Gallery = mongoose_1.default.model('Gallery', gallerySchema);
const galleryPageSchema = new mongoose_1.default.Schema({
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
exports.GalleryPage = mongoose_1.default.model('GalleryPage', galleryPageSchema);
//# sourceMappingURL=index.js.map
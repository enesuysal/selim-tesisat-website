"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../models");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env.local' });
const MONGODB_URI = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/selim-tesisat';
async function setupDatabase() {
    try {
        console.log('🔌 Connecting to MongoDB...');
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');
        console.log('👤 Creating admin user...');
        const hashedPassword = await bcryptjs_1.default.hash('admin123', 12);
        await models_1.User.findOneAndUpdate({ username: 'admin' }, {
            username: 'admin',
            email: 'admin@selimtesisat.com',
            password: hashedPassword,
            role: 'admin'
        }, { upsert: true, new: true });
        console.log('✅ Admin user created (username: admin, password: admin123)');
        console.log('🔧 Creating sample services...');
        const sampleServices = [
            {
                title: 'Su Kaçağı Tamiri',
                description: 'Modern cihazlarla su kaçağı tespiti ve tamiri',
                price: '₺150',
                icon: '💧',
                features: [
                    'Modern cihazlarla kaçak tespiti',
                    'Duvar içi su kaçağı bulma',
                    'Boru değişimi ve tamiri',
                    'Su sayacı değişimi',
                    'Musluk ve vana kaçağı tamiri'
                ],
                category: 'urgent',
                isActive: true,
                order: 1
            },
            {
                title: 'Tıkanıklık Açma',
                description: 'Lavabo, klozet, gider tıkanıklıklarını açma',
                price: '₺120',
                icon: '🚿',
                features: [
                    'Lavabo tıkanıklığı açma',
                    'Klozet tıkanıklığı açma',
                    'Banyo gideri açma',
                    'Mutfak gideri açma',
                    'Ana boru tıkanıklığı'
                ],
                category: 'urgent',
                isActive: true,
                order: 2
            },
            {
                title: 'Musluk Tamiri & Montajı',
                description: 'Musluk montajı, tamiri ve kartuş değişimi',
                price: '₺80',
                icon: '🔧',
                features: [
                    'Musluk montajı',
                    'Musluk tamiri',
                    'Kartuş değişimi',
                    'Batarya montajı',
                    'Duş başlığı montajı'
                ],
                category: 'regular',
                isActive: true,
                order: 3
            },
            {
                title: 'Kombi Tamiri',
                description: 'Tüm marka kombi bakım ve tamir işleri',
                price: '₺200',
                icon: '🔥',
                features: [
                    'Kombi bakımı',
                    'Kombi tamiri',
                    'Petek temizliği',
                    'Doğalgaz bağlantısı',
                    'Kombi değişimi'
                ],
                category: 'regular',
                isActive: true,
                order: 4
            },
            {
                title: 'Banyo Mutfak Tadilat',
                description: 'Banyo ve mutfak yenileme işleri',
                price: '₺500',
                icon: '🏠',
                features: [
                    'Banyo yenileme',
                    'Mutfak yenileme',
                    'Fayans döşeme',
                    'Klozet montajı',
                    'Lavabo montajı'
                ],
                category: 'regular',
                isActive: true,
                order: 5
            }
        ];
        for (const service of sampleServices) {
            await models_1.Service.findOneAndUpdate({ title: service.title }, service, { upsert: true, new: true });
        }
        console.log('✅ Sample services created');
        console.log('📞 Creating contact info...');
        await models_1.ContactInfo.findOneAndUpdate({}, {
            phone: '+90 555 123 45 67',
            email: 'info@selimtesisat.com',
            address: 'İzmir, Türkiye',
            workingHours: '7/24 Acil Servis',
            emergencyPhone: '+90 555 123 45 67',
            whatsapp: '+90 555 123 45 67'
        }, { upsert: true, new: true });
        console.log('✅ Contact info created');
        console.log('🎯 Creating hero content...');
        await models_1.HeroContent.findOneAndUpdate({}, {
            title: 'İzmir\'de Güvenilir Tesisatçı Hizmetleri',
            subtitle: 'Kalite ile Tanışın...',
            description: '15 yıllık tecrübemiz ile İzmir\'de sıhhi tesisat alanında güvenilir, hızlı ve profesyonel hizmet sunuyoruz.',
            buttonText: 'Hemen Ara',
            buttonLink: 'tel:+905551234567'
        }, { upsert: true, new: true });
        console.log('✅ Hero content created');
        console.log('🔍 Creating SEO pages...');
        const seoPages = [
            {
                path: '/',
                title: 'Selim Sıhhi Tesisat ve Tamirat - Profesyonel Tesisatçı Hizmetleri İzmir',
                description: 'İzmir\'de profesyonel tesisatçı hizmetleri. Su kaçağı, tıkanıklık açma, kombi tamiri, banyo mutfak tadilat işleri. 7/24 acil servis. Uygun fiyat, kaliteli malzeme.',
                keywords: 'tesisatçı izmir, su kaçağı tamiri, tıkanıklık açma, kombi tamiri, banyo tadilat, mutfak tadilat, acil tesisatçı, sıhhi tesisat, tesisatçı',
                canonical: 'https://selimtesisat.com',
                isActive: true
            },
            {
                path: '/hizmetler',
                title: 'Tesisatçı Hizmetleri - Su Kaçağı, Tıkanıklık, Kombi Tamiri | Selim Tesisat',
                description: 'Profesyonel tesisatçı hizmetleri: Su kaçağı tespiti ve tamiri, tıkanıklık açma, kombi bakım tamiri, banyo mutfak tadilat. İzmir geneli hizmet.',
                keywords: 'su kaçağı tamiri, tıkanıklık açma, kombi tamiri, banyo tadilat, mutfak tadilat, gider temizliği, musluk tamiri, klozet tamiri',
                canonical: 'https://selimtesisat.com/hizmetler',
                isActive: true
            },
            {
                path: '/hakkimizda',
                title: 'Hakkımızda - Selim Sıhhi Tesisat ve Tamirat | Güvenilir Tesisatçı',
                description: 'Selim Sıhhi Tesisat ve Tamirat olarak İzmir\'de yıllardır güvenilir tesisatçı hizmetleri veriyoruz. Deneyimli ekip, kaliteli malzeme, uygun fiyat.',
                keywords: 'selim tesisat, hakkımızda, güvenilir tesisatçı, deneyimli tesisatçı, izmir tesisatçı, profesyonel tesisat',
                canonical: 'https://selimtesisat.com/hakkimizda',
                isActive: true
            },
            {
                path: '/iletisim',
                title: 'İletişim - Selim Tesisat | Tesisatçı Randevu ve Bilgi',
                description: 'Selim Tesisat ile iletişime geçin. Tesisatçı hizmetleri için randevu alın, ücretsiz keşif talep edin. İzmir geneli hizmet veriyoruz.',
                keywords: 'tesisatçı randevu, tesisatçı iletişim, izmir tesisatçı, tesisatçı telefon, ücretsiz keşif, tesisatçı fiyat',
                canonical: 'https://selimtesisat.com/iletisim',
                isActive: true
            }
        ];
        for (const seoPage of seoPages) {
            await models_1.SeoPage.findOneAndUpdate({ path: seoPage.path }, seoPage, { upsert: true, new: true });
        }
        console.log('✅ SEO pages created');
        console.log('🌐 Creating site info...');
        await models_1.SiteInfo.findOneAndUpdate({}, {
            siteName: 'Selim Sıhhi Tesisat ve Tamirat',
            tagline: 'İzmir\'de Güvenilir Tesisatçı Hizmetleri',
            description: 'Selim Sıhhi Tesisat ve Tamirat olarak İzmir\'de profesyonel tesisatçı hizmetleri veriyoruz. Su kaçağı, tıkanıklık açma, kombi tamiri ve sıhhi tesisat işleri.',
            logo: '/images/selim-logo.png',
            footerText: '© 2025 Selim Sıhhi Tesisat ve Tamirat. Tüm hakları saklıdır.'
        }, { upsert: true, new: true });
        console.log('✅ Site info created');
        console.log('⭐ Creating why choose us content...');
        await models_1.WhyChoose.findOneAndUpdate({}, {
            title: 'Neden Selim Tesisat?',
            items: [
                {
                    icon: 'icon-clock',
                    title: '7/24 Acil Servis',
                    description: 'Acil durumlarınızda her zaman yanınızdayız'
                },
                {
                    icon: 'icon-star',
                    title: 'Kaliteli Malzeme',
                    description: 'Sadece birinci sınıf malzeme kullanırız'
                },
                {
                    icon: 'icon-shield',
                    title: 'Garanti',
                    description: 'Tüm işlerimizde garanti veriyoruz'
                },
                {
                    icon: 'icon-money',
                    title: 'Uygun Fiyat',
                    description: 'Rekabetçi fiyatlarla hizmet sunuyoruz'
                }
            ]
        }, { upsert: true, new: true });
        console.log('✅ Why choose us content created');
        console.log('📞 Creating CTA content...');
        await models_1.CTA.findOneAndUpdate({}, {
            title: 'Tesisat Probleminiz mi Var?',
            description: 'Profesyonel ekibimizle hemen çözüm bulalım. Ücretsiz keşif ve fiyat teklifi için bizi arayın.',
            primaryButtonText: 'Hemen Ara',
            primaryButtonLink: 'tel:+90XXXXXXXXX',
            secondaryButtonText: 'İletişim Formu',
            secondaryButtonLink: '/iletisim'
        }, { upsert: true, new: true });
        console.log('✅ CTA content created');
        console.log('📄 Creating about page content...');
        await models_1.AboutPage.findOneAndUpdate({}, {
            heroTitle: 'Hakkımızda',
            heroSubtitle: 'Kalite ile Tanışın...',
            heroDescription: '15 yıllık tecrübemiz ile İzmir\'de sıhhi tesisat alanında güvenilir, hızlı ve profesyonel hizmet sunuyoruz. Müşteri memnuniyeti bizim önceliğimizdir.',
            heroImage: '/images/anton-savinov-lDwKKjlHL2Y-unsplash.jpg',
            missionTitle: 'Misyonumuz',
            missionDescription: 'İzmir\'de yaşayan her bireyin ve işletmenin sıhhi tesisat ihtiyaçlarını en kaliteli, hızlı ve uygun fiyatlı şekilde karşılamak. 7/24 hizmet anlayışımız ile acil durumlarınızda yanınızda olmak. Modern teknikler ve kaliteli malzemeler kullanarak, uzun vadeli çözümler sunmayı hedefliyoruz.',
            missionImage: '/images/team-evelo-XTstePKvIro-unsplash.jpg',
            visionTitle: 'Vizyonumuz',
            visionDescription: 'İzmir\'in en güvenilir ve tercih edilen sıhhi tesisat firması olmak. Teknolojik yenilikleri takip ederek, çevre dostu ve sürdürülebilir çözümler sunmak. Müşterilerimizin hayat kalitesini artırmak ve onlara huzur veren bir yaşam alanı oluşturmalarına destek olmak.',
            visionImage: '/images/pexels-kseniachernaya-5691536.jpg',
            statsTitle: 'Rakamlarla Biz',
            stats: [
                { number: '15+', label: 'Yıllık Tecrübe' },
                { number: '5000+', label: 'Mutlu Müşteri' },
                { number: '24/7', label: 'Acil Servis' },
                { number: '39', label: 'İlçede Hizmet' },
                { number: '30', label: 'Dakika Yanıt' },
                { number: '%98', label: 'Memnuniyet Oranı' }
            ],
            valuesTitle: 'Değerlerimiz',
            values: [
                {
                    icon: '🛡️',
                    title: 'Güvenilirlik',
                    description: '15 yıllık tecrübemiz ve binlerce başarılı proje ile güveninizi kazandık. Sözümüzün arkasında duruyoruz.'
                },
                {
                    icon: '⚡',
                    title: 'Hızlı Çözüm',
                    description: 'Acil durumlarınızda 30 dakika içinde yanınızdayız. Hızlı teşhis ve etkili çözümler sunuyoruz.'
                },
                {
                    icon: '💎',
                    title: 'Kalite',
                    description: 'Sadece kaliteli malzemeler kullanıyoruz. İşçiliğimize ve hizmetimize verdiğimiz garantiler kalitemizin kanıtıdır.'
                },
                {
                    icon: '💰',
                    title: 'Uygun Fiyat',
                    description: 'Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Şeffaf fiyatlandırma, gizli maliyet yok.'
                },
                {
                    icon: '🤝',
                    title: 'Dürüstlük',
                    description: 'Müşterilerimize her zaman dürüst ve şeffaf yaklaşırız. Gereksiz işlemler önermeyiz.'
                },
                {
                    icon: '🌱',
                    title: 'Çevre Bilinci',
                    description: 'Su tasarrufu sağlayan çözümler ve çevre dostu malzemeler kullanarak doğaya katkıda bulunuyoruz.'
                }
            ],
            teamTitle: 'Ekibimiz',
            teamMembers: [
                {
                    name: 'Selim Usta',
                    title: 'Kurucu & Baş Tesisat Ustası',
                    description: '15 yıllık deneyime sahip Usta Selim, sıhhi tesisat alanında uzmanlaşmış ve binlerce başarılı projeye imza atmıştır. Müşteri memnuniyeti odaklı yaklaşımı ve teknik expertise\'i ile takımımızın lideridir.',
                    expertise: 'Su kaçağı tespiti, tıkanıklık açma, musluk ve klozet montajı, şofben bakımı, kombi montajı, lavabo kurulumu',
                    image: '/images/plumber-228010_1920.jpg'
                }
            ],
            certificationsTitle: 'Sertifikalarımız & Yetkinliklerimiz',
            certifications: [
                {
                    icon: '📜',
                    title: 'Sıhhi Tesisat Ustalık Belgesi',
                    description: 'Resmi ustalık sertifikası'
                },
                {
                    icon: '🔧',
                    title: 'Doğalgaz Tesisat Sertifikası',
                    description: 'Doğalgaz tesisatı kurulum yetkinliği'
                },
                {
                    icon: '⚡',
                    title: 'İSG Sertifikası',
                    description: 'İş Sağlığı ve Güvenliği sertifikası'
                },
                {
                    icon: '🛡️',
                    title: 'Sigorta Belgesi',
                    description: 'Tam kapsamlı meslek sigortası'
                },
                {
                    icon: '🌊',
                    title: 'Su Kaçağı Tespit Uzmanlığı',
                    description: 'Modern cihazlarla kaçak bulma'
                },
                {
                    icon: '🔥',
                    title: 'Kombi Bakım Sertifikası',
                    description: 'Tüm marka kombi bakım yetkinliği'
                }
            ],
            testimonialsTitle: 'Müşteri Yorumları',
            testimonials: [
                {
                    text: 'Gece yarısı su kaçağı problemim olduğunda hemen geldi. Çok profesyonel ve güler yüzlü. Kesinlikle tavsiye ederim.',
                    author: '- Ayşe Hanım, Kadıköy',
                    image: '/images/pexels-bulat369-1243575272-32588548.jpg'
                },
                {
                    text: 'Yıllardır çözemediğimiz tıkanıklık problemini 30 dakikada çözdü. Fiyatı da çok uygun. Teşekkürler Selim Usta.',
                    author: '- Mehmet Bey, Beşiktaş',
                    image: '/images/pexels-bulat369-1243575272-32588548.jpg'
                },
                {
                    text: 'Banyomun komple renovasyonunu yaptı. Hem hızlı hem kaliteli. İşinden memnun kalan nadir ustalardan.',
                    author: '- Fatma Hanım, Şişli',
                    image: '/images/pexels-bulat369-1243575272-32588548.jpg'
                },
                {
                    text: 'Kombi bakımını her yıl kendisine yaptırıyorum. Çok titiz ve detaycı çalışıyor. Güvenilir bir usta.',
                    author: '- Ali Bey, Üsküdar',
                    image: '/images/pexels-bulat369-1243575272-32588548.jpg'
                },
                {
                    text: 'Ofisimizde acil su kaçağı vardı. Hemen gelip sorunu çözdü. İş yerimizi selden kurtardı desem yeridir.',
                    author: '- Zeynep Hanım, Maslak',
                    image: '/images/pexels-bulat369-1243575272-32588548.jpg'
                },
                {
                    text: 'Çok dürüst bir usta. Gereksiz işlem yapmıyor, sadece gerekeni yapıyor. Bu zamanda nadir bulunan bir özellik.',
                    author: '- Hasan Bey, Bakırköy',
                    image: '/images/pexels-bulat369-1243575272-32588548.jpg'
                }
            ],
            ctaTitle: 'Bizimle Çalışmaya Hazır mısınız?',
            ctaDescription: '15 yıllık tecrübemizi sizin hizmetinize sunmak için buradayız. Hemen iletişime geçin!',
            ctaButtons: [
                {
                    text: 'Hemen Ara',
                    link: '/iletisim',
                    icon: '📞'
                },
                {
                    text: 'Hizmetlerimizi İncele',
                    link: '/hizmetler',
                    icon: '🔧'
                },
                {
                    text: 'E-posta Gönder',
                    link: 'mailto:info@selimtesisat.com',
                    icon: '📧'
                }
            ]
        }, { upsert: true, new: true });
        console.log('✅ About page content created');
        console.log('📞 Creating contact page content...');
        await models_1.ContactPage.findOneAndUpdate({}, {
            heroTitle: 'İletişim',
            heroDescription: '7/24 acil servis ile hizmetinizdeyiz. İzmir genelinde hızlı ve güvenilir tesisat hizmeti.',
            heroImage: '/images/stockvault-pipes-with-handle97235.jpg',
            emergencyTitle: '🚨 ACİL DURUM 🚨',
            emergencyDescription: 'Acil tesisat ihtiyacınız için hemen arayın:',
            emergencyPhone: '+90 555 123 45 67',
            contactInfoTitle: 'İletişim Bilgileri',
            contactInfoImage: '/images/nikkan-navidi-Y9xZc0PSTvo-unsplash.jpg',
            responseTime: '30 Dakika içinde',
            formTitle: 'Mesaj Gönder',
            formDescription: 'Tesisat sorunlarınız için hemen bizimle iletişime geçin.',
            firstNameLabel: 'Ad',
            lastNameLabel: 'Soyad',
            phoneLabel: 'Telefon',
            emailLabel: 'E-posta',
            serviceLabel: 'Hizmet Türü',
            serviceSelectDefault: 'Hizmet seçin...',
            locationLabel: 'Konum',
            locationPlaceholder: 'Bornova, İzmir',
            messageLabel: 'Mesajınız',
            messagePlaceholder: 'Sorunuzu detaylı bir şekilde açıklayın...',
            submitButton: 'Mesaj Gönder',
            formServices: [
                { value: 'su-kacagi', label: 'Su Kaçağı' },
                { value: 'tikaniklik', label: 'Tıkanıklık Açma' },
                { value: 'musluk-tamiri', label: 'Musluk Tamiri' },
                { value: 'klozet-montaji', label: 'Klozet Montajı' },
                { value: 'sofben-bakimi', label: 'Şofben Bakımı' },
                { value: 'kombi-bakimi', label: 'Kombi Bakımı' },
                { value: 'banyo-tadilati', label: 'Banyo Tadilatı' },
                { value: 'mutfak-tadilati', label: 'Mutfak Tadilatı' },
                { value: 'gider-temizligi', label: 'Gider Temizliği' },
                { value: 'diger', label: 'Diğer' }
            ],
            serviceAreasTitle: 'Hizmet Verdiğimiz Bölgeler',
            serviceAreasImage: '/images/taylor-heery-M0lMY68aMfM-unsplash.jpg',
            serviceAreas: [
                'Alsancak', 'Karşıyaka', 'Bornova', 'Konak', 'Balçova', 'Çiğli',
                'Gaziemir', 'Karabağlar', 'Bayraklı', 'Narlıdere', 'Güzelbahçe',
                'Foça', 'Menemen', 'Tire', 'Torbalı', 'Ödemiş'
            ],
            footerSlogan: 'Kalite ile Tanışın... 💧'
        }, { upsert: true, new: true });
        console.log('✅ Contact page content created');
        console.log('🔧 Creating services page content...');
        await models_1.ServicesPage.findOneAndUpdate({}, {
            heroTitle: 'Hizmetlerimiz',
            heroSubtitle: 'Profesyonel Sıhhi Tesisat Çözümleri',
            heroDescription: 'İzmir\'de 15 yıllık tecrübemiz ile kaliteli ve güvenilir tesisat hizmetleri sunuyoruz. 7/24 acil servis ile yanınızdayız.',
            emergencyText: '🚨 ACİL DURUM',
            processTitle: 'Çalışma Sürecimiz',
            processSteps: [
                {
                    number: 1,
                    title: 'İletişim',
                    description: 'Bizi arayın veya WhatsApp\'tan mesaj gönderin. Sorununuzu dinleyelim ve size en hızlı çözümü sunalım.'
                },
                {
                    number: 2,
                    title: 'Hızlı Geliş',
                    description: '30 dakika içinde adresinize geliyoruz. Acil durumlar için daha hızlı müdahale ediyoruz.'
                },
                {
                    number: 3,
                    title: 'Teşhis',
                    description: 'Problemi detaylı inceleyip size şeffaf fiyat teklifi sunuyoruz. Gizli maliyet yok!'
                },
                {
                    number: 4,
                    title: 'Çözüm',
                    description: 'Kaliteli malzemelerle profesyonel çözüm uyguluyoruz. İşçiliğimize güveniyoruz.'
                },
                {
                    number: 5,
                    title: 'Garanti',
                    description: 'İşimize 1 yıl garanti veriyoruz. Memnuniyetiniz bizim önceliğimiz.'
                }
            ],
            coverageTitle: 'Hizmet Verdiğimiz Bölgeler',
            coverageDescription: 'İzmir\'in tüm ilçelerinde hizmet veriyoruz',
            serviceAreas: [
                'Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Bayraklı', 'Çiğli',
                'Gaziemir', 'Balçova', 'Narlıdere', 'Karabağlar', 'Menemen', 'Aliağa',
                'Foça', 'Güzelbahçe', 'Seferihisar', 'Urla', 'Torbalı', 'Kemalpaşa',
                'Menderes', 'Selçuk'
            ],
            warrantyTitle: 'Garantili Hizmet',
            warrantyDescription: 'İşçiliğimize güveniyoruz, size de güven veriyoruz',
            warrantyFeatures: [
                {
                    icon: '🛡️',
                    title: '1 Yıl Garanti',
                    description: 'Tüm işçiliğimize 1 yıl garanti veriyoruz'
                },
                {
                    icon: '🔄',
                    title: 'Ücretsiz Dönüş',
                    description: 'Garanti kapsamında sorun olursa ücretsiz müdahale'
                },
                {
                    icon: '💎',
                    title: 'Kaliteli Malzeme',
                    description: 'Sadece kaliteli ve garantili malzemeler kullanıyoruz'
                },
                {
                    icon: '📞',
                    title: '7/24 Destek',
                    description: 'Her türlü soru ve sorunlarınız için bize 7/24 ulaşabilirsiniz'
                }
            ]
        }, { upsert: true, new: true });
        console.log('✅ Services page content created');
        console.log('🎉 Database setup completed successfully!');
        console.log('📋 Login credentials:');
        console.log('   Username: admin');
        console.log('   Password: admin123');
    }
    catch (error) {
        console.error('❌ Database setup failed:', error);
    }
    finally {
        await mongoose_1.default.connection.close();
        console.log('🔌 Database connection closed');
    }
}
setupDatabase();
//# sourceMappingURL=setup-db.js.map
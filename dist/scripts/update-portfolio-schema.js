"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const MONGODB_URI = 'mongodb+srv://enesuysal:gezEHCEx1Jsxds4X@selimdb.x4clf62.mongodb.net/';
async function updatePortfolioSchema() {
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('Connected to MongoDB Atlas');
        const portfolios = await models_1.Portfolio.find({});
        console.log(`Found ${portfolios.length} portfolio items to update`);
        for (const portfolio of portfolios) {
            const updates = {};
            if (!portfolio.challenges || portfolio.challenges.length === 0) {
                switch (portfolio.category) {
                    case 'su-kacagi':
                        updates.challenges = [
                            'Duvar içi kaçağın tam lokasyonunun tespiti',
                            'Minimum hasar ile müdahale yapılması',
                            'Su kesintisini en aza indirmek'
                        ];
                        updates.solutions = [
                            'Termal kamera ile hassas tespit',
                            'Minimal invaziv yöntemler kullanıldı',
                            'Hızlı onarım teknikleri uygulandı'
                        ];
                        updates.technologies = ['Termal Kamera', 'Su Kaçağı Tespit Cihazı', 'PPR Boru', 'Elektrofüzyon Ek'];
                        break;
                    case 'tikaniklik':
                        updates.challenges = [
                            'Derin tıkanıklığın kökten çözümü',
                            'Boru hasarı vermeden temizlik',
                            'Gelecekteki tıkanıklıkları önleme'
                        ];
                        updates.solutions = [
                            'Profesyonel spiral makine kullanıldı',
                            'Basınçlı su ile detaylı temizlik',
                            'Koruyucu bakım önerileri verildi'
                        ];
                        updates.technologies = ['Spiral Makinesi', 'Basınçlı Su Sistemi', 'Kamera Sistemi', 'Vakum Sistemi'];
                        break;
                    case 'kombi':
                        updates.challenges = [
                            'Kombi arızasının doğru teşhisi',
                            'Orijinal yedek parça temini',
                            'Uzun vadeli performans garanti'
                        ];
                        updates.solutions = [
                            'Detaylı sistem analizi yapıldı',
                            'Orijinal parçalar kullanıldı',
                            'Kapsamlı test ve ayar'
                        ];
                        updates.technologies = ['Orijinal Yedek Parça', 'Gaz Test Cihazı', 'Dijital Manometre', 'Bakım Kiti'];
                        break;
                    case 'tadilat':
                        updates.challenges = [
                            'Eski tesisatın yenilenmesi',
                            'Modern standartlara uyumluluk',
                            'Estetik ve fonksiyonel denge'
                        ];
                        updates.solutions = [
                            'Tamamen yeni tesisat döşendi',
                            'Güncel yönetmeliklere uygun',
                            'Tasarım ve işlevsellik optimize edildi'
                        ];
                        updates.technologies = ['Modern Armatürler', 'Su Yalıtımı', 'Isı Yalıtımı', 'LED Aydınlatma'];
                        break;
                }
            }
            if (!portfolio.results || portfolio.results.length === 0) {
                updates.results = [
                    'Problem tamamen çözüldü',
                    'Müşteri memnuniyeti sağlandı',
                    `${updates.warrantyPeriod || '2 yıl'} garanti verildi`,
                    'Uzun vadeli performans garanti edildi'
                ];
            }
            if (!portfolio.customerReview) {
                const reviews = [
                    { text: 'Çok profesyonel ve hızlı bir hizmet aldık. Sorun tamamen çözüldü ve garanti verdiler. Kesinlikle tavsiye ederim!', customerName: 'Ahmet B.' },
                    { text: 'İşlerini çok temiz yapıyorlar. Hem kaliteli hem de uygun fiyatlı. Çok memnun kaldık.', customerName: 'Fatma K.' },
                    { text: 'Geç saatte aradığımız halde hemen gelip sorunu çözdüler. Gerçekten güvenilir bir firma.', customerName: 'Mehmet Y.' },
                    { text: 'Tadilat işimizi baştan sona kusursuz yaptılar. İşçilikleri ve malzeme kaliteleri çok iyi.', customerName: 'Zeynep A.' }
                ];
                const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
                updates.customerReview = randomReview;
            }
            if (!portfolio.warrantyPeriod)
                updates.warrantyPeriod = '2 yıl';
            if (!portfolio.teamSize)
                updates.teamSize = '2 Kişi';
            if (!portfolio.customerRating)
                updates.customerRating = 5;
            if (!portfolio.difficulty)
                updates.difficulty = 'Orta';
            await models_1.Portfolio.findByIdAndUpdate(portfolio._id, updates);
            console.log(`Updated portfolio: ${portfolio.title}`);
        }
        console.log('Portfolio schema update completed successfully!');
    }
    catch (error) {
        console.error('Error updating portfolio schema:', error);
    }
    finally {
        await mongoose_1.default.disconnect();
    }
}
updatePortfolioSchema();
//# sourceMappingURL=update-portfolio-schema.js.map
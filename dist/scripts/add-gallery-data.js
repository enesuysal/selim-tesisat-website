"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("../models/index");
const galleryData = [
    {
        title: "Su Kaçağı Tamiri - Önce",
        description: "Duvar içi su kaçağı tespit edilmeden önceki durum",
        imageUrl: "/images/pexels-tima-miroshnichenko-6474205.jpg",
        thumbnailUrl: "/images/pexels-tima-miroshnichenko-6474205.jpg",
        category: "su-kacagi",
        tags: ["su kaçağı", "önce", "tespit"],
        isActive: true,
        featured: true,
        order: 1,
        location: "Karşıyaka, İzmir",
        captureDate: new Date("2025-01-15"),
        altText: "Su kaçağı tamiri öncesi duvar durumu",
        photographer: "Selim Tesisat Ekibi"
    },
    {
        title: "Su Kaçağı Tamiri - Sonra",
        description: "Su kaçağı tamiri tamamlandıktan sonraki temiz duvar",
        imageUrl: "/images/portfolio-placeholder.jpg",
        thumbnailUrl: "/images/portfolio-placeholder.jpg",
        category: "su-kacagi",
        tags: ["su kaçağı", "sonra", "tamamlandı"],
        isActive: true,
        featured: true,
        order: 2,
        location: "Karşıyaka, İzmir",
        captureDate: new Date("2025-01-15"),
        altText: "Su kaçağı tamiri sonrası temizlenmiş duvar",
        photographer: "Selim Tesisat Ekibi"
    },
    {
        title: "Gider Tıkanıklığı Açma",
        description: "Hidrolik basınç ile ana gider tıkanıklığının açılması",
        imageUrl: "/images/pexels-kseniachernaya-5691536.jpg",
        thumbnailUrl: "/images/pexels-kseniachernaya-5691536.jpg",
        category: "tikaniklik",
        tags: ["tıkanıklık", "gider", "hidrolik"],
        isActive: true,
        featured: false,
        order: 3,
        location: "Bornova, İzmir",
        captureDate: new Date("2025-01-10"),
        altText: "Gider tıkanıklığı açma işlemi",
        photographer: "Selim Tesisat Ekibi"
    },
    {
        title: "Kombi Bakım İşlemi",
        description: "Baxi marka kombinin detaylı bakım ve temizlik işlemi",
        imageUrl: "/images/stockvault-pipes-with-handle97235.jpg",
        thumbnailUrl: "/images/stockvault-pipes-with-handle97235.jpg",
        category: "kombi",
        tags: ["kombi", "bakım", "baxi"],
        isActive: true,
        featured: false,
        order: 4,
        location: "Alsancak, İzmir",
        captureDate: new Date("2025-01-05"),
        altText: "Kombi bakım ve temizlik işlemi",
        photographer: "Selim Tesisat Ekibi"
    },
    {
        title: "Banyo Tadilat - Öncesi",
        description: "Banyo yenileme projesi başlamadan önceki durum",
        imageUrl: "/images/hero-plumber.jpg",
        thumbnailUrl: "/images/hero-plumber.jpg",
        category: "tadilat",
        tags: ["banyo", "tadilat", "öncesi"],
        isActive: true,
        featured: true,
        order: 5,
        location: "Konak, İzmir",
        captureDate: new Date("2024-12-15"),
        altText: "Banyo tadilat öncesi eski durum",
        photographer: "Selim Tesisat Ekibi"
    },
    {
        title: "Banyo Tadilat - Sonrası",
        description: "Modern banyo tasarımı ile tamamlanan yenileme projesi",
        imageUrl: "/images/gallery-placeholder.jpg",
        thumbnailUrl: "/images/gallery-placeholder.jpg",
        category: "tadilat",
        tags: ["banyo", "tadilat", "sonrası", "modern"],
        isActive: true,
        featured: true,
        order: 6,
        location: "Konak, İzmir",
        captureDate: new Date("2024-12-20"),
        altText: "Banyo tadilat sonrası modern görünüm",
        photographer: "Selim Tesisat Ekibi"
    },
    {
        title: "Mutfak Tesisat Çalışması",
        description: "Mutfak lavabo ve musluk değişimi çalışması",
        imageUrl: "/images/taylor-heery-M0lMY68aMfM-unsplash.jpg",
        thumbnailUrl: "/images/taylor-heery-M0lMY68aMfM-unsplash.jpg",
        category: "tadilat",
        tags: ["mutfak", "lavabo", "musluk"],
        isActive: true,
        featured: false,
        order: 7,
        location: "Çiğli, İzmir",
        captureDate: new Date("2024-12-15"),
        altText: "Mutfak tesisat çalışması",
        photographer: "Selim Tesisat Ekibi"
    },
    {
        title: "Genel Tesisat Kontrolü",
        description: "Binanın genel tesisat sisteminin kontrolü ve bakımı",
        imageUrl: "/images/team-evelo-XTstePKvIro-unsplash.jpg",
        thumbnailUrl: "/images/team-evelo-XTstePKvIro-unsplash.jpg",
        category: "genel",
        tags: ["genel", "kontrol", "bakım"],
        isActive: true,
        featured: false,
        order: 8,
        location: "Gaziemir, İzmir",
        captureDate: new Date("2024-12-01"),
        altText: "Genel tesisat kontrol çalışması",
        photographer: "Selim Tesisat Ekibi"
    }
];
async function addGalleryData() {
    try {
        const mongoUri = 'mongodb+srv://enesuysal:gezEHCEx1Jsxds4X@selimdb.x4clf62.mongodb.net/?retryWrites=true&w=majority&appName=selimDB';
        await mongoose_1.default.connect(mongoUri);
        console.log('MongoDB Atlas bağlantısı başarılı');
        await index_1.Gallery.deleteMany({});
        console.log('Mevcut gallery verileri temizlendi');
        const result = await index_1.Gallery.insertMany(galleryData);
        console.log(`${result.length} gallery verisi eklendi:`);
        result.forEach((item, index) => {
            console.log(`${index + 1}. ${item.title} - ${item.category}`);
        });
        console.log('\n✅ Gallery test verileri başarıyla eklendi!');
    }
    catch (error) {
        console.error('❌ Hata:', error);
    }
    finally {
        await mongoose_1.default.disconnect();
        console.log('MongoDB bağlantısı kapatıldı');
    }
}
addGalleryData();
//# sourceMappingURL=add-gallery-data.js.map
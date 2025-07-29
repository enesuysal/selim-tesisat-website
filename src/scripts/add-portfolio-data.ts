import mongoose from 'mongoose';
import { Portfolio } from '../models/index';

const portfolioData = [
  {
    title: "Duvar İçi Su Kaçağı Tamiri",
    description: "Modern termal kameralarla tespit edilen duvar içi su kaçağının minimal hasar ile tamiri. Müşteri memnuniyeti odaklı çalışma ile problemin kökten çözümü sağlandı.",
    category: "su-kacagi",
    images: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Su kaçağı tamiri öncesi durum",
        isPrimary: true
      }
    ],
    location: "Karşıyaka, İzmir",
    completionDate: new Date("2025-01-15"),
    clientName: "Ahmet B.",
    projectDuration: "1 gün",
    materials: ["PVC boru", "Su kaçağı bandı", "Sızdırmazlık malzemesi"],
    challenges: "Duvar içindeki kaçağın tespiti zordu, termal kamera kullanıldı",
    result: "Su kaçağı tamamen durduruldu, duvar yeniden yapıldı",
    isActive: true,
    featured: true,
    order: 1,
    tags: ["su kaçağı", "duvar tamiri", "termal kamera"],
    beforeImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Tamir öncesi duvar hasarı"
      }
    ],
    afterImages: [
      {
        url: "/images/portfolio-placeholder.jpg", 
        alt: "Tamir sonrası temiz duvar"
      }
    ]
  },
  {
    title: "Ana Gider Tıkanıklığı Açma",
    description: "Binanın ana giderinde oluşan ciddi tıkanıklığın hidrolik basınç yöntemi ile açılması. 24 saatte problem çözüldü.",
    category: "tikaniklik",
    images: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Gider tıkanıklığı açma işlemi",
        isPrimary: true
      }
    ],
    location: "Bornova, İzmir",
    completionDate: new Date("2025-01-10"),
    clientName: "Mehmet Y.",
    projectDuration: "1 gün",
    materials: ["Hidrolik açma makinesi", "Gider temizlik kimyasalı"],
    challenges: "Tıkanıklık çok derinlerde idi, özel ekipman gerekti",
    result: "Gider tamamen açıldı, akış normale döndü",
    isActive: true,
    featured: true,
    order: 2,
    tags: ["tıkanıklık", "ana gider", "hidrolik"],
    beforeImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Tıkanık gider"
      }
    ],
    afterImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Açılan gider akış testi"
      }
    ]
  },
  {
    title: "Kombi Bakım ve Tamir",
    description: "Baxi marka kombinin tam bakımı ve arızalı parçaların değişimi. Verimlilik %30 arttı.",
    category: "kombi", 
    images: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Kombi bakım işlemi",
        isPrimary: true
      }
    ],
    location: "Alsancak, İzmir",
    completionDate: new Date("2025-01-05"),
    clientName: "Fatma K.",
    projectDuration: "2 gün",
    materials: ["Kombi parçaları", "Bakım kimyasalları", "Yeni termostat"],
    challenges: "Eski model kombi, yedek parça bulmak zordu",
    result: "Kombi yeni gibi çalışıyor, verim arttı",
    isActive: true,
    featured: false,
    order: 3,
    tags: ["kombi", "bakım", "tamir", "baxi"],
    beforeImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Arızalı kombi"
      }
    ],
    afterImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Bakımlı kombi"
      }
    ]
  },
  {
    title: "Banyo Yenileme Projesi",
    description: "Komple banyo yenileme işi. Eski tesisat söküldü, modern sistem kuruldu. Müşteri hayalindeki banyoya kavuştu.",
    category: "tadilat",
    images: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Yenilenmiş banyo",
        isPrimary: true
      }
    ],
    location: "Konak, İzmir",
    completionDate: new Date("2024-12-20"),
    clientName: "Ayşe D.",
    projectDuration: "5 gün",
    materials: ["Seramik", "Armatürler", "Duş kabini", "Tesisat boruları"],
    challenges: "Eski bina, tesisat altyapısı tamamen yenilendi",
    result: "Modern ve fonksiyonel banyo oluşturuldu",
    isActive: true,
    featured: true,
    order: 4,
    tags: ["banyo", "tadilat", "yenileme", "modern"],
    beforeImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Eski banyo durumu"
      }
    ],
    afterImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Yenilenmiş modern banyo"
      }
    ]
  },
  {
    title: "Mutfak Lavabo Değişimi",
    description: "Mutfak lavabosunun değişimi ve musluk sisteminin yenilenmesi. Su tasarrufu sağlayan armatürler kullanıldı.",
    category: "tadilat",
    images: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Yeni mutfak lavabosi",
        isPrimary: true
      }
    ],
    location: "Çiğli, İzmir", 
    completionDate: new Date("2024-12-15"),
    clientName: "Hasan A.",
    projectDuration: "3 saat",
    materials: ["Granit lavabo", "Su tasarrufu musluk", "Sifon"],
    challenges: "Eski bağlantıların sökülmesi zaman aldı",
    result: "Modern ve tasarruflu mutfak lavabosi",
    isActive: true,
    featured: false,
    order: 5,
    tags: ["mutfak", "lavabo", "musluk", "tasarruf"],
    beforeImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Eski mutfak lavabosi"
      }
    ],
    afterImages: [
      {
        url: "/images/portfolio-placeholder.jpg",
        alt: "Yeni granit lavabo"
      }
    ]
  }
];

async function addPortfolioData() {
  try {
    // MongoDB Atlas bağlantısı
    const mongoUri = 'mongodb+srv://enesuysal:gezEHCEx1Jsxds4X@selimdb.x4clf62.mongodb.net/?retryWrites=true&w=majority&appName=selimDB';
    await mongoose.connect(mongoUri);
    console.log('MongoDB Atlas bağlantısı başarılı');

    // Önce mevcut verileri temizle
    await Portfolio.deleteMany({});
    console.log('Mevcut portfolio verileri temizlendi');

    // Yeni verileri ekle
    const result = await Portfolio.insertMany(portfolioData);
    console.log(`${result.length} portfolio verisi eklendi:`);
    
    result.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title} - ${item.category}`);
    });

    console.log('\n✅ Portfolio test verileri başarıyla eklendi!');
    
  } catch (error) {
    console.error('❌ Hata:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB bağlantısı kapatıldı');
  }
}

// Script'i çalıştır
addPortfolioData();

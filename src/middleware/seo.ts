import { Request, Response, NextFunction } from 'express';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
}

const seoPages: Record<string, SEOData> = {
  '/': {
    title: 'Selim Sıhhi Tesisat ve Tamirat - Profesyonel Tesisatçı Hizmetleri İzmir',
    description: 'İzmir\'de profesyonel tesisatçı hizmetleri. Su kaçağı, tıkanıklık açma, kombi tamiri, banyo mutfak tadilat işleri. 7/24 acil servis. Uygun fiyat, kaliteli malzeme.',
    keywords: 'tesisatçı izmir, su kaçağı tamiri, tıkanıklık açma, kombi tamiri, banyo tadilat, mutfak tadilat, acil tesisatçı, sıhhi tesisat, tesisatçı',
    canonical: 'https://selimtesisat.com'
  },
  '/hizmetler': {
    title: 'Tesisatçı Hizmetleri - Su Kaçağı, Tıkanıklık, Kombi Tamiri | Selim Tesisat',
    description: 'Profesyonel tesisatçı hizmetleri: Su kaçağı tespiti ve tamiri, tıkanıklık açma, kombi bakım tamiri, banyo mutfak tadilat. İzmir geneli hizmet.',
    keywords: 'su kaçağı tamiri, tıkanıklık açma, kombi tamiri, banyo tadilat, mutfak tadilat, gider temizliği, musluk tamiri, klozet tamiri',
    canonical: 'https://selimtesisat.com/hizmetler'
  },
  '/hakkimizda': {
    title: 'Hakkımızda - Selim Sıhhi Tesisat ve Tamirat | Güvenilir Tesisatçı',
    description: 'Selim Sıhhi Tesisat ve Tamirat olarak İzmir\'de yıllardır güvenilir tesisatçı hizmetleri veriyoruz. Deneyimli ekip, kaliteli malzeme, uygun fiyat.',
    keywords: 'selim tesisat, hakkımızda, güvenilir tesisatçı, deneyimli tesisatçı, izmir tesisatçı, profesyonel tesisat',
    canonical: 'https://selimtesisat.com/hakkimizda'
  },
  '/iletisim': {
    title: 'İletişim - Selim Tesisat | Tesisatçı Randevu ve Bilgi',
    description: 'Selim Tesisat ile iletişime geçin. Tesisatçı hizmetleri için randevu alın, ücretsiz keşif talep edin. İzmir geneli hizmet veriyoruz.',
    keywords: 'tesisatçı randevu, tesisatçı iletişim, izmir tesisatçı, tesisatçı telefon, ücretsiz keşif, tesisatçı fiyat',
    canonical: 'https://selimtesisat.com/iletisim'
  }
};

export const seoMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const path = req.path;
  const seoData = seoPages[path];
  
  if (seoData) {
    // Add SEO data to response locals for template rendering
    (res.locals as any)['seo'] = seoData;
    
    // Set security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Set cache headers for static content
    if (path.includes('/css/') || path.includes('/js/') || path.includes('/images/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
  
  next();
};

export const generateStructuredData = (type: string, data: any) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return JSON.stringify(baseData, null, 2);
};

export const generateBreadcrumb = (path: string) => {
  const breadcrumbItems = [
    { name: 'Ana Sayfa', url: '/' }
  ];
  
  const pathSegments = path.split('/').filter(segment => segment);
  let currentPath = '';
  
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`;
    const pageName = getPageName(segment);
    breadcrumbItems.push({
      name: pageName,
      url: currentPath
    });
  });
  
  return generateStructuredData('BreadcrumbList', {
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://selimtesisat.com${item.url}`
    }))
  });
};

const getPageName = (segment: string): string => {
  const pageNames: Record<string, string> = {
    'hizmetler': 'Hizmetlerimiz',
    'hakkimizda': 'Hakkımızda',
    'iletisim': 'İletişim',
    'su-kacagi': 'Su Kaçağı Tamiri',
    'tikaniklik': 'Tıkanıklık Açma',
    'kombi': 'Kombi Tamiri',
    'tadilat': 'Banyo Mutfak Tadilat'
  };
  
  return pageNames[segment] || segment;
};
import express from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Çok fazla mesaj gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin.',
    success: false
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env['SMTP_HOST'] || 'smtp.gmail.com',
  port: parseInt(process.env['SMTP_PORT'] || '587'),
  secure: false,
  auth: {
    user: process.env['SMTP_USER'],
    pass: process.env['SMTP_PASS']
  }
});

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Ad soyad 2-50 karakter arasında olmalıdır')
    .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/)
    .withMessage('Ad soyad sadece harf içerebilir'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Geçerli bir email adresi giriniz')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .matches(/^(\+90|0)?[5][0-9]{9}$/)
    .withMessage('Geçerli bir telefon numarası giriniz'),
  
  body('service')
    .trim()
    .isIn(['su-kacagi', 'tikaniklik', 'kombi', 'tadilat', 'diger'])
    .withMessage('Geçerli bir hizmet seçiniz'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Mesaj 10-500 karakter arasında olmalıdır'),
  
  body('honeypot')
    .isEmpty()
    .withMessage('Bot tespit edildi')
];

// Contact form submission
router.post('/', contactLimiter, contactValidation, async (req: import('express').Request, res: import('express').Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, phone, service, message } = req.body;

    // Service name mapping
    const serviceNames: Record<string, string> = {
      'su-kacagi': 'Su Kaçağı Tamiri',
      'tikaniklik': 'Tıkanıklık Açma',
      'kombi': 'Kombi Tamiri',
      'tadilat': 'Banyo Mutfak Tadilat',
      'diger': 'Diğer'
    };

    const serviceName = serviceNames[service] || 'Bilinmeyen Hizmet';

    // Email content
    const emailContent = `
      <h2>Selim Tesisat - Yeni İletişim Formu</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Hizmet:</strong> ${serviceName}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Bu mesaj ${new Date().toLocaleString('tr-TR')} tarihinde selimtesisat.com web sitesinden gönderildi.</small></p>
    `;

    // Send email
    const mailOptions = {
      from: process.env['SMTP_USER'],
      to: process.env['CONTACT_EMAIL'] || 'info@selimtesisat.com',
      subject: `Selim Tesisat - ${serviceName} Talebi - ${name}`,
      html: emailContent,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const autoReplyContent = `
      <h2>Selim Sıhhi Tesisat ve Tamirat</h2>
      <p>Sayın ${name},</p>
      <p>İletişim formunuzu aldık. En kısa sürede size dönüş yapacağız.</p>
      <p><strong>Talebiniz:</strong> ${serviceName}</p>
      <p>Acil durumlar için bizi telefondan arayabilirsiniz: <strong>+90 XXX XXX XX XX</strong></p>
      <br>
      <p>Kaliteli hizmet için teşekkürler!</p>
      <p><strong>Selim Sıhhi Tesisat ve Tamirat</strong></p>
      <p><em>Kalite de Tanışın...</em></p>
    `;

    const autoReplyOptions = {
      from: process.env['SMTP_USER'],
      to: email,
      subject: 'Selim Tesisat - Mesajınız Alındı',
      html: autoReplyContent
    };

    await transporter.sendMail(autoReplyOptions);

    return res.status(200).json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
    });
  }
});

// Get contact information
router.get('/info', (req, res) => {
  return res.json({
    success: true,
    data: {
      phone: '+90 XXX XXX XX XX',
      email: 'info@selimtesisat.com',
      address: 'İzmir, Türkiye',
      workingHours: {
        weekdays: '08:00 - 18:00',
        weekend: '09:00 - 17:00',
        emergency: '7/24 Acil Servis'
      },
      serviceAreas: [
        'Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Beyoğlu',
        'Fatih', 'Eminönü', 'Bakırköy', 'Zeytinburnu', 'Maltepe'
      ]
    }
  });
});

export { router as contactRouter };
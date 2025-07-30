import express from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import { Message } from '../models/index';

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
  body('firstName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Ad 2-50 karakter arasında olmalıdır')
    .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/)
    .withMessage('Ad sadece harf içerebilir'),
  
  body('lastName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Soyad 2-50 karakter arasında olmalıdır')
    .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/)
    .withMessage('Soyad sadece harf içerebilir'),
  
  body('email')
    .trim()
    .isEmail()
    .withMessage('Geçerli bir email adresi giriniz')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .matches(/^(\+90|0)?[0-9]{10}$/)
    .withMessage('Geçerli bir telefon numarası giriniz'),
  
  body('location')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Konum 2-100 karakter arasında olmalıdır'),
  
  body('service')
    .optional()
    .trim(),
  
  body('message')
    .trim()
    .isLength({ min: 5, max: 500 })
    .withMessage('Mesaj 5-500 karakter arasında olmalıdır'),
  
  body('honeypot')
    .optional()
    .isEmpty()
    .withMessage('Bot tespit edildi')
];

// Contact form submission
router.post('/submit', contactLimiter, contactValidation, async (req: import('express').Request, res: import('express').Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      console.log('Request body:', req.body);
      return res.status(400).json({
        success: false,
        message: 'Form validation failed',
        errors: errors.array()
      });
    }

    const { firstName, lastName, email, phone, service, location, message, urgent } = req.body;

    // Get client IP and user agent
    const ipAddress = req.ip || req.connection.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    // Save message to database
    const newMessage = new Message({
      firstName,
      lastName,
      email,
      phone,
      service: service || 'Belirtilmemiş',
      location,
      message,
      isUrgent: urgent || false,
      priority: urgent ? 'urgent' : 'medium',
      ipAddress,
      userAgent,
      source: 'website'
    });

    const savedMessage = await newMessage.save();

    // Try to send emails, but don't fail if email sending fails
    try {
      // Email content
      const fullName = `${firstName} ${lastName}`;
      const emailContent = `
        <h2>Selim Tesisat - Yeni İletişim Formu</h2>
        <p><strong>Message ID:</strong> ${savedMessage._id}</p>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Konum:</strong> ${location}</p>
        <p><strong>Hizmet:</strong> ${service || 'Belirtilmemiş'}</p>
        <p><strong>Acil:</strong> ${urgent ? 'EVET' : 'Hayır'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Bu mesaj ${new Date().toLocaleString('tr-TR')} tarihinde selimtesisat.com web sitesinden gönderildi.</small></p>
        <p><small>IP Address: ${ipAddress}</small></p>
      `;

      // Send email
      const mailOptions = {
        from: process.env['SMTP_USER'],
        to: process.env['CONTACT_EMAIL'] || 'info@selimtesisat.com',
        subject: `${urgent ? '🚨 ACİL - ' : ''}Selim Tesisat - ${service || 'İletişim'} Talebi - ${fullName}`,
        html: emailContent,
        replyTo: email
      };

      await transporter.sendMail(mailOptions);

      // Send auto-reply to customer
      const autoReplyContent = `
        <h2>Selim Sıhhi Tesisat ve Tamirat</h2>
        <p>Sayın ${fullName},</p>
        <p>İletişim formunuzu aldık. En kısa sürede size dönüş yapacağız.</p>
        <p><strong>Talebiniz:</strong> ${service || 'Genel İletişim'}</p>
        <p><strong>Konum:</strong> ${location}</p>
        <p><strong>Talep No:</strong> ${savedMessage._id}</p>
        ${urgent ? '<p><strong>⚠️ Talebiniz acil olarak işaretlendi.</strong></p>' : ''}
        <p>Acil durumlar için bizi telefondan arayabilirsiniz: <strong>+90 XXX XXX XX XX</strong></p>
        <br>
        <p>Kaliteli hizmet için teşekkürler!</p>
        <p><strong>Selim Sıhhi Tesisat ve Tamirat</strong></p>
        <p><em>Kalite ile Tanışın... 💧</em></p>
      `;

      const autoReplyOptions = {
        from: process.env['SMTP_USER'],
        to: email,
        subject: `Selim Tesisat - Mesajınız Alındı ${urgent ? '(ACİL)' : ''}`,
        html: autoReplyContent
      };

      await transporter.sendMail(autoReplyOptions);
      
      console.log('Emails sent successfully for message:', savedMessage._id);
    } catch (emailError) {
      console.log('Email sending failed, but message saved to database:', savedMessage._id);
      console.log('Email error:', emailError instanceof Error ? emailError.message : emailError);
    }

    return res.status(200).json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      messageId: savedMessage._id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
    });
  }
});

// Legacy contact form submission (for backwards compatibility)
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
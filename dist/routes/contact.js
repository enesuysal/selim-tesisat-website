"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const nodemailer_1 = __importDefault(require("nodemailer"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router = express_1.default.Router();
exports.contactRouter = router;
const contactLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        error: 'Çok fazla mesaj gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin.',
        success: false
    },
    standardHeaders: true,
    legacyHeaders: false,
});
const transporter = nodemailer_1.default.createTransport({
    host: process.env['SMTP_HOST'] || 'smtp.gmail.com',
    port: parseInt(process.env['SMTP_PORT'] || '587'),
    secure: false,
    auth: {
        user: process.env['SMTP_USER'],
        pass: process.env['SMTP_PASS']
    }
});
const contactValidation = [
    (0, express_validator_1.body)('name')
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('Ad soyad 2-50 karakter arasında olmalıdır')
        .matches(/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/)
        .withMessage('Ad soyad sadece harf içerebilir'),
    (0, express_validator_1.body)('email')
        .trim()
        .isEmail()
        .withMessage('Geçerli bir email adresi giriniz')
        .normalizeEmail(),
    (0, express_validator_1.body)('phone')
        .trim()
        .matches(/^(\+90|0)?[5][0-9]{9}$/)
        .withMessage('Geçerli bir telefon numarası giriniz'),
    (0, express_validator_1.body)('service')
        .trim()
        .isIn(['su-kacagi', 'tikaniklik', 'kombi', 'tadilat', 'diger'])
        .withMessage('Geçerli bir hizmet seçiniz'),
    (0, express_validator_1.body)('message')
        .trim()
        .isLength({ min: 10, max: 500 })
        .withMessage('Mesaj 10-500 karakter arasında olmalıdır'),
    (0, express_validator_1.body)('honeypot')
        .isEmpty()
        .withMessage('Bot tespit edildi')
];
router.post('/', contactLimiter, contactValidation, async (req, res) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
        const { name, email, phone, service, message } = req.body;
        const serviceNames = {
            'su-kacagi': 'Su Kaçağı Tamiri',
            'tikaniklik': 'Tıkanıklık Açma',
            'kombi': 'Kombi Tamiri',
            'tadilat': 'Banyo Mutfak Tadilat',
            'diger': 'Diğer'
        };
        const serviceName = serviceNames[service] || 'Bilinmeyen Hizmet';
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
        const mailOptions = {
            from: process.env['SMTP_USER'],
            to: process.env['CONTACT_EMAIL'] || 'info@selimtesisat.com',
            subject: `Selim Tesisat - ${serviceName} Talebi - ${name}`,
            html: emailContent,
            replyTo: email
        };
        await transporter.sendMail(mailOptions);
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
    }
    catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({
            success: false,
            message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
        });
    }
});
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
//# sourceMappingURL=contact.js.map
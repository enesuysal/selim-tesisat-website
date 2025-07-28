"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const router = express_1.default.Router();
exports.adminRouter = router;
const JWT_SECRET = process.env['JWT_SECRET'] || 'your-secret-key';
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await models_1.User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isValidPassword = await bcryptjs_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
        user.lastLogin = new Date();
        await user.save();
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.get('/content', authenticateToken, async (req, res) => {
    try {
        const [services, contactInfo, heroContent, whyChoose, cta, siteInfo, aboutPage] = await Promise.all([
            models_1.Service.find().sort({ order: 1, createdAt: 1 }),
            models_1.ContactInfo.findOne(),
            models_1.HeroContent.findOne(),
            models_1.WhyChoose.findOne(),
            models_1.CTA.findOne(),
            models_1.SiteInfo.findOne(),
            models_1.AboutPage.findOne()
        ]);
        res.json({
            services,
            contactInfo,
            heroContent,
            whyChoose,
            cta,
            siteInfo,
            aboutPage
        });
    }
    catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.put('/hero', authenticateToken, async (req, res) => {
    try {
        const heroContent = await models_1.HeroContent.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(heroContent);
    }
    catch (error) {
        console.error('Error updating hero content:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.put('/site-info', authenticateToken, async (req, res) => {
    try {
        const siteInfo = await models_1.SiteInfo.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(siteInfo);
    }
    catch (error) {
        console.error('Error updating site info:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.put('/contact-info', authenticateToken, async (req, res) => {
    try {
        const contactInfo = await models_1.ContactInfo.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(contactInfo);
    }
    catch (error) {
        console.error('Error updating contact info:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.put('/why-choose', authenticateToken, async (req, res) => {
    try {
        const whyChoose = await models_1.WhyChoose.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(whyChoose);
    }
    catch (error) {
        console.error('Error updating why choose content:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.put('/cta', authenticateToken, async (req, res) => {
    try {
        const cta = await models_1.CTA.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(cta);
    }
    catch (error) {
        console.error('Error updating CTA:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.put('/about', authenticateToken, async (req, res) => {
    try {
        const aboutPage = await models_1.AboutPage.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(aboutPage);
    }
    catch (error) {
        console.error('Error updating about page:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.get('/services', authenticateToken, async (req, res) => {
    try {
        const services = await models_1.Service.find().sort({ order: 1, createdAt: 1 });
        res.json(services);
    }
    catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.post('/services', authenticateToken, async (req, res) => {
    try {
        const service = new models_1.Service(req.body);
        await service.save();
        res.status(201).json(service);
    }
    catch (error) {
        console.error('Error creating service:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.put('/services/:id', authenticateToken, async (req, res) => {
    try {
        const service = await models_1.Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json(service);
    }
    catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.delete('/services/:id', authenticateToken, async (req, res) => {
    try {
        const service = await models_1.Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json({ message: 'Service deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//# sourceMappingURL=admin.js.map
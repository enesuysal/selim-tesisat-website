"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRouter = void 0;
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const router = express_1.default.Router();
router.get('/services', async (req, res) => {
    try {
        const services = await models_1.Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
        res.json(services);
    }
    catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ error: 'Failed to fetch services' });
    }
});
router.get('/contact-info', async (req, res) => {
    try {
        const contactInfo = await models_1.ContactInfo.findOne();
        res.json(contactInfo);
    }
    catch (error) {
        console.error('Error fetching contact info:', error);
        res.status(500).json({ error: 'Failed to fetch contact info' });
    }
});
router.get('/hero-content', async (req, res) => {
    try {
        const heroContent = await models_1.HeroContent.findOne();
        res.json(heroContent);
    }
    catch (error) {
        console.error('Error fetching hero content:', error);
        res.status(500).json({ error: 'Failed to fetch hero content' });
    }
});
router.get('/services/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const services = await models_1.Service.find({
            isActive: true,
            category: category
        }).sort({ order: 1, createdAt: 1 });
        res.json(services);
    }
    catch (error) {
        console.error('Error fetching services by category:', error);
        res.status(500).json({ error: 'Failed to fetch services by category' });
    }
});
router.get('/seo', async (req, res) => {
    try {
        const seoPages = await models_1.SeoPage.find({ isActive: true });
        res.json(seoPages);
    }
    catch (error) {
        console.error('Error fetching SEO data:', error);
        res.status(500).json({ error: 'Failed to fetch SEO data' });
    }
});
router.get('/seo/:path(*)', async (req, res) => {
    try {
        const path = `/${req.params['path']}`;
        const seoPage = await models_1.SeoPage.findOne({ path, isActive: true });
        res.json(seoPage);
    }
    catch (error) {
        console.error('Error fetching SEO data for path:', error);
        res.status(500).json({ error: 'Failed to fetch SEO data for path' });
    }
});
exports.dataRouter = router;
//# sourceMappingURL=data.js.map
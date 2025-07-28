import express from 'express';
import { Service, ContactInfo, HeroContent, SeoPage } from '../models';

const router = express.Router();

// Get all active services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Get contact info
router.get('/contact-info', async (req, res) => {
  try {
    const contactInfo = await ContactInfo.findOne();
    res.json(contactInfo);
  } catch (error) {
    console.error('Error fetching contact info:', error);
    res.status(500).json({ error: 'Failed to fetch contact info' });
  }
});

// Get hero content
router.get('/hero-content', async (req, res) => {
  try {
    const heroContent = await HeroContent.findOne();
    res.json(heroContent);
  } catch (error) {
    console.error('Error fetching hero content:', error);
    res.status(500).json({ error: 'Failed to fetch hero content' });
  }
});

// Get services by category
router.get('/services/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const services = await Service.find({ 
      isActive: true, 
      category: category 
    }).sort({ order: 1, createdAt: 1 });
    res.json(services);
  } catch (error) {
    console.error('Error fetching services by category:', error);
    res.status(500).json({ error: 'Failed to fetch services by category' });
  }
});

// Get SEO data
router.get('/seo', async (req, res) => {
  try {
    const seoPages = await SeoPage.find({ isActive: true });
    res.json(seoPages);
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    res.status(500).json({ error: 'Failed to fetch SEO data' });
  }
});

// Get SEO data for specific path
router.get('/seo/:path(*)', async (req, res) => {
  try {
    const path = `/${req.params['path']}`;
    const seoPage = await SeoPage.findOne({ path, isActive: true });
    res.json(seoPage);
  } catch (error) {
    console.error('Error fetching SEO data for path:', error);
    res.status(500).json({ error: 'Failed to fetch SEO data for path' });
  }
});

export const dataRouter = router;

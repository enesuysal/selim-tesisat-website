import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, Service, ContactInfo, HeroContent, WhyChoose, CTA, SiteInfo, AboutPage, Portfolio, PortfolioPage } from '../models';

const router = express.Router();

// JWT secret (should be in env)
const JWT_SECRET = process.env['JWT_SECRET'] || 'your-secret-key';

// Middleware to verify JWT token
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Update last login
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
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all content for admin dashboard
router.get('/content', authenticateToken, async (req, res) => {
  try {
    const [services, contactInfo, heroContent, whyChoose, cta, siteInfo, aboutPage] = await Promise.all([
      Service.find().sort({ order: 1, createdAt: 1 }),
      ContactInfo.findOne(),
      HeroContent.findOne(),
      WhyChoose.findOne(),
      CTA.findOne(),
      SiteInfo.findOne(),
      AboutPage.findOne()
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
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update hero content
router.put('/hero', authenticateToken, async (req, res) => {
  try {
    const heroContent = await HeroContent.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(heroContent);
  } catch (error) {
    console.error('Error updating hero content:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update site info
router.put('/site-info', authenticateToken, async (req, res) => {
  try {
    const siteInfo = await SiteInfo.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(siteInfo);
  } catch (error) {
    console.error('Error updating site info:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update contact info
router.put('/contact-info', authenticateToken, async (req, res) => {
  try {
    const contactInfo = await ContactInfo.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(contactInfo);
  } catch (error) {
    console.error('Error updating contact info:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update why choose us
router.put('/why-choose', authenticateToken, async (req, res) => {
  try {
    const whyChoose = await WhyChoose.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(whyChoose);
  } catch (error) {
    console.error('Error updating why choose content:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update CTA
router.put('/cta', authenticateToken, async (req, res) => {
  try {
    const cta = await CTA.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(cta);
  } catch (error) {
    console.error('Error updating CTA:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update about page
router.put('/about', authenticateToken, async (req, res) => {
  try {
    const aboutPage = await AboutPage.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(aboutPage);
  } catch (error) {
    console.error('Error updating about page:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Services CRUD
router.get('/services', authenticateToken, async (req, res) => {
  try {
    const services = await Service.find().sort({ order: 1, createdAt: 1 });
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/services', authenticateToken, async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/services/:id', authenticateToken, async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/services/:id', authenticateToken, async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as adminRouter };

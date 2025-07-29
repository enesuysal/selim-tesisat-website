import mongoose from 'mongoose';
import { Portfolio } from '../models';

const MONGODB_URI = 'mongodb+srv://enesuysal:gezEHCEx1Jsxds4X@selimdb.x4clf62.mongodb.net/';

async function getPortfolioIds() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Atlas');

    const portfolios = await Portfolio.find({}).select('_id title').limit(5);
    console.log('Portfolio IDs:');
    portfolios.forEach(p => {
      console.log(`${p._id} - ${p.title}`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

getPortfolioIds();

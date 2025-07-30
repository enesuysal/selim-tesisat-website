import mongoose from 'mongoose';

const MONGODB_URI = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/selim-tesisat';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;

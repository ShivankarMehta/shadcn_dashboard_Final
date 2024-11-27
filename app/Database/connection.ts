import mongoose from 'mongoose';

export const connectToDB = async () => {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
  };
  
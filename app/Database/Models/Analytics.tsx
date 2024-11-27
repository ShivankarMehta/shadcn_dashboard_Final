import mongoose from 'mongoose';

export const AnalyticsSchema= new mongoose.Schema({
    name:String,
    uv: Number,
    pv:Number,
    amt:Number,
  })
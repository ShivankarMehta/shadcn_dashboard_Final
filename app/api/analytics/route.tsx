import { NextResponse } from 'next/server';
import { connectToDB } from '@/app/Database/connection';
import mongoose from 'mongoose';
 import data from "@/data/analytics";
 import { AnalyticsSchema } from '@/app/Database/Models/Analytics';

const Analytics=
mongoose.models.Analytics || mongoose.model('Analytics', AnalyticsSchema);


export async function POST() {
  try {
    await connectToDB();
    const result = await Analytics.insertMany(data); // Insert imported data
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 500 });
    
  }
}

export async function GET() {
  try {
    await connectToDB();
    const analyticsData = await Analytics.find({}); // Fetch all analytics data
    return NextResponse.json({ success: true, data: analyticsData });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 500 });
  }
}
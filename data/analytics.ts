// import type { NextApiRequest, NextApiResponse } from "next";
// import mongoose from 'mongoose';

// const AnalyticsSchema= new mongoose.Schema({
//   name:String,
//   uv: Number,
//   pv:Number,
//   amt:Number,
// })


// const Analytics=
// mongoose.models.Analytics || mongoose.model('Analytics', AnalyticsSchema);

// const connectToDB = async () => {
//   if (!process.env.MONGODB_URI) {
//     throw new Error('MONGODB_URI is not defined in the environment variables');
//   }
//   if (mongoose.connection.readyState === 0) {
//     await mongoose.connect(process.env.MONGODB_URI);
//   }
// };

// export default async function handler(req: NextApiRequest, res:NextApiResponse){
//   try{
//   await connectToDB();
//   if(req.method=='POST'){
//   const data=[
//     { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//     { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//     { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//     { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//     { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//     { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
//     { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
//     { name: 'Aug', uv: 2400, pv: 2400, amt: 2400 },
//     { name: 'Sep', uv: 3500, pv: 1300, amt: 2210 },
//     { name: 'Oct', uv: 3000, pv: 9800, amt: 2290 },
//     { name: 'Nov', uv: 2000, pv: 3908, amt: 2000 },
//     { name: 'Dec', uv: 1890, pv: 4800, amt: 2181 },
//   ];
    

//   await Analytics.insertMany(data);
//   res.status(200).json({ message: 'Data successfully added to MongoDB' });
//   }
//   else{
//     res.setHeader('Allow',['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
//   }catch(error){
//     console.error('Error connecting to database or saving data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }







import { AnalyticsItem } from '@/types/analytics';

const data: AnalyticsItem[] = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 2400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    uv: 3500,
    pv: 1300,
    amt: 2210,
  },
  {
    name: 'Oct',
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    uv: 2000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Dec',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default data;
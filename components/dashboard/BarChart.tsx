'use client'
import {Bar,BarChart,CartesianGrid, XAxis,YAxis,ResponsiveContainer} from 'recharts'
import React,{useState, useEffect} from 'react';
import {Card, CardContent, CardDescription,CardHeader,CardTitle} from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"

// import data from '@/data/analytics';

const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig
  
const BarChartimp =() =>{
  const [data,setData]= useState([]);
  const [loading,setLoading] = useState(true);
useEffect(()=>{
const fetchData = async ()=>{
try{
  const response= await fetch('/api/analytics')
  const result= await response.json();
  if(result.success){
    setData(result.data);
  }
  else{
    console.error('Failed to fetch data:', result.error);
}
} catch(error){
  console.error('Error fetching data:', error); 
}
finally {
  setLoading(false);
}
};
fetchData();
},[])

if(loading) return <p>Loading...</p>

return(
    <>
    <Card>
        <CardHeader>
            <CardTitle>Analytics for This Year</CardTitle>
            <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
            <div style={{width:'100%',height:300}}>
               <ResponsiveContainer>
               <ChartContainer config={chartConfig}>
               <BarChart accessibilityLayer width={1100} height={300} data={data}>
                <Bar  fill="var(--color-mobile)" radius={4} type='monotone' dataKey='uv'/>
                <CartesianGrid vertical={false} stroke='#ccc'/>
                <XAxis dataKey='name' tickLine={false}
                tickMargin={10}
                axisLine={false}/>
                <YAxis/>
               </BarChart>
               </ChartContainer>
               </ResponsiveContainer>
            </div>
        </CardContent>
        </Card>
    </>
)
}

export default BarChartimp;
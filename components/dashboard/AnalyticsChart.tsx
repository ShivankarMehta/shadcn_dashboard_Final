'use client';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import React,{useState, useEffect} from 'react';

// import data from '@/data/analytics';

const AnalyticsChart = () => {
    const [data,setData]= useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchData=async () => {
            try {
                const response= await fetch('/api/analytics');
                const result= await response.json();
                if(result.success){
                    setData(result.data);
                }
                else{
                    console.error('Failed to fetch data:', result.error);
                }
            }
            catch(error){
                console.error('Error fetching data:', error); 
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    if(loading) return <p>Loading...</p>
    return  (
         <>
        <Card>
        <CardHeader>
            <CardTitle>Analytics for This Year</CardTitle>
            <CardDescription>Views Per Month</CardDescription>
        </CardHeader>
        <CardContent>
            <div style={{width:'100%',height:300}}>
               <ResponsiveContainer>
               <LineChart width={1100} height={300} data={data}>
                <Line type='monotone' dataKey='uv' stroke='#8884d8'/>
                <CartesianGrid stroke='#ccc'/>
                <XAxis dataKey='name'/>
                <YAxis/>
               </LineChart>
               </ResponsiveContainer>
            </div>
        </CardContent>
        </Card>
        </>
    );
}
 
export default AnalyticsChart;
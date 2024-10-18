"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../components/logo';

export default function Calender() {
    const [today, setToday] = useState<string>('');

    useEffect(() => {
        // const currentDate = new Date().toLocaleDateString();
        const currentDate = new Date().toISOString().split('T')[0];
        setToday(currentDate);
    }, []);

    return (
        <div className='h-screen bg-white'>
            <div className='flex flex-row py-2'>
                <div>
                    <Logo />
                </div>
                <div className='flex items-center mx-auto'>
                    <Link href='/' className='text-black text-xl font-bold'>Home</Link>
                </div>
            </div>
            <div className='h-screen text-black'
                style={
                    {
                        backgroundImage: 'url("/images/fitnessTrackerImahe.webp")',
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat", 
                        backgroundPosition: "center",
                    }}>
                <div className='flex flex-col items-center justify-center h-4/6'>
                    <div className='flex flex-col items-center p-6 bg-opacity-70 bg-slate-600 rounded-lg gap-5'>
                        <h1 className='text-5xl font-bold text-white'>Fitness Diary</h1>
                        <p className='mt-2 text-white text-2xl'>Today's Date: {today}</p>
                        <Link className='bg-slate-800 bg-opacity-70 items-center my-auto  rounded-lg' href={`/diaryPage/${today}`}>
                            <button className="bg-green-300 p-1 px-3 rounded text-black text-sm">Log Today's Workout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


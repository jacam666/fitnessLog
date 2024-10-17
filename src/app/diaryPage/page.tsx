"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../components/logo';

export default function Calender() {
    const [today, setToday] = useState<string>('');

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString('en-CA');
        setToday(currentDate);
    }, []);

    return (
        <div className='h-screen bg-white'>
            <div className='flex flex-row'>
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
                        backgroundSize: "cover", // Ensures the image covers the entire section
                        backgroundRepeat: "no-repeat", // Avoid repeating the image
                        backgroundPosition: "center", // Center the image
                    }}>
                <div className='flex flex-col items-center justify-center h-4/6'>
                    <div className='flex flex-col items-center p-2 bg-opacity-70 bg-slate-600 rounded-lg gap-5'>
                        <h1 className='text-5xl font-bold text-white'>Fitness Diary</h1>
                        <p className='mt-2 text-white text-2xl'>Today's Date: {today}</p>
                        <Link className='bg-slate-800 bg-opacity-70 items-center my-auto  rounded-lg' href={`/log/${today}`}>
                            <button className=' text-white py-2 px-4'>Log Today's Workout</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};


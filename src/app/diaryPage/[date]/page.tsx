"use client";
import Logo from '@/app/components/logo';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // Hook for grabbing dynamic route params
import { useState } from 'react';

export default function LogPage() {
    const params = useParams();
    const date = params.date; // Extract the date from the dynamic route

    const [rows, setRows] = useState<number>(3); // Adjustable row state
    const [columns, setColumns] = useState<number>(3); // Adjustable column state

    // Handlers to add more rows and columns
    const handleAddRow = () => {
        setRows(rows + 1);
    };

    const handleAddColumn = () => {
        setColumns(columns + 1);
    };

    return (
        <div className="h-screen">
            <div className="flex flex-row py-2 bg-white">
                <div>
                    <Logo />
                </div>
                <div className="flex justify-center items-center mx-auto">
                    <Link className="text-black font-bold" href="/">Home</Link>
                </div>
            </div>
            <div className='my-4'>
                <h1 className="text-4xl font-bold text-center">Workout Log for:</h1>
                <h2 className='flex justify-center text-xl'>
                    {date}
                </h2>
            </div>
            <div className="my-8 flex justify-center">
                <button onClick={handleAddRow} className="bg-green-300 text-black px-4 py-2 mr-2 rounded">
                    Add Row
                </button>
                <button onClick={handleAddColumn} className="bg-green-300 text-black px-4 py-2 rounded">
                    Add Column
                </button>
            </div>
            <div className="flex justify-center">
                <table className="table-auto border-collapse border border-gray-500">
                    <thead>
                        <tr>
                            <th>
                                Exercise
                            </th>
                            {Array.from({ length: columns }).map((_, colIndex) => (
                                <th key={colIndex} className="border border-gray-400 px-4 py-2">
                                    Set {colIndex + 1}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rows }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: columns }).map((_, colIndex) => (
                                    <td key={colIndex} className="border border-gray-400 px-4 py-2">
                                        Row {rowIndex + 1}, Col {colIndex + 1}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

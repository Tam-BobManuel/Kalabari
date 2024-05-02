"use client"

import { useRouter } from 'next/navigation';
import { HiOutlineReply } from "react-icons/hi";

export default function Back () {
    const router = useRouter();
    return (
        <>
            <HiOutlineReply 
                onClick={() => router.back()} 
                aria-label="go back to previous page" 
                size={22} 
                style={{ cursor: 'pointer' }} 
            />
        </>
    );
};

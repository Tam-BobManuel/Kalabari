"use client"
// Use usePathname for catching route name.
import {useEffect } from 'react';
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import Footer from "@/components/Footer";

export const LayoutProvider = ({ children }: {children: React.ReactNode;}) => {
    useEffect(() => {
        document.addEventListener('copy', (e) => {
          e.preventDefault();
        });
      }, []);
    const pathname = usePathname();
    return (
        <>
            {pathname.includes("/admin") ? null : <NavBar />}
            {children}
            {pathname !== "/" && <Footer />}
        </>
    );
};

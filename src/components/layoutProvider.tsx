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
    document.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    console.log("%c/------------------------/\n\n%cWE ARE SEEKING VOLUNTEERS%c\n\n/------------------------/%c", 'font-size: 18px; font-weight: bold; color: #34C759;', 'font-size: 18px; font-weight: bold; color: #34C759;', 'font-size: 18px; font-weight: bold; color: #34C759;', 'color: #000;');
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

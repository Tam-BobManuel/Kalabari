"use client"
import {CSSProperties, useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import Footer from "./footer";
import CircleLoader from "react-spinners/CircleLoader";
import FlareCursor from './FlareCursor';
import { useOnPC, useOnTablet } from '@/hooks/useWindowResize';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  // borderColor: "red",
};

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
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  
  const onLaptop = useOnPC(false);
  const onTab = useOnTablet(false);

  useEffect(() => {
    setTimeout(() => {
      setIsClient(true);
    }); // 1-second delay
  }, []);

  if (!isClient) {
    return ( 
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <CircleLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <audio autoPlay loop preload='auto'>
          <source src="/audio/loading-sound.wav" type="audio/wav" />
        </audio>
      </div>
    );
  }

  const excludedPathnames = ["/", "/photos"];
  return (
    <>
      {pathname?.includes("/admin") ? null : <NavBar />}
        {onLaptop? (<FlareCursor/>):(' ')}
        {children}
      {!excludedPathnames.includes(pathname ?? '') && <Footer />}
    </>
  );
};
"use client";
import { CSSProperties, useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import Footer from "./footer";
import CircleLoader from "react-spinners/CircleLoader";
import FlareCursor from './FlareCursor';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [color] = useState("#ffffff");

  useEffect(() => {
    const handlePreventDefault = (e: Event) => e.preventDefault();
    document.addEventListener('copy', handlePreventDefault);
    document.addEventListener('dragstart', handlePreventDefault);
    document.addEventListener('contextmenu', handlePreventDefault);
    console.log("%c/------------------------/\n\n%cWE ARE SEEKING VOLUNTEERS%c\n\n/------------------------/%c", 'font-size: 18px; font-weight: bold; color: #34C759;', 'font-size: 18px; font-weight: bold; color: #34C759;', 'font-size: 18px; font-weight: bold; color: #34C759;', 'color: #000;');

    return () => {
      document.removeEventListener('copy', handlePreventDefault);
      document.removeEventListener('dragstart', handlePreventDefault);
      document.removeEventListener('contextmenu', handlePreventDefault);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
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
      </div>
    );
  }

  const excludedPathnames = ["/", "/photos"];
  return (
    <>
      {pathname?.includes("/admin") ? null : <NavBar />}
      <FlareCursor />
      {children}
      {!excludedPathnames.includes(pathname ?? '') && <Footer />}
    </>
  );
};

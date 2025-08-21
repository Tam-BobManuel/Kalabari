"use client"
import { useState, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import logo from "../assets/logo.png";
import { HiOutlineMenu, HiOutlineX, HiArrowRight } from "react-icons/hi";
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetClose, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/history", label: "HISTORY" },
  { path: "/photos", label: "PHOTOS" },
  { path: "/names", label: 'NAMES' }
] as const;

interface CommonLinkProps {
  path: string;
  label: string;
  isActive: boolean;
}

const CommonLink = memo(({ path, label, isActive }: CommonLinkProps) => (
  <Link href={path}>
    <p className={`p-5 ${isActive ? "border-b" : ""}`} aria-label={`Navigate to ${label}`}>
      <span className='text-base text-italic'>{label}</span>
    </p>
  </Link>
));
CommonLink.displayName = 'CommonLink';

const NavigateArrow = memo(({ isHome }: { isHome: boolean }) => (
  <motion.div
    initial={{ x: 0 }}
    animate={{ x: [-5, 5] }}
    transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}
    className={`flex items-center ${isHome ? 'text-black' : 'text-white'}`}
  >
    <span className='mr-2'>navigate</span>
    <HiArrowRight className='cursor-pointer' />
  </motion.div>
));
NavigateArrow.displayName = 'NavigateArrow';

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  const isHome = pathname === "/";
  const navClassName = `flex items-center justify-between w-full p-0 pl-5 mb-[10px] z-50 ${
    isHome ? "fixed top-[4%] w-[90%]" : "sticky top-[2%] w-full"
  }`;

  return (
    <nav className={navClassName}>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <div className='rounded-full inline w-[50px] overflow-hidden'>
          <Image src={logo} alt="website logo, click to go back" onClick={() => router.back()} />
        </div>

        {/* Desktop/Tablet Navigation */}
        <div className='hidden md:block justify-between backdrop-blur items-center justify-center z-40 text-white'>
          <ul className={`justify-between flex items-center ${
            !isHome ? 'justify-start' : 'justify-center'
          } px-5 mx-auto space-x-2 text-base`}>
            {navItems.map(({ path, label }) => (
              <CommonLink key={path} path={path} label={label} isActive={pathname === path} />
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className='block md:hidden justify-between backdrop-blur flex items-center justify-center mr-3'>
          <ul className='justify-between flex items-center justify-center p-2 mx-auto space-x-4'>
            <li className='flex items-center'>
              <NavigateArrow isHome={isHome} />
            </li>
            <li className='flex justify-center items-center text-white border bg-darkk'>
              <SheetTrigger asChild>
                <button aria-label='Mobile menu'>
                  <HiOutlineMenu size={32} />
                </button>
              </SheetTrigger>
            </li>
          </ul>

          <SheetContent className='w-full bg-slate-950 bg-opacity-[90%] text-white border-none'>
            <SheetHeader>
              <SheetClose className='flex justify-end mt-[4.5%]'>
                <HiOutlineX size={42} className='rounded-full bg-white/20 text-white' />
              </SheetClose>
              <SheetDescription className='text-white'>
                <ul className='mt-4 grid grid-rows'>
                  {navItems.map(({ path, label }) => (
                    <li key={path} className='text-3xl mb-4 justify-start grid grid-cols'>
                      <button
                        aria-label={`Navigate to ${label}`}
                        className='text-italic text-left'
                        onClick={() => handleNavigation(path)}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </div>
      </Sheet>
    </nav>
  );
}

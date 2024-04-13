"use client"
import Link from "next/link";
import "../../globals.css";
import {onPC} from '../hooks/use-WindowResize'


export default function Home() {
  // truthy means you're on Laptop, falsy means you're on mobile
  // It starts off as false
  const onLaptop = onPC(false); // Use the useWindowResize hook
  return (
    <main className={'min-h-screen myBackgroundImg flex items-center justify-center'}>

      <div className="min-h-screen w-full flex items-center justify-center">
        {onLaptop ? 
          (
            <h1 className="text-center text-white text-9xl alt-font text-shadow">WELCOME TO<br/>KALABARI</h1>
          ): (
            <h1 className="text-center text-white text-7xl alt-font">WELCOME TO<br/>KALABARI</h1>
          )
        }
      </div>      
    </main>
  );
}

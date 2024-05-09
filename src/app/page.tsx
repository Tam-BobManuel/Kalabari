"use client"
import Link from "next/link";
import "../../globals.css";
import {useOnPC} from '../hooks/useWindowResize'

export default function Home() {
  // truthy means you're on Laptop, falsy means you're on mobile
  // It starts off as false
  const onLaptop = useOnPC(false);
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

      <div className="fixed bottom-0 left-0 ml-4 mb-4 text-sm text-gray-500">
        <Link href="/facts">
          <span className="text-white text-3xl text-shadow">Fun Facts</span>
        </Link>
      </div>

    </main>
  );
}
import Link from "next/link";
import "../../globals.css";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import mybgImg from '../assets/Images/home-Img/Blurred-GI5YHyFXsAAHRGi.svg';

export default function Home() {
  return (
    <main className="min-h-screen max-h-screen h-screen overflow-hidden flex items-center justify-center bg-darkk text-white">
  <Image
    src={mybgImg}
    alt="Background Image"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    priority
  />
  <div className="min-h-screen w-full flex items-center justify-center z-10">
    <h1 className="text-center text-white text-7xl sm:text-8xl md:text-9xl alt-font text-shadow">Kalabari se <br/> alua ke obem</h1>
  </div>

  <div className="fixed bottom-0 left-0 ml-4 mb-4 text-sm text-gray-500 z-10">
    <Button className="p-2 pt-4 center text-center item-center border  text-white">
      <Link href="/facts">
        <span className="text-white text-3xl text-shadow">Fun Facts</span>
      </Link>
    </Button>
    {/* <a href="https://www.buymeacoffee.com/TamManuel"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=TamManuel&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a> */}
      
  </div>
</main>
  );
}
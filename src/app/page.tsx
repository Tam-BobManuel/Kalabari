import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import mybgImg from '../assets/Images/home-Img/Blurred-GI5YHyFXsAAHRGi.svg';

export default function Home() {
  return (
    <main className="min-h-screen h-screen overflow-hidden flex items-center justify-center bg-darkk text-white relative">
      <Image
        src={mybgImg}
        alt="Background Image"
        fill
        sizes="100vw"
        className="object-cover -z-10"
        priority
        quality={70}
      />
      <div className="w-full flex items-center justify-center relative z-10">
        <h1 className="text-center text-white text-7xl sm:text-8xl md:text-9xl alt-font text-shadow">Kalabari se <br/> alua ke obem</h1>
      </div>
      <div className="fixed bottom-0 left-0 ml-4 mb-4 z-20">
        <Link href="/facts" passHref legacyBehavior>
          <Button className="p-2 pt-4 text-center border text-white text-3xl text-shadow" asChild>
            <span>Fun Facts</span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
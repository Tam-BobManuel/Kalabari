import mybgImg from "@/assets/Images/home-Img/Blurred-GI5YHyFXsAAHRGi.svg";
import { Button } from "@/features/shared/ui/button";
import Link from "next/link";
import RotatingText from "./RotatingText";

export default function HomeHero() {
  return (
    <main className="min-h-screen max-h-screen h-screen overflow-hidden flex items-center justify-center bg-darkk text-white">
      <img
        src={mybgImg.src}
        alt="Kalabari cultural background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="min-h-screen w-full flex items-center justify-center z-10">
        <RotatingText />
      </div>

      <div className="fixed bottom-0 left-0 ml-4 mb-4 text-sm text-gray-500 z-10">
        <Button className="p-2 pt-4 center text-center item-center border text-white">
          <Link href="/facts">
            <span className="text-white text-3xl text-shadow">Fun Facts</span>
          </Link>
        </Button>
      </div>
    </main>
  );
}

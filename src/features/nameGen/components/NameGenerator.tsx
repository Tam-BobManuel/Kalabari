import { Button } from "@/features/shared/ui/button";

interface NameGeneratorProps {
  generatedName: string;
  meaning: string;
  onGenerate: () => void;
}

export default function NameGenerator({ generatedName, meaning, onGenerate }: NameGeneratorProps) {
  return (
    <>
      <div className="text-black text-xl font-medium mt-5 mb-5">
        <p className="inline">NAME : </p>
        <p className="inline">{generatedName}</p>
      </div>
      <div className="text-black text-xl font-medium mt-5 mb-5">
        <p className="inline">MEANING : </p>
        <p className="inline">{meaning}</p>
      </div>
      <Button onClick={onGenerate} className="text-white lg:text-xl text-base w-full font-medium mt-5">
        GENERATE RANDOM NAME
      </Button>
    </>
  );
}
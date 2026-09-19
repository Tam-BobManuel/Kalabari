import { Button } from "@/features/shared/ui/button";
import { Input } from "@/features/shared/ui/input";

interface NameMeaningSearchProps {
  nameInput: string;
  secondMeaning: string;
  error: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export default function NameMeaningSearch({
  nameInput,
  secondMeaning,
  error,
  onInputChange,
  onSearch,
}: NameMeaningSearchProps) {
  return (
    <>
      <div className="text-black">
        <Input
          type="text"
          className="w-full border-2 border-black bg-[#D9D9D9] font-normal text-base text-black"
          placeholder="ENTER IJAW NAME HERE..."
          value={nameInput}
          onChange={onInputChange}
        />
      </div>
      <div className="text-black text-xl font-medium mt-5 mb-5">
        {secondMeaning ? <p className="inline">MEANING : </p> : null}
        <p className="inline">{secondMeaning}</p>
        <p className="italic inline text-[#8B0505]">{error}</p>
      </div>
      <Button
        onClick={onSearch}
        className="text-white text-xl w-full font-medium mt-5"
      >
        FIND MEANING
      </Button>
    </>
  );
}

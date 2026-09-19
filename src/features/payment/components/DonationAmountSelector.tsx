import { Input } from "@/features/shared/ui/input";
import { Label } from "@/features/shared/ui/label";

const presetAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

interface DonationAmountSelectorProps {
  amount: number | "";
  customAmount: string;
  onSelect: (value: number) => void;
  onCustomAmount: (value: string) => void;
}

export default function DonationAmountSelector({
  amount,
  customAmount,
  onSelect,
  onCustomAmount,
}: DonationAmountSelectorProps) {
  return (
    <div>
      <Label className="text-base mb-2 block">Donation amount</Label>
      <div className="grid grid-cols-3 gap-2">
        {presetAmounts.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onSelect(value)}
            className={`py-2.5 rounded-md border text-sm transition-colors ${
              amount === value
                ? "bg-[#5F7FFF] border-[#5F7FFF] text-white"
                : "bg-transparent border-[#3c3d45] text-white hover:bg-[#3c3d45]"
            }`}
          >
            ₦{value.toLocaleString()}
          </button>
        ))}
      </div>
      <Input
        type="number"
        min="1"
        placeholder="Or enter a custom amount in Naira (₦)"
        value={customAmount}
        onChange={(e) => onCustomAmount(e.target.value)}
        className="mt-3 text-black text-base"
      />
    </div>
  );
}

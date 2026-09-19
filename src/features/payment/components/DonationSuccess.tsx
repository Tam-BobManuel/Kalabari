import { Card, CardDescription, CardHeader, CardTitle } from "@/features/shared/ui/card";

export default function DonationSuccess() {
  return (
    <Card className="w-full max-w-lg mx-auto bg-[#26262D] border-[#3c3d45] text-white">
      <CardHeader>
        <CardTitle className="text-center text-3xl text-green-400">Thank you!</CardTitle>
        <CardDescription className="text-center text-base text-white">
          Your donation has been received. It goes a long way in preserving and promoting Kalabari culture.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
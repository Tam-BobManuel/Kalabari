import Back from "@/features/shared/components/Back";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import regions from "../data/regions.json";

export default function RegionDetails({ regionId }: { regionId: string }) {
  const regionData = regions.find((region) => region.slug === regionId);

  if (!regionData) {
    notFound();
  }

  return (
    <main className="p-2">
      <Back />
      <h1 className="text-4xl text-center">
        {regionId.charAt(0).toUpperCase() + regionId.slice(1)}
      </h1>
      {regionData.detail.map((item) => (
        <p key={item.text}>{parse(item.text)}</p>
      ))}
    </main>
  );
}

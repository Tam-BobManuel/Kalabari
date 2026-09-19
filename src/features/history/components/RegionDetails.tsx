"use client";
import Back from "@/features/shared/components/Back";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import regions from "../data/regions.json";

export default function RegionDetails({ regionId }: { regionId: string }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const regionData = regions.find((region) => region.slug === regionId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!regionData) {
    throw notFound();
  }

  return (
    <main className="p-2">
      <Back />
      <h1 className="text-4xl text-center">{regionId.charAt(0).toUpperCase() + regionId.slice(1)}</h1>
      {regionData.detail.map((item, index) => (
        <p key={index}>
          {ReactHtmlParser(item.text)}
        </p>
      ))}
    </main>
  );
}
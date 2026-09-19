import Back from "@/features/shared/components/Back";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import regions from "../data/regions.json";
import DuoCard from "./DuoCard";

export default function RegionsList() {
  return (
    <main className="bg-darkk p-2" aria-label="You're at the History section">
      <Back />
      <br />
      {regions.map((region, index) => (
        <DuoCard
          key={region.slug}
          text={ReactHtmlParser(
            `${region.detail
              .map((item) => item.text)
              .join(" ")
              .substring(0, 300)}...`,
          )}
          imageUrl={`/images/regions/${region.photo}`}
          mobileImageUrl={`/images/regions/${region.photo}`}
          linkUrl={`/history/kalabari/regions/${region.slug}`}
          linkText="Explore"
          heading={region.name}
          reverse={index % 2 === 0}
        />
      ))}
    </main>
  );
}

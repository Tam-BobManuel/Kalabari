import Back from "@/features/shared/components/Back";
import parse from "html-react-parser";
import React from "react";
import data from "../data/Origin.json";

export default function KalabariHistoryComp() {
  return (
    <main className="p-2 w-[95%] mx-[auto]">
      <Back />
      {/* HISTORY OF KALABARI  */}
      <h1 className="text-4xl text-center">{data.title}</h1>
      {data.content.map((paragraph) => (
        <div key={paragraph.text} className="text-xl text-justify leading-10">
          {parse(paragraph.text)}
          {paragraph.list && (
            <ol className="list-decimal pl-8">
              {paragraph.list.map((item) => (
                <li key={item.item}>{item.item}</li>
              ))}
            </ol>
          )}
        </div>
      ))}

      {/* TOWNS OF KALABARI */}
      <div className="text-3xl text-center">
        {parse(data.presentKingdom.title)}
      </div>
      {data.presentKingdom.townsAndVillages.map((town) => (
        <div key={town.text} className="text-xl text-justify leading-10">
          {parse(town.text)}
          {town.list && (
            <ol className="list-decimal pl-8">
              {town.list.map((item) => (
                <li key={item.item}>{item.item}</li>
              ))}
            </ol>
          )}
        </div>
      ))}
      {/* OCCUPATION OF KALABARI */}
      <div className="text-3xl text-center">{parse(data.occupation.title)}</div>
      {data.occupation.content.map((job) => (
        <div key={job.text} className="text-xl text-justify leading-10">
          {parse(job.text)}
        </div>
      ))}
    </main>
  );
}

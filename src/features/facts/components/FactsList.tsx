import FunFacts from "../data/regionNames.json";
import { Card } from "@/features/shared/ui/card";

export default function FactsList() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-darkk">
      {FunFacts.map((fact, index) => (
        <Card key={index} className="border my-4 p-2 text-center bg-[#26262D] text-white">
          <p className="text-sm">{fact.category}</p>
          <h2 className="text-2xl">{fact.text}</h2>
          <br />
        </Card>
      ))}
    </div>
  );
}
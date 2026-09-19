"use client";
//@ts-expect-error
import ijawNames from "ijaw-names";
import type React from "react";
import { useState } from "react";
import NameGenTabs from "./components/NameGenTabs";
import NameGenerator from "./components/NameGenerator";
import NameMeaningSearch from "./components/NameMeaningSearch";

export default function NameGen() {
  const [nameInput, setNameInput] = useState("");
  const [meaning, setMeaning] = useState("");
  const [secondMeaning, setSecondMeaning] = useState("");
  const [error, setError] = useState("");
  const [generatedName, setGeneratedName] = useState("");
  const [displayOption, setDisplayOption] = useState("random");

  const handleNameInputChange = (event: { target: { value: string } }) => {
    setNameInput(event.target.value);
  };

  const handleGetMeaning = () => {
    if (nameInput.trim() !== "") {
      const result = ijawNames(nameInput);
      if (result) {
        if (result.meaning !== false) {
          setSecondMeaning(result.meaning);
          setError("");
        } else if (result.meaning === false) {
          setSecondMeaning("");
          setError("ERROR: name not found. contact us if it's an Ijaw name. ");
        }
      } else {
        setMeaning("Name not found");
      }
    } else {
      setError("Please use the input field");
    }
  };

  const handleGenerateName = () => {
    const result = ijawNames();
    setGeneratedName(result.name);
    setMeaning(result.meaning);
    setDisplayOption("random");
  };

  const handleOptionClick = (option: string) => {
    setDisplayOption(option);
  };

  const handleOptionKeyPress = (
    event: React.KeyboardEvent<HTMLHeadingElement>,
    option: string,
  ) => {
    if (event.key === "Enter") {
      handleOptionClick(option);
    }
  };

  return (
    <main className="p-2 mt-4 h-full">
      <h1 className="text-4xl text-center">GENERATE IJAW NAMES</h1>
      <div className="w-full bg-[#3C3D45] rounded-xl overflow-hidden flex flex-col md:flex-row">
        <NameGenTabs
          displayOption={displayOption}
          onSelect={handleOptionClick}
          onKeyPress={handleOptionKeyPress}
        />

        <div className="w-full md:w-5/6 p-2 bg-[#D9D9D9] text-center pt-5">
          {displayOption === "random" ? (
            <NameGenerator
              generatedName={generatedName}
              meaning={meaning}
              onGenerate={handleGenerateName}
            />
          ) : (
            <NameMeaningSearch
              nameInput={nameInput}
              secondMeaning={secondMeaning}
              error={error}
              onInputChange={handleNameInputChange}
              onSearch={handleGetMeaning}
            />
          )}
        </div>
      </div>
      <p className="text-center">
        *these names involve names that are not just specific to Kalabari but
        the ijaws as a whole
      </p>
    </main>
  );
}

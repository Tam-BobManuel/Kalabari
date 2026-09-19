interface NameGenTabsProps {
  displayOption: string;
  onSelect: (option: string) => void;
  onKeyPress: (
    event: React.KeyboardEvent<HTMLHeadingElement>,
    option: string,
  ) => void;
}

const tabs = ["random", "meaning"];

export default function NameGenTabs({
  displayOption,
  onSelect,
  onKeyPress,
}: NameGenTabsProps) {
  return (
    <div className="place-content-center w-full md:w-1/6 p-2 text-xl text-center flex lg:flex-col md:flex-col sm:flex-row xs:flex-row">
      {tabs.map((tab) => (
        <h2
          key={tab}
          onClick={() => onSelect(tab)}
          onKeyDown={(e) => onKeyPress(e, tab)}
          className={
            displayOption === tab
              ? "filter-none lg:border-b lg:bg-transparent lg:text-white bg-[#D9D9D9] text-[#261818] cursor-pointer p-1 rounded inline sm:text-center"
              : "sm:text-center cursor-pointer p-1 rounded inline lg:text-white"
          }
        >
          {tab.toUpperCase()}
        </h2>
      ))}
    </div>
  );
}

import { useState } from "react";

const SelectLang = () => {
  const [drop, setDrop] = useState(false);
  return (
    <div className="flex gap-2 mb-4 sm:mb-0 relative text-white">
      <span className="text-xl">EN</span>
      <button onClick={() => setDrop(!drop)}>
        <img src="./arrow down.svg" />
      </button>
      {drop && (
        <div className="bg-white text-lg flex flex-col font-bold text-secondary absolute w-full -top-28 sm:top-10 rounded">
          <button className="border-b-2 border-secondary p-2 hover:bg-primary">
            Fa
          </button>
          <button className="p-2 hover:bg-primary">En</button>
        </div>
      )}
    </div>
  );
};

export default SelectLang;

import { useContext, useState } from "react";
import { langContext } from "@/pages/_app";
const SelectLang = () => {
  const [drop, setDrop] = useState(false);
  const { lang, setLang } = useContext(langContext);
  return (
    <div className="flex gap-2 mb-4 sm:mb-0 relative dark:text-white">
      <span className="text-xl text-center w-8">{lang}</span>
      <button onClick={() => setDrop(!drop)}>
        <img src="./arrow down.svg" />
      </button>
      {drop && (
        <div className="bg-white text-lg flex flex-col font-bold text-secondary absolute w-full -top-28 sm:top-10 rounded">
          <button
            className="border-b-2 border-secondary p-2 hover:bg-primary"
            onClick={() => {
              setLang("FA");
              setDrop(false);
            }}
          >
            Fa
          </button>
          <button
            className="p-2 hover:bg-primary"
            onClick={() => {
              setLang("EN");
              setDrop(false);
            }}
          >
            En
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectLang;

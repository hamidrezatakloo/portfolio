import { themeContext } from "@/pages/_app";
import { useContext } from "react";

const SelectTheme = () => {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div
      className="h-[37px] w-[81px] rounded-[122px] relative cursor-pointer bg-primary dark:bg-secondary"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div
        className={`w-[26px] h-[26px] rounded-full absolute top-1 transition-all ease-in-out duration-500 ${
          theme === "light" ? "left-2" : "left-[60%]"
        } 
        bg-white
        `}
      >
        <img src="./Subtract.svg" className="absolute top-1 left-1.5" />
      </div>
    </div>
  );
};

export default SelectTheme;

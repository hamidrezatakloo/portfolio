import { useState } from "react";

const Navigation = () => {
  const [side, setSide] = useState(false);
  return (
    <nav className="flex justify-between">
      <img src="./Logo.svg" alt="logo" />
      <button onClick={() => setSide(!side)}>
        <img src="./Menu.svg" alt="menu" />
      </button>
      {side && (
        <div className="absolute  text-white top-0 right-0 bg-[#091939] w-[180px] h-screen flex flex-col justify-between items-center">
          <div className="mt-4 mx-2 self-stretch flex justify-between">
            <button onClick={() => setSide(false)}>
              <img src="./close.svg" />
            </button>
            <div className="h-[37px] w-[81px] bg-secondary rounded-[122px] relative">
              <div className="w-[26px] h-[26px] rounded-full bg-white absolute right-2 top-1">
                <img src="./Subtract.svg" className="absolute top-1 left-1.5" />
              </div>
            </div>
          </div>
          <ul className="text-2xl font-bold">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
          <div className="flex gap-2 mb-4">
            <span className="text-xl">EN</span>
            <img src="./arrow down.svg" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

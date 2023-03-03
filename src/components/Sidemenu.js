import { forwardRef } from "react";
import Link from "next/link";
const SideMenu = forwardRef(function SideMenu(props, ref) {
  const transitionStyles = {
    entering: "w-[180px] h-screen",
    entered: "w-[180px] h-screen",
    exiting: "w-0 h-0",
    exited: "w-0 h-0",
  };
  return (
    <div
      ref={ref}
      className={`transition-all overflow-hidden absolute text-white top-0 right-0 bg-[#091939] flex flex-col justify-between items-center ${
        transitionStyles[props.state]
      }`}
    >
      <div className="mt-4 mx-2 self-stretch flex justify-between">
        <button onClick={() => props.setSide(false)}>
          <img src="./close.svg" />
        </button>
        <div className="h-[37px] w-[81px] bg-secondary rounded-[122px] relative">
          <div className="w-[26px] h-[26px] rounded-full bg-white absolute right-2 top-1">
            <img src="./Subtract.svg" className="absolute top-1 left-1.5" />
          </div>
        </div>
      </div>
      <ul className="text-2xl font-bold flex flex-col gap-4 items-start">
        <Link href="/" className="text-secondary">
          Home
        </Link>
        <Link href="/projects">Projects</Link>
        <Link href="contact">Contact me</Link>
      </ul>
      <div className="flex gap-2 mb-4">
        <span className="text-xl">EN</span>
        <img src="./arrow down.svg" />
      </div>
    </div>
  );
});
export default SideMenu;

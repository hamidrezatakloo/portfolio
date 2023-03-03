import { forwardRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const SideMenu = forwardRef(function SideMenu(props, ref) {
  const router = useRouter();
  const [drop, setDrop] = useState(false);

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
      <div className="text-2xl font-bold flex flex-col gap-4 items-start">
        <Link href="/">
          <span className={router.pathname == "/" ? "text-secondary" : ""}>
            Home
          </span>
        </Link>
        <Link href="/projects">
          <span
            className={router.pathname == "/projects" ? "text-secondary" : ""}
          >
            Projects
          </span>
        </Link>
        <Link href="contact">
          <span
            className={router.pathname == "/contact" ? "text-secondary" : ""}
          >
            Contact me
          </span>
        </Link>
      </div>
      <div className="flex gap-2 mb-4 relative">
        <span className="text-xl">EN</span>
        <button onClick={() => setDrop(!drop)}>
          <img src="./arrow down.svg" />
        </button>
        {drop && (
          <div className="bg-white text-lg text-center font-bold text-secondary absolute w-full -top-28 rounded">
            <div className="border-b-2 border-secondary p-2">Fa</div>
            <div className=" p-2">En</div>
          </div>
        )}
      </div>
    </div>
  );
});
export default SideMenu;

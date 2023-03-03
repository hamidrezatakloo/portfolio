import { useState } from "react";
import SideMenu from "./Sidemenu";
import { Transition } from "react-transition-group";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const duration = 500;

const Navigation = () => {
  const nodeRef = useRef(null);
  const router = useRouter();
  const [side, setSide] = useState(false);
  const [drop, setDrop] = useState(false);
  return (
    <nav className="flex justify-between sm:justify-around">
      <img src="./Logo.svg" alt="logo" />
      <button onClick={() => setSide(true)} className="sm:hidden">
        <img src="./Menu.svg" alt="menu" />
      </button>
      <Transition nodeRef={nodeRef} in={side} timeout={duration}>
        {(state) => <SideMenu ref={nodeRef} state={state} setSide={setSide} />}
      </Transition>
      <div className="text-white text-xl sm:flex gap-8 hidden">
        <Link href={"/"}>
          <span className={router.pathname == "/" ? "text-secondary" : ""}>
            Home
          </span>
        </Link>
        <Link href={"/projects"}>
          <span
            className={router.pathname == "/projects" ? "text-secondary" : ""}
          >
            Projects
          </span>
        </Link>
        <Link href={"/contact"}>
          <span
            className={router.pathname == "/contact" ? "text-secondary" : ""}
          >
            Contact me
          </span>
        </Link>
      </div>
      <div className="hidden sm:flex gap-8 items-center">
        <div className="h-[37px] w-[81px] bg-secondary rounded-[122px] relative">
          <div className="w-[26px] h-[26px] rounded-full bg-white absolute right-2 top-1">
            <img src="./Subtract.svg" className="absolute top-1 left-1.5" />
          </div>
        </div>
        <div className="flex gap-2 relative text-white">
          <span className="text-xl">EN</span>
          <button onClick={() => setDrop(!drop)}>
            <img src="./arrow down.svg" />
          </button>
          {drop && (
            <div className="bg-white text-lg text-center font-bold text-secondary absolute w-full top-10 rounded">
              <div className="border-b-2 border-secondary p-2">Fa</div>
              <div className=" p-2">En</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

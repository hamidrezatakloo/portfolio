import { useState, useContext } from "react";
import SideMenu from "./Sidemenu";
import { Transition } from "react-transition-group";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SelectLang from "./SelectLang";
import { langContext } from "@/pages/_app";
import langData from "../lang.json";
import SelectTheme from "./SelectTheme";
const duration = 500;

const Navigation = () => {
  const nodeRef = useRef(null);
  const router = useRouter();
  const [side, setSide] = useState(false);
  const { lang } = useContext(langContext);
  return (
    <nav
      dir={lang == "FA" ? "rtl" : "ltr"}
      className="flex justify-between sm:px-8 items-center"
    >
      <img src="./Logo.svg" alt="logo" />
      <button onClick={() => setSide(true)} className="sm:hidden">
        <img src="./Menu.svg" alt="menu" />
      </button>
      <Transition nodeRef={nodeRef} in={side} timeout={duration}>
        {(state) => <SideMenu ref={nodeRef} state={state} setSide={setSide} />}
      </Transition>
      <div className="text-white text-xl sm:flex gap-16 hidden">
        <Link href={"/"}>
          <span className={router.pathname == "/" ? "text-secondary" : ""}>
            {langData[lang]["Home"]}
          </span>
        </Link>
        <Link href={"/projects"}>
          <span
            className={router.pathname == "/projects" ? "text-secondary" : ""}
          >
            {langData[lang]["Projects"]}
          </span>
        </Link>
        <Link href={"/contact"}>
          <span
            className={router.pathname == "/contact" ? "text-secondary" : ""}
          >
            {langData[lang]["Contact"]}
          </span>
        </Link>
      </div>
      <div className="hidden sm:flex gap-8 items-center">
        <SelectTheme />
        <SelectLang />
      </div>
    </nav>
  );
};

export default Navigation;

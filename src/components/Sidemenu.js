import { forwardRef, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SelectLang from "./SelectLang";
import langData from "./../lang.json";
import { langContext } from "@/pages/_app";
import SelectTheme from "./SelectTheme";
const SideMenu = forwardRef(function SideMenu(props, ref) {
  const { lang } = useContext(langContext);

  const router = useRouter();

  const transitionStyles = {
    entering: "w-[180px] h-screen",
    entered: "w-[180px] h-screen",
    exiting: "w-0 h-0",
    exited: "w-0 h-0",
  };
  return (
    <div
      ref={ref}
      className={`transition-all overflow-hidden absolute dark:text-white top-0 bg-slate-100 dark:bg-[#091939] flex flex-col justify-between items-center ${
        transitionStyles[props.state]
      } ${lang === "FA" ? "left-0" : "right-0"}`}
    >
      <div className="mt-4 mx-2 self-stretch flex justify-between">
        <button onClick={() => props.setSide(false)}>
          <img
            src="./close.svg"
            className="bg-slate-400 dark:bg-transparent rounded"
          />
        </button>
        <SelectTheme />
      </div>
      <div className="text-2xl font-bold flex flex-col gap-4 items-start">
        <Link href="/">
          <span className={router.pathname == "/" ? "text-secondary" : ""}>
            {langData[lang]["Home"]}
          </span>
        </Link>
        <Link href="/projects">
          <span
            className={router.pathname == "/projects" ? "text-secondary" : ""}
          >
            {langData[lang]["Projects"]}
          </span>
        </Link>
        <Link href="contact">
          <span
            className={router.pathname == "/contact" ? "text-secondary" : ""}
          >
            {langData[lang]["Contact"]}
          </span>
        </Link>
      </div>
      <SelectLang />
    </div>
  );
});
export default SideMenu;

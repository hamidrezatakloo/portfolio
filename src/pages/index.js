import Head from "next/head";
import { useContext } from "react";
import { langContext, themeContext } from "./_app";
import intro from "../intro.json";
import Link from "next/link";
export default function Home() {
  const { lang } = useContext(langContext);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        dir={lang === "FA" ? "rtl" : "ltr"}
        className="flex flex-col justify-around sm:justify-start flex-1 sm:items-start sm:p-20"
      >
        <div className="flex flex-col justify-center gap-10 lg:gap-20 items-center">
          <h1 className="text-4xl lg:text-6xl p-8 dark:text-white font-bold leading-[164.5%] sm:leading-normal lg:leading-normal">
            {intro[lang][0]} <br className="sm:hidden"></br> {intro[lang][1]}
            <br></br>
            {intro[lang][2]}
            <span className="text-secondary inline-block">
              &nbsp;{intro[lang][3]}
            </span>
          </h1>
          <div className="w-[280px] hover:scale-[98%] transition-all">
            <Link
              href={"/projects"}
              className="text-2xl text-white font-bold bg-secondary px-[45px] sm:px-14 sm:py-4 py-[10px] rounded-[2px]"
            >
              {intro["Projects"][lang]}
              <img
                src="circle right.svg"
                className={`inline-block w-6 ${
                  lang === "FA" ? "mr-2" : "ml-2"
                }`}
              />
            </Link>
          </div>
        </div>
        <img
          src="bro.svg"
          alt="bro"
          className={`sm:absolute sm:bottom-0 sm:w-[480px] lg:w-[580px] xl:w-[580px] ${
            lang === "EN" ? "right-20" : "left-20"
          }`}
        />
      </main>
    </>
  );
}

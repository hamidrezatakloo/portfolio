import Head from "next/head";
import { useContext } from "react";
import { langContext } from "./_app";

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
        <div className="sm:mt-10 flex flex-col justify-center gap-10 sm:gap-20 items-center">
          <h1 className="text-4xl sm:text-6xl  text-white font-bold leading-[164.5%] sm:leading-normal">
            Hi i’m <br className="sm:hidden"></br> hamidreza <br></br>I’m a
            <span className="text-secondary"> Front Dev</span>
          </h1>
          <div className="w-[280px]">
            <button className="text-2xl text-white font-bold bg-secondary px-[45px] sm:px-14 sm:py-4 py-[8px] rounded-[2px]">
              Projects{" "}
              <img src="./circle right.svg" className="inline-block ml-2 w-6" />
            </button>
          </div>
        </div>
        <img
          src="./bro.svg"
          alt="bro"
          className={`sm:absolute sm:bottom-0  sm:w-[680px] ${
            lang === "EN" ? "right-20" : "left-20"
          }`}
        />
      </main>
    </>
  );
}

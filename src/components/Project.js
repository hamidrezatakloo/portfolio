import { langContext } from "@/pages/_app";
import { useContext } from "react";

const Project = ({ info }) => {
  const { lang } = useContext(langContext);
  return (
    <div className="bg-slate-100 dark:bg-[#091939] flex flex-col gap-6 items-center p-8 rounded-[2px] sm:w-5/12 lg:w-3/12">
      <h2
        dir={lang === "FA" ? "rtl" : "ltr"}
        className="text-2xl font-bold dark:text-white flex-1"
      >
        {info.name[lang]}
      </h2>
      <p
        dir={lang === "FA" ? "rtl" : "ltr"}
        className="text-slate-600 dark:text-[#8CAAE4] flex-1"
      >
        {info.desc[lang]}
      </p>
      <div className="flex justify-center items-center gap-4">
        <a
          href={info.live}
          className="bg-secondary text-white font-bold text-lg p-3 rounded-[2px] text-center"
        >
          {lang === "FA" ? "بازدید کردن" : "Open Live"}
        </a>
        <a href={info.github}>
          <img src="./github.svg" />
        </a>
      </div>
      <div className="flex my-4 gap-2">
        {info.techs.map((tech, index) => (
          <img key={index} src={tech + ".svg"} />
        ))}
      </div>
    </div>
  );
};

export default Project;

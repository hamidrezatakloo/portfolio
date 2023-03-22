import { langContext } from "@/pages/_app";
import { useContext } from "react";

const Project = ({ info }) => {
  const { lang } = useContext(langContext);
  return (
    <div className="bg-[#091939] flex flex-col gap-6 items-center p-8 rounded-[2px] sm:w-3/12">
      <h2
        dir={lang === "FA" ? "rtl" : "ltr"}
        className="text-2xl font-bold text-white flex-1"
      >
        {info.name[lang]}
      </h2>
      <p dir={lang === "FA" ? "rtl" : "ltr"} className="text-[#8CAAE4] flex-1">
        {info.desc[lang]}
      </p>
      <div className="flex justify-around gap-4">
        <a
          href={info.live}
          className="bg-secondary text-white font-bold text-lg py-1.5 px-5 rounded-[2px]"
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

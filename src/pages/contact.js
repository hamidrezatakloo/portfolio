import { useContext } from "react";
import contact from "../contact.json";
import { langContext } from "./_app";
const Contact = () => {
  const { lang } = useContext(langContext);
  return (
    <div className="flex-1 flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between sm:gap-16">
      <form className="mt-10 sm:flex-1">
        <div className="max-w-[692px]">
          <label
            dir={lang === "FA" ? "rtl" : "ltr"}
            htmlFor="name"
            className="dark:text-white text-xl font-bold block"
          >
            {contact[lang]["name"]["label"]}
          </label>
          <input
            dir={lang === "FA" ? "rtl" : "ltr"}
            id="name"
            className="bg-secondary text-[#AFBEDC] p-3 sm:p-6 rounded-[2px] my-2 sm:my-6 w-full"
            placeholder={contact[lang]["name"]["placeholder"]}
          />
          <label
            dir={lang === "FA" ? "rtl" : "ltr"}
            htmlFor="message"
            className="dark:text-white text-xl font-bold block"
          >
            {contact[lang]["message"]["label"]}
          </label>
          <textarea
            dir={lang === "FA" ? "rtl" : "ltr"}
            id="message"
            className="bg-secondary text-[#AFBEDC] p-3 sm:p-6 rounded-[2px] my-2 sm:my-6 w-full min-h-[120px] sm:h-[344px]"
            placeholder={contact[lang]["message"]["placeholder"]}
          ></textarea>
          <button className="bg-secondary/80 dark:bg-white dark:text-black text-lg font-bold p-2 rounded-[4px] ml-auto block mt-4">
            {contact[lang]["button"]}
            <img src="Send.svg" className="ml-2 inline-block" />
          </button>
        </div>
      </form>
      <div className="flex-1  sm:self-stretch sm:justify-between flex flex-col items-center justify-end gap-16">
        <img src="amico.svg" className="sm:w-[428px] sm:my-auto" />
        <div className="flex gap-2 mb-4 sm:self-center bg-secondary px-8 py-2 rounded dark:bg-transparent">
          <img src="instagram.svg" className="sm:w-10" />
          <img src="telegram.svg" className="sm:w-10" />
          <img src="twitter.svg" className="sm:w-10" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import "@/styles/globals.css";
import Navigation from "../components/Navigation";
import { createContext, useState } from "react";
export const langContext = createContext(null);
export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState("EN");
  return (
    <langContext.Provider value={{ lang, setLang }}>
      <div className="bg-primary min-h-screen p-4 pb-0 sm:pt-12 flex flex-col">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </langContext.Provider>
  );
}

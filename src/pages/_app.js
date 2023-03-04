import "@/styles/globals.css";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-primary min-h-screen p-4 pb-0 sm:pt-12 flex flex-col">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

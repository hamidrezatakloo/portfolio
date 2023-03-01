import "@/styles/globals.css";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-primary min-h-screen p-4 pb-0">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

import "../styles/globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={urbanist.className}>
      <Component {...pageProps} />
    </main>
  );
}

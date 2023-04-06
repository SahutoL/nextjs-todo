import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../styles/css/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
	  <Analytics />
    </>
  );
}

export default MyApp;

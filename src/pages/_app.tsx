import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-vertical-timeline-component/style.min.css";
import NextNProgress from "nextjs-progressbar";

import ReactQuery from "../configs/ReactQuery";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQuery>
      <NextNProgress nonce="my-nonce" color="#000" />
      <Component {...pageProps} />
    </ReactQuery>
  );
}

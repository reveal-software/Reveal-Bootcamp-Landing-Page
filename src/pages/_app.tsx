import "../styles/globals.css";
import type { AppProps } from "next/app";

import ReactQuery from "../configs/ReactQuery";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQuery>
      <Component {...pageProps} />
    </ReactQuery>
  );
}

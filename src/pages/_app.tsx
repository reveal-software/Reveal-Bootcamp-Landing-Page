import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-vertical-timeline-component/style.min.css";

import ReactQuery from "../configs/ReactQuery";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQuery>
      <Component {...pageProps} />
    </ReactQuery>
  );
}

import { AppProps } from "next/app";
import { Global } from "@emotion/core";
import { NextPage } from "next";
import { appStyle, resetStyle } from "~/styles/global";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Global styles={resetStyle} />
    <Global styles={appStyle} />
    <Component {...pageProps} />
  </>
);

export default App;

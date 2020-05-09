import { AppProps } from "next/app";
import { Global } from "@emotion/core";
import { appStyle, resetStyle } from "styles/global";
import { NextPage } from "next";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Global styles={resetStyle} />
    <Global styles={appStyle} />
    <Component {...pageProps} />
  </>
);

export default App;

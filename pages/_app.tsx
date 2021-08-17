import type {AppProps} from "next/app";
import Head from "next/head";

import "../css/global.css";

import Layout from "../components/layout";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
        <meta content="Coding challenge for basement.studio." name="description" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default App;

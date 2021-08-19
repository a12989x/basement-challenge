import type {AppProps} from "next/app";
import Head from "next/head";

import "../css/global.css";

import Layout from "@/components/layout";
import CartContextProvider from "contexts/CartProvider";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Basement Supply</title>
        <meta content="Coding challenge for basement.studio." name="description" />
      </Head>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </>
  );
}
export default App;

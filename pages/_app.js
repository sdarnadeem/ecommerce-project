import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

import Layout from "../components/Layout";

import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;

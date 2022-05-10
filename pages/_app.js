import Router from "next/router";

import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import NProgress from "nprogress";

import Layout from "../components/Layout";

import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: true });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
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

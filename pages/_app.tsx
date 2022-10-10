import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const {
    query: { id, route },
  } = router;

  console.log(router, "router");
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Sanya</title>
          <meta name="description" content="มิตรสัญญา" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <Navbar route={router.asPath} />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}

export default MyApp;

import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  <Head>
    <title>RapidAPI Devrel Example - Crypto News App</title>
    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;

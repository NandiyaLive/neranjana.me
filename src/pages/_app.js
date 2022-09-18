import "../styles/styles.scss";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Head>
        <title>Neranjana Prasad</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

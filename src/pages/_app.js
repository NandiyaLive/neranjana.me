import "../styles/styles.scss";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem="false">
      <Head>
        <title>Neranjana Prasad</title>
      </Head>
      {loading ? (
        <div className="loading-screen bg-bgColor-light dark:bg-bgColor-dark">
          <div className="spinner-box">
            <div className="three-quarter-spinner"></div>
          </div>
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default MyApp;

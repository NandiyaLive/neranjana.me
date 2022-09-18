import "../styles/styles.scss";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <ThemeProvider defaultTheme="dark">
      <Head>
        <title>Neranjana Prasad</title>
        <meta property="description" content="Computer Hobbyist • Web Dev • DIY Builder • Tweet-A-Holic • Linux Lover • Sri Lankan" />
      </Head>
      {loading ? (
        <div className="loading-screen">
          <div className="spinner-box">
            <div className="configure-border-1">
              <div className="configure-core"></div>
            </div>
            <div className="configure-border-2">
              <div className="configure-core"></div>
            </div>
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

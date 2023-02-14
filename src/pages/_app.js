import "@/styles/styles.scss";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import ogImage from "../../public/avatar.png";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Neranjana Prasad</title>
      </Head>

      {loading ? (
        <div className="loading-screen bg-black">
          <div className="spinner-box">
            <div className="three-quarter-spinner"></div>
          </div>
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;

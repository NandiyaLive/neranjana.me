import Navbar from "./Navbar";
import MetaTags from "./MetaTags";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <MetaTags />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

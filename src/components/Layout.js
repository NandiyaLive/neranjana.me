import Navbar from "./Navbar";
import MetaTags from "./MetaTags";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <MetaTags />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

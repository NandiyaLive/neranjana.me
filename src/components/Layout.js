import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container max-w-main">{children}</main>
    </>
  );
};

export default Layout;

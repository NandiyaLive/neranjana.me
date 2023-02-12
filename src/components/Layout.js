import Footer from "./Footer";
import Navbar from "./Navbar";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { height, width } = useWindowDimensions();
  const router = useRouter();

  return (
    <main className="container max-w-6xl flex flex-col justify-between h-screen">
      <Navbar />
      <main>{children}</main>

      {width > 640 && router.pathname != "/contact" ? <Footer /> : router.pathname == "/" && <Footer />}
    </main>
  );
};

export default Layout;

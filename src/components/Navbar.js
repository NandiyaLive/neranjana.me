import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="text-white flex items-center justify-between sm:flex-col sm:justify-center sm:space-y-2 my-4">
      <div className="sm:hidden">
        <Link href="/">
          <h1 className="text-2xl font-bold font-jbmono">
            neranjana<span className="text-orange-400">.</span>me
          </h1>
        </Link>
      </div>
      <div className="flex gap-4 items-center text-sm uppercase">
        <p className={`font-medium mobile:hidden ${router.pathname == "/" ? "opacity-100 font-medium" : "opacity-70"}`}>
          <Link href="/" passHref>
            Home
          </Link>
        </p>
        <p className={`font-medium ${router.pathname == "/about" ? "opacity-100 font-medium" : "opacity-70"}`}>
          <Link href="/about" passHref>
            About
          </Link>
        </p>
        <p className={`font-medium ${router.pathname == "/projects" ? "opacity-100 font-medium" : "opacity-70"}`}>
          <Link href="/projects" passHref>
            Projects
          </Link>
        </p>
        <p className={`font-medium ${router.pathname == "/uses" ? "opacity-100 font-medium" : "opacity-70"}`}>
          <Link href="/uses" passHref>
            Uses
          </Link>
        </p>
        <p className="font-medium opacity-70">
          <a href="https://blog.neranjana.me" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;

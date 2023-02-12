import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

  const name = origin.split("://")[1].split(":")[0];
  const domain = origin.split("://")[1].split(":")[1];

  return (
    <nav className="text-white flex items-center justify-between sm:flex-col sm:justify-center sm:space-y-2 my-4">
      <div className="sm:hidden">
        <Link href="/">
          <h1 className="text-2xl font-bold font-jbmono">
            {/* neranjana<span className="text-rose-800">.</span>me */}
            {name}
            <span className="text-rose-800">.</span>
            {domain}
          </h1>
        </Link>
      </div>
      <ul className="flex gap-4 items-center text-sm uppercase">
        <li className={`font-medium mobile:hidden ${router.pathname == "/" ? "opacity-100 font-medium" : "opacity-70"}`}>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li className={`font-medium ${router.pathname == "/about" ? "opacity-100 font-medium" : "opacity-70"}`}>
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li className={`font-medium ${router.pathname == "/projects" ? "opacity-100 font-medium" : "opacity-70"}`}>
          <Link href="/projects" passHref>
            Projects
          </Link>
        </li>
        <li className={`font-medium ${router.pathname == "/uses" ? "opacity-100 font-medium" : "opacity-70"}`}>
          <Link href="/uses" passHref>
            Uses
          </Link>
        </li>
        <li className="font-medium opacity-70">
          <a href="https://blog.neranjana.tk" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

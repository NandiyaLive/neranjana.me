"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import avatar from "@/public/avatar.jpg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`container max-w-6xl flex items-start mt-4 mb-8 ${pathname == "/" ? "justify-end" : "justify-between"}`}
    >
      {pathname != "/" && (
        <Link href="/">
          <div className="flex gap-4">
            <div className="h-12 w-12 relative">
              <Image src={avatar} alt="Avatar Image" className="rounded-full h-full w-full p-1" fill />
            </div>

            <div>
              <h1 className="text-lg font-bold">Neranjana Prasad</h1>
              <p className="font-jb text-xsm font-semibold opacity-80">@NandiyaLive</p>
            </div>
          </div>
        </Link>
      )}

      <ul className="flex items-center gap-8 uppercase text-sm font-medium">
        <li className="opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200">
          <Link href="/about">About</Link>
        </li>

        <li className="opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200">
          <Link href="/projects">Projects</Link>
        </li>

        <li className="opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200">
          <Link href="/uses">Uses</Link>
        </li>

        <li className="opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200">
          <a href="https://blog.neranjana.me" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

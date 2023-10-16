"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import avatar from "../../public/avatar.jpg";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    {
      id: "about",
      label: "About",
      href: "/about",
    },
    {
      id: "projects",
      label: "Projects",
      href: "/projects",
    },
    {
      id: "hire",
      label: "Hire",
      href: "/hire",
    },
    {
      id: "uses",
      label: "Uses",
      href: "/uses",
    },
  ];

  return (
    <nav
      className={cn(
        "container max-w-6xl flex items-start mt-4 mb-8 relative mb:items-center",
        pathname == "/" ? "justify-end" : "justify-between"
      )}
    >
      {pathname != "/" && (
        <Link href="/">
          <div className="flex gap-4 items-center">
            <Image src={avatar} width={45} height={45} alt="Avatar Image" placeholder="blur" className="rounded-full" />

            <div>
              <h1 className="text-lg font-semibold">Neranjana Prasad</h1>
              <p className="font-jb text-xs font-medium opacity-80">@NandiyaLive</p>
            </div>
          </div>
        </Link>
      )}

      <div className="flex items-center gap-4">
        <ul
          className={cn(
            "flex items-center gap-6 uppercase text-sm font-medium top-14 right-0 left-0 md:absolute md:flex-col md:items-end md:text-right md:gap-0 md:hidden md:z-40",
            isNavOpen && "md:flex"
          )}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className={cn(
                "hover:opacity-100 transition-opacity ease-in-out duration-200 md:bg-neutral-200 dark:md:bg-neutral-950 md:px-8 md:opacity-100 md:w-full dark:md:hover:bg-neutral-900 md:hover:bg-neutral-300",
                pathname === item.href ? "opacity-100 dark:md:bg-neutral-900 md:bg-neutral-300" : "opacity-80"
              )}
            >
              <Link href={item.href} className="md:block md:py-4" onClick={() => setIsNavOpen((state) => !state)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200 md:bg-neutral-200 dark:md:bg-neutral-950 md:px-8 md:opacity-100 md:w-full dark:md:hover:bg-neutral-900 md:hover:bg-neutral-300">
            <a href="https://blog.neranjana.me" target="_blank" rel="noopener noreferrer" className="md:block md:py-4">
              Blog
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <Button size="icon" variant="ghost" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="hidden md:flex"
            onClick={() => setIsNavOpen((state) => !state)}
          >
            <Menu size={16} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

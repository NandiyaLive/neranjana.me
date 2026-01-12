"use client";

import { cn } from "@/lib/utils";
import avatar from "@public/avatar.jpg";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

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
      id: "contact",
      label: "Contact",
      href: "/contact",
    },
    {
      id: "uses",
      label: "Uses",
      href: "/uses",
    },
    {
      id: "blog",
      label: "Blog",
      href: "/blog",
    },
  ];

  return (
    <nav
      className={cn(
        "mb:items-center absolute top-0 right-0 left-0 z-9999 container flex max-w-7xl items-start pt-4 pb-8",
        pathname == "/" ? "justify-end" : "justify-between",
      )}
    >
      {pathname != "/" && (
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src={avatar}
              width={45}
              height={45}
              alt="Avatar Image"
              placeholder="blur"
              className="rounded-full"
            />

            <div className="hidden leading-none md:block">
              <h1 className="text-lg font-semibold">Neranjana Prasad</h1>
              <p className="font-mono text-xs font-medium opacity-80">
                @NandiyaLive
              </p>
            </div>
          </div>
        </Link>
      )}

      <div className="flex items-center gap-4">
        <ul
          className={cn(
            isNavOpen ? "flex" : "hidden",
            "absolute top-20 right-0 left-0 z-40 flex-col items-end gap-0 bg-white text-right text-sm font-medium uppercase shadow-lg dark:bg-black",
            "md:static md:z-auto md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:text-left md:shadow-none",
          )}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className={cn(
                "transition-opacity duration-200 ease-in-out hover:bg-neutral-950 md:hover:bg-transparent md:hover:opacity-100",
                "w-full px-8",
                "md:w-auto md:px-0",
                pathname === item.href
                  ? "bg-neutral-950 opacity-100 md:bg-transparent"
                  : "md:opacity-80",
              )}
            >
              <Link
                href={item.href}
                className="block py-4 md:py-0"
                onClick={() => setIsNavOpen((state) => !state)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <Button
            size="icon"
            variant="ghost"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle Theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )
            ) : (
              <div className="h-4 w-4" />
            )}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="flex md:hidden"
            onClick={() => setIsNavOpen((state) => !state)}
            aria-label="Toggle Navigation"
          >
            <Menu size={16} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";

import avatar from "../../../public/avatar.jpg";
import { socialLinks } from "./social-links";
import { Icons } from "./icons";
import Background from "@/components/background";

export default function Home() {
  return (
    <>
      <main className="container max-w-6xl space-y-6 absolute left-0 right-0 bottom-10 sm:bottom-8 select-none">
        <div className="relative w-fit mb-10">
          <Image src={avatar} width={120} height={120} placeholder="blur" alt="Avatar Image" className="rounded-full" />
          <div className="flex gap-4 w-fit absolute left-1/2 right-1/2 -translate-x-1/2 bg-yellow-500 py-2 px-3 rounded-full top-full -translate-y-4">
            {socialLinks.map(({ platform, link, icon }, index) => {
              return (
                <a key={index} href={link} title={platform} target="_blank" rel="noreferrer">
                  <div className="h-5 fill-black hover:fill-neutral-800">{Icons[icon]}</div>
                </a>
              );
            })}
          </div>
        </div>
        <h1 className="text-7xl font-medium max-w-2xl md:text-5xl leading-tight">
          IT Student by Day, <br /> Web Dev by Night!
        </h1>

        <h2 className="max-w-xl opacity-90">
          Hey, I&apos;m Neranjana. I&apos;m a Web Developer who builds fast, interactive, and user-friendly
          websites, with expertise in
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium opacity-100 underline underline-offset-4 mx-1"
          >
            Next.js
          </a>
          and 
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium opacity-100 underline underline-offset-4"
          >
            {" "}TailwindCSS
          </a>
          .
        </h2>

        <Link href="/hire" className="block">
          <div className="flex items-center gap-2 text-sm bg-neutral-950 text-white dark:bg-white dark:text-black py-2 px-6 rounded-full w-fit">
            <div className="w-2 h-2 bg-green-500 rounded-lg blur-[2px] animate-pulse" />
            <p>Open For Hiring</p>
          </div>
        </Link>
      </main>

      <Background />
    </>
  );
}

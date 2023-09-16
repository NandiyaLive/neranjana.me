import Image from "next/image";
import avatar from "@/public/avatar.jpg";
import { socialLinks } from "./social-links";
import { Icons } from "./icons";

export default function Home() {
  return (
    <main className="container max-w-6xl space-y-6 absolute left-0 right-0 bottom-10">
      <Image
        src={avatar}
        width={80}
        height={80}
        placeholder="blur"
        alt="Avatar Image"
        className="rounded-full p-1"
      />

      <h1 className="text-6xl font-medium max-w-2xl">Web Dev. Freelancer. Student.</h1>

      <h2 className="max-w-xl opacity-90">
        Hey, I&apos;m Neranjana. I&apos;m a Freelance Full-Stack Developer with expertise in{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium opacity-100 underline underline-offset-4"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium opacity-100 underline underline-offset-4"
        >
          TailwindCSS
        </a>
        .
      </h2>

      <ul className="flex gap-4">
        {socialLinks.map(({ platform, link, icon }, index) => {
          return (
            <li key={index}>
              <a href={link} title={platform} target="_blank" rel="noreferrer">
                <div className="h-5 fill-white sm:h-6">{Icons[icon]}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

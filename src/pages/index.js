import Image from "next/image";
import Link from "next/link";
import avatarImg from "../../public/avatar.png";
import { Icons } from "../data/icons";
import { socialLinks } from "../data/social-links";

export default function Home() {
  return (
    <section className="grid grid-cols-home items-center gap-12 h-full justify-center xmd:grid-cols-1 xmd:mb-6">
      <div className=" w-[30rem] max-w-full block m-auto">
        <Image src={avatarImg} layout="responsive" alt="Avatar Image with Python, React, Sass, Nextjs Logos" placeholder="blur" className="max-w-full h-auto" priority />
      </div>
      <div className="xmd:text-center">
        <p className="text-3xl font-medium ">Hey there!, I'm</p>
        <p className="text-5xl sm:text-4xl font-medium mt-1">Neranjana Prasad.</p>
        <p className="text-4xl sm:text-4xl font-medium opacity-80 mt-3">Web Developer</p>
        <div className="my-4 w-2/3 h-[2px] bg-rose-800 dark:bg-yellow-200 xmd:mx-auto" />
        <ul className="flex gap-4 mt-6 xmd:justify-center">
          {socialLinks.map(({ platform, link, icon }, index) => {
            return (
              <li key={index}>
                <a href={link} title={platform} target="_blank" rel="noreferrer">
                  <div className="h-7 fill-bgColor-dark dark:fill-white">{Icons[icon]}</div>
                </a>
              </li>
            );
          })}
        </ul>
        <Link href="/contact">
          <button className="btn mt-6">Let's Talk</button>
        </Link>
      </div>
    </section>
  );
}

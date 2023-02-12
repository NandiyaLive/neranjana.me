import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/avatar.png";

export default function Home() {
  return (
    <>
      <section className="flex gap-16 items-center justify-center md:flex-col md:my-8">
        <div className="relative h-[450px] w-[500px] max-w-full sm:h-[300px]">
          <Image
            src={avatar}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt="Avatar Image"
            placeholder="blur"
            className="object-contain"
            priority
            fill
          />
        </div>

        <div className="max-w-sm md:max-w-full md:text-center">
          <p className="text-2xl">Hey there!, I&apos;m</p>
          <p className="text-7xl md:text-5xl sm:text-4xl font-medium mt-1">Neranjana Prasad.</p>
          <p className="text-3xl font-medium opacity-80 mt-3">Web Developer</p>

          <div className="flex items-center gap-4 md:justify-center">
            <Link href="/contact">
              <button className="border-2 border-rose-800 bg-rose-800 rounded-md py-2 px-5 mt-6">Let&apos;s Talk</button>
            </Link>

            <a href="https://fiverr.com/neranjanaprasad" target="_blank" rel="noreferrer">
              <button className="border-2 border-rose-800 box-border rounded-md py-2 px-5 mt-6 flex items-center gap-2">{/* <p className="h-5 fill-white">{Icons.fiverr}</p> */} Hire Me</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

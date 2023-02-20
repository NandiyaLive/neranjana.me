import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/avatar.webp";

export default function Home() {
  return (
    <>
      <section className="flex gap-16 items-center justify-center md:flex-col md:gap-8 md:my-8">
          <Image
            src={avatar}
            height={1080}
            width={1080}
            alt="Avatar Image"
            placeholder="blur"
            className="w-full h-auto max-w-avatar"
            priority
          />


        <div className="max-w-sm md:max-w-full md:text-center">
          <p className="text-2xl">Hey there!, I&apos;m</p>
          <p className="text-7xl md:text-5xl sm:text-4xl font-medium mt-1">Neranjana Prasad.</p>
          <p className="text-3xl font-medium opacity-80 mt-3">Web Developer</p>

          <div className="flex items-center gap-4 md:justify-center sm:gap-2">
            <Link href="/contact">
              <button className="bg-orange-400 text-neutral-900 rounded-md py-2 px-5 mt-6 sm:text-sm">Let&apos;s Talk</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

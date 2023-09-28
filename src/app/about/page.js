import Link from "next/link";
import React from "react";
import { Logos } from "./logos";
import { backend, database, frontend, tools } from "./technologies";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main className="container max-w-6xl pb-16">
      <section className="space-y-2">
        <p>
          I&apos;m Neranjana Prasad Ponnamperuma, a self taught, freelance full-stack web developer based in the sacred
          city of Kandy, Sri Lanka. I&apos;m an IT Student at the{" "}
          <a
            href="https://vau.ac.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            University of Vavuniya
          </a>{" "}
          by day and a full-on tech nerd by night.
        </p>
        <p>
          I have extensive knowledge of HTML, CSS & JavaScript and I&apos;m passionate about building blazing fast,
          user-friendly, responsive and visually stunning web applications with 2 years experience in cutting-edge
          technologies like{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            TailwindCSS
          </a>
          .
        </p>
        <p>
          When I am not at my desk, you can find me reading novels, listening to music and podcasts or binge watching,
          and I occasionally update my blog too.
        </p>
        <p>
          I&apos;m currently available for a new freelance job.{" "}
          <Link href="/hire" className="font-medium underline underline-offset-4">
            Hire me!
          </Link>
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl uppercase font-semibold mb-2">Life Changelog</h3>

        <ul className="select-none">
          <li className="flex items-center gap-2 w-fit">
            <p className="flex-1">2022 —</p>
            <p className="opacity-80"> Started BSc in IT at University of Vavuniya</p>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl uppercase font-semibold mb-2">Tech Stack</h3>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-1">
          <div>
            <h4 className="text-lg font-medium mb-2">Frontend</h4>

            <div className="flex gap-2 flex-wrap items-center text-sm">
              {frontend.map(({ logo, label }, index) => (
                <div
                  className="h-9 w-auto flex items-center gap-2 bg-stone-900 py-2 px-3 rounded select-none"
                  key={index}
                  title={label}
                >
                  <div className="h-4">{logo}</div>
                  <p className="sm:text-xsm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Backend</h4>

            <div className="flex gap-2 flex-wrap items-center text-sm">
              {backend.map(({ logo, label }, index) => (
                <div
                  className="h-9 w-auto flex items-center gap-2 bg-stone-900 py-2 px-3 rounded select-none"
                  key={index}
                  title={label}
                >
                  <div className="h-4">{logo}</div>
                  <p className="sm:text-xsm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Tools</h4>

            <div className="flex gap-2 flex-wrap items-center text-sm">
              {tools.map(({ logo, label }, index) => (
                <div
                  className="h-9 w-auto flex items-center gap-2 bg-stone-900 py-2 px-3 rounded select-none"
                  key={index}
                  title={label}
                >
                  <div className="h-4">{logo}</div>
                  <p className="sm:text-xsm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

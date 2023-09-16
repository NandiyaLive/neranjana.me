import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main className="container max-w-6xl">
      <section className="space-y-2">
        <p>
          I'm Neranjana Prasad Ponnamperuma, a self taught, freelance full-stack web developer based in the sacred
          city of Kandy, Sri Lanka. I&apos;m an IT Student at the{" "}
          <a
            href="https://en.wikipedia.org/wiki/University_of_Vavuniya"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            University of Vavuniya
          </a>{" "}
          by day and a tech nerd by night.
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
          When I am not at my desk, you can find me reading novels, listening to music and podcasts or binge
          watching, and I occasionally update my blog too.
        </p>
        <p>
          I'm currently available for a new freelance job.{" "}
          <Link href="/hire" className="font-medium underline underline-offset-4">
            Hire me!
          </Link>
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-2">Life Changelog</h3>

        <ul className="list-disc ml-6">
          <li>
            2022 — <span className="opacity-70"> Started BSc in IT at University of Vavuniya</span>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-2">Tech Stack</h3>

      </section>
    </main>
  );
};

export default AboutPage;

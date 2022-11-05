import Head from "next/head";
import { Icons } from "../data/icons";
import { developmentUses, otherUses, primaryUses } from "../data/uses";

const Uses = () => {
  return (
    <>
    <Head>
      <title>Uses — Neranjana Prasad</title>
    </Head>
      <section className="grid grid-cols-2 sm:grid-cols-1 relative">
        <div>
          <p className="text-2xl font-semibold mb-2">Primary</p>
          <ul className="list-disc ml-4">
            {primaryUses.map(({ title, subtitle }, index) => {
              return (
                <li key={index}>
                  <span className="font-medium">{title}</span> - <span className="opacity-95">{subtitle}</span>
                </li>
              );
            })}
          </ul>

          <p className="text-2xl font-semibold my-2">Development</p>
          <ul className="list-disc ml-4">
            {developmentUses.map(({ title, subtitle }, index) => {
              return (
                <li key={index}>
                  <span className="font-medium">{title}</span> - <span className="opacity-95">{subtitle}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-2xl font-semibold mb-2">Other</p>
          <ul className="list-disc ml-4">
            {otherUses.map(({ title, subtitle }, index) => {
              return (
                <li key={index}>
                  <span className="font-medium">{title}</span> - <span className="opacity-95">{subtitle}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer className="text-center sm:static absolute left-0 right-0 bottom-6 md:mt-4 sm:mb-4">
        <p className="flex items-center justify-center gap-1 text-sm">
          Made with <span className="h-4">{Icons.heart}</span>
          {" + "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <span className="text-rose-800 dark:text-yellow-200">Next.js</span>
          </a>
          {" + "}
          <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
            <span className="text-rose-800 dark:text-yellow-200">TailwindCSS</span>
          </a>{" "}
          in{" "}
          <span role="img" aria-label="Flag LK" title="Sri Lanka">
            🇱🇰
          </span>
        </p>
        <p className="text-sm">
          Hosted on{" "}
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-rose-800 dark:text-yellow-200">
            Vercel
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default Uses;

import Head from "next/head";
import { Icons } from "../data/icons";
import { developmentUses, otherUses, portfolioUses, primaryUses } from "../data/uses";

const Uses = () => {
  return (
    <>
      <Head>
        <title>Uses — Neranjana Prasad</title>
      </Head>
      <section className="grid grid-cols-2 sm:grid-cols-1 relative sm:mb-8">
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
          <p className="text-2xl font-semibold mb-2 sm:mt-2">Other</p>
          <ul className="list-disc ml-4">
            {otherUses.map(({ title, subtitle }, index) => {
              return (
                <li key={index}>
                  <span className="font-medium">{title}</span> - <span className="opacity-95">{subtitle}</span>
                </li>
              );
            })}
          </ul>

          <p className="text-2xl font-semibold my-2">Portfolio</p>
          <ul className="list-disc ml-4">
            {portfolioUses.map(({ title, subtitle }, index) => {
              return (
                <li key={index}>
                  <span className="font-medium">{title}</span> - <span className="opacity-95">{subtitle}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Uses;

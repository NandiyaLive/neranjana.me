import Head from "next/head";
import { Icons } from "../data/icons";
import { mainProjects, otherProjects } from "../data/projects";

const Projects = () => {
  return (
    <>
    <Head>
      <title>Projects — Neranjana Prasad</title>
    </Head>
    <section className="xmd:mb-4">
      <div className="grid grid-cols-3 xmd:grid-cols-2 sm:grid-cols-1 gap-4">
        {mainProjects.map(({ title, description, live, telegram, github }, index) => {
          return (
            <div className="bg-card-light dark:bg-card-dark p-4 rounded-md" key={index}>
              <div className="text-xl font-semibold mb-2">{title}</div>
              <p>{description}</p>
              <div className="flex gap-2 mt-4 fill-bgColor-dark dark:fill-white">
                {live && (
                  <div className="h-5">
                    <a href={live}>{Icons.vercel}</a>
                  </div>
                )}
                {telegram && (
                  <div className="h-5">
                    <a href={telegram}>{Icons.telegram}</a>
                  </div>
                )}
                {github && (
                  <div className="h-5">
                    <a href={github}>{Icons.github}</a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <p className="text-xl font-medium mt-6 mb-2">Other Noteworthy Projects</p>
        <ul className="ml-4">
          {otherProjects.map(({ title, github }, index) => {
            return (
              <li className="flex gap-2 items-center" key={index}>
                <span className="h-4 fill-bgColor-dark dark:fill-white">{Icons.git}</span>
                <a href={github}>
                  <p className="font-jbmono opacity-90 hover:opacity-100">{title}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section></>
  );
};

export default Projects;

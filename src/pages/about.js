import Head from "next/head";
import { useEffect, useState } from "react";
import { Achivements } from "../data/achivements";
import { happyPills } from "../data/happy-pills";
import { Icons } from "../data/icons";
import { Logos } from "../data/logos";

const About = () => {
  const [songDetails, setSongDetails] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/spotify`);
        const data = await response?.json();
        setSongDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Head>
        <title>About — Neranjana Prasad</title>
      </Head>
      <section className="xmd:mb-6">
        <div>
          <div className="bio leading-relaxed">
            <p>
              I&apos;m <span className="font-medium">Neranjana Prasad Ponnamperuma</span> (aka Nandiya), a 22 years old self taught <span className="font-medium">Web Developer</span> / a{" "}
              <span className="font-medium">Computer Hobbyist</span> living in{" "}
              <a href="https://en.wikipedia.org/wiki/Kandy" target="_blank" rel="noopener noreferrer" className="font-medium">
                Kandy, Sri Lanka
              </a>
              {". "}
              I&apos;m currently studying for a
              <span className="font-medium">
                {" "}
                BSc in IT @{" "}
                <a href="https://en.wikipedia.org/wiki/University_of_Vavuniya" target="_blank" rel="noopener noreferrer">
                  University of Vavuniya, Sri Lanka
                </a>{" "}
              </span>
              and working part-time as a web developer @{" "}
              <span className="font-medium">
                <a href="https://dynamicbiz.org.lk" target="_blank" rel="noopener noreferrer">
                  Dynamic Biz
                </a>
                {". "}
              </span>
              I spend hours experimenting with HTML, CSS, and JavaScript or dabbling with Python. I’m curious, and enjoy work that challenges me to learn something new and stretch in a different
              direction. I do believe that anyone can master coding, But the passion can&apos;t be gained that easy.
            </p>
            <p className="pt-2">Outside of coding, I enjoy spending time reading novels, listening into music and podcasts or binge watching TV Series and Movies.</p>
            <p>
              And I occasionally update{" "}
              <a href="https://blog.neranjana.me" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2">
                my blog
              </a>{" "}
              too.
            </p>
          </div>
          <div className="flex gap-8 md:flex-col md:gap-0">
            <div className="max-w-xl lg:max-w-md md:max-w-full">
              <p className="font-medium text-2xl my-4 uppercase">Tech Stack</p>

              <div className="flex gap-3 gap-y-4 flex-wrap items-center">
                <svg-icon className="h-9 w-auto" title="HTML5">
                  {Logos.html5}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="CSS3">
                  {Logos.css3}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Sass">
                  {Logos.sass}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Bootstrap">
                  {Logos.bootstrap}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Bulma">
                  {Logos.bulma}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="TailwindCSS">
                  {Logos.tailwind}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="JavaScript">
                  {Logos.js}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="React.js">
                  {Logos.react}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Next.js">
                  {Logos.nextjs}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Python">
                  {Logos.python}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Flask">
                  {Logos.flask}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="npm">
                  {Logos.npm}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Postman">
                  {Logos.postman}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Figma">
                  {Logos.figma}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Git">
                  {Logos.git}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Linux">
                  {Logos.linux}
                </svg-icon>
                <svg-icon className="h-9 w-auto" title="Terminal">
                  {Logos.terminal}
                </svg-icon>
              </div>
            </div>

            <div className="achivements">
              <p className="font-medium text-2xl my-4 uppercase ">Achivements</p>
              <ul className="space-y-1">
                {Achivements.map(({ title, link }, index) => {
                  return (
                    <li className="flex gap-2 items-center" key={index}>
                      <span className="h-4 fill-green-600">{Icons.tick}</span>
                      <a href={link} target="_blank" rel="noreferrer" className="opacity-90 hover:opacity-100">
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-medium text-2xl my-4 uppercase">My happy pills</p>
            <div className="flex gap-3">
              {happyPills.map(({ title, link, logo }, index) => {
                return (
                  <svg-icon className="h-9 w-auto" title={title} key={index}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {Logos[logo]}
                    </a>
                  </svg-icon>
                );
              })}
            </div>
            {songDetails ? (
              <p className="pt-4 text-sm">
                <span className={`${songDetails.isPlaying ? "text-green-500 animate-pulse" : "text-red-600"}`}>⦿</span>&nbsp;
                {songDetails.isPlaying ? "Now Playing " : "Last Played"}&nbsp;—&nbsp;
                <a href={songDetails["songUrl"]} title={`${songDetails["title"]} - ${songDetails["artist"]}`} target="_blank" rel="noreferrer" className="font-medium opacity-90 hover:opacity-100">
                  {songDetails["title"]}
                </a>
              </p>
            ) : <p className="pt-4 text-sm">⦿ Checking Spotify...</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

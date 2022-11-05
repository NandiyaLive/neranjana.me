import Head from "next/head";
import { Achivements } from "../data/achivements";
import { happyPills } from "../data/happy-pills";
import { Icons } from "../data/icons";
import { Logos } from "../data/logos";

const About = () => {
  (async () => {
    await fetch(`api/spotify`)
      .then((response) => response.json())
      .then((data) => {
        if (process.browser) {
          const npText = document.querySelector(".now-playing");
          if (data["isPlaying"]) {
            npText.innerHTML = `<a href="${data["songUrl"]}" title="${data["title"]} - ${data["artist"]}" target="_blank" rel="noreferrer">${data["title"]}</a><span role='img' aria-label='Sparkles emoji'> ✨</span>`;
          } else {
            npText.innerHTML = "<a>Nothing! Maybe he's asleep</a><span role='img' aria-label='Sleeping Symbol emoji'> 💤</span>";
          }
        }
      });
  })();

  return (
    <>
      <Head>
        <title>About — Neranjana Prasad</title>
      </Head>
      <section className="xmd:mb-4">
        <div>
          <div className="bio">
            <p>
              I&apos;m <span className="font-medium">Neranjana Prasad Ponnamperuma</span> (aka Nandiya), a 22 years old self taught <span className="font-medium">Web Developer</span> / a{" "}
              <span className="font-medium">Computer Hobbyist</span> living in{" "}
              <a href="https://en.wikipedia.org/wiki/Kandy" target="_blank" rel="noopener noreferrer" className="font-medium">
                Kandy, Sri Lanka
              </a>
              {". "}
              I'm currently studying for a
              <span className="font-medium">
                {" "}
                BSc in IT @{" "}
                <a href="https://en.wikipedia.org/wiki/University_of_Vavuniya" target="_blank" rel="noopener noreferrer">
                  University of Vavuniya, Sri Lanka.{" "}
                </a>
              </span>
              I spend hours experimenting with HTML, CSS, and JavaScript or dabbling with Python. I’m curious, and enjoy work that challenges me to learn something new and stretch in a different
              direction. I do believe that anyone can master coding, But the passion can&apos;t be gained that easy.
            </p>
            <p className="pt-2">
              Outside of coding, I enjoy spending time reading novels, listening into music and podcasts or binge watching TV Series and Movies or you can find me simping over{" "}
              <a
                href="https://en.wikipedia.org/wiki/Rashmika_Mandanna "
                target="_blank "
                title="Rashmika Mandanna (born 5 April 1996) is an Indian film actress and model who works predominantly in Telugu and Kannada films.She is popularly dubbed by the media and Kannada film industry as the 'Karnataka Crush'."
                className="font-medium"
              >
                Rashmika Mandanna
              </a>{" "}
              <span className="h-4 inline-block">{Icons.pleadingFace}</span>
            </p>
            <p className="pt-2">
              And I occasionally update{" "}
              <a href="https://blog.neranjana.tk" target="_blank" rel="noopener noreferrer" className="font-medium">
                my blog{" "}
              </a>
              too.
            </p>
          </div>
          <div className="grid grid-cols-home gap-6">
            <div className="work-with">
              <p className="font-medium text-2xl mt-4 mb-2 uppercase">Tech Stack</p>

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
              <p className="font-medium text-2xl mt-4 mb-2 uppercase">Achivements</p>
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
            <p className="font-medium text-2xl mt-6 mb-2 uppercase">My happy pills</p>
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
            <p className="pt-4 text-sm spotify">
              Vibing To :&nbsp;
              <span className="opacity-90 hover:opacity-100"></span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

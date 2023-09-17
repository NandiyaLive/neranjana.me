import Image from "next/image";
import { pro } from "./data/pro";
import { Icons } from "../(home)/icons";

export const metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <main className="container max-w-6xl pb-16">
      <p>
        For the past years, I&apos;ve been working with clients and teams from all walks of life and getting the
        chance to get my hands on the latest technologies and approaches. It&apos;s been an exciting journey, and
        it&apos;s only getting better. Check out my projects to see what I&apos;ve been up to!
      </p>

      <h3 className="text-2xl uppercase font-semibold mt-8 mb-2">Professional</h3>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {pro.map(({ name, description, image, url, telegram, github, technologies }, index) => (
          <div className="bg-stone-900 rounded-md">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-44 relative overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  className="h-full w-auto object-cover rounded-ss-md rounded-se-md hover:scale-105 transition-transform ease-in-out duration-300"
                  fill
                />
              </div>
            </a>

            <div className="p-4">
              <h4 className="text-xl font-semibold">{name}</h4>
              <p className="text-sm mt-1">{description}</p>

              <div className="flex mt-2 gap-2">
                {technologies.map((tech, index) => (
                  <p className="text-xsm bg-yellow-500 text-black py-1 px-2 rounded">{tech}</p>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-4">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <button className=" h-6 fill-white">{Icons.vercel}</button>
                </a>
                {telegram && (
                  <a href={telegram} target="_blank" rel="noopener noreferrer">
                    <button className=" h-6 fill-white">{Icons.telegram}</button>
                  </a>
                )}

                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <button className=" h-6 fill-white">{Icons.github}</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;

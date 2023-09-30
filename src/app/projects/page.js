import { pro } from "./data/pro";
import { Link } from "lucide-react";

export const metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <main className="container max-w-6xl pb-16">
      <p>
        For the past years, I&apos;ve been working with clients and teams from all walks of life and getting the chance
        to get my hands on the latest technologies and approaches. It&apos;s been an exciting journey, and it&apos;s
        only getting better. Check out my projects to see what I&apos;ve been up to!
      </p>

      <h3 className="text-2xl uppercase font-semibold mt-8 mb-2">Professional</h3>

      <div className="grid grid-cols-3 gap-4 mt-4 md:grid-cols-2 sm:grid-cols-1">
        {pro.map(({ name, description, logo, url }, index) => (
          <div
            className="flex flex-col justify-between hover:bg-neutral-100 transition-colors ease-in-out duration-300 p-4 select-none group dark:hover:bg-neutral-900"
            key={index}
          >
            <div>
              <div className="h-12 ml-0 block mr-auto">{logo}</div>
              <h4 className="text-xl font-semibold mt-4 mb-1">{name}</h4>
              <p className="text-sm">{description}</p>
            </div>

            <div className="flex items-center gap-2 mt-6 font-medium group-hover:text-yellow-500 transition-colors ease-in-out duration-300">
              <Link size={16} />
              <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;

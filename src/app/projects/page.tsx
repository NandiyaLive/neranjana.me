import { LinkText } from "@/components/link-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  freelanceProjects,
  hobbyProjects,
  universityProjects,
} from "@/data/projects";
import { Link } from "lucide-react";
import type { Metadata } from "next";
import { ProjectCard } from "./components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my projects, including freelance work, hobby projects, and university assignments.",
};

const Page = () => (
  <main className="container mx-auto max-w-7xl pt-24 pb-16">
    <p className="mb-8 text-lg leading-relaxed">
      For the past years, I&apos;ve been working with clients and teams from all
      walks of life and getting the chance to get my hands on the latest
      technologies and approaches. It&apos;s been an exciting journey, and
      it&apos;s only getting better. Check out my projects to see what I&apos;ve
      been up to!
    </p>

    <h3 className="mt-8 text-3xl font-bold uppercase">Freelance</h3>

    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {freelanceProjects.map(({ name, description, url, completed }, index) => (
        <ProjectCard
          key={index}
          name={name}
          description={description}
          url={url}
          completed={completed}
        />
      ))}

      <Card className="border-border bg-card/40 gap-2 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl">at DynamicBiz</CardTitle>
        </CardHeader>
        <CardContent className="flex h-full flex-col justify-between gap-4">
          <div>
            <p>6 Next.js Projects</p>
            <p>3 WordPress Projects</p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-yellow-500">
            <Link className="h-3 w-3" />
            <LinkText
              text="hellodynamicbiz.com"
              href="https://hellodynamicbiz.com"
              className="no-underline"
              external
            />
          </div>
        </CardContent>
      </Card>
    </div>

    <h3 className="mt-8 text-3xl font-bold uppercase">Hobby</h3>

    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {hobbyProjects.map(({ name, description, url, completed }, index) => (
        <ProjectCard
          key={index}
          name={name}
          description={description}
          url={url}
          completed={completed}
        />
      ))}
    </div>

    <h3 className="mt-8 text-3xl font-bold uppercase">University</h3>

    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {universityProjects.map(
        ({ name, description, url, completed }, index) => (
          <ProjectCard
            key={index}
            name={name}
            description={description}
            url={url}
            completed={completed}
          />
        ),
      )}
    </div>
  </main>
);

export default Page;

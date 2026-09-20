import { LinkText } from "@/components/link-text";
import { Metadata } from "next";
import { Certifications } from "./components/certifications";
import { Experience } from "./components/experience";
import { Volunteering } from "./components/volunteering";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Neranjana Prasad Ponnamperuma.",
};

const Page = () => {
  return (
    <main className="container mx-auto grid max-w-7xl gap-12 pt-24 pb-16">
      <section className="space-y-1 text-lg leading-relaxed">
        <div className="mb-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Neranjana Prasad Ponnamperuma
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Software Engineer
          </p>
        </div>
        <div className="grid gap-4">
          <p>
            I'm a software engineer based in Kandy, Sri Lanka. I started
            making websites around <span className="font-medium">2011</span>
            {" "}with WordPress, Joomla, and Blogger. That curiosity grew into
            a career building web applications with{" "}
            <span className="font-medium">React, Next.js, and Node.js</span>.
          </p>
          <p>
            I work with clients and product teams to turn a Figma handoff or a
            rough idea into a working application. I use{" "}
            <span className="font-medium">
              TypeScript, Tailwind CSS, and Node.js
            </span>
            {" "}to build responsive interfaces and the services behind them.
          </p>
          <p>
            Outside of development, I spend my time reading novels, listening to
            music and podcasts, and occasionally writing on my blog.
          </p>
          <p>
            If you have a project in mind or would like to discuss a potential
            role, feel free to <LinkText text="reach out" href="/contact" />.
            You can also{" "}
            <LinkText
              text="download my resume"
              href="/docs/neranjana-ponnamperuma-resume.pdf"
              external
            />{" "}
            for a more detailed overview of my experience and background.
          </p>
        </div>
      </section>

      <section className="grid items-start gap-6 md:grid-cols-2">
        <Experience />
        <Certifications />
        <Volunteering />
      </section>
    </main>
  );
};

export default Page;

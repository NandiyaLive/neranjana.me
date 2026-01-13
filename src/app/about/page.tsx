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
        <div className="grid gap-2">
          <p>
            I am a full-stack developer based in Kandy, Sri Lanka, and an IT
            undergraduate at the University of Vavuniya. Since{" "}
            <span className="font-medium">2022</span>, I have been building and
            shipping modern web applications using{" "}
            <span className="font-medium">React and Next.js</span>, with an
            emphasis on performance, responsiveness, and intuitive user
            experience.
          </p>
          <p>
            I enjoy translating complex ideas and designs into clean, scalable
            interfaces using{" "}
            <span className="font-medium">
              TypeScript, Tailwind CSS, and modern UI patterns
            </span>
            . I value maintainable code, thoughtful UI decisions, and
            collaboration in both freelance and team-based environments.
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
              text="download my CV"
              href="/docs/neranjana-ponnamperuma-cv.pdf"
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

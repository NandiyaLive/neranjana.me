import { LinkText } from "@/components/link-text";
import { Certifications } from "./components/certifications";
import { Experience } from "./components/experience";
import { Volunteering } from "./components/volunteering";

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

        <p>
          A self taught, freelance web (mainly frontend) developer from the
          sacred city of Kandy, Sri Lanka. I&apos;m an IT Student at the
          <LinkText
            text="University of Vavuniya"
            href="https://vau.ac.lk/"
            className="mx-1"
            external
          />
          by day and a full-on tech nerd by night.
        </p>
        <p>
          I have extensive knowledge of HTML, CSS & JavaScript and I&apos;m
          passionate about building blazing fast, user-friendly, responsive and
          visually stunning web applications with 2 years experience in
          cutting-edge technologies like
          <LinkText
            text="Next.js"
            href="https://nextjs.org/"
            className="mx-1"
            external
          />
          and
          <LinkText
            text="TailwindCSS"
            href="https://tailwindcss.com/"
            className="ml-1"
            external
          />
          .
        </p>
        <p>
          When I am not at my desk, you can find me reading novels, listening to
          music and podcasts or binge watching, and I occasionally update my
          blog too.
        </p>
        <p>
          I&apos;m currently available for a new freelance job.
          <LinkText text="Hire Me" href="/contact" className="ml-1" />.
        </p>
      </section>

      <section>
        <div className="grid items-start gap-6 md:grid-cols-2">
          <Experience />
          <Certifications />
          <Volunteering />
        </div>
      </section>
    </main>
  );
};

export default Page;

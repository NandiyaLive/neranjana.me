import { LinkText } from "@/components/link-text";
import {
  developmentEnvironment,
  hardware,
  softwaresList,
  techStack,
  websiteStack,
} from "@/data/uses";
import type { Metadata } from "next";
import { UseItems } from "./component/use-items";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools, software, and tech stack I use for development",
};

export default function UsesPage() {
  return (
    <main className="container mx-auto max-w-7xl pt-24 pb-16">
      <p className="mb-4 text-lg leading-relaxed">
        A comprehensive look at the hardware, software, and technologies that
        power my development workflow. Everything I use to build, create, and
        innovate. Inspired by Wes Bos&apos;s{" "}
        <LinkText text="/uses" href="https://uses.tech/" external />.
      </p>

      <div className="mt-8">
        <div className="mb-4 space-y-2">
          <h2 className="text-3xl font-bold">Hardware Setup</h2>
          <p className="text-muted-foreground">
            Devices and peripherals that power my workspace.
          </p>
        </div>
        <UseItems items={hardware} />
      </div>

      <div className="mt-16">
        <div className="mb-4 space-y-2">
          <h2 className="text-3xl font-bold">Development Environment</h2>
          <p className="text-muted-foreground">
            Core tools and configurations for my dev setup.
          </p>
        </div>

        <UseItems items={developmentEnvironment} />
      </div>

      <div className="mt-16">
        <div className="mb-4 space-y-2">
          <h2 className="text-3xl font-bold">Software & Services</h2>
          <p className="text-muted-foreground">
            Applications I rely on for productivity and entertainment.
          </p>
        </div>
        <ul className="space-y-1">
          <UseItems items={softwaresList} />
        </ul>
      </div>

      <div className="mt-16">
        <div className="mb-4 space-y-2">
          <h2 className="text-3xl font-bold">Tech Stack</h2>
          <p className="text-muted-foreground">
            Languages, frameworks, and technologies I work with.
          </p>
        </div>
        <UseItems items={techStack} />
      </div>

      <div className="mt-16">
        <div className="mb-4 space-y-2">
          <h2 className="text-3xl font-bold">This Website</h2>
          <p className="text-muted-foreground">
            The stack used to build and host this site.
          </p>
        </div>
        <UseItems items={websiteStack} />
      </div>
    </main>
  );
}

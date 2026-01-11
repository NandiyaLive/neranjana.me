import { LinkText } from "@/components/link-text";
import { socialLinks } from "@/data/social-links";
import avatarImage from "@public/avatar.jpg";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Background } from "./components/background";
import { SocialLinks } from "./components/social-links";

const Page = () => {
  return (
    <main className="relative flex h-svh max-h-svh items-end overflow-hidden py-8">
      <Background />

      <div className="container mx-auto max-w-7xl space-y-8 px-4">
        <div className="animate-fade-in relative mb-10 w-fit">
          <Image
            src={avatarImage}
            alt="Neranjana's Avatar"
            width={150}
            height={150}
            placeholder="blur"
            className="rounded-full border-4 border-yellow-500/30 dark:border-yellow-500/20"
            style={{ viewTransitionName: "avatar" }}
          />
          <SocialLinks links={socialLinks} />
        </div>

        <h1 className="animate-fade-in-up max-w-3xl text-5xl leading-tight font-bold">
          IT Student by Day,
          <br />
          <span className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Web Dev by Night!
          </span>
        </h1>

        <p className="animate-fade-in-up animation-delay-100 max-w-2xl text-lg leading-relaxed opacity-90">
          Hey, I&apos;m Neranjana. I&apos;m a Web Developer who builds fast,
          interactive, and user-friendly websites, with expertise in
          <LinkText
            text="Next.js"
            href="https://nextjs.org"
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

        <div className="animate-fade-in-up animation-delay-200">
          <Link href="/contact">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-8 py-3 text-sm text-white shadow-lg transition-transform dark:bg-white dark:text-black">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 blur-[1px]"></div>
              <span className="font-medium">Open For Hiring</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;

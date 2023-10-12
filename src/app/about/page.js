import Link from "next/link";
import React from "react";

import { backend, frontend, tools } from "./technologies";
import getSongData from "@/lib/spotify";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Image from "next/image";

export const metadata = {
  title: "About",
};

const AboutPage = async () => {
  const songData = await getSongData();

  return (
    <main className="container max-w-6xl pb-16" suppressHydrationWarning={false}>
      <section className="space-y-2">
        <p>
          I&apos;m Neranjana Prasad Ponnamperuma, a self taught, freelance full-stack web developer based in the sacred
          city of Kandy, Sri Lanka. I&apos;m an IT Student at the{" "}
          <a
            href="https://vau.ac.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            University of Vavuniya
          </a>{" "}
          by day and a full-on tech nerd by night.
        </p>
        <p>
          I have extensive knowledge of HTML, CSS & JavaScript and I&apos;m passionate about building blazing fast,
          user-friendly, responsive and visually stunning web applications with 2 years experience in cutting-edge
          technologies like{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            TailwindCSS
          </a>
          .
        </p>
        <p>
          When I am not at my desk, you can find me reading novels, listening to music and podcasts or binge watching,
          and I occasionally update my blog too.
        </p>
        <p>
          I&apos;m currently available for a new freelance job.{" "}
          <Link href="/hire" className="font-medium underline underline-offset-4">
            Hire me!
          </Link>
        </p>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl uppercase font-semibold mb-2">Life Changelog</h3>

        <ul className="select-none">
          <li className="flex items-center gap-2 w-fit">
            <p className="flex-1">2022 —</p>
            <p className="opacity-80"> Started BSc in IT at University of Vavuniya</p>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl uppercase font-semibold mb-2">Tech Stack</h3>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-1">
          <div>
            <h4 className="text-lg font-medium mb-2">Frontend</h4>

            <div className="flex gap-2 flex-wrap items-center text-sm">
              {frontend.map(({ logo, label }, index) => (
                <div
                  className="h-9 w-auto flex items-center gap-2 bg-stone-200 dark:bg-stone-900 py-2 px-3 rounded select-none"
                  key={index}
                  title={label}
                >
                  <div className="h-4">{logo}</div>
                  <p className="sm:text-xsm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Backend</h4>

            <div className="flex gap-2 flex-wrap items-center text-sm">
              {backend.map(({ logo, label }, index) => (
                <div
                  className="h-9 w-auto flex items-center gap-2 bg-stone-200 dark:bg-stone-900 py-2 px-3 rounded select-none"
                  key={index}
                  title={label}
                >
                  <div className="h-4">{logo}</div>
                  <p className="sm:text-xsm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Tools</h4>

            <div className="flex gap-2 flex-wrap items-center text-sm">
              {tools.map(({ logo, label }, index) => (
                <div
                  className="h-9 w-auto flex items-center gap-2 bg-stone-200 dark:bg-stone-900 py-2 px-3 rounded select-none"
                  key={index}
                  title={label}
                >
                  <div className="h-4">{logo}</div>
                  <p className="sm:text-xsm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="h-4">
          <path
            fill="#1ED760"
            fillRule="evenodd"
            d="M19.0983701,10.6382791 C15.230178,8.34118115 8.85003755,8.12986439 5.15729493,9.25058527 C4.56433588,9.43062856 3.93727638,9.09580812 3.75758647,8.50284907 C3.57789655,7.90953664 3.91236362,7.28283051 4.50585273,7.10261054 C8.74455585,5.81598127 15.7909802,6.06440214 20.2440037,8.70780512 C20.7774195,9.02442687 20.9525156,9.71332656 20.6362472,10.2456822 C20.3198021,10.779098 19.6305491,10.9549008 19.0983701,10.6382791 M18.971686,14.0407262 C18.7004726,14.4810283 18.1246521,14.6190203 17.6848801,14.3486903 C14.4600027,12.3664473 9.54264764,11.792217 5.72728477,12.9503953 C5.23256328,13.0998719 4.70992535,12.8208843 4.55974204,12.3270462 C4.41061884,11.8323247 4.68978312,11.3107469 5.18362118,11.1602103 C9.5419409,9.83771368 14.9600247,10.4782013 18.6638986,12.7544503 C19.1036707,13.0253103 19.242016,13.6013075 18.971686,14.0407262 M17.5034233,17.308185 C17.2876894,17.6617342 16.827245,17.7725165 16.4749326,17.5571359 C13.6571403,15.8347984 10.1101639,15.4459119 5.93312425,16.4000177 C5.53063298,16.4922479 5.12937851,16.2399399 5.03767834,15.8376253 C4.94544812,15.4351341 5.19669597,15.0338796 5.60024736,14.9420027 C10.1712973,13.8970803 14.0923186,14.3467468 17.2551791,16.2796943 C17.6078449,16.4948982 17.7189805,16.9556959 17.5034233,17.308185 M12,0 C5.37267547,0 0,5.37249879 0,11.9998233 C0,18.6278546 5.37267547,24 12,24 C18.6275012,24 24,18.6278546 24,11.9998233 C24,5.37249879 18.6275012,0 12,0"
          />
        </svg>
        {songData ? (
          <p className="inline-block text-sm">
            {songData.isPlaying ? "Listening To — " : "Last Played — "}

            <HoverCard>
              <HoverCardTrigger>
                <a href={songData.songUrl} target="_blank" rel="noopener noreferrer" className="font-medium">
                  {songData.title}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-max">
                <div className="flex gap-4">
                  <Image
                    src={songData.albumImageUrl}
                    alt={songData.album}
                    width={64}
                    height={64}
                    className=" max-h-16"
                  />
                  <div>
                    <p className="font-medium">{songData.title}</p>
                    <p className="text-sm opacity-80">{songData.artist}</p>
                    <p className="text-sm opacity-80">{songData.album}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
};

export default AboutPage;

import "@/app/globals.scss";
import Navbar from "@/components/navbar";
import NextThemeProvider from "@/components/next-theme-provider";
import { cn } from "@/lib/utils";

import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Neranjana Prasad",
    template: "%s — Neranjana Prasad",
  },
  description:
    "I'm Neranjana Prasad, a Freelance Web Developer with expertise in Next.js and TailwindCSS.",
  metadataBase: new URL("https://neranjana.me"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/og-image.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="batman.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="batman.svg" />
        <link rel="manifest" href="manifest.json" />

        <Script
          src="https://eu.umami.is/script.js"
          data-website-id="4f0403cf-09ce-47cc-9b9c-bfe30084454c"
          strategy="lazyOnload"
          suppressHydrationWarning
        />
      </Head>

      <NextThemeProvider>
        <body
          className={cn(
            "max-h-screen max-w-screen overflow-x-hidden dark:text-white"
          )}
          suppressHydrationWarning={true}
        >
          <header>
            <Navbar />
          </header>
          {children}
        </body>
      </NextThemeProvider>
    </html>
  );
}

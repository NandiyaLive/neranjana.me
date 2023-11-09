import NextThemeProvider from "@/components/next-theme-provider";
import Navbar from "@/components/navbar";
import "@/app/globals.scss";
import { cn } from "@/lib/utils";

export const metadata = {
  title: {
    default: "Neranjana Prasad",
    template: "%s — Neranjana Prasad",
  },
  description: "I'm Neranjana Prasad, a Freelance Full-Stack Developer with expertise in Next.js and TailwindCSS.",
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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="shortcut icon" href="batman.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="batman.svg" />
        <link rel="manifest" href="manifest.json" />
      </head>

      <NextThemeProvider>
        <body
          className={cn("max-h-screen max-w-screen overflow-x-hidden dark:bg-black dark:text-white")}
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

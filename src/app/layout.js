import Navbar from "@/components/Navbar";
import "@/app/globals.scss";
import NextThemeProvider from "@/components/NextThemeProvider";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="batman.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="batman.svg" />
        <link rel="manifest" href="manifest.json" />
      </head>

      <NextThemeProvider>
        <body
          className="max-h-screen max-w-screen overflow-x-hidden dark:bg-black dark:text-white"
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

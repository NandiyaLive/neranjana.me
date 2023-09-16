import Navbar from "@/src/components/Navbar";
import "@/src/app/globals.scss";

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="max-h-screen">
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}

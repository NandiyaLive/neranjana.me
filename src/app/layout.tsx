import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Providers } from "@/provider";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Neranjana Prasad",
    template: "%s — Neranjana Prasad",
  },
  description:
    "a Freelance Web Developer with expertise in Next.js and TailwindCSS.",
  metadataBase: new URL("https://neranjana.me"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ViewTransitions>
        <body
          className={cn(
            "flex min-h-screen flex-col justify-between bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white",
            geistSans.variable,
            jetBrainMono.variable,
          )}
        >
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
      </ViewTransitions>
    </html>
  );
}

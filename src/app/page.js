import NowPlaying from "@/components/now-playing";
import { Maname } from "next/font/google";

const maname = Maname({
  variable: "--font-maname",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main>
      <NowPlaying />
    </main>
  );
}

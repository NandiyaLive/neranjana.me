export interface Project {
  name: string;
  description: string;
  url: string;
  completed: boolean;
  active?: boolean;
}

export const freelanceProjects: Project[] = [
  {
    name: "Mathru.lk",
    description:
      "An AI Powered EHR system for maternity clinics in Sri Lanka to manage patient records, appointments, and medical history.",
    url: "mathru.lk",
    completed: true,
  },
];

export const hobbyProjects: Project[] = [
  {
    name: "xIGDLBot",
    description:
      "A Telegram bot that allows users to download Instagram photos, videos, reels, and IGTV videos directly from Telegram.",
    url: "t.me/xIGDLBot",
    completed: true,
    active: false,
  },
  {
    name: "DOSS",
    description:
      "Department Of Streetwear Supplies, is a streetwear label that focuses on providing unique and quality streetwear to the Sri Lankan market.",
    url: "dosswebsite.vercel.app",
    completed: true,
  },
  {
    name: "Nextflix",
    description:
      "Every developer's first Next.js project. Just another Netflix clone built with Next.js, TailwindCSS and SupaBase.",
    url: "nextflix.neranjana.tech",
    completed: true,
  },
  {
    name: "News API",
    description:
      "A simple API to fetch English news from the website of AdaDerana, a major news network in Sri Lanka.",
    url: "newsapi.neranjana.tech",
    completed: true,
  },
];

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
  {
    name: "The Teaholic",
    description:
      "The Teaholic designs and builds high-quality websites, web applications, and digital platforms from the first idea through launch and long-term support.",
    url: "theteaholic.com",
    completed: true,
  },
  {
    name: "DOSS",
    description:
      "Department Of Streetwear Supplies, is a streetwear label that focuses on providing unique and quality streetwear to the Sri Lankan market.",
    url: "dosswebsite.vercel.app",
    completed: true,
  },
];

export const hobbyProjects: Project[] = [
  {
    name: "Quoteflare",
    description:
      "A self-hosted invoicing app for one-person businesses. A public pricing calculator, quotes, invoices, email and reminders on Cloudflare's free tier.",
    url: "/projects/quoteflare",
    completed: true,
  },
  {
    name: "xIGDLBot",
    description:
      "A Telegram bot that allows users to download Instagram photos, videos, reels, and IGTV videos directly from Telegram.",
    url: "t.me/xIGDLBot",
    completed: true,
    active: false,
  },
  {
    name: "Nextflix",
    description:
      "Every developer's first Next.js project. Just another Netflix clone built with Next.js, TailwindCSS and SupaBase.",
    url: "nextflix-supabase.vercel.app",
    completed: true,
  },
  {
    name: "News API",
    description:
      "A simple API to fetch English news from the website of AdaDerana, a major news network in Sri Lanka.",
    url: "news-api.neranjana.tech",
    completed: true,
  },
];

export const universityProjects: Project[] = [
  {
    name: "RestroHQ",
    description:
      "An all-in-one SaaS solution for restaurants. Manage POS, orders, reservations, menus, customer data, and analytics with ease.",
    url: "restrohq.qzz.io",
    completed: true,
  },
];

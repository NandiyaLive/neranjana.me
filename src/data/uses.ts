export interface UseItemI {
  name: string;
  description: string;
  url?: string;
}

export const hardware: UseItemI[] = [
  {
    name: "Lenovo ThinkPad T480",
    description: "my reliable portable workstation",
  },
  {
    name: 'ViewSonic VA2732-H 27" FHD IPS',
    description: "secondary monitor for multitasking",
  },
  {
    name: 'ViewSonic VA1655 Portable 16" FHD USB-C',
    description: "on-the-go second display",
  },
  {
    name: "Moto g51 5G (RisingOS)",
    description: "daily driver smartphone",
  },
  {
    name: "Soundcore R50i",
    description: "bang for the buck earbuds",
  },
];

export const developmentEnvironment: UseItemI[] = [
  {
    name: "EndeavourOS (KDE)",
    description: "lightweight and minimal OS of choice",
    url: "https://endeavouros.com",
  },
  {
    name: "fish",
    description: "intuitive shell with smart completions",
    url: "https://fishshell.com",
  },
  {
    name: "Starship",
    description: "blazing fast command prompt",
    url: "https://starship.rs",
  },
  {
    name: "Zed",
    description: "my primary code editor",
    url: "https://zed.dev",
  },
  {
    name: "Antigravity",
    description: "the Agent-first IDE",
    url: "https://antigravity.google",
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer for faster development",
    url: "https://copilot.github.com",
  },
  {
    name: "Postman",
    description: "API testing and debugging",
    url: "https://www.postman.com",
  },
];

export const softwaresList: UseItemI[] = [
  {
    name: "Zen Browser",
    description: "as my primary browser",
    url: "https://zen-browser.app",
  },
  {
    name: "Brave Nightly",
    description: "secondary browser for testing",
    url: "https://brave.com",
  },
  {
    name: "uBlock Origin",
    description: "essential ad blocker",
    url: "https://ublockorigin.com",
  },
  {
    name: "Bitwarden",
    description: "secure password management",
    url: "https://bitwarden.com",
  },
  {
    name: "Ente Auth",
    description: "two-factor authentication",
    url: "https://ente.io/auth/",
  },
  {
    name: "Obsidian",
    description: "for digital note taking",
    url: "https://obsidian.md",
  },
  {
    name: "Notion",
    description: "all-in-one workspace",
    url: "https://notion.so",
  },
  {
    name: "Telegram",
    description: "messaging and cloud storage",
    url: "https://telegram.org",
  },
  {
    name: "YouTube Music",
    description: "my main music streaming service",
    url: "https://music.youtube.com",
  },
  {
    name: "Spotify",
    description: "alternate music library",
    url: "https://spotify.com",
  },
  {
    name: "Jellyfin",
    description: "self-hosted media server",
    url: "https://jellyfin.org",
  },
  {
    name: "Trakt.tv",
    description: "track movies and TV shows",
    url: "https://trakt.tv/users/nandiyalive",
  },
  {
    name: "Simkl",
    description: "entertainment tracking and stats",
    url: "https://simkl.com/6590831/stats/",
  },
];

export const techStack: UseItemI[] = [
  {
    name: "JavaScript, TypeScript, Python, Golang",
    description: "programming languages I work with",
  },
  {
    name: "React, Next.js, Astro",
    description: "frontend frameworks of choice",
  },
  {
    name: "React Native, Expo",
    description: "mobile development stack",
  },
  {
    name: "Tailwind CSS, shadcn/ui",
    description: "UI libraries and styling solutions",
  },
  {
    name: "Zustand, TanStack Query",
    description: "state management tools",
  },
  {
    name: "Node.js, Express, Flask, Fiber",
    description: "backend frameworks",
  },
  {
    name: "PostgreSQL, MySQL, MongoDB",
    description: "database solutions",
  },
  {
    name: "Supabase, Firebase",
    description: "backend-as-a-service platforms",
  },
  {
    name: "AWS, GCP, Heroku",
    description: "cloud platforms",
  },
  {
    name: "Vercel, Cloudflare",
    description: "deployment and hosting services",
  },
  {
    name: "Docker, Linux",
    description: "containerization and infrastructure",
  },
  {
    name: "Git, GitHub",
    description: "version control",
  },
  {
    name: "Figma",
    description: "design tool",
  },
];

export const websiteStack: UseItemI[] = [
  {
    name: "Next.js",
    description: "react framework powering this site",
  },
  {
    name: "Tailwind CSS",
    description: "utility-first styling",
  },
  {
    name: "Vercel",
    description: "hosting and deployment",
  },
  {
    name: "Vercel Analytics",
    description: "performance monitoring",
  },
  {
    name: "Cloudflare",
    description: "CDN and security",
  },
  {
    name: "Inter + JetBrains Mono",
    description: "Google Fonts typography",
  },
];

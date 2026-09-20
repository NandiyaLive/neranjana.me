export interface UseItemI {
  name: string;
  description: string;
  url?: string;
}

export const hardware: UseItemI[] = [
  {
    name: "MacBook Pro M4 Pro",
    description: "primary laptop",
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
    name: "Samsung Galaxy S20 FE",
    description: "primary phone",
  },
  {
    name: "Moto g51 5G",
    description: "secondary phone",
  },
  {
    name: "Soundcore R50i",
    description: "bang for the buck earbuds",
  },
];

export const developmentEnvironment: UseItemI[] = [
  {
    name: "macOS Golden Gate",
    description: "operating system",
    url: "https://www.apple.com/macos/",
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
    name: "Claude Code",
    description: "AI coding assistant",
    url: "https://www.anthropic.com/claude-code",
  },
  {
    name: "Codex",
    description: "AI coding assistant",
    url: "https://openai.com/codex/",
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
    name: "Vivaldi",
    description: "secondary browser for testing",
    url: "https://vivaldi.com",
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
    name: "Stremio",
    description: "media center",
    url: "https://www.stremio.com",
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

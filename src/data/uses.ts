export const developmentEnvironment = [
  {
    name: "Operating System",
    description: "EndeavourOS Ganymede (KDE)",
    url: "https://endeavouros.com",
  },
  {
    name: "Shell",
    description: "fish",
    url: "https://fishshell.com",
  },
  {
    name: "Prompt",
    description: "Starship",
    url: "https://starship.rs",
  },
  {
    name: "IDE",
    description: "Zed, Antigravity",
    url: "https://zed.dev",
  },
  {
    name: "AI Pair Programmer",
    description: "GitHub Copilot",
    url: "https://copilot.github.com",
  },
  {
    name: "API Testing",
    description: "Postman",
    url: "https://www.postman.com",
  },
] as const;

export const hardware = [
  {
    name: "Laptop",
    description: "Lenovo ThinkPad T480",
    extra: "i5-8350U, 24GB DDR4, 500GB NVMe SSD",
  },
  {
    name: "Secondary Monitor",
    description: 'ViewSonic VA2732-H 27" FHD IPS',
    extra: undefined,
  },
  {
    name: "Portable Monitor",
    description: 'ViewSonic VA1655 Portable 16" FHD USB-C Monitor ',
    extra: undefined,
  },
  {
    name: "Smartphone",
    description: "Moto g51 5G (RisingOS)",
    extra: undefined,
  },
  {
    name: "External HDD",
    description: "Transcend StoreJet 25H3 1TB External HDD",
    extra: undefined,
  },
] as const;

export const softwaresList = [
  {
    name: "Main Browser",
    softwares: [{ name: "Zen Browser", url: "https://zen-browser.app" }],
  },
  {
    name: "Secondary Browser",
    softwares: [{ name: "Brave Nightly", url: "https://brave.com" }],
  },
  {
    name: "Ad Blocker",
    softwares: [{ name: "uBlock Origin", url: "https://ublockorigin.com" }],
  },
  {
    name: "Password Manager",
    softwares: [{ name: "Bitwarden", url: "https://bitwarden.com" }],
  },
  {
    name: "2FA",
    softwares: [{ name: "Ente Auth", url: "https://ente.io/auth/" }],
  },
  {
    name: "Note Taking",
    softwares: [
      { name: "Obsidian", url: "https://obsidian.md" },
      { name: "Notion", url: "https://notion.so" },
    ],
  },
  {
    name: "Messaging + Cloud Storage",
    softwares: [{ name: "Telegram", url: "https://telegram.org" }],
  },
  {
    name: "Music",
    softwares: [
      {
        name: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=PLBUnyHiK2RvTqssxVQ2a8wLGn6Ktny2O_&si=DR2o9kPOsNnge6wv",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/playlist/4oKjrCt8bfJCLQxL635Ftq",
      },
    ],
  },
  {
    name: "Media Server",
    softwares: [{ name: "Jellyfin", url: "https://jellyfin.org" }],
  },
  {
    name: "Movies & TV Shows Tracker",
    softwares: [
      { name: "Trakt.tv", url: "https://trakt.tv/users/nandiyalive" },
      { name: "Simkl", url: "https://simkl.com/6590831/stats/" },
    ],
  },
] as const;

export const techStack = [
  {
    name: "Programming Languages",
    items: "JavaScript, TypeScript, Python, Golang",
  },
  {
    name: "Frontend Frameworks",
    items: "React, Next.js, Astro",
  },
  {
    name: "Mobile Development",
    items: "React Native, Expo",
  },
  {
    name: "UI Libraries & Styling",
    items: "Tailwind CSS, shadcn/ui",
  },
  {
    name: "State Management",
    items: "Zustand, TanStack Query",
  },
  {
    name: "Backend Frameworks",
    items: "Node.js, Express, Flask, Fiber",
  },
  {
    name: "Databases",
    items: "PostgreSQL, MySQL, MongoDB",
  },
  {
    name: "Backend-as-a-Service",
    items: "Supabase, Firebase",
  },
  {
    name: "Cloud Platforms",
    items: "AWS, GCP, Heroku",
  },
  {
    name: "Deployment & Hosting",
    items: "Vercel, Cloudflare",
  },
  {
    name: "DevOps & Containerization",
    items: "Docker, Linux",
  },
  {
    name: "Version Control",
    items: "Git, GitHub",
  },
  {
    name: "Design Tools",
    items: "Figma",
  },
] as const;

export const websiteStack = [
  {
    name: "Framework",
    items: "Astro",
  },
  {
    name: "Styling",
    items: "Tailwind CSS",
  },
  {
    name: "Deployment",
    items: "Vercel",
  },
  {
    name: "Analytics",
    items: "Vercel Analytics",
  },
  {
    name: "Icons",
    items: "Iconify",
  },
  {
    name: "Fonts",
    items: "Inter + JetBrains Mono (Google Fonts)",
  },
] as const;

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  emplymentType: string;
  website: string;
  responsibilities: string[];
  skills: string[];
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "space-it-labs",
    company: "Space IT Labs",
    position: "Full-Stack Developer (Internship)",
    duration: "Feb 2026 - Aug 2026",
    emplymentType: "Internship",
    website: "",
    responsibilities: [
      "Shipped four production features for Seamless Source, a PRM SaaS platform, with Vue, PHP, and Next.js. The work included Critical Path Timeline and DPP Editor.",
      "Built the first prototype for a cross-platform robotic-arm application for school children, including its interactive 3D interface and mobile build pipeline.",
      "Wrote unit and integration tests, contributed to code reviews, and took part in Agile sprint ceremonies.",
    ],
    skills: ["Vue", "PHP", "Next.js"],
  },
  {
    id: "mathru",
    company: "Mathru.lk",
    position: "Frontend Developer (Freelance)",
    duration: "Mar 2025 - Apr 2026",
    emplymentType: "Freelance",
    website: "https://mathru.lk",
    responsibilities: [
      "Built and maintained user-facing features for a healthcare EHR platform with React and TypeScript.",
      "Created responsive, accessible components with shadcn/ui and kept the interface consistent across the product.",
      "Worked with a remote team in Agile sprints, using Git workflows and code reviews.",
    ],

    skills: ["React", "TypeScript", "shadcn/ui", "Git"],
  },
  {
    id: "dynamic-biz",
    company: "Dynamic Biz IT Solutions",
    position: "Full-stack Developer (Freelance)",
    duration: "Nov 2022 - Dec 2025",
    emplymentType: "Freelance",
    website: "https://hellodynamicbiz.com",
    responsibilities: [
      "Developed and launched more than eight client web applications, including six built with React and Next.js.",
      "Turned Figma designs into responsive interfaces with Tailwind CSS and deployed client sites on Vercel and Cloudflare.",
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "Figma"],
  },
];

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
    id: "mathru",
    company: "Mathru.lk",
    position: "Frontend Developer (Freelance)",
    duration: "Mar 2025 - Present",
    emplymentType: "Freelance",
    website: "https://mathru.lk",
    responsibilities: [
      "Contributed to the development of a modern healthcare platform (EHR) by building and maintaining new user-facing features.",
      "Developed a responsive, high-quality UI using React, TypeScript, and shadcn/ui.",
      "Collaborated with a remote team using Git, participating in code reviews to ensure high-quality, maintainable code.",
    ],

    skills: ["React", "TypeScript", "shadcn/ui", "Git"],
  },
  {
    id: "dynamic-biz",
    company: "Dynamic Biz IT Solutions",
    position: "Full-stack Developer (Freelance)",
    duration: "Nov 2022 - Present",
    emplymentType: "Freelance",
    website: "https://hellodynamicbiz.com",
    responsibilities: [
      "Developed and launched 8+ web applications for diverse clients, including 6 sites built with React/Next.js.",
      "Translated complex Figma designs into responsive, pixel-perfect user interfaces using Tailwind CSS.",
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "Figma"],
  },
];

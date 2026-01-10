export interface VolunteeringExperience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export const VOLUNTEERING_EXPERIENCES: VolunteeringExperience[] = [
  {
    role: "Volunteer",
    organization: "GDG Sri Lanka",
    startDate: "2023",
    endDate: "Present",
    responsibilities: [
      "Contributed to the TechEvents Platform as a developer.",
      "Developed DevFest 2024 website.",
      "On-site volunteer for DevFest 2023, Google I/O 2024 and DevFest 2024.",
    ],
  },
];

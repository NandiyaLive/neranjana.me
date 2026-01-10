export interface Certificate {
  title: string;
  issuer: string;
  issuedDate: string;
  url: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    issuedDate: "February 23, 2021",
    url: "https://www.freecodecamp.org/certification/neranjana/responsive-web-design",
  },
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    issuedDate: "May 14, 2022",
    url: "https://drive.google.com/file/d/1vFg-YekQ-_wNCP53EEIAKMqPXyk5Vfn6/view",
  },
];

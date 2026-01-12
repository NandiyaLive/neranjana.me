import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/social-icons";

export const socialLinks = [
  {
    platform: "LinkedIn",
    link: "https://linkedin.com/in/neranjanaprasad",
    handle: "neranjanaprasad",
    icon: LinkedInIcon,
  },
  {
    platform: "GitHub",
    link: "https://github.com/NandiyaLive",
    handle: "NandiyaLive",
    icon: GitHubIcon,
  },
  {
    platform: "Twitter",
    link: "https://twitter.com/NandiyaLive",
    handle: "NandiyaLive",
    icon: TwitterIcon,
  },
] as const;

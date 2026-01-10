import { Icon } from "@iconify/react";

interface SocialLink {
  platform: string;
  link: string;
  icon: string;
}

interface SocialLinksProps {
  links: readonly SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex gap-4 w-fit absolute left-1/2 -translate-x-1/2 bg-yellow-500 py-2 px-4 rounded-full top-full -translate-y-4 shadow-lg">
      {links.map(({ platform, link, icon }) => (
        <a
          key={platform}
          href={link}
          title={platform}
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon={icon}
            className="w-6 h-6 text-black hover:text-neutral-800"
          />
        </a>
      ))}
    </div>
  );
};

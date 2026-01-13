import type { ComponentType, SVGProps } from "react";

interface SocialLink {
  platform: string;
  link: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

interface SocialLinksProps {
  links: readonly SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="absolute top-full left-1/2 flex w-fit -translate-x-1/2 -translate-y-4 gap-4 rounded-full bg-yellow-500 px-4 py-2 shadow-lg">
      {links.map(({ platform, link, icon }) => (
        <a
          key={platform}
          href={link}
          title={platform}
          target="_blank"
          rel="noreferrer"
        >
          {(() => {
            const IconComponent = icon;
            return (
              <IconComponent className="h-5 w-5 text-black hover:text-neutral-800" />
            );
          })()}
        </a>
      ))}
    </div>
  );
};

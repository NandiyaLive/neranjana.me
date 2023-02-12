import { Icons } from "../data/icons";
import { socialLinks } from "../data/social-links";

const Footer = () => {
  
  return (
    <footer className="my-4 flex items-center justify-between md:pb-4 sm:justify-center">
      <ul className="flex gap-4 xmd:justify-center">
        {socialLinks.map(({ platform, link, icon }, index) => {
          return (
            <li key={index}>
              <a href={link} title={platform} target="_blank" rel="noreferrer">
                <div className="h-5 fill-white">{Icons[icon]}</div>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="underline underline-offset-2 text-sm sm:hidden">
        <a href="mailto:neranjanaprsd@gmail.com">neranjanaprsd@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;

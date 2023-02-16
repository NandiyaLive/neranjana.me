import { useEffect, useState } from "react";
import { Icons } from "../data/icons";
import { socialLinks } from "../data/social-links";

const Footer = () => {
  // const [songDetails, setSongDetails] = useState({});

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(`/api/spotify`);
  //       const data = await response?.json();
  //       setSongDetails(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getData();
  // }, []);
  return (
    <footer className="my-4 flex items-center justify-between lg:my-8 lg:pb-4 sm:justify-center">
      <ul className="flex gap-4 xmd:justify-center">
        {socialLinks.map(({ platform, link, icon }, index) => {
          return (
            <li key={index}>
              <a href={link} title={platform} target="_blank" rel="noreferrer">
                <div className="h-5 fill-white sm:h-6">{Icons[icon]}</div>
              </a>
            </li>
          );
        })}
      </ul>

      {/* <p className="text-sm sm:hidden">
        <span className={`${songDetails.isPlaying ? "text-green-500" : "text-red-600"}`}>⦿</span>&nbsp;
        {!songDetails ? "Spotify Player" : songDetails.isPlaying ? "Now Playing " : "Last Played"}&nbsp;—&nbsp;
        <a href={songDetails["songUrl"]} title={`${songDetails["title"]} - ${songDetails["artist"]}`} target="_blank" rel="noreferrer" className="font-medium opacity-90 hover:opacity-100">
          {songDetails["title"]}
        </a>
      </p> */}

      <p className="underline underline-offset-2 text-sm sm:hidden">
        <a href="mailto:hello@neranjana.me">hello@neranjana.me</a>
      </p>
    </footer>
  );
};

export default Footer;

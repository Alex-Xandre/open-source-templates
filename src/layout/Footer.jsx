import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  const socials = [
    {
      title: "Facebook",
      url: "https://web.facebook.com/xander.micua.9",
      ic: <AiOutlineFacebook />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/xndrmcua/",
      ic: <AiOutlineInstagram />,
    },
    {
      title: "Github",
      url: "https://github.com/Alex-Xandre",
      ic: <AiOutlineGithub />,
    },

    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/alexander-micua-04657a217/",
      ic: <AiOutlineLinkedin />,
    },
  ];
  const navigate = useNavigate();
  return (
    <footer className="flex w-full justify-between bg-white relative px-4 py-10 lg:px-40  dark:bg-zinc-800 ">
      {/* <div className="h-[1px] w-full border border-black "></div> */}
      <h1 className=" cursor-pointer dark:text-white font-semibold" onClick={() => navigate("/")}>
        Xandre
      </h1>

      <div className="flex gap-2">
        {socials.map((x, index) => {
          return (
            <a
              key={index}
              href={x.url}
              target="_blank"
              rel="noreferrer"
              className="oapcity-80 hover:bg-sky-50 hover:opacity-100 h-fit rounded p-[2px]  dark:hover:bg-zinc-500 dark:text-white"
            >
              {x.ic}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;

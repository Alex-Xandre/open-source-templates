import React from "react";
import { useNavigate } from "react-router-dom";
import { socials } from "./About";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="flex w-full justify-between bg-sky-50 relative px-4 py-10 lg:px-40 ">
      {/* <div className="h-[1px] w-full border border-black "></div> */}
      <h1 className="flex pt-12 cursor-pointer " onClick={() => navigate("/")}>
        Xandre
      </h1>

      <ul>
        {socials.map((x, index) => {
          return (
            <li key={index}>
              <a href={x.url} target="_blank" rel="noreferrer" className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                &nbsp; &nbsp;
                <span className="after:content-[''] after:block after:w-0 after:h-[2px] after:bg-slate-600 after:transition-all after:ease-in-out hover:after:w-8/12">
                  {" "}
                  {x.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;

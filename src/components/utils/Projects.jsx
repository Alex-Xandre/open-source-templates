import React from "react";
import { ArrowRedirectIcon, GithubIcon } from "../Icons";

const Projects = (props) => {
  const { banner, title, description, web_link, repo } = props;
  const splitDescription = description.split(", ");

  const resDesctription = splitDescription.map((str) => (
    <p key={str} className="text-sm text-indigo-300">
      {" "}
      - {str}
    </p>
  ));

  return (
    <div
      className="w-full h-full bg-contain bg-center bg-no-repeat  duration-300 ease-in relative img-box hover:opacity-100 hover:scale-105 rounded"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${banner})`,
      }}
    >
      <h3 className="text-3xl text-white px-4  pt-3  font-semibold font-sans flex cursor-pointer   w-fit">
        {title}
        <span className="absolute right-4 ">
          {repo ? (
            <>
              {web_link && repo ? (
                <>
                  {" "}
                  <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={web_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <ArrowRedirectIcon />
                  </a>
                </>
              ) : (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <GithubIcon />
                </a>
              )}
            </>
          ) : (
            <a
              href={web_link}
              target="_blank"
              onClick={()=>alert
              ("hi")}
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <ArrowRedirectIcon />
            </a>
          )}
        </span>
      </h3>
      <div className="absolute bottom-0 opacity-0 left-4  duration-300  text-xl text-white">
        <h4 className="text-base ">Created using:</h4>
        {resDesctription}
      </div>
    </div>
  );
};

export default Projects;

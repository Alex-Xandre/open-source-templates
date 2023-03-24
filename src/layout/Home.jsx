import React from "react";
import Button from "../components/Button";
import Title from "../components/utils/Title";
import bg from "../assets/bg.png";
import Projects from "../components/utils/Projects";
import { useNavigate } from "react-router-dom";
import { projectData } from "../components/utils/projectData";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50 dark:bg-zinc-900 relative h-full  scrollbar-hide ">
      <section className=" w-full relative  h-[calc(100vh-80px)] lg:mt-20 lg:px-40 flex flex-col sm:flex-row md:flex-row lg:flex-row ">
        <div className="w-full lg:w-6/12 flex justify-center align-center h-full flex-col py-10 md:py-0 lg:py-0 px-4 lg:px-0">
          <h2 className="text-2xl lg:text-3xl font-semibold py-1 dark:text-white">
            Hi, <span className="font-normal">You can call me Xandre</span>
          </h2>
          <h2 className="text-xl py-1 dark:text-white">
            <span className="font-semibold">Software Engineer</span> and
            Freelancer{" "}
          </h2>
          {/* <h3>Software Engineer x Xcrypt Aces Head Developer</h3> */}
          <h3 className="py-1 text-gray-900 dark:text-gray-100">
            Kaizen/改善 | Stoic
          </h3>
          <div className="flex py-4">
            <a
              href="https://www.upwork.com/freelancers/~017a385ecea9ff4281"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Hire A Freelancer"
                cN="dark:bg-zinc-700 opacity-90 hover:opacity-100"
              />
            </a>
            <Button
              text="Show Projects"
              cN="!bg-gray-200 !text-black hover:!gray-400 ml-2 opacity-90 hover:opacity-100"
              onClick={() => navigate("/projects")}
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex justify-center align-end flex-col h-full  -mt-0 lg:mt-0">
          <img
            src={bg}
            alt="main_img"
            className=" lg:max-w-[400px] max-w-[300px] md:max-w-[300px]  rounded-2xl mx-4 lg:mx-0"
          />
        </div>
      </section>

      <section className=" bg-white dark:bg-zinc-900 relative mt-20 pb-10 h-full lg:px-40 pt-36 lg:pt-2">
        <Title title="Highlight Projects" />
        <h3
          className="flex p-2 rounded  text-sm w-fit m-4 lg:m-0 md:-mt-24 lg:mt-3 bg-gray-200 !text-black hover:!gray-400 cursor-pointer"
          onClick={() => navigate("/about")}
        >
          View All{" "}
          <span className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4  ml-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </span>
        </h3>
        <div className="flex gap-4 lg:pt-16 flex-wrap">
          {projectData.slice(0, 3).map((x, index) => {
            return (
              <div
                className="h-[300px] w-[500px] lg:h-[400px] bg-transparent mx-4  lg:mx-0"
                key={index}
              >
                <Projects
                  banner={x.banner}
                  title={x.title}
                  description={x.description}
                  web_link={x.web_link}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

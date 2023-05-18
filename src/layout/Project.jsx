import React from "react";
import { projectData } from "../components/utils/projectData";
import Projects from "../components/utils/Projects";
import Title from "../components/utils/Title";
import TitleDescription from "../components/utils/TitleDescription";
import { Transition } from "../components/utils/Transition";

const Project = () => {
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50  dark:bg-zinc-900 ">
      <section className="min-h-[calc(100vh-80px)] bg-gray-50  dark:bg-zinc-900 relative mt-10 lg:mt-20  pb-10 lg:px-40 pt-36 lg:pt-2 ">
        <Title title="Projects" cN=" top-2 text-[50px] md:top-12 lg:top-10" />
        <div className="mt-10 lg:mt-24 md:mt-10 flex flex-wrap mx-4 lg:mx-2">
          <TitleDescription
            title=" Project List created (individually) , I have worked on other
            projects that are protected by non-disclosure agreements as well as
            collaborated with other developers."
          />
          <Transition>
            <div className="flex gap-4 lg:pt-16 flex-wrap mt-4">
              {projectData.map((x, index) => {
                return (
                  <div
                    className="h-[300px] w-full md:w-[300px] lg:w-[330px] bg-transparent mx-0 lg:mx-0"
                    key={index}
                  >
                    <Projects
                      banner={x.banner}
                      title={x.title}
                      description={x.description}
                      repo={x?.repo}
                      web_link={x.web_link}
                    />
                  </div>
                );
              })}
            </div>
          </Transition>
        </div>
      </section>
    </div>
  );
};

export default Project;

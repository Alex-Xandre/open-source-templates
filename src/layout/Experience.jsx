import React from "react";
import Title from "../components/utils/Title";

const experience = [
  {
    title: "Programmer and co-founder",
    desc: "Created and maintained the XcryptAces website which helps hundreds of trader to learn and access the learnings efficiently. ",
    year: "2021 - Present",
  },
  {
    title: "Front End Developer",
    desc: "Performed frontend development tasks and communicated closely with senior software engineers, a company based on Germany",
    year: "2022 - Present",
  },
  {
    title: "Graduation",
    desc: "Graduated at STI College Vigan, Computer Science",
    year: "2022",
  },
  {
    title: "Started Freelancing",
    desc: "Started accepting web projects and custom applications as well as colaboration with other developers",
    year: "2021 - Present",
  },
  {
    title: "Web Competition",
    desc: "Provincial Hackaton held at La Union, First Place",
    year: "2020",
  },
];

const Experience = () => {
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50 ">
      <section className="min-h-[calc(100vh-80px)] bg-gray-50 relative mt-10 lg:mt-20  pb-10 lg:px-40 pt-36 lg:pt-2 ">
        <Title title="Timeline" cN=" top-2 text-[50px] md:top-12 lg:top-10" />
        <div className="lg:mt-24 mt-10 flex flex-wrap mx-4 lg:mx-2">
          <h1 className="text-xl -mt-20 lg:-mt-3">
            Hello ! Here are my timeline and experience for the past few years.
          </h1>
        </div>
        <div className="py-3 sm:mx-4  px-2 sm:px-0 -mt-10 md:mt-0 lg:mt-10">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden sm:block w-[1px] bg-indigo-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {experience.map((x, index) => {
              const justifyClass =
                index % 2 === 0
                  ? "justify-start sm:pr-8"
                  : "justify-end sm:pl-8";
              return (
                <div className="mt-6 sm:mt-0 sm:mb-12" key={index}>
                  <div className="flex flex-col sm:flex-row items-center">
                    <div
                      className={`flex ${justifyClass} w-full mx-auto items-center`}
                    >
                      <div className={`w-full sm:w-1/2 ${justifyClass}`}>
                        <div className="p-4 bg-white rounded shadow relative">
                          <h1 className="font-normal text-lg"> {x.title}</h1>
                          <p className="text-sm font-normal border-opacity-90">{x.desc}</p>
                          <p className=" absolute right-0 -bottom-[10px]">{x.year}</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-indigo-500 animate-pulse border-indigo-300 border-4 w-6 h-6 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;

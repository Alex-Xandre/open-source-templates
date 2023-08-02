import React from "react";
import Title from "../components/utils/Title";
import { experienceData } from "../components/utils/experienceData";
import TitleDescription from "../components/utils/TitleDescription";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50  dark:bg-zinc-900">
      <section className="min-h-[calc(100vh-80px)] bg-gray-50  dark:bg-zinc-900 relative mt-10 lg:mt-20  px-4 pb-10 lg:px-40 pt-36 lg:pt-2 ">
        <Title
          title="Timeline"
          cN=" top-2 text-[50px] md:top-12 lg:top-10 -ml-2 lg:ml-0"
        />
        <div className="lg:mt-24 mt-10 flex flex-wrap mx-2 lg:mx-2">
          <TitleDescription title="    Hello ! Here are my timeline and experience for the past few years." />
        </div>
        <motion.div   initial={{ opacity: 0}}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.25 }}
         className="py-3 sm:mx-4  px-1 sm:px-0 -mt-5   md:mt-0 lg:mt-10">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden sm:block w-[1px] bg-indigo-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {experienceData.map((x, index) => {
              const justifyClass =
                index % 2 === 0
                  ? "justify-start sm:pr-8"
                  : "justify-end sm:pl-8";
              const animationClass = index % 2 === 0 ? { x: -100 } : { x: 100 };
              return (
                <div className="mt-6 sm:mt-0 sm:mb-12" key={index}>
                  <div className="flex flex-col sm:flex-row items-center ">
                    <motion.div
                      initial={{ opacity: 0, animationClass }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.25 }}
                      className={`flex ${justifyClass} w-full mx-auto items-center`}
                    >
                      <div className={`w-full sm:w-1/2 ${justifyClass}`}>
                        <div className="p-4 bg-white rounded shadow relative">
                          <h1 className="font-normal text-lg"> {x.title}</h1>
                          <p className="text-sm font-normal border-opacity-90">
                            {x.desc}
                          </p>
                          <p className="text-lg absolute right-0 -bottom-[25px] dark:text-zinc-100">
                            {x.year}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <div className="rounded-full bg-indigo-500 animate-pulse border-indigo-300 border-4 w-6 h-6 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;

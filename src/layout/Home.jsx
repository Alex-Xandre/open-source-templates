import React, { useState } from "react";
import Button from "../components/Button";
import Title from "../components/utils/Title";
import bg from "../assets/bg.png";
import Projects from "../components/utils/Projects";

const Home = () => {
  const data = [
    {
      title: "Xcrypt Aces",
      banner:
        "https://res.cloudinary.com/dfhhkd04c/image/upload/v1679296986/proj_1_qtuxej.png",
      description: "",
    },
    {
      title: "Xcrypt Aces",
      banner:
        "https://res.cloudinary.com/dfhhkd04c/image/upload/v1679296986/proj_1_qtuxej.png",
      description: "",
    },
    {
      title: "Xcrypt Aces",
      banner:
        "https://res.cloudinary.com/dfhhkd04c/image/upload/v1679296986/proj_1_qtuxej.png",
      description: "",
    },
  ];
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50 ">
      <section className=" w-full relative  h-[calc(100vh-80px)] lg:mt-20 lg:px-40 flex">
        <div className="w-full lg:w-6/12 flex justify-center align-center flex-col h-full ">
          <h1 className="text-3xl font-semibold py-1">
            Hi, <span className="font-normal">You can call me Xandre</span>
          </h1>
          <h2 className="text-2xl py-1">
            <span className="font-semibold">Software Engineer</span> and
            Freelancer{" "}
          </h2>
          {/* <h3>Software Engineer x Xcrypt Aces Head Developer</h3> */}
          <h3 className="py-1 text-gray-900">Kaizen/改善 | Stoic</h3>
          <div className="lg:flex py-4">
            <Button text="Hire A Freelancer" />
            <Button
              text="Show Projects"
              cN="!bg-gray-200 !text-black hover:!gray-400 lg:ml-2"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex justify-center align-end flex-col h-full">
          <img src={bg} alt="main_img" className=" max-w-[500px] rounded-2xl" />
        </div>
      </section>

      <section className="min-h-[calc(100vh-80px)] bg-white relative mt-20 lg:px-40">
        <Title title="Highlight Projects" />
        <div className="flex gap-4 lg:pt-16 flex-wrap">
          {data.map((x, index) => {
            return (
              <div className="flex-1 h-[400px] bg-transparent ">
                <Projects banner={x.banner} title={x.title} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

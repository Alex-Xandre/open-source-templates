import React from "react";
import Button from "../components/Button";
import Title from "../components/utils/Title";

const Home = () => {
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50 ">
      <section className=" relative  h-[calc(100vh-80px)] lg:mt-20 lg:px-40">
        <div className="w-full lg:w-6/12 flex justify-center align-center flex-col h-full ">
          <h1 className="text-3xl font-semibold py-1">
            Hi, <span className="font-normal">You can call me Xandre</span>
          </h1>
          <h2 className="text-2xl py-1">
            <span className="font-semibold">Xcrypt Aces</span> Co-founder and
            Freelancer{" "}
          </h2>
          {/* <h3>Software Engineer x Xcrypt Aces Head Developer</h3> */}
          <h3 className="py-1 text-gray-900">Kaizen/改善 | Stoic</h3>
          <div className="lg:flex py-4">
            <Button text="Hire A Freelancer" />
            <Button
              text="Show Projects"
              cN="!bg-gray-200 text-black hover:!gray-400 lg:ml-2"
            />
          </div>
        </div>
        <div></div>
      </section>

      <section className="h-[calc(100vh-80px)] bg-white relative mt-20 lg:px-40">
        <Title title="Highlight Projects" />
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="h-screen w-screen mt-10 lg:mt-20 lg:px-40 z-10 bg-gray-50">
      <section className="">
        <div>
          <h1>
            Hi, I am Alexander Micua. <span>You can call me Xandre</span>
          </h1>
          <h2>Kaizen/改善 | Stoic </h2>
          {/* <h3>Software Engineer x Xcrypt Aces Head Developer</h3> */}
          <div>
            <Button />
            <Button />
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;

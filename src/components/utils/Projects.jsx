import React from "react";
const Projects = (props) => {
  const { banner, title, desctiption } = props;
  console.log(banner);
  return (
    <div
      className="w-full h-full bg-cover bg-center  duration-300 ease-in relative img-box hover:opacity-100 hover:scale-105 rounded"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${banner})`,
      }}
    >
      <h3 className="absolute bottom-0 opacity-0 left-10 duration-300 text-xl text-white ">
        {title}
      </h3>
    </div>
  );
};

export default Projects;

import React from "react";

const Title = ({ title, cN }) => {
  return (
    <h1
      className={`text-[80px] absolute -top-16 lg:-top-20 leading-tight gradient-text px-4 lg:px-0 w-full font-semibold ${cN}`}
    >
      {title}
    </h1>
  );
};

export default Title;

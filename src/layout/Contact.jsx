import React from "react";
import Title from "../components/utils/Title";
import { socials } from "./About";

const Contact = () => {
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50 ">
      <section className="min-h-[calc(100vh-80px)] bg-gray-50 relative mt-10 lg:mt-20  pb-10 lg:px-40 pt-36 lg:pt-2 ">
        <Title title="Contact" cN=" top-2 text-[50px] md:top-12 lg:top-10" />

        <div className="lg:mt-24 mt-10 flex flex-wrap mx-4 lg:mx-2">
        <h1 className="text-xl md:-mt-10 -mt-20 lg:mt-3">Get in touch, let's talk.</h1>
          <h2 className="w-full mt-10 lg:-ml-1">
            I'm looking forward to hearing from you! or send me a{" "}
            <span>
              <a className="underline" href="mailto:xndrmcua22@gmail.com">
                email.
              </a>
            </span>
            <br />
            <br />
            You can also contact me on{" "}
            <span>
              <a
                className="underline"
                href={socials[4].url}
                target="_blank"
                rel="noreferrer"
              >
                Upwork
              </a>
            </span>
            &nbsp; and we can discuss about your project.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Contact;

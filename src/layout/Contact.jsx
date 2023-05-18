import React from "react";
import Title from "../components/utils/Title";
import { socials } from "./About";
import TitleDescription from "../components/utils/TitleDescription";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50  dark:bg-zinc-900">
      <section className="min-h-[calc(100vh-80px)] bg-gray-50  dark:bg-zinc-900 relative mt-10 lg:mt-20  pb-10 lg:px-40 pt-36 lg:pt-2 ">
        <Title title="Contact" cN=" top-2 text-[50px] md:top-12 lg:top-10" />

        <div className="lg:mt-24 mt-10 flex flex-wrap mx-4 lg:mx-2">
          <TitleDescription title="  Get in touch, let's talk." />

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.25 }}
            className="w-full mt-10 lg:-ml-1 dark:text-gray-100"
          >
            I'm looking forward to hearing from you! or send me an{" "}
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
          </motion.h2>
        </div>
      </section>
    </div>
  );
};

export default Contact;

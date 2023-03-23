import Title from "../components/utils/Title";

const images = [
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337904/avatar/react_psgvsg.png",
    alt: "React",
  },
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/icon_nodejs_rkx2u9.png",
    alt: "Node JS",
  },
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/mysql_gxtrbt.png",
    alt: "Mysql",
  },
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/mongodb_e1zd6i.png",
    alt: "Mongodb",
  },
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/icon_sass_q3ldu6.png",
    alt: "Sass",
  },
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337902/avatar/icon_html_ha2giz.png",
    alt: "HTML",
  },
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337902/avatar/icon_css_mukeph.png",
    alt: "CSS",
  },
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1664707867/avatar/typescript_rl1hkt.png",
    alt: "Typescript",
  },
  {
    url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1664708021/avatar/javascript_dy7uan.png",
    alt: "Javascript",
  },
  {
    url: "https://res.cloudinary.com/dfhhkd04c/image/upload/v1670380675/tailwind-css-icon_coarru.png",
    alt: "Tailwind",
  },
  {
    url: "https://res.cloudinary.com/dfhhkd04c/image/upload/v1670381970/c-sharp-programming-language-icon_aecjpe.png",
    alt: "C#",
  },
  {
    url: "https://res.cloudinary.com/dfhhkd04c/image/upload/v1679457254/git_olc5kv.png",
    alt: "Git",
  },
  {
    url: "https://res.cloudinary.com/dfhhkd04c/image/upload/v1679457256/jest_geqy4p.png",
    alt: "Jest",
  },
  //   {
  //     url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337902/avatar/icon_android_i3mqqk.png",
  //     alt: "android",
  //   },
  //   {
  //     url: "https://res.cloudinary.com/dgtgmqx08/image/upload/v1659337903/avatar/java_gt9hju.png",
  //     alt: "java",
  //   },
];

const exp = [
  "Xcrypt Aces - Head Developer and Co-Founder (December 2021 - Present): As a lead developer and co-founder of Xcrypt Aces, I'm responsible for upgrading the website's layout and features.",
  "Halingo Corporation - Associate Developer, Freelance (March 2022): I collaborated with the Halingo team to create a custom desktop application for their clients.",
  "BarkMeow - Web Developer, Freelance (March 2022): I worked with this international client to build a responsive website that showcases their products.",
  "SMK Media Group - Web Developer, Freelance (March - May 2022): I used Webflow to create a custom website for this client that met their specific requirements.",
  "ELearning System BNHS - Thesis and Graduation (July 2022): I developed a custom e-learning system for BNHS as part of my thesis project.",
  //   "MKBGITSolution - Front-End Developer (July 2022 - Present): I'm currently working full-time with this Germany-based international company to build responsive websites for their clients.",
  "BrokeBoysClub - Web Developer, Freelance (August 2022): I worked with this international client to create a custom website that met their needs and showcased their products.",
  "A's Glass and Aluminum Website - Freelance (November 2022): I built a custom e-commerce website with booking functionality for this client.",
  "Charcoal Website - Co-Founder (December 2022): As a co-founder of Charcoal Website, I built a landing page for corporate business together with Xcrypt Aces.",
];

export const socials = [
  {
    title: "Facebook",
    url: "https://web.facebook.com/xander.micua.9",
  },
  { title: "Instagram", url: "https://www.instagram.com/xndrmcua/" },
  {
    title: "Github",
    url: "https://github.com/Alex-Xandre",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/alexander-micua-04657a217/",
  },
  {
    title: "Upwork",
    url: "https://www.upwork.com/freelancers/~017a385ecea9ff4281?fbclid=IwAR3jKZbN-S6zwc5SuuH22lSCo1pifcm_odS8nEGBDXWVjTF5T4jrlBc9dik",
  },
];
const About = () => {
  return (
    <div className="w-screen mt-10  z-10 bg-gray-50 dark:bg-zinc-900">
      <section className="min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-zinc-900 relative mt-10 lg:mt-20  pb-10 lg:px-40 pt-36 lg:pt-2">
        <Title title="About " cN=" top-2 text-[50px] md:top-12 lg:top-10" />

        <div className="lg:mt-24 mt-10 flex flex-wrap mx-4 lg:mx-2">
          <h1 className="text-xl md:-mt-10 -mt-10 lg:mt-10 dark:text-white">
            Hello ! I am full stack developer specializing in developing
            solutions with MERN Stack Applications.
          </h1>
          <div className="lg:w-6/12 lg:pr-4 dark:text-gray-100">
            <h2>
              <br />
              As a freelance web and desktop developer, I'm passionate about
              creating high-quality solutions for my clients. I specialize in
              using React and the MERN stack to build responsive, user-friendly
              websites and desktop applications.
              <br />
              <br />
              What sets me apart from other freelancers is my experience working
              with a variety of industries, including e-commerce, education, and
              corporate business. Whether you need a custom e-commerce website
              with booking functionality or a landing page for your business, I
              have the skills and expertise to bring your vision to life.
            </h2>

            <div className=" w-full flex flex-wrap gap-2 ">
              <h1 className="mt-6 gradient-text text-xl  w-full mb-2">
                Technology Stacks{" "}
              </h1>
              {images.map((i, index) => {
                return (
                  <div
                    className="w-18 h-18 p-4 rounded bg-white  flex items-center justify-center"
                    key={index}
                    title={i.alt}
                  >
                    <img
                      src={i.url}
                      className="w-10 hover:scale-125 duration-300"
                      alt={i.alt}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-6/12  dark:text-gray-100">
            <h1 className="mt-5 gradient-text text-xl pb-2 ">Contact Me</h1>
            <h2>
              If you're looking for a freelance web or desktop developer who can
              help you create high-quality solutions for your business, please
              don't hesitate to reach out. I'm looking forward to hearing from
              you! or send me an{" "}
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
            <div>
              <h1 className="mt-6 gradient-text text-xl  w-full mb-2">
                Socials
              </h1>
              <ul>
                {socials.map((x, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={x.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                        &nbsp; &nbsp;
                        <span className="after:content-[''] after:block after:w-0 after:h-[2px] after:bg-slate-600 after:transition-all after:ease-in-out hover:after:w-8/12">
                          {" "}
                          {x.title}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

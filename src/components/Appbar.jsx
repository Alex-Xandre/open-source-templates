import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";
import moment from "moment";
import { motion } from "framer-motion";

const Appbar = () => {
  const Menu = [
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Experience", url: "/experience" },
    { title: "Contact", url: "/contact" },
  ];

  const [navbar, setNavbar] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  const [theme, setTheme] = React.useState("dark");
  const [currentTime] = React.useState(moment().format("HH"));
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    function checkTime() {
      if (currentTime >= 20 && currentTime < 6) {
        return setTheme("dark");
      } else return setTheme("light");
    }
    checkTime();
  }, [currentTime]);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 66) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  React.useEffect(() => {
    const index = Menu.findIndex((item) => item.url === location.pathname);
    setActiveMenu(index !== -1 ? index : null);
  }, [Menu]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navigatePage = (i) => {
    setActiveMenu(i);
    setMenu(false);
    navigate(Menu[i].url);
  };

  const navigateHome = () => {
    setMenu(false);
    navigate("/");
  };

  return (
    <motion.nav
    initial={{y:-250}}
    animate={{y:0}}
    transition={{delay:0.2}}
      className={` flex flex-wrap w-full z-50 fixed top-0 bg-white justify-between items-center min-h-18 py-2 lg:!px-36 dark:bg-zinc-800 ${
        navbar && "shadow-lg"
      }`}
    >
      <div className="z-20 pl-4 font-semibold flex ">
        <div onClick={handleThemeSwitch} className="cursor-pointer">
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </div>
        <h2
          className="ml-2  dark:text-white cursor-pointer"
          onClick={() => navigateHome()}
        >
          Xandre
        </h2>
      </div>

      <div
        className={`m-0 px-2 md:hidden z-20 w-fit h-fit rounded cursor-pointer`}
        onClick={() => setMenu(!menu)}
      >
        {!menu ? <MenuIcon /> : <CloseIcon />}
      </div>
      <ul
        className={`w-full md:w-9/12 left-0 p-0 absolute top-0  px-4 pt-12 pb-8  z-10 bg-white  dark:bg-zinc-800 rounded  ${
          menu
            ? ""
            : "!-top-80 md:!top-0 lg:!top-0 duration-200 ease-in transition-[top]"
        } md:flex md:w-6/12 md:flex-row md:h-full md:p-0 md:pt-3  md:relative md:justify-center`}
      >
        {Menu.map((mItem, index) => {
          return (
            <React.Fragment key={index}>
              <li
                className="py-2 text-gray-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer mx-4 md:mb-2 "
                onClick={() => navigatePage(index)}
              >
                <a
                  className={`${
                    activeMenu === index
                      ? "border-b-4 border-indigo-500 pb-1 text-indigo-500"
                      : ""
                  } ${
                    activeMenu !== index
                      ? "after:content-[''] after:block after:w-0 after:h-1 after:bg-indigo-500 after:transition-all after:ease-in-out hover:after:w-8/12"
                      : ""
                  } `}
                >
                  {mItem.title}
                </a>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Appbar;

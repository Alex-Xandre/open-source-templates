import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

const Appbar = () => {
  const Menu = [
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Services", url: "/services" },
    { title: "Experience", url: "/experience" },
    { title: "Contact", url: "/contact" },
    { title: "Components", url: "/components" },
  ];

  const [navbar, setNavbar] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  const [theme, setTheme] = React.useState("dark");
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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

  const navigatePage = (i) => {
    setActiveMenu(i);
    setMenu(false);
    navigate(Menu[i].url);
  };

  return (
    <nav
      className={` flex flex-wrap w-full z-40 fixed top-0 bg-white justify-between items-center min-h-18 pt-2 lg:!px-36 ${
        navbar && "shadow-lg" 
      }`}
    >
      <div className="z-20 pl-4 font-semibold flex ">
        <div onClick={handleThemeSwitch} className="cursor-pointer">
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </div>
        <h2 className="ml-2"> Xandre</h2>
      </div>

      <div
        className={`m-0 px-2 md:hidden z-20 w-fit h-fit rounded`}
        onClick={() => setMenu(!menu)}
      >
        {!menu ? <MenuIcon  /> : <CloseIcon />}
      </div>
      <ul
        className={`w-full left-0 p-0 absolute top-0  px-4 pt-12 pb-8  bg-white rounded ${
          menu ? "" : "hidden"
        } md:flex md:w-6/12 md:flex-row md:h-full md:p-0 md:pt-3  md:relative md:justify-center`}
      >
        {Menu.map((mItem, index) => {
          return (
            <React.Fragment key={index}>
              <li
                className="py-2 text-gray-800 hover:text-slate-700 cursor-pointer mx-4 md:mb-2 "
                onClick={() => navigatePage(index)}
              >
                <a
                  className={`${
                    activeMenu === index
                      ? "border-b-4 border-slate-700 pb-1"
                      : ""
                  } ${
                    activeMenu !== index
                      ? "after:content-[''] after:block after:w-0 after:h-1 after:bg-slate-600 after:transition-all after:ease-in-out hover:after:w-8/12"
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
    </nav>
  );
};

export default Appbar;

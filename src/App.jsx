import { Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Experience from "./layout/Experience";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Project from "./layout/Project";

export default function App() {
  return (
    <>
      <div className="overflow-hidden z">
        <Appbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

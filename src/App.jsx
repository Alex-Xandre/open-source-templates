import { Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./layout/Home";

export default function App() {
  return (
    <div className="">
      <Appbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

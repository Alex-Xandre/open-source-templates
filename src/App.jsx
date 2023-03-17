import { Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./layout/Home";

export default function App() {
  return (
    <>
      <Appbar />
      <div className="overflow-hidden">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

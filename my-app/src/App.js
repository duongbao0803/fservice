import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./page/HomePage";
import PackagePage from "./page/PackagePage";
import Footer from "./components/Footer/Footer";
import About from "./components/AboutUs/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<PackagePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

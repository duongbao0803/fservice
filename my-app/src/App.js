import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./page/HomePage";
import PackagePage from "./page/PackagePage";
import Header from "./components/homePage/Header/Header";
import Footer from "./components/homePage/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/service" element={<PackagePage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

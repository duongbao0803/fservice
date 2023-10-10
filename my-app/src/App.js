import { Routes, Route, Link, redirect } from "react-router-dom";

import "./App.css";
import HomePage from "./page/HomePage";
import PackagePage from "./page/PackagePage";
import Footer from "./components/Footer/Footer";
import About from "./components/AboutUs/About";
import OrderPage from "./page/OrderPage";
import Confirm from "./page/confirm";
import PD from "./page/packageDetail";
import Login from "./components/Authen/Login";
import Admin from "./components/AdminPage/Admin";
import InfoUser from "./components/TableUser/ListUser";
import PackageDetail from "./page/packageDetail";
import ConfirmVnpay from "./page/confirmVnpay";


function App() {
  return (
    <>
      <ConfirmVnpay/>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<PackagePage />} />
        <Route path="/about" element={<PD />} />
        <Route path="/contact" element={<InfoUser />} />
        <Route path="/package" element={<PackagePage />} />
      </Routes> */}
    </>
  );
}

export default App;

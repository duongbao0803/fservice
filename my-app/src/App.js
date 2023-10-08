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
import NotFound from "./components/NotFound/NotFound";
import PackageDetail from "./page/packageDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<InfoUser />} />
        <Route path="/package" element={<PackagePage />} />
        <Route path="/packageDetail" element={<PackageDetail />} />
        <Route path="/orderPage" element={<OrderPage />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route, Link, redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import PackagePage from "./page/PackagePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/AboutUs/About";
import OrderPage from "./page/OrderPage";
import Login from "./components/Authen/Login";
import NotFound from "./components/NotFound/NotFound";
import PackageDetail from "./page/PackageDetail";
import ListUser from "./components/TableUser/ListUser";
import ConfirmVnpay from "./page/ConfirmVnpay";
import { createContext, useEffect, useState } from "react";
import { Launch } from "./services/UserService";
import Confirm from "./page/Confirm";
export const Session = createContext(null);
export const getUserInfo = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const res = await Launch();
      if (res && res.status === 200) {
        setUser(res.data);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("phoneNumber", res.data.phoneNumber);
        localStorage.setItem("address", res.data.address);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("Error Getting info", error);
    }
  };

  return (
    <Session.Provider value={{ user, setUser }}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<PackagePage />} />
          <Route path="/detail/:id/:packageName" element={<OrderPage />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/authen" element={<Login />} />
          <Route path="/board" element={<ListUser />} />
          <Route path="/confirmvnpay" element={<ConfirmVnpay />} />
          <Route path="/detail/:id" element={<PackageDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </Session.Provider>
  );
}

export default App;

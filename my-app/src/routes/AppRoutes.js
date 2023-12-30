import React from "react";
import { Navigate, Outlet, Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "../page/HomePage";
import About from "../components/AboutUs/About";
import Loginv2 from "../components/Authen/Login";
import OrderPage from "../page/OrderPage";
import Confirm from "../page/Confirm";
import PackageDetail from "../page/PackageDetail";
import NotFound from "../components/NotFound/NotFound";
import StaffInfo from "../page/StaffInfo";
import StaffPage from "../page/StaffPage";
import StaffWorkDetail from "../page/StaffWorkDetail";
import PaymentSuccess from "../page/PaymentSuccess";
import PaymentError from "../page/PaymentError";
import PaymentResult from "../components/Payment/PaymentResult";
import ManagePackage_Details from "../page/ManagePackage_Details";
import ManagePackage_Use from "../page/ManagePackage_Use";
import ManagePackage from "../page/ManagePackage";
import ManageHouse from "../page/ManageHouse";
import UserPage from "../page/UserPage";
import AddHouse from "../components/ManageHouse/AddHouse";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Admin from "../components/TableUser/Admin";
import ThemeRoutes from "../components/ThemeContext/ThemeRoutes";
import ManageOrder from "../page/ManageOrder";
import UserOrder from "../components/UserPage/UserOrder";
import ServiceList from "../components/HomePage/ServiceList";

const AppRoutes = () => {
  const role = localStorage.getItem("role");
  // const routing = useRoutes(ThemeRoutes);

  return (
    <>
      {role !== "STAFF" && role !== "ADMIN" && <Header />}
      <Routes>
        <Route path="/authen" element={<Loginv2 />} />
        <Route path="/servicelist" element={<ServiceList />} />
        {role !== "STAFF" && role !== "ADMIN" && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<PackageDetail />} />
          </>
        )}
        {role === "USER" && (
          <>
            <Route path="/detail/:id/:packageName" element={<OrderPage />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/payment" element={<PaymentResult />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/payment/error" element={<PaymentError />} />
            <Route path="/user" element={<ManageHouse />} />
            <Route path="/user/info" element={<UserPage />} />
            <Route path="/user/add-apartment" element={<AddHouse />} />
            <Route path="/user/manage-package" element={<ManagePackage />}>
              <Route path="apartment/:id" element={<ManagePackage />} />
            </Route>
            <Route
              path="/user/manage-package/:id"
              element={<ManagePackage_Details />}
            />
            <Route
              path="/user/manage-package/using/:id"
              element={<ManagePackage_Use />}
            />
            <Route path="/user/manage-order/" element={<ManageOrder />}>
              <Route path="success" element={<UserOrder />} />
              <Route path="error" element={<UserOrder />} />
            </Route>
          </>
        )}
        {role === "ADMIN" && (
          <>
            <Route path="/board" element={<Admin />} />
            <Route path="/*" element={<Navigate to="/board" />} />
          </>
        )}
        {role === "STAFF" && (
          <>
            <Route path="/staff/work" element={<StaffPage />} />
            <Route path="/staff/info" element={<StaffInfo />} />
            <Route path="/*" element={<Navigate to="/staff/work" />} />
            <Route path="/staff/work/:id" element={<StaffWorkDetail />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {role !== "STAFF" && role !== "ADMIN" && <Footer />}
    </>
  );
};

export default AppRoutes;

import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import About from "../components/AboutUs/About";
import ListUser from "../components/TableUser/ListUser";
import Loginv2 from "../components/Authen/Login";
import PrivateRoute from "./PrivateRoute";
import PackagePage from "../page/PackagePage";
import OrderPage from "../page/OrderPage";
import Confirm from "../page/Confirm";
import ConfirmVnpay from "../page/ConfirmVnpay";
import PackageDetail from "../page/PackageDetail";
import NotFound from "../components/NotFound/NotFound";
import ManagePackage from "../page/ManagePackage";
import ManagePackage_Details from "../page/ManagePackage_Details";
import ManagePackage_Use from "../page/ManagePackage_Use";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authen" element={<Loginv2 />} />

        <Route
          path="/board"
          element={
            <PrivateRoute allowedRole={["ADMIN"]}>
              <ListUser />
            </PrivateRoute>
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRoute allowedRole={["USER"]}>
              <ManagePackage_Details></ManagePackage_Details>
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id/:packageName" element={<OrderPage />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/confirmvnpay" element={<ConfirmVnpay />} />
        <Route path="/detail/:id" element={<PackageDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

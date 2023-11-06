import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import About from "../components/AboutUs/About";
import ListUser from "../components/TableUser/ListUser";
import Loginv2 from "../components/Authen/Login";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../page/OrderPage";
import Confirm from "../page/Confirm";

import PackageDetail from "../page/PackageDetail";
import NotFound from "../components/NotFound/NotFound";
import Staff from "../page/StaffPage";
import StaffInfo from "../page/StaffInfo";
import ManagePackage from "../page/ManagePackage";

import PaymentSuccess from "../page/PaymentSuccess";
import PaymentError from "../page/PaymentError";
import Payment from "../components/confirm/Payment";
import PaymentResult from "../components/Payment/PaymentResult";

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
              {/* <Outlet> */}
              {/* Route con dành cho vai trò "USER" */}
              <ManagePackage></ManagePackage>
              {/* <ManagePackage /> */}
              {/* <Route index element={<ManagePackage />} />
                <Route path="settings" element={<ManagePackage_Details />} />
                <Route path="settings" element={<ManagePackage_Use />} />
              </Outlet> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/staff"
          element={
            <PrivateRoute allowedRole={["STAFF"]}>
              {/* <Outlet> */}
              {/* Route con dành cho vai trò "USER" */}
              <Staff></Staff>
              {/* <ManagePackage /> */}
              {/* <Route index element={<ManagePackage />} />
                <Route path="settings" element={<ManagePackage_Details />} />
                <Route path="settings" element={<ManagePackage_Use />} />
              </Outlet> */}
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id/:packageName" element={<OrderPage />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/detail/:id" element={<PackageDetail />} />
        <Route path="/payment" element={<PaymentResult />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/error" element={<PaymentError />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

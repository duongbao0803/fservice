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
import StaffPage from "../page/StaffPage";

import PaymentSuccess from "../page/PaymentSuccess";
import PaymentError from "../page/PaymentError";
import Payment from "../components/confirm/Payment";
import PaymentResult from "../components/Payment/PaymentResult";
import ManagePackage_Details from "../page/ManagePackage_Details";
import ManagePackage_Use from "../page/ManagePackage_Use";
import ManagePackage from "../page/ManagePackage";
import ManageHouse from "../page/ManageHouse";
import UserPage from "../page/UserPage";
import Rightbar from "../components/ManagePackage/Rightbar";
import AddHouse from "../components/ManageHouse/AddHouse";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute allowedRole={["USER"]}>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route path="/authen" element={<Loginv2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id/:packageName" element={<OrderPage />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/detail/:id" element={<PackageDetail />} />
        <Route path="/payment" element={<PaymentResult />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/error" element={<PaymentError />} />

        <Route
          path="/user"
          element={
            <PrivateRoute allowedRole={["USER"]}>
              <HomePage />
              <About />
            </PrivateRoute>
          }
        >
          <Route path="add-apartment" element={<AddHouse />} />
          <Route path="manage-package" element={<ManagePackage />}>
            <Route path="apartment/:id" element={<Rightbar />} />
          </Route>
            <Route path="info" element={<UserPage />} />
        </Route>

        <Route
          exact
          path="/board"
          element={
            <PrivateRoute allowedRole={["ADMIN"]}>
              <ListUser />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/staff"
          element={
            <PrivateRoute allowedRole={["STAFF"]}>
              <StaffPage />
            </PrivateRoute>
          }
        >
          {/* <Route path="/staff/info" element={<StaffInfo />} /> */}
        </Route>

        <Route path="/staff/info" element={<StaffInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

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
import Rightbar_Use from "../page/ManagePackage_Use";


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

        {/* <Route
          path="/user"
          element={
            <PrivateRoute allowedRole={["USER"]}>
              <ManageHouse />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/staff"
          element={
            <PrivateRoute allowedRole={["STAFF"]}>
              {/* Route con dành cho vai trò "STAFF" */}
              <Staff></Staff>
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
        <Route path="/payment/error" element={<PaymentError />} />

        <Route path="/user" element={<ManageHouse />}>
          <Route path="/user/add-apartment" element={<AddHouse />} />
        </Route>

        <Route path="/user/manage-package" element={<ManagePackage />}>
          <Route
            path="/user/manage-package/apartment/:id"
            element={<Rightbar />}
          />
        </Route>

        <Route
          path="/user/manage-package/:id"
          element={<ManagePackage_Details />}
          
        />
         <Route
          path="/user/manage-package/using"
          element={<ManagePackage_Use/>}
        />
       
        <Route path="/user/info" element={<UserPage />} />

        

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

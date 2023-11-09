import React from "react";
import Location from "../components/UserPage/Location";

import "../assets/css/stylemanagePackage.css";
import Leftbar from "../components/UserPage/Leftbar";
import Rightbar from "../components/ManagePackage/Rightbar";
function ManagePackage() {
  return (
    <>
      <Location />
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div class="col-md-12 col-sm-12 col-lg-3">
            <Leftbar />
          </div>
          <div class="col-md-12 col-sm-12 col-lg-9">
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagePackage;

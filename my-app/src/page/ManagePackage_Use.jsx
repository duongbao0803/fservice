import React from "react";
import Location from "../components/UserPage/Location";

import "../assets/css/styleMP_Use.css";
import Leftbar from "../components/UserPage/Leftbar";
import Rightbar_Use from "../components/ManagePackage_Use/Rightbar_Use";
function ManagePackage_Use() {
  return (
    <>
      <Location />
      <div className="container">
        <div className="row">
          <div class="col-md-12 col-sm-12 col-lg-3">
            <Leftbar />
          </div>
          <div class="col-md-12 col-sm-12 col-lg-9">
            <Rightbar_Use />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagePackage_Use;

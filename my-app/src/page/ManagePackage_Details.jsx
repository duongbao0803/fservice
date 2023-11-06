import React from "react";
import Location from "../components/ManagePackage/Location";

import "../assets/css/styleMP_Details.css";
import Leftbar from "../components/ManagePackage/Leftbar";
import Rightbar_Details from "../components/ManagePackage_Details/Rightbar_Details";
import { useParams } from "react-router-dom";

function ManagePackage_Details() {
  const {id} = useParams();
  console.log("check id", id);
  return (
    <>
      <Location />
      <div className="container">
        <div className="row">
          <div class="col-md-12 col-sm-12 col-lg-3">
            <Leftbar />
          </div>
          <div class="col-md-12 col-sm-12 col-lg-9">
            <Rightbar_Details />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagePackage_Details;

import React from "react";
import Location from "../components/UserPage/Location";

import "../assets/css/styleMP_Details.css";
import Leftbar from "../components/UserPage/Leftbar";
import Rightbar_Details from "../components/ManagePackage_Details/Rightbar_Details";
import { useLocation, useParams } from "react-router-dom";

function ManagePackage_Details() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const buildingName = searchParams.get("buildingName");
  const roomNo = searchParams.get("roomNo");
  const { id } = useParams();

  console.log("check id", id);
  return (
    <>
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div class="col-md-12 col-sm-12 col-lg-3">
            <Leftbar />
          </div>
          <div class="col-md-12 col-sm-12 col-lg-9">
            <Rightbar_Details
              id={id}
              buildingName={buildingName}
              roomNo={roomNo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagePackage_Details;

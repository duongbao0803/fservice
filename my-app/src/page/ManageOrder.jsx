import React from "react";
import Location from "../components/UserPage/Location";
import Leftbar from "../components/UserPage/Leftbar";
import Rightbar_house from "../components/ManageHouse/Rightbar_house";

function ManageOrder() {
  return (
    <div>
      {" "}
      <>
        <Location />
        <div className="container" style={{ minHeight: "100vh" }}>
          <div className="row">
            <div class="col-md-12 col-sm-12 col-lg-3">
              <Leftbar />
            </div>
            <div class="col-md-12 col-sm-12 col-lg-9">{/* <Rightbar /> */}</div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ManageOrder;

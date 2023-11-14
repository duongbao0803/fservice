import React from "react";
import "../../assets/css/styleUserCommon.css";
import Leftbar from "../UserPage/Leftbar";
import Location from "../UserPage/Location";

function UserLayout({ children }) {
  return (
    <>
      <Location />
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div class="col-md-12 col-sm-12 col-lg-3">
            <Leftbar />
          </div>
          <div class="col-md-12 col-sm-12 col-lg-9">
            <div className="right-bar mb-5 mt-3">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLayout;

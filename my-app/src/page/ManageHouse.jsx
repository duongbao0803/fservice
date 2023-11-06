import React from "react";
import Location_house from "../components/ManageHouse/Location_house";

import '../assets/css/stylemanageHouse.css'
import Leftbar_house from "../components/ManageHouse/Leftbar_house";
import Rightbar_house from "../components/ManageHouse/Rightbar_house"
function ManageHouse() {
    return (
        <>
         <Location_house />
            <div className="container">
                <div className="row">
                <div class="col-md-12 col-sm-12 col-lg-3">
                    <Leftbar_house />
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-9">
                    <Rightbar_house />
                    </div>
                </div>
            </div>
        </>

    )
}

export default ManageHouse;
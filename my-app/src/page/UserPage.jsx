import React from "react";
import "../assets/css/styleUserCommon.css";
import Leftbar from "../components/UserPage/Leftbar";
import UserInfo from "../components/UserPage/UserInfo";
import Location from "../components/UserPage/Location";
import "../assets/css/styleUserInfo.css";

function UserPage() {
    return (
        <>
            <Location />
            <div className="container" style={{ minHeight: "100vh" }}>
                <div className="row">
                    <div class="col-md-12 col-sm-12 col-lg-3">
                        <Leftbar />
                    </div>
                    <div class="col-md-12 col-sm-12 col-lg-9">
                        <UserInfo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserPage;

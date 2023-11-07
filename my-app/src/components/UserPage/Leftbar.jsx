import React from "react";
import { useState, useEffect, useContext } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Session } from "../../App";

function Leftbar() {
  const session = useContext(Session);
  // const user = session.user;
  const logged = localStorage.getItem("isLogged");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("name");
    session.setUser(null);
    toast.success("Đăng xuất thành công");
    navigate("/authen");
  };

  const [apiData, setApiData] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await config.
  //     setApiData(response.data);
  //     alert(`Fetched data with ID: ${response.data.id}`);
  // } catch (error) {
  //     console.error("Error fetching data:", error);
  //     console.error("Error response:", error.response);
  // }
  // }

  return (
    <div className="left-bar">
      <div className="main-info mb-4">
        <img src={require("../../assets/img/siunhando.jpg")} alt="" width="50px" height="50px" style={{ marginRight: "8px", borderRadius: "50%" }} />
        <span>{localStorage.getItem("username")}</span>
      </div>
      <div className="main_info-list">
        <div className="user info-buiding active-menu">
          <Link style={{ color: "#000", textDecoration: "none" }} to={`/user`}>
            <span>
              <i className="fa-solid fa-building" />
              &nbsp;&nbsp;Căn hộ của bạn
            </span>
          </Link>
        </div>
        <div className="user info-package">
          <Link style={{ color: "#000", textDecoration: "none" }} to={`/user/manage-package`}>
            <span>
              <i className="fa-solid fa-box-archive" />
              &nbsp;&nbsp;Gói dịch vụ
            </span>
          </Link>

        </div>
        <div className="user info-order">
          <span>
            <i className="fa-regular fa-file" />
            &nbsp;&nbsp;Quản lí đơn hàng
          </span>
        </div>
        <div className="user info-account">
          <span className="">
            <i className="fa-regular fa-user" />
            &nbsp;&nbsp;Thông tin tài khoản
          </span>
        </div>
        <div className="user logout">
          <span onClick={() => handleLogout()}>
            <i className="fa-solid fa-arrow-right-from-bracket" />
            &nbsp;&nbsp;Thoát
          </span>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;

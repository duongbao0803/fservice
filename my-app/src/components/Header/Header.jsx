import React, { useContext, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../Header/styleHeader.css";

import { Session } from "../../App";

function Header() {
  const session = useContext(Session);
  const role = localStorage.getItem("role");
  console.log("check role", role);
  const user = session.user;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("role");
    localStorage.removeItem("username");

    session.setUser(null);
    navigate("/authen");
    toast.success("Logout Success");
  };

  return (
    <>
      <nav className="navbar b navbar-light navbar-expand-md" id="move">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="div" style={{ textAlign: "left" }}>
          <img
            src={require("../../assets/img/logo_web_2.png")}
            alt=""
            width="90px"
          />
        </div>
        <div className="container-fluid">
          <div className="row" />
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav mr-auto" id="myNavbar">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Liên hệ
              </Link>
            </li>
            {role === "ADMIN" && (
              <li className="nav-item">
                <Link to="/board" className="nav-link">
                  Board
                </Link>
              </li>
            )}
            <li className="nav-item" style={{ paddingRight: 0 }}>
              {user == null || user == "undefined" ? (
                <DropdownButton id="dropdown-basic-button" title="Tài khoản">
                  <Dropdown.Item as={Link} to="/authen">
                    Đăng nhập
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLogout()}>
                    Đăng xuất
                  </Dropdown.Item>
                </DropdownButton>
              ) : (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={
                    <img
                      src={require("../../assets/img/ig_logo.png")}
                      width="30"
                      height="30"
                    />
                  }
                >
                  <Dropdown.Item onClick={handleLogout}>
                    Đăng xuất
                  </Dropdown.Item>
                </DropdownButton>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
}

export default Header;

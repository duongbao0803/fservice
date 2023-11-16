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
import { Avatar } from "@mui/material";
import { handleLogout } from "../../utils/tools";

function Header() {
  const logged = localStorage.getItem("isLogged");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const linkAvt = localStorage.getItem("avatar");

  const handleLogoutClick = () => {
    handleLogout(navigate);
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
            style={{ margin: "0" }}
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
                Về chúng tôi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Liên hệ
              </Link>
            </li>

            <li className="nav-item" style={{ paddingRight: 0 }}>
              {logged !== "true" ? (
                <DropdownButton id="dropdown-basic-button" title="Tài khoản">
                  <Dropdown.Item as={Link} to="/authen">
                    Đăng nhập
                  </Dropdown.Item>
                </DropdownButton>
              ) : (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={
                    linkAvt !== null &&
                    linkAvt?.length > 0 &&
                    linkAvt !== "null" ? (
                      <img
                        src={linkAvt}
                        style={{
                          margin: "0",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <img
                        src={require("../../assets/img/img-user.png")}
                        style={{
                          margin: "0",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    )
                  }
                >
                  {role === "USER" && (
                    <Dropdown.Item>
                      <Link
                        to="/user"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Thông tin người dùng
                      </Link>
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item onClick={handleLogoutClick}>
                    Đăng xuất
                  </Dropdown.Item>
                </DropdownButton>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        style={{
          top: "3em",
          zIndex: 1061,
        }}
      />
    </>
  );
}

export default Header;

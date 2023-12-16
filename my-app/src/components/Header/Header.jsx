/* eslint-disable jsx-a11y/alt-text */
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../utils/tools";
import "../Header/styleHeader.css";

import { Session } from "../../App";
import { Avatar, Badge } from "@mui/material";
import { handleLogout } from "../../utils/tools";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Notification from "../Notification/Notification";

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
        <div className="container">
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

            <li>
              <DropdownButton variant="Secondary" title={<NotificationsIcon/>}>
                <Notification />
              </DropdownButton>
            </li>

            <li
              className="nav-item d-flex align-items-center"
              style={{ paddingRight: 0 }}
            >
              {logged !== "true" ? (
                <div class="dropdown">
                  <button class="dropbtn fill">
                    <Link to="/authen">Đăng nhập</Link>
                  </button>
                </div>
              ) : (
                <>
                  <div class="dropdown">
                    <button class="dropbtn not-fill">
                      <div>
                        {linkAvt !== null &&
                        linkAvt?.length > 0 &&
                        linkAvt !== "null" ? (
                          <img
                            src={linkAvt}
                            style={{
                              margin: "0",
                              width: "37px",
                              height: "37px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <img
                            src={require("../../assets/img/img-user.png")}
                            style={{
                              margin: "0",
                              width: "37px",
                              height: "37px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                        )}
                      </div>
                    </button>
                    <div class="dropdown-content">
                      {role === "USER" && (
                        <Link
                          to="/user"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Thông tin người dùng
                        </Link>
                      )}

                      <div
                        onClick={handleLogoutClick}
                        style={{ cursor: "pointer" }}
                      >
                        <Link>Đăng xuất</Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        style={{
          top: "3em",
          zIndex: 1060,
        }}
      />
    </>
  );
}

export default Header;

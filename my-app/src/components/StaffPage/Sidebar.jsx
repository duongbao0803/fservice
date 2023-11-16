import React from "react";
import { ThemeContext, customTheme } from "../ThemeContext/ThemeContext.jsx";
import { useContext } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import KeyIcon from "@mui/icons-material/Key";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Logo from "../../assets/img/logo_web_2.png";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "@mui/icons-material/Logout";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { Session } from "../../App";
import { handleLogout } from "../../utils/tools.js";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout(navigate);
  };

  const theme = useContext(ThemeContext);
  return (
    <div style={{ margin: "8px" }}>
      <div style={{ marginRight: "0" }}>
        {/* Sidebar */}
        <div>
          {/* Logo */}
          <div className="mb-4">
            <img className="logo-side-bar" src={Logo} alt="Logo" />
          </div>

          <div className="menu-section">
            <div className="Job mb-4">
              <h3 style={{ color: theme.palette.secondary.main }}>CÔNG VIỆC</h3>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <NavLink
                    to={"/staff"}
                    end
                    className={({ isActive }) =>
                      isActive ? "active-staff" : ""
                    }
                    underline="none"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <FormatListBulletedIcon className="mr-2" /> Quản lí công
                    việc
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="Information">
              <h3 style={{ color: theme.palette.secondary.main }}>THÔNG TIN</h3>
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                <li>
                  <NavLink
                    to={"/staff/info"}
                    className={({ isActive }) =>
                      isActive ? "active-staff" : ""
                    }
                    underline="none"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <ManageAccountsIcon
                      style={{ color: theme.palette.secondary.main }}
                    />
                    Tài khoản của tôi
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to={"/staff/change-password"}
                    underline="none"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <KeyIcon style={{ color: theme.palette.secondary.main }} />
                    Thay đổi mật khẩu
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to={"/authen"}
                    onClick={handleLogoutClick}
                    underline="none"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <LogoutIcon
                      style={{ color: theme.palette.secondary.main }}
                    />
                    Đăng xuất
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

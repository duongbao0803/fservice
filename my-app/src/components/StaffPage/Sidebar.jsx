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

function Sidebar() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{margin: "8px"}}>
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
                  <Link
                    className="active"
                    href="#"
                    underline="none"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <FormatListBulletedIcon className="mr-2" /> Quản lí công
                    việc
                  </Link>
                </li>
              </ul>
            </div>

            <div className="Information">
              <h3 style={{ color: theme.palette.secondary.main }}>THÔNG TIN</h3>
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                <li>
                  <Link
                    href="#"
                    underline="none"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <ManageAccountsIcon
                      style={{ color: theme.palette.secondary.main }}
                    />{" "}
                    Tài khoản của tôi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    underline="none"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <KeyIcon style={{ color: theme.palette.secondary.main }} />
                    Thay đổi mật khẩu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    underline="none"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    <LogoutIcon
                      style={{ color: theme.palette.secondary.main }}
                    />
                    Đăng xuất
                  </Link>
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

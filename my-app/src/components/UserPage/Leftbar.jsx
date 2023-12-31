import React from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Session } from "../../App";
import { handleLogout } from "../../utils/tools";

function Leftbar() {
  // const session = useContext(Session);
  const navigate = useNavigate();
  const linkAvt = localStorage.getItem("avatar");

  const handleClick = () => {
    handleLogout(navigate);
  };

  return (
    <div className="left-bar">
      <div className="main-info mb-4">
        {linkAvt !== null && linkAvt?.length > 0 && linkAvt !== "null" ? (
          <img
            src={linkAvt}
            alt="Link avatar"
            width="50px"
            height="50px"
            style={{
              marginRight: "8px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <img
            src={require("../../assets/img/img-user.png")}
            alt="Link avatar"
            width="50px"
            height="50px"
            style={{
              marginRight: "8px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}

        <span>{localStorage.getItem("name")}</span>
      </div>
      <div className="main_info-list">
        <div className="user">
          <NavLink
            to={"/user"}
            end
            className={({ isActive }) =>
              isActive ? "info active-menu" : "info"
            }
          >
            <span>
              <i className="fa-solid fa-building" />
              &nbsp;&nbsp;Căn hộ của bạn
            </span>
          </NavLink>

          <NavLink
            to={"/user/manage-package"}
            className={({ isActive }) =>
              isActive ? "info active-menu" : "info"
            }
          >
            <span>
              <i className="fa-solid fa-box-archive" />
              &nbsp;&nbsp;Gói dịch vụ
            </span>
          </NavLink>

          <NavLink
            to={"/user/manage-order"}
            className={({ isActive }) =>
              isActive ? "info active-menu" : "info"
            }
          >
            <span>
              <i className="fa-regular fa-file" />
              &nbsp;&nbsp;Quản lí đơn hàng
            </span>
          </NavLink>

          <NavLink
            to={"/user/info"}
            className={({ isActive }) =>
              isActive ? "info active-menu" : "info"
            }
          >
            <span className="">
              <i className="fa-regular fa-user" />
              &nbsp;&nbsp;Thông tin tài khoản
            </span>
          </NavLink>

          <NavLink
            to={"/authen"}
            className={({ isActive }) =>
              isActive ? "info active-menu" : "info"
            }
            onClick={() => handleClick()}
          >
            <span>
              <i className="fa-solid fa-arrow-right-from-bracket" />
              &nbsp;&nbsp;Thoát
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;

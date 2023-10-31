import React from "react";

function Leftbar() {
    return (
      <div className="left-bar">
        <div className="main-info mb-4">
          <img src="./img/fb_logo.png" alt="" width="50px" />
          <span> duongbao2k3</span>
        </div>
        <div className="main_info-list">
          <div className="user info-buiding">
            <span>
              <i className="fa-solid fa-building" />
              &nbsp;&nbsp;Căn hộ của bạn
            </span>
          </div>
          <div className="user info-package">
            <span>
              <i className="fa-solid fa-box-archive" />
              &nbsp;&nbsp;Gói dịch vụ
            </span>
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
            <span>
              <i className="fa-solid fa-arrow-right-from-bracket" />
              &nbsp;&nbsp;Thoát
            </span>
          </div>
        </div>
      </div>

    )
}

export default Leftbar;
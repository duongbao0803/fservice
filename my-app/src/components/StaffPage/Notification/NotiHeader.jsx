import React from "react";
import { markAllNotificationRead } from "../../../services/UserService";

function Header() {
  return (
    <div
      className="d-flex justify-content-between px-3 pt-3"
      style={{ position: "sticky", top: 0 }}
    >
      <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0" }}>
        Thông báo
      </p>
      <p className="check-read" style={{ fontSize: "15px", margin: "0" }} onClick={() => markAllNotificationRead()}>
        Đánh dấu đã đọc
      </p>
    </div>
  );
}

export default Header;

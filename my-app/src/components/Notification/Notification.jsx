import React from "react";
import NotiBody from "./NotiBody";
import "./Notification.css";
import { useState } from "react";

function Notification({ handleCount }) {
  const [noticeCount, setNoticeCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "400px",
        boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <NotiBody />
    </div>
  );
}

export default Notification;

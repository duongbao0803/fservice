import React from "react";
import NotiHeader from "./NotiHeader";
import NotiBody from "./NotiBody";
import "./Notification.css";

function Notification() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "400px",
        height: "500px",
        boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <NotiHeader />
      <NotiBody />
    </div>
  );
}

export default Notification;

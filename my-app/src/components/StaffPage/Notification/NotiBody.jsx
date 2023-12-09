import React from "react";

function NotiBody() {
  return (
    <div className="pb-3">
      <div className="mb-2 noti-detail noti-detail__read" style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <img
            src="https://media.discordapp.net/attachments/1084829266581147658/1172830452499894272/logo_web.png"
            alt=""
            width={"60%"}
          />
        </div>
        <div style={{ flex: "5" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              margin: 0,
              color: "#ff8228",
            }}
          >
            Dịch vụ Tổng vệ sinh nhà cửa
          </p>
          <p style={{ fontSize: "13px", margin: 0 }}>
            <span style={{ fontWeight: "bold" }}>Công việc mới </span>
            Công việc của bạn đã được lên lịch làm việc, hãy kiểm tra bảng công
            việc.
          </p>
          <div
            className="mt-1"
            style={{ display: "flex", justifyContent: "space-between", fontSize:'13px' }}
          >
            <span style={{ fontWeight: "bold" }}>5 phút trước</span>
            <span>16:28 09.12.23</span>
          </div>
        </div>
      </div>

      <div className="mb-2 noti-detail" style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "1" }}>
          <img
            src="https://media.discordapp.net/attachments/1084829266581147658/1172830452499894272/logo_web.png"
            alt=""
            width={"60%"}
          />
        </div>
        <div style={{ flex: "5" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              margin: 0,
              color: "#ff8228",
            }}
          >
            Dịch vụ Tổng vệ sinh nhà cửa
          </p>
          <p style={{ fontSize: "13px", margin: 0 }}>
            <span style={{ fontWeight: "bold" }}>Công việc mới </span>
            Công việc của bạn đã được lên lịch làm việc, hãy kiểm tra bảng công
            việc.
          </p>
          <div
            className="mt-1"
            style={{ display: "flex", justifyContent: "space-between", fontSize:'13px' }}
          >
            <span style={{ fontWeight: "bold" }}>5 phút trước</span>
            <span>16:28 09.12.23</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotiBody;

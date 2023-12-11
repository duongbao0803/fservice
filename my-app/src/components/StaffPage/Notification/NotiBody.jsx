import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getAllNotification, markNotificationRead } from "../../../services/UserService";
import { caculateTimeAgo, formatDateTime } from "../../../utils/tools";

function NotiBody() {
  const [totalPage, setTotalPage] = useState(0);
  const [notiInfo, setNotiInfo] = useState([]);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    getNotification(1);
  }, []);

  const getNotification = async (pageNumber) => {
    try {
      const res = await getAllNotification(pageNumber);
      if (res && res.status === 200) {
        const xPaginationHeader = res.headers?.["x-pagination"];
        if (xPaginationHeader) {
          const paginationData = JSON.parse(xPaginationHeader);
          const sumPage = paginationData.TotalPages;
          setTotalPage(sumPage);
        }
        setNotiInfo(res.data);
        console.log("check noti", res.data);
      }
    } catch (error) {
      console.log("Error Getting Notification", error);
    }
  };

  const handlePageClick = (newPage) => {
    getNotification(newPage);
  };

  const handleNotiClick = (id) => {
    markNotificationRead(id);
    getNotification(1);
  };

  return (
    <>
      <div className="pb-3" style={{ height: "400px", overflow: "scroll" }}>
        {notiInfo?.map((noti, index) => (
          <div
            className={
              !noti.isRead
                ? "mb-2 noti-detail noti-detail__read"
                : "mb-2 noti-detail"
            }
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => handleNotiClick(noti.id)}
          >
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
                {noti.title}
              </p>
              <p style={{ fontSize: "13px", margin: 0 }}>
                <span style={{ fontWeight: "bold" }}>{noti.action} </span>
                {noti.message}
              </p>
              <div
                className="mt-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>{caculateTimeAgo(noti.createDate)}</span>
                <span>{formatDateTime(noti.createDate)}</span>
              </div>
            </div>
          </div>
        ))}

        {/* <div
          className="mb-2 noti-detail"
          style={{ display: "flex", alignItems: "center" }}
        >
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
              Công việc của bạn đã được lên lịch làm việc, hãy kiểm tra bảng
              công việc.
            </p>
            <div
              className="mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>5 phút trước</span>
              <span>16:28 09.12.23</span>
            </div>
          </div>
        </div>

        <div
          className="mb-2 noti-detail"
          style={{ display: "flex", alignItems: "center" }}
        >
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
              Công việc của bạn đã được lên lịch làm việc, hãy kiểm tra bảng
              công việc.
            </p>
            <div
              className="mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>5 phút trước</span>
              <span>16:28 09.12.23</span>
            </div>
          </div>
        </div> */}
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ position: "sticky", bottom: 0 }}
      >
        <Stack spacing={2}>
          <Pagination
            onChange={(event, value) => handlePageClick(value)}
            count={totalPage}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </>
  );
}

export default NotiBody;

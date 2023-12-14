import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  getAllNotification,
  markAllNotificationRead,
  markNotificationRead,
} from "../../../services/UserService";
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
      }
    } catch (error) {
      console.log("Error Getting Notification", error);
    }
  };

  const handlePageClick = (newPage) => {
    getNotification(newPage);
  };

  const handleNotiClick = async (id) => {
    await markNotificationRead(id);
    await getNotification(1);
  };

  const handleReadAllClick = async () => {
    await markAllNotificationRead();
    await getNotification(1);
  }

  return (
    <>
      <div
        className="d-flex justify-content-between px-3 pt-3"
        style={{ position: "sticky", top: 0 }}
      >
        <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0" }}>
          Thông báo
        </p>
        <p
          className="check-read"
          style={{ fontSize: "15px", margin: "0" }}
          onClick={() => handleReadAllClick()}
        >
          Đánh dấu đã đọc
        </p>
      </div>
      {notiInfo.length > 0 ? (
        <div>
          <div className="" style={{ height: "360px", overflow: "scroll" }}>
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
                    <span style={{ fontWeight: "bold" }}>
                      {caculateTimeAgo(noti.createDate)}
                    </span>
                    <span>{formatDateTime(noti.createDate)}</span>
                  </div>
                </div>
              </div>
            ))}
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
        </div>
      ) : (
        <div
          style={{
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h6>Không có thông báo</h6>
        </div>
      )}
    </>
  );
}

export default NotiBody;

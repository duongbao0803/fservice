import React, { useEffect, useState } from "react";
import {
  getAllNotification,
  getNumbersUnReadNotification,
  markAllNotificationRead,
  markNotificationRead,
} from "../../services/UserService";
import { caculateTimeAgo, formatDateTime } from "../../utils/tools";
import InfiniteList from "./InfiniteList";
import { Spinner } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function NotiBody({ handleCountChange }) {
  const [totalNoti, setTotalNoti] = useState(0);
  const [notiInfo, setNotiInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [newNoticeCount, setNewNoticeCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await getNotification(page);
      setIsLoading(false);
    })();
  }, [page]);

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("/staff")) {
      setCurrentPage("staff");
    } else {
      setCurrentPage("user");
    }
  }, []);

  // useEffect(() => {
  //   countNewNotices();
  // }, [notiInfo]);

  const getNotification = async (pageNumber) => {
    try {
      const res = await getAllNotification(pageNumber);
      if (res && res.status === 200) {
        const xPaginationHeader = res.headers?.["x-pagination"];
        if (xPaginationHeader) {
          const paginationData = JSON.parse(xPaginationHeader);
          const totalNoti = paginationData.TotalCount;
          setTotalNoti(totalNoti);
        }
        setNotiInfo([...notiInfo, ...res.data]);
      }
    } catch (error) {
      console.log("Error Getting Notification", error);
    }
  };

  // const countNewNotices = async () => {
  //   // const newNotices = notiInfo.filter((noti) => !noti.isRead).length;
  //   // setNewNoticeCount(newNotices);
  //   // handleCountChange(newNotices);
  // };

  const handleNotiClick = async (id, modelId, type, isRead) => {
    if (!isRead) {
      await markNotificationRead(id);
    }
    await getNotification(page);
    if (type.includes("Order")) {
      navigate("/user/manage-order/");
      // window.location.href = "/user/manage-order/";
    } else if (type.includes("Service")) {
      if (currentPage === "user") {
        navigate(`/user/manage-package/${modelId}`);
        // window.location.href = `/user/manage-package/${modelId}`;
      } else if (currentPage === "staff") {
        navigate(`/staff/work/${modelId}`);
        // window.location.href = `/staff/work/${modelId}`;
      }
    } else {
      window.location.href = "#";
    }
  };

  const handleReadAllClick = async () => {
    await markAllNotificationRead();
    await getNotification(page);
  };

  return (
    <>
      <div
        className="d-flex justify-content-between px-3 pt-3"
        style={{ top: 0 }}
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
      {isLoading ? (
        <div style={{ height: "360px", overflow: "scroll" }}>
          <div className="loading-noti">
            <Spinner animation="border" variant="primary" />
          </div>
        </div>
      ) : notiInfo.length > 0 ? (
        <div>
          <div className="" style={{ height: "360px", overflow: "scroll" }}>
            <InfiniteList
              loader={
                <div style={{ minHeight: "100vh" }}>
                  <div className="loading-noti">
                    <Spinner animation="border" variant="primary" />
                  </div>
                </div>
              }
              fetchMore={() => setPage((prev) => prev + 1)}
              hasMore={notiInfo?.length < totalNoti}
              endMessage={<span>Bạn đã đọc hết thông báo</span>}
            >
              {notiInfo?.map((noti, index) => (
                <div
                  className={
                    !noti.isRead
                      ? "mb-2 noti-detail noti-detail__read"
                      : "mb-2 noti-detail"
                  }
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() =>
                    handleNotiClick(
                      noti.id,
                      noti.modelId,
                      noti.type,
                      noti.isRead
                    )
                  }
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
            </InfiniteList>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "360px",
          }}
        >
          <h6>Không có thông báo</h6>
        </div>
      )}
    </>
  );
}

export default NotiBody;

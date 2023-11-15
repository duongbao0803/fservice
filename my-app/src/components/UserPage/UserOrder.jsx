import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getOrderHistory } from "../../services/UserService";
import { Pagination } from "@mui/material";
import { PriceFormat, formatDate, formatTime } from "../../utils/tools";

function UserOrder() {
  const [totalPage, setTotalPage] = useState(0);
  const [orderInfo, setOrderInfo] = useState([]);
  const [status, setStatus] = useState(null);
  const [activeLink, setActiveLink] = useState("all");

  useEffect(() => {
    viewOrderHistory(1);
  }, []);

  const viewOrderHistory = async (pageNumber) => {
    try {
      const res = await getOrderHistory(
        localStorage.getItem("username"),
        pageNumber
      );
      if (res && res.status === 200) {
        const xPaginationHeader = res.headers?.["x-pagination"];
        if (xPaginationHeader) {
          const paginationData = JSON.parse(xPaginationHeader);
          const sumPage = paginationData.TotalPages;
          setTotalPage(sumPage);
        }
        setOrderInfo(res.data);
      }
    } catch (error) {
      console.log("Error Getting Order History", error);
    }
  };

  const handlePageClick = (newPage) => {
    viewOrderHistory(newPage);
  };

  const handleStatusChange = (status, activeLink) => {
    setStatus(status);
    setActiveLink(activeLink);

    if (status === null) {
      setActiveLink("all");
    } else if (status === true) {
      setActiveLink("success");
    } else {
      setActiveLink("error");
    }
  };

  return (
    <>
      <h5 className="mb-4">Lịch sử đơn hàng</h5>
      <div>
        <nav class="nav nav-order" style={{ backgroundColor: "#fff" }}>
          <NavLink
            to={`/user/manage-order/`}
            className={`nav-link ${activeLink === "all" ? "active-link" : ""}`}
            onClick={() => handleStatusChange(null, "all")}
          >
            Tất cả
          </NavLink>
          <NavLink
            to={`/user/manage-order/success`}
            className={`nav-link ${
              activeLink === "success" ? "active-link" : ""
            }`}
            onClick={() => handleStatusChange(true, "success")}
          >
            Thành công
          </NavLink>
          <NavLink
            to={`/user/manage-order/error`}
            className={`nav-link ${
              activeLink === "error" ? "active-link" : ""
            }`}
            onClick={() => handleStatusChange(false, "error")}
          >
            Thất bại
          </NavLink>
        </nav>
        {orderInfo
          ?.filter((order) => {
            if (status === true) {
              return order.transactionNo !== null;
            } else if (status === false) {
              return order.transactionNo === null;
            } else {
              return true;
            }
          })
          ?.map((orderInfo) => (
            <div
              className="mt-4"
              style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            >
              <div
                className="header-order"
                style={{
                  padding: "8px 0",
                  margin: "0 15px",
                  borderBottom: "2px solid #ccc",
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <span style={{ fontWeight: "bold" }}>#{orderInfo.id}</span>
                  </div>
                  <div className="col-md-6 text-right">
                    {orderInfo.transactionNo !== null ? (
                      <span className="status status__success">THÀNH CÔNG</span>
                    ) : (
                      <span className="status status__error">THẤT BẠI</span>
                    )}
                    <span style={{ color: "#ccc" }}>|</span>
                    <span className="order-date">
                      {formatDate(orderInfo?.orderDate)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-body" style={{ margin: "15px" }}>
                <div className="row">
                  <div className="col-md-8 d-flex">
                    <img
                      src={require("../../assets/img/giặt giũ.jpg")}
                      width={"60px"}
                      height={"60px"}
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                    <div className="ml-3">
                      <p className="package-name">
                        Gói dịch vụ trọn gói - premium
                      </p>
                      <div className="ml-3">
                        <p>
                          <i
                            className="fa-solid fa-check"
                            style={{ color: "#03AC00" }}
                          />{" "}
                          Thanh toán: {orderInfo?.paymentMethod}
                        </p>
                        <p>
                          <i
                            className="fa-solid fa-check"
                            style={{ color: "#03AC00" }}
                          />{" "}
                          Ngày thanh toán:{" "}
                          <span>
                            {formatDate(orderInfo?.orderDate)} -{" "}
                            {formatTime(orderInfo?.orderDate)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-right">
                    <p className="package-price">
                      <PriceFormat price={orderInfo?.totalPrice} />
                    </p>
                  </div>
                </div>
                <div
                  className="mt-3 text-right"
                  style={{ borderTop: "2px solid #ccc" }}
                >
                  <p className="total-price">
                    Thành tiền:{" "}
                    <span>
                      {" "}
                      <PriceFormat price={orderInfo?.totalPrice} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}

        <div style={{ display: "flex", justifyContent: "end" }}>
          <Pagination
            count={totalPage}
            onChange={(event, value) => handlePageClick(value)}
            defaultPage={1}
            siblingCount={0}
          />
        </div>
      </div>
    </>
  );
}

export default UserOrder;

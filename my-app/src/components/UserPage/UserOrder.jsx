import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getApartmentId, getOrderHistory, getOrderHistoryError, getOrderHistorySuccess } from "../../services/UserService";
import { Pagination } from "@mui/material";
import { PriceFormat, formatDate, formatTime } from "../../utils/tools";

function UserOrder() {
  const [totalPage, setTotalPage] = useState(0);
  const [orderInfo, setOrderInfo] = useState([]);
  const [status, setStatus] = useState(null);
  const [activeLink, setActiveLink] = useState("all");
  const [apartmentInfo, setApartmentInfo] = useState([]);
  const [apartmentIds, setApartmentIds] = useState([]);

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
        const apartmentIds = res.data.map((apartment) => apartment.apartmentId);
        getCustomerApartment(apartmentIds);
      } else {
        setApartmentIds([]);
      }
    } catch (error) {
      console.log("Error Getting Order History", error);
    }
  };

  const viewOrderHistorySuccess = async (pageNumber) => {
    try {
      const res = await getOrderHistorySuccess(
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
        const apartmentIds = res.data.map((apartment) => apartment.apartmentId);
        getCustomerApartment(apartmentIds);
      } else {
        setApartmentIds([]);
      }
    } catch (error) {
      console.log("Error Getting Order History", error);
    }
  };

  const viewOrderHistoryError = async (pageNumber) => {
    try {
      const res = await getOrderHistoryError(
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
        const apartmentIds = res.data.map((apartment) => apartment.apartmentId);
        getCustomerApartment(apartmentIds);
      } else {
        setApartmentIds([]);
      }
    } catch (error) {
      console.log("Error Getting Order History", error);
    }
  };


  const getCustomerApartment = async (apartmentIds) => {
    try {
      const fetchApartmentInfo = [];
      for (const apartmentId of apartmentIds) {
        try {
          const res = await getApartmentId(apartmentId);
          if (res && res.status === 200) {
            fetchApartmentInfo.push(res.data);
          } else {
            fetchApartmentInfo([]);
          }
        } catch (error) {
          console.log("Error Getting apartment", error);
        }
      }
      setApartmentInfo(fetchApartmentInfo);
    } catch (error) {
      console.log("Error Getting Order History", error);
    }
  };

  const handlePageClick = (newPage) => {
    if (activeLink === "all") {
      viewOrderHistory(newPage);
    } else if (activeLink === "success") {
      viewOrderHistorySuccess(newPage);
    } else if (activeLink === "error") {
      viewOrderHistoryError(newPage)
    } else {
      console.log("Error");
    }
  }

  const handleStatusChange = (status, activeLink) => {
    setStatus(status);
    setActiveLink(activeLink);


    if (status === null) {
      setActiveLink("all");
      viewOrderHistory(1)
    } else if (status === true) {
      setActiveLink("success");
      viewOrderHistorySuccess(1)
    } else if (status === false){
      viewOrderHistoryError(1)
      setActiveLink("error");
    } else {
      console.log("Error");
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
            className={`nav-link ${activeLink === "success" ? "active-link" : ""
              }`}
            onClick={() => handleStatusChange(true, "success")}
          >
            Thành công
          </NavLink>
          <NavLink
            to={`/user/manage-order/error`}
            className={`nav-link ${activeLink === "error" ? "active-link" : ""
              }`}
            onClick={() => handleStatusChange(false, "error")}
          >
            Thất bại
          </NavLink>
        </nav>
        {orderInfo
          ?.filter((order) => {
            if (status === true) {
              return order.paymentDate !== null;
            } else if (status === false) {
              return order.paymentDate === null;
            } else {
              return true;
            }
          })
          ?.map((orderInfo, index) => (
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
                    {orderInfo.paymentDate !== null ? (
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
                        {orderInfo.package.name} (
                        {apartmentInfo[index]?.type.type})
                      </p>
                      <div className="ml-3">
                        {apartmentInfo[index] && (
                          <p>
                            <i
                              className="fa-solid fa-check"
                              style={{ color: "#03AC00" }}
                            />{" "}
                            Căn hộ: Tòa{" "}
                            {apartmentInfo[index]?.type.building.name} - Phòng{" "}
                            {apartmentInfo[index]?.roomNo}
                          </p>
                        )}

                        <p>
                          <i
                            className="fa-solid fa-check"
                            style={{ color: "#03AC00" }}
                          />{" "}
                          Thanh toán: {orderInfo?.paymentMethod}
                        </p>
                        {orderInfo.transactionNo !== null ? (
                          <p>
                            <i
                              className="fa-solid fa-check"
                              style={{ color: "#03AC00" }}
                            />{" "}
                            Ngày thanh toán:{" "}
                            <span>
                              {formatDate(orderInfo?.paymentDate)} -{" "}
                              {formatTime(orderInfo?.paymentDate)}
                            </span>
                          </p>
                        ) : (
                          <p>
                            <i
                              className="fa-solid fa-times"
                              style={{ color: "#952323" }}
                            />{" "}
                            Ngày thanh toán: <span>Chưa thanh toán</span>
                          </p>
                        )}
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

import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function UserOrder() {

  return (
    <>
      <h5 className="mb-4">Lịch sử đơn hàng</h5>
      <div>
        <nav class="nav" style={{ backgroundColor: '#fff'}}>
          <NavLink class="nav-link">Tất cả</NavLink>
          <NavLink class="nav-link">Thành công</NavLink>
          <NavLink class="nav-link">Thất bại</NavLink>
        </nav>

        <div className="mt-4" style={{ backgroundColor: '#fff' }}>
          <div className="header-order" style={{ padding: '8px', borderBottom: '2px solid #ccc' }}>
            <div className="row">
              <div className="col-md-6">
                <span>#200803</span>
              </div>
              <div className="col-md-6 d-flex">
                <div style={{ marginRight: '20px' }}>
                  <span>Thanh toán:</span>
                  <span>THÀNH CÔNG</span>
                </div>
                <div style={{ borderLeft: '2px solid #ccc' }}>
                  <span style={{ marginLeft: '20px' }}>14.11.2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-body" style={{ margin: '15px' }}>
            <div className="row">
              <div className="col-md-6 d-flex">
                <img src={require("../../assets/img/giặt giũ.jpg")} width={'60px'} height={'60px'} alt="" style={{ objectFit: 'cover' }} />
                <div className="ml-3">
                  <p>Gói dịch vụ trọn gói - premium</p>
                  <div className="ml-3">
                    <p><i className="fa-solid fa-check" style={{ color: "#03AC00" }} /> Thanh toán: VNPAY</p>
                    <p><i className="fa-solid fa-check" style={{ color: "#03AC00" }} /> Ngày thanh toán: <span>14.11.2023</span></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <p>620.000 đ</p>
              </div>
            </div>
            <div className="mt-3 text-right" style={{ borderTop: '2px solid #ccc' }}>
              <p>Thành tiền: <span>620.000 đ</span></p>
            </div>
          </div>

        </div>
      </div>
    </>

  );
}

export default UserOrder;

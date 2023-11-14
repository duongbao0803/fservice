import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function UserOrder() {

  return (
    <>
      <h5 className="mb-4">Lịch sử đơn hàng</h5>
      <div>
        <nav class="nav nav-order" style={{ backgroundColor: '#fff' }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Tất cả
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link"
            }
          >
            Thành công
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link" : "nav-link"
            }
          >
            Thất bại
          </NavLink>
        </nav>

        <div className="mt-4" style={{ backgroundColor: '#fff', borderRadius:'8px' }}>
          <div className="header-order" style={{ padding: '8px 0', margin:'0 15px', borderBottom: '2px solid #ccc' }}>
            <div className="row">
              <div className="col-md-6">
                <span style={{fontWeight:'bold'}}>#200803</span>
              </div>
              <div className="col-md-6 text-right">
                <span className="status status__success">THÀNH CÔNG</span>
                <span style={{color:'#ccc'}}>|</span>
                <span className="order-date">14.11.2023</span>
              </div>
            </div>
          </div>
          <div className="order-body" style={{ margin: '15px' }}>
            <div className="row">
              <div className="col-md-6 d-flex">
                <img src={require("../../assets/img/giặt giũ.jpg")} width={'60px'} height={'60px'} alt="" style={{ objectFit: 'cover' }} />
                <div className="ml-3">
                  <p className="package-name">Gói dịch vụ trọn gói - premium</p>
                  <div className="ml-3">
                    <p><i className="fa-solid fa-check" style={{ color: "#03AC00" }} /> Thanh toán: VNPAY</p>
                    <p><i className="fa-solid fa-check" style={{ color: "#03AC00" }} /> Ngày thanh toán: <span>14.11.2023</span></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <p className="package-price">620.000 đ</p>
              </div>
            </div>
            <div className="mt-3 text-right" style={{ borderTop: '2px solid #ccc' }}>
              <p className="total-price">Thành tiền: <span>620.000 đ</span></p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default UserOrder;

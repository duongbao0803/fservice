import React from "react";
import "../Footer/styleFooter.css";

function Footer() {
  return (
    <div>
      <>
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-6 col-md-5 col-lg-5">
                <img
                  src={require("../../assets/img/logo_web_2.png")}
                  alt="logo"
                  width="150px"
                />
                <p className="font-weight-bolder" style={{ color: "#fe8b25" }}>
                  “Nâng tầm dịch vụ, nâng tầm cuộc sống”
                </p>
                <ul className="list-unstyled">
                  <li className="text-wrap">
                    <i className="fa-solid fa-location-dot" />
                    &nbsp; S101, Vinhomes Grand Park, Nguyễn Xiển, P. Long Thạnh
                    Mỹ, TP. Thủ Đức, TP.HCM
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-phone"
                      style={{ lineHeight: "50px" }}
                    />
                    &nbsp;+84 988 889 898
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-paper-plane"
                      style={{ lineHeight: "50px" }}
                    />
                    &nbsp; support.fservice@gmail.com
                  </li>
                  <li>
                    <img src={require("../../assets/img/fb_logo.png")} alt="" />
                    &nbsp; &nbsp;
                    <img src={require("../../assets/img/tw_logo.png")} alt="" />
                    &nbsp; &nbsp;
                    <img src={require("../../assets/img/ig_logo.png")} alt="" />
                  </li>
                </ul>
              </div>
              <div className="footer_component col-12 col-sm-5 col-md-7 col-lg-4">
                <h4>Hỗ trợ khách hàng</h4>
                <ul>
                  <li>Chương trình KHTT</li>
                  <li>Quy trình làm việc</li>
                  <li>Hình thức thanh toán</li>
                  <li>
                    <img
                      src={require("../../assets/img/Visa_Inc._logo.svg.webp")}
                      alt="logo_visa"
                      width="45px"
                    />
                    &nbsp;
                    <img
                      src={require("../../assets/img/MasterCard_early_1990s_logo.png")}
                      alt="logo_visa"
                      width="45px"
                    />
                    &nbsp;
                    <img
                      src={require("../../assets/img/Logo-VNPAY-QR-1.webp")}
                      alt="logo_visa"
                      width="45px"
                    />
                  </li>
                </ul>
              </div>
              <div className="footer_component col-12 col-sm-12 col-md-6 col-lg-3">
                <h4>Về chúng tôi</h4>
                <ul>
                  <div className="row">
                    <div className="col-md-4 col-4 col-sm-3 col-lg-6">
                      <li>Trang chủ</li>
                      <li>Giới thiệu</li>
                      <li>Dịch vụ</li>
                    </div>
                    <div className="col-md-4 col-4 col-sm-3 col-lg-6">
                      <li>Đặt hàng</li>
                      <li>Tin tức</li>
                      <li>Liên hệ</li>
                    </div>
                  </div>
                  <div className="certi">
                    <li style={{ visibility: "hidden" }}>d</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="footer_component-last row">
              <div className="footer-last col-md-6 col-sm-6 col-12">
                <p className="float-left" style={{ margin: "0" }}>
                  Copyright ©2023 All rights reserved | FService
                </p>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <p className="footer-last float-md-right float-sm-right float-lg-right">
                  Privacy Policy | Terms &amp; Conditions | Site Map
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;

import React, { Component } from "react";

export default function WhyPackage() {
  return (
    <div className="reason container mt-4">
      {/* tại sao */}
      <div className="Why row">
        <div className="col-md-12">
          <p>
            Tại sao nên chọn dịch vụ vệ sinh
            <br /> Sofa - Rèm - Đệm - Thảm của
            <br />
            FService?
          </p>
        </div>
        <div className="left-why col-md-6">
          <img className="img-fluid" src="" alt="Banner Image" />
        </div>
        <div className="right-why col-md-6">
          <p>
            <i className="fa-solid fa-check" style={{ color: "#ff8228" }} /> Đặt
            lịch nhanh chóng
          </p>
          <p>
            <i className="fa-solid fa-check" style={{ color: "#ff8228" }} /> Máy
            móc vệ sinh hiện đại
          </p>
          <p>
            <i className="fa-solid fa-check" style={{ color: "#ff8228" }} />{" "}
            Chất tẩy rửa có nguồn gốc rõ ràng, đảm bảo
          </p>
          <p>
            <i className="fa-solid fa-check" style={{ color: "#ff8228" }} /> Quy
            trình xử lý hóa chất, tẩy máy móc theo chuẩn quốc tế
          </p>
          <p>
            <i className="fa-solid fa-check" style={{ color: "#ff8228" }} /> Giá
            cả minh bạch
          </p>
          <p>
            <i className="fa-solid fa-check" style={{ color: "#ff8228" }} />{" "}
            Ngoài vệ sinh rèm, đệm, thảm, sofa - FService còn được tích hợp dịch
            vụ <span>giúp việc theo giờ</span> và nhiều dịch vụ tiện ích khác
            cho gia đình bạn.
          </p>
          <button type="button" id="order-now-button">
            Trải nghiệm dịch vụ
          </button>
        </div>
      </div>
    </div>
  );
}

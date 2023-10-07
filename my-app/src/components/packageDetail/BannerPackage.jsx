import React, { Component } from "react";

export default function BannerPackage() {
  return (
    <div>
      <div id="header" />
      <section>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="banner-img position-relative" />
            <div className="position-absolute banner-text">
              <h1 className="banner-title mb-3">
                Vệ sinh
                <br />
                Sofa - Rèm - Đệm - Thảm
              </h1>
              <p className="col-md-5">
                Vệ sinh sofa, rèm, đệm, thảm định kỳ là công việc cần thực hiện
                để đảm bảo an toàn cho không gian sống của gia đình luôn sạch
                sẽ, an toàn, loại bỏ mọi vết bẩn cứng đầu khiến bạn mệt mỏi.
              </p>
              <div>
                <button
                  className="ex-btn"
                  type="button"
                  style={{ color: "#fff" }}
                >
                  Trải nghiệm dịch vụ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { Component } from "react";

export default function ListPackage() {
  return (
    <div className="container service-container">
      <div className="row row-content">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 package-detail">
          {/* sofa */}
          <div className="package-img">
            <img
              src={"../assets/img/vệ sinh sofa.jpg"}
              alt="Vệ sinh sofa"
              className="w-100"
              style={{ height: "220px" }}
            />
          </div>
          <div className="package-detail">
            <p>Vệ sinh sofa</p>
            <span>
              Vệ sinh sofa, rèm, đệm, thảm định kỳ là công việc cần thực hiện để
              đảm bảo an toàn cho không gian sống của gia đình luôn sạch sẽ, an
              toàn, loại bỏ mọi vết bẩn cứng đầu khiến bạn mệt mỏi.
            </span>
          </div>
        </div>
        {/* rèm */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 package-detail">
          <div className="package-img">
            <img
              src={"../assets/img/vệ sinh sofa.jpg"}
              alt="Vệ sinh sofa"
              className="w-100"
              style={{ height: "220px" }}
            />
          </div>
          <div className="package-detail">
            <p>Vệ sinh rèm</p>
            <span>
              Vệ sinh sofa, rèm, đệm, thảm định kỳ là công việc cần thực hiện để
              đảm bảo an toàn cho không gian sống của gia đình luôn sạch sẽ, an
              toàn, loại bỏ mọi vết bẩn cứng đầu khiến bạn mệt mỏi.
            </span>
          </div>
        </div>
        {/* đệm */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 package-detail">
          <div className="package-img">
            <img
              src={"../assets/img/vệ sinh sofa.jpg"}
              alt="Vệ sinh sofa"
              className="w-100"
              style={{ height: "220px" }}
            />
          </div>
          <div className="package-detail">
            <p>Vệ sinh đệm</p>
            <span>
              Vệ sinh sofa, rèm, đệm, thảm định kỳ là công việc cần thực hiện để
              đảm bảo an toàn cho không gian sống của gia đình luôn sạch sẽ, an
              toàn, loại bỏ mọi vết bẩn cứng đầu khiến bạn mệt mỏi.
            </span>
          </div>
        </div>
        {/* thảm */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 package-detail">
          <div className="package-img">
            <img
              src={"../assets/img/vệ sinh sofa.jpg"}
              alt="Vệ sinh sofa"
              className="w-100"
              style={{ height: "220px" }}
            />
          </div>
          <div className="package-detail">
            <p>Vệ sinh thảm</p>
            <span>
              Vệ sinh sofa, rèm, đệm, thảm định kỳ là công việc cần thực hiện để
              đảm bảo an toàn cho không gian sống của gia đình luôn sạch sẽ, an
              toàn, loại bỏ mọi vết bẩn cứng đầu khiến bạn mệt mỏi.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

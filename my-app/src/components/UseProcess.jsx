import React from "react";

function UserProcess() {
  return (
    <div className="container">
      <>
        <div className="content service-processing">
          <div className="row row-content">
            <div className="col-12 col-sm-12 col-md-12">
              <p>Quy trình sử dụng dịch vụ</p>
            </div>
          </div>
          <div className="row row-content">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="processing-img">
                <img
                  src={require("../img/chooseService.png")}
                  alt="Dọn phòng"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="service-details">
                <p>Chọn dịch vụ</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="processing-img">
                <img
                  src={require("../img/chooseHouse.png")}
                  alt="Dọn phòng"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="service-details">
                <p>Chọn căn hộ</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="processing-img ">
                <img
                  src={require("../img/process.png")}
                  alt="Dọn phòng"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="service-details">
                <p>Tiến hành thực hiện</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="processing-img ">
                <img
                  src={require("../img/feedback.png")}
                  alt="Dọn phòng"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="service-details">
                <p>Đánh giá và xếp hạng</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default UserProcess;

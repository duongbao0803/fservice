import React from "react";

function UserProcess() {
  return (
    <>
      <div className="container mb-5 mt-5 pt-5 pb-5">
        <div className="content service-processing mb-5  ">
          <div className="row row-content mb-3">
            <div className="col-12 col-sm-12 col-md-12">
              <h3>Quy trình sử dụng dịch vụ</h3>
            </div>
          </div>
          <div className="row row-content">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="processing-img text-center mb-3">
                <img
                  src={require("../../assets/img/chooseService.png")}
                  alt="Dọn phòng"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="service-details text-center">
                <h5>Chọn dịch vụ</h5>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="processing-img text-center mb-3">
                <img
                  src={require("../../assets/img/chooseHouse.png")}
                  alt="Dọn phòng"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="service-details text-center">
                <h5>Chọn căn hộ</h5>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="processing-img text-center mb-3">
                <img
                  src={require("../../assets/img/process.png")}
                  alt="Dọn phòng"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="service-details text-center">
                <h5>Tiến hành thực hiện</h5>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="processing-img text-center mb-3">
                <img
                  src={require("../../assets/img/feedback.png")}
                  alt="Dọn phòng"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="service-details text-center">
                <h5>Đánh giá và xếp hạng</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProcess;

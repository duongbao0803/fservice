import React from "react";
import { reasonList } from "../../shared/data";
function Reason() {
  return (
    <>
      <div className="container mb-5 mt-5 pt-5 pb-5">
        <div className="content choose-service">
          <div className="row row-content mb-3">
            <div className="col-12 col-sm-12 col-md-12">
              <h2>Tại sao nên chọn FService</h2>
            </div>
          </div>
          <div className="row row-content">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="chooseService-img mb-4">
                <img
                  src={require("../../assets/img/banner_2.png")}
                  alt="chọn service"
                  width="100%"
                />
              </div>
            </div>
            {reasonList.map((reason, index) => (
              <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="service-img mb-3">
                  <img
                    src={reason.image}
                    alt="Dọn phòng"
                    width="100px"
                    height="100px"
                  />
                </div>

                <div className="service-details">
                  <h5 style={{ fontWeight: "900" }}>{reason.title}</h5>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reason;

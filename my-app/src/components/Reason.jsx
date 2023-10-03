import React from "react";
import { reasonList } from "../data";
function Reason() {
  return (
    <div className="container">
      <div>
        <>
          <div className="content choose-service">
            <div className="row row-content">
              <div className="col-12 col-sm-12 col-md-12">
                <p>Tại sao nên chọn FService</p>
              </div>
            </div>
            <div className="row row-content">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="chooseService-img">
                  <img
                    src={require("../img/banner_2.png")}
                    alt="chọn service"
                    width="100%"
                  />
                </div>
              </div>
              {reasonList.map((reason) => (
                <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                  <div class="service-img">
                    <img
                      src={reason.image}
                      alt="Dọn phòng"
                      width="100px"
                      height="100px"
                    />
                  </div>

                  <div class="service-details">
                    <p>{reason.title}</p>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Reason;

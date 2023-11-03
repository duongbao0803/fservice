import React from "react";
import "../../assets/css/styleField.css";
import { Link } from "react-router-dom";

function Field() {
  return (
    <>
      <div className="container-fluid">
        <div className="row row-content register d-flex justify-content-center flex-column">
          <div className="container">
            <div className="col-12 col-sm-12 col-md-12 p-0">
              <div className="register-field  d-flex justify-content-center flex-column">
                <span className="mb-1">
                  <h2>Đăng ký ngay hôm nay</h2>
                </span>
                <span>Bạn đã sẵn sàng trải nghiệm FServices chưa ?</span>
                <span>Tham gia ngay</span>
                <Link to="/package">Trải nghiệm ngay</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Field;

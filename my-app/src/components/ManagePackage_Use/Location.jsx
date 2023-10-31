import React from "react";

function Location() {
    return (
      <div className="container first-line"
      style={{paddingLeft: "80px",
    }}
      >
        {/* title */}
        <div className="location d-flex mb-1">
          <p style={{marginRight: '20px'}}>
            <i className="fa-solid fa-house mr-2" style={{ color: "#ff8228" }} />
            Trang chủ
          </p>
          <p style={{marginRight: '20px'}}>
            <i
              className="fa-solid fa-caret-right mr-2"
              style={{ color: "#ff8228" }}
            />{" "}
            Tài khoản của tôi
          </p>
        </div>
      </div>
    );
}

export default Location;

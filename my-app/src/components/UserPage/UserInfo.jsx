import React, { useContext, useRef } from "react";
import { Launch } from "../../services/UserService";
import { Session } from "../../App";
import formatDate from "../../utils/tools";

function UserInfo() {
  const email = localStorage.getItem("username");

  const session = useContext(Session);
  console.log(session);
  // const user = session.user;
  // const dateOfBirth = new Date(user.dateOfBirth).toLocaleDateString();
  // console.log(dateOfBirth);

  const fileInputRef = useRef(null);

  const handleFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div class="right-bar">
        <h5 class="mb-4">Thông tin</h5>
        <div class="right_bar-main">
          <div class="row">
            <div class="right-bar col-md-9 col-sm-12 col-lg-8">
              <div class="user-info">
                <table class="user_info-table">
                  <tr>
                    <th>Email:</th>
                    <td>{localStorage.getItem("username")}</td>
                  </tr>
                  <tr>
                    <th>Họ và tên:</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        value={localStorage.getItem("name")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Ngày sinh:</th>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        value={formatDate(localStorage.getItem("dateOfBirth"))}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Số điện thoại:</th>
                    <td>
                      {/* <input className="form-control" type="text" value={user.phoneNumber} /> */}
                    </td>
                    {/* <td>
                                            <button>Cập nhật</button>
                                        </td> */}
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <button>Lưu thay đổi</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-2 col-lg-4 d-flex align-items-center justify-content-center mb-3 mt-3"
              style={{ borderLeft: "3px solid #efefef" }}
            >
              <div>
                <div className="text-center mb-3">
                  <img
                    src={require("../../assets/img/siunhando.jpg")}
                    alt=""
                    width="90px"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div class="chooseImg text-center" style={{ width: "100%" }}>
                  <input
                    type="file"
                    id="fileInput"
                    name="imageFile"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                  <button
                    onClick={handleFileInput}
                    style={{
                      padding: "5px",
                      outline: "none",
                      border: "2px solid #ffb077",
                      backgroundColor: "#fff",
                      marginBottom: "5px",
                    }}
                  >
                    Chọn ảnh
                  </button>
                  <p>Dung lượng file tối đa 1 MB</p>
                  <p>Định dạng: .JPEG, .PNG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;

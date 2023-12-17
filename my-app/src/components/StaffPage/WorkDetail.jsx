import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./WorkDetail.css";
import { Button, Steps } from "antd";
import { Rating } from "@mui/material";

function WorkDetail() {
  const { Step } = Steps;
  const description = "This is a description.";
  return (
    <div className="staff-container mt-5" style={{ overflow: "scroll" }}>
      <div className="data-table">
        <div>
          <h5 style={{ color: "#ff8228" }}>
            <Link to={"/staff/work"} style={{ color: "#000" }}>
              Danh sách công việc
            </Link>{" "}
            <ArrowRightIcon /> Công việc chi tiết
          </h5>
          <div className="mt-4" style={{ height: 500, width: "100%" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <h6 className="section-title">CÔNG VIỆC</h6>
                  <table className="table-work">
                    <tbody>
                      <tr>
                        <td className="table-title">Công việc:</td>
                        <td>
                          <p>Vệ sinh máy lạnh</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Địa chỉ:</td>
                        <td>
                          <p>Phòng 0301 - Tòa S101 - Vinhomes Grand Park</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Loại căn hộ:</td>
                        <td>
                          <p>1 phòng ngủ</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Giờ làm việc:</td>
                        <td>
                          <p>17.12.2023 3PM - 5PM</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Ghi chú:</td>
                        <td>
                          <p>Day la note</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mb-3">
                  <h6 className="section-title">LIÊN HỆ</h6>
                  <table className="table-work">
                    <tbody>
                      <tr>
                        <td className="table-title">Khách hàng:</td>
                        <td>
                          <p>Bảo Bất Lực</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">Điện thoại:</td>
                        <td>
                          <p>0909113114</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mb-3">
                  <h6 className="section-title">THÔNG TIN</h6>
                  {/* <table className="table-work">
                    <tbody>
                      <tr>
                        <td className="table-title">Trạng thái:</td>
                        <td>
                          <div className="working-status working-status__pending">
                            <p>Đang chờ</p>
                          </div>
                        </td>
                        <td>
                          <div className="modal-btn">
                            <button
                              style={{
                                color: "white",
                                backgroundColor: "#ff8228",
                                borderRadius: "10px",
                                minWidth: "120px",
                                padding: "5px",
                                border: "none",
                                outline: "none",
                              }}
                            >
                              Nhận việc
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="table-title">
                          <p>Ngày hoàn thành:</p>
                        </td>
                        <td>
                          <p>dd.mm.yyyy hh:mm</p>
                        </td>
                        <td>
                          <div className="modal-btn">
                            <button
                              style={{
                                color: "white",
                                backgroundColor: "#03AC00",
                                borderRadius: "10px",
                                minWidth: "120px",
                                padding: "5px",
                                border: "none",
                                outline: "none",
                              }}
                            >
                              Hoàn thành
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                  <div className="mt-3">
                    <Steps direction="vertical" current={0}>
                      <Step
                        title="Đang chờ"
                        description={
                          <div>
                            <p className="text-date">17.12.2023 - 7:00</p>
                            <button className="btn-work btn-disable">
                              Nhận việc
                            </button>
                          </div>
                        }
                      />
                      <Step
                        title="Đang thực hiện"
                        description={
                          <div>
                            <p className="text-date">17.12.2023 - 7:30</p>
                            <button className="btn-work btn-active">
                              Hoàn thành
                            </button>
                          </div>
                        }
                      />
                      <Step
                        title="Đã hoàn thành"
                        description={
                          <div>
                            <p className="text-date">17.12.2023 - 8:00</p>
                            <p style={{ fontSize: "15px", padding: "3px" }}>
                              <i
                                className="fa-solid fa-spinner"
                                style={{ color: "#9AA14B" }}
                              ></i>
                              <span style={{ color: "#9AA14B" }}>
                                {" "}
                                Đang chờ xác nhận
                              </span>
                            </p>
                          </div>
                        }
                      />
                    </Steps>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="section-title">ĐÁNH GIÁ</h6>
                <div>
                  <table className="feedback-table">
                    <tr>
                      <td>
                        <p>Độ hài lòng:</p>
                      </td>
                      <td>
                        <Rating
                          name="simple-controlled"
                          value={4}
                          readOnly
                          sx={{ fontSize: "1.8rem" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Nhận xét:</p>
                      </td>
                      <td>
                        <p>Làm tốt lắm</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;

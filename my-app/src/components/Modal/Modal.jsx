import React, { useEffect } from "react";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext, customTheme } from "../ThemeContext/ThemeContext.jsx";
import "./Modal.css";
import { formatDate } from "../../utils/tools.js";
import { confirmWork, getOrder } from "../../services/UserService.js";
import { toast } from "react-toastify";
import { useState } from "react";
import { Rating } from "@mui/material";

function Modal({
  isOpen,
  service,
  onClose,
  staffData,
  info,
  building,
  roomNo,
  fetchStaff,
}) {
  useEffect(() => {
    if (info.status.includes("Working") || info.status.includes("Completed")) {
      setJobAccepted(true);
    } else {
      setJobAccepted(false);
    }
  }, [info.status]);

  const [jobAccepted, setJobAccepted] = useState(false);
  const theme = useContext(ThemeContext);

  const [value, setValue] = React.useState(2);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const res = await getOrder(info.id, {
        id: info.id,
        status: 1,
      });

      if (res && res.status === 200) {
        toast.success("Nhận việc thành công");
        onClose();
        fetchStaff();
        setJobAccepted(true);
      } else {
        toast.success("Nhận việc thất bại");
      }
    } catch (error) {
      console.log("Error Submitting Order", error);
    }
  };
  const handleConfirm = async () => {
    try {
      const res = await confirmWork(info.id, {
        id: info.id,
        status: 2,
      });

      if (res && res.status === 200) {
        toast.success("Hoàn thành công việc");
        onClose();
        fetchStaff();
      } else {
        toast.success("Hoàn thành công việc thất bại");
      }
    } catch (error) {
      console.log("Error Completing Service", error);
    }
  };

  return (
    <div className="modal" style={{ backgroundColor: theme.background }}>
      <div className="modal-content">
        <div className="modal-header">
          <h5>CHI TIẾT CÔNG VIỆC</h5>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
            onClick={onClose}
          >
            <CloseIcon>ĐÓNG</CloseIcon>
          </button>
        </div>
        <div className="modal-body">
          <section className="job-details">
            <h6>CÔNG VIỆC</h6>
            <p style={{ color: "#ff8228", fontWeight: "bold" }}>
              {service?.description || "VỆ SINH NHÀ CỬA, BÀN GHẾ"}
            </p>
            <div className="modal-table">
              <table>
                <tbody>
                  <tr>
                    <td className="modal-title">Địa chỉ:</td>
                    <td>
                      <p>Vinhomes Grand Park</p>
                      <p>
                        Tòa {building} - Phòng {roomNo}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="modal-title">Giờ làm việc:</td>
                    <td>
                      <p>
                        {formatDate(info?.apartmentPackage.startDate)} -{" "}
                        {info?.shiftTime}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="modal-title">Ghi chú:</td>
                    <td>
                      <p>{info?.note}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="contact-details">
            <h6>LIÊN HỆ</h6>
            <div className="modal-table">
              <table>
                <tbody>
                  <tr>
                    <td className="modal-title">Khách Hàng:</td>
                    <td>
                      <p>{info?.customerName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="modal-title">Số điện thoại:</td>
                    <td>
                      <p>{info?.customerPhone}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="Info-details">
            <h6>THÔNG TIN</h6>
            <div className="modal-table">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td className="modal-title">Trạng thái:</td>
                    <td>
                      {info?.status.includes("Pending") ? (
                        <div className="working-status working-status__pending">
                          <p>Đang chờ</p>
                        </div>
                      ) : info?.status.includes("Working") ? (
                        <div className="working-status working-status__working">
                          <p>Đã nhận việc</p>
                        </div>
                      ) : (
                        <div className="working-status working-status__completed">
                          <p>Đã hoàn thành</p>
                        </div>
                      )}
                    </td>
                    <td>
                      {info.status.includes("Working") ||
                      info.status.includes("Completed") ? (
                        " "
                      ) : (
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
                            onClick={() => handleSubmit()}
                          >
                            Nhận việc
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="modal-title">
                      <p>Ngày hoàn thành:</p>
                    </td>
                    <td>
                      {info.completeDate ? (
                        <p>{formatDate(info?.completeDate)}</p>
                      ) : (
                        ""
                      )}
                    </td>
                    {jobAccepted && !info.status.includes("Completed") && (
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
                            onClick={() => handleConfirm()}
                          >
                            Hoàn thành
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {info?.status.includes("Completed") ? (
            <div className="confimation">
              {info.isConfirm === null ? (
                <p style={{ padding: "10px" }}>
                  <i
                    class="fa-solid fa-spinner"
                    style={{ color: "#9AA14B" }}
                  ></i>
                  <span style={{ color: "#9AA14B" }}> Đang chờ xác nhận</span>
                </p>
              ) : info?.isConfirm === true ? (
                <div>
                  <p style={{ padding: "10px" }}>
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#03AC00" }}
                    />
                    <span style={{ color: "#03AC00" }}>
                      {" "}
                      Đã xác nhận hoàn thành
                    </span>
                  </p>
                  <table>
                    <tr>
                      <th>
                        <p>Đánh giá:</p>
                      </th>
                      <td>
                        <p>
                          <Rating
                            name="simple-controlled"
                            value={value}
                            readOnly
                          />
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <p>Nhận xét:</p>
                      </th>
                      <td>
                        <p>Làm tốt lắm</p>
                      </td>
                    </tr>
                  </table>
                </div>
              ) : (
                <div>
                  <p style={{ padding: "10px" }}>
                    <i
                      class="fa-solid fa-xmark"
                      style={{ color: "#952323" }}
                    ></i>
                    <span style={{ color: "#952323" }}> Chưa hoàn thành</span>
                  </p>
                  <table>
                    <tr>
                      <th>
                        <p>Đánh giá:</p>
                      </th>
                      <td>
                        <p>
                          <Rating
                            name="simple-controlled"
                            value={value}
                            readOnly
                          />
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <p>Nhận xét:</p>
                      </th>
                      <td>
                        <p>Quá tệ</p>
                      </td>
                    </tr>
                  </table>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
